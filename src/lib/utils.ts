/*****************************************
*	Utilitaires
*   -----------
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0. 
*****************************************/
import { ROOT } from "../core/constants.js";
import Modal from "./modal.js";

/* Variables générales */
let previousdiff: any = {};
let pageactivate: number = 1;

/* Constantes HTML */
const $countdown = document.querySelector('#countdown') as HTMLElement;
const $countele = {
    days:       $countdown ? $countdown.querySelector('#days') : '',
    hours:      $countdown ? $countdown.querySelector('#hours') : '',
    minutes:    $countdown ? $countdown.querySelector('#minutes') : '',
    seconds:    $countdown ? $countdown.querySelector('#seconds') : ''
};

/* Constantes générales */
const USERAGENT: string = navigator.userAgent;
const MINUTES: number = 60;
const HOURS: number = 60 * MINUTES;
const DAYS: number = 24 * HOURS;
const TIME: string = $countdown && $countdown.dataset.time ? $countdown.dataset.time : "";
const LAUNCHDATE: number = $countdown ? Date.parse(TIME) / 1000 : 0;
const PAGES = document.querySelectorAll(".form-page") ? document.querySelectorAll(".form-page") : '';
const PAGE: HTMLElement | null = document.querySelector(".form-page");
const NUMBER_PAGES: number = PAGES.length;

class Utils 
{
    public files_ext: string;                                                               // Extension des fichiers

    /**
    *   Le constructeur
    * 
    *   @return {void}
    **/
    constructor()
    {
        this.files_ext = ".js";
    }

    /**
    *   Cette méthode permet d'afficher un message si l'utilisateur est sur Internet Explorer.
    * 
    *   @return {void}
    **/
    AlertIE(): void
    {
        // A implémenter
    }

    /**
	*	Cette méthode permet de vérifier si l'utilisateur utilise Internet Explorer.
    *   
    *   @return {boolean}
	**/
	IsIE(): boolean
	{
		return USERAGENT.indexOf("MSIE") > -1 || USERAGENT.indexOf("Trident/") > -1;
	}

    /**
	*	Cette méthode permet de vérifier si l'utilisateur utilise Firefox.
    *   
    *   @return {boolean}
	**/
    IsFirefox(): boolean
    {
		return USERAGENT.indexOf("Firefox") > -1;
    }

    /**
    *   Cette méthode permet d'ajouter un tooltip.
    *   Auteur : Forumactif.com (modifié par Dakin Quelia)
    * 
    *   @param {Function} caller                                                            Méthode / fonction
    *   @param {string} content                                                             Contenu
    * 
    *   @return {void}
    **/
    Tooltip(caller: any, content: string): void
    {
        let current_tooltip = document.querySelector('#tooltip') as HTMLElement;
        let content_title = "AIDE";
        
        if (!current_tooltip)
        {
            let current_tooltip = document.createElement('div');
            current_tooltip.setAttribute('id', 'tooltip');
            current_tooltip.classList.add('tooltip');
            document.body.appendChild(current_tooltip);
        }
        
        current_tooltip.style.zIndex = "100";
        current_tooltip.style.position = 'absolute';
        
        if (content_title)
        {
            content = '<p class="header">' + content_title + '</p><p>' + content + '</p>';
        }
        else
        {
            content = '<p>' + content + '</p>'
        }
        
        current_tooltip.innerHTML= content;
        current_tooltip.style.visibility = 'visible';
        caller.onmousemove = this.MoveTooltip;
        caller.onmouseout = function()
        {
            current_tooltip.style.visibility = "hidden";
        };
        
        caller.title = '';
    }

    /**
    *   Cette fonction permet de déplacer l'infobulle.
    *   Auteur : Forumactif.com (modifié par Dakin Quelia)
    * 
    *   @param {Event} e                                                                    Evènement
    * 
    *   @return {void}
    **/
    MoveTooltip(e: MouseEvent): void
    {
        let curX = e.pageX;
        let curY= e.pageY;
        let offsetxpoint = -60;
        let offsetypoint = 20;
        let rightedge = window.innerWidth - e.clientX - offsetxpoint - 20;
        let bottomedge = window.innerHeight - e.clientY - offsetypoint - 20;
        let leftedge = (offsetxpoint < 0) ? offsetxpoint * (-1) : -1000;
        
        let current_tooltip = document.querySelector('#tooltip') as HTMLElement;
        
        if (rightedge < current_tooltip.offsetWidth)
        {
            current_tooltip.style.left = window.scrollX + e.clientX - current_tooltip.offsetWidth + "px";
        }    
        else if(curX < leftedge) 
        {
            current_tooltip.style.left = "5px";
        } 
        else 
        {
            current_tooltip.style.left = curX + offsetxpoint + "px";
        }
        
        if (bottomedge < current_tooltip.offsetHeight) 
        {
            current_tooltip.style.top = window.scrollY + e.clientY - current_tooltip.offsetHeight - offsetypoint + "px";
        }
        
        else 
        { 
            current_tooltip.style.top = curY + offsetypoint + "px";
        }
    }

    /**
    * 	Afficher le menu personnalisé
    * 
    *   @return {void}
	**/
	CustomSelect(): any
	{
		let dropdown = document.querySelectorAll('.dropselect') as NodeListOf<Element>;
		let dropmenu = document.querySelectorAll('.dropmenu') as NodeListOf<Element>;
		let optionslist = document.querySelectorAll('.dropmenu-item') as NodeListOf<Element>;

        if (typeof dropdown === "undefined")
        {
            return false;
        }

		for (let i = 0; i < dropdown.length; i++)
		{
			// On ajoute un évènement clic
			window.addEventListener('click', (e: MouseEvent) =>
			{
				// Empêche la propagation
				e.stopPropagation();

                const target = e.target as HTMLElement;
                const drop = dropdown[i] as HTMLElement;
                const menu = dropmenu[i] as HTMLElement;

				if (drop.contains(target))
				{
					menu.classList.toggle('active');
				}
				else
				{
					menu.classList.remove('active');
				}
			});

			// On boucle les options
			optionslist.forEach(o => 
			{
				o.addEventListener('click', (e: Event) =>
				{
                    if (o.parentNode === null)
                    {
                        return false;
                    }

					let drop = o.parentNode.parentNode;

                    if (drop === null)
                    {
                        return false;
                    }

					let label = drop.querySelector('.droplabel') as HTMLLabelElement;
					let value = o.hasAttribute('data-value') ? o.getAttribute('data-value') : "" as any;
					
					label.setAttribute('data-value', value);

                    if (o.textContent === null)
                    {
                        return false;
                    }

					label.innerHTML = o.textContent;    
				});
			});
		}
    }

    /**
    *   Cette méthode permet de créer un champ de type numérique personnalisé. 
    * 
    *   @return {void}
    **/
    CustomSpinner()
    {
        let switchers = document.querySelectorAll('.spinbox');

        switchers.forEach(switcher => 
        {
            let spinup = switcher.querySelector('.spinbox-up') as HTMLElement;
            let spindown = switcher.querySelector('.spinbox-down') as HTMLElement;
            let input = switcher.querySelector('input') as HTMLInputElement;

            spinup.addEventListener('click', () => 
            { 
                input.value = (parseInt(input.value) + 1).toString(); 
            });

            spindown.addEventListener('click', () => 
            { 
                if (parseInt(input.value) <= 0) { return; }

                input.value = (parseInt(input.value) - 1).toString(); 
            });
        });
    }

    /**
    *   Cette méthode permet de générer un mot de passe. 
    * 
    *   @param {number} pwdlength                                                           Longueur du mot de passe généré
    * 
    *   @return {string}
    **/
    PasswordGenerator(pwdlength: number): string
    {
        return Array(pwdlength).fill("1234567890abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ@&!").map((function(t) { return t[Math.floor(Math.random() * t.length)] })).join("");
    }

    /**
    *   Cette méthode permet d'afficher un compte à rebours.
    * 
    *   @return {void}
    **/
    CountDown(): void
    {
        if ($countdown === null)
        {
            return;
        }

        const $this = this;
        const difference = LAUNCHDATE - Date.now() / 1000;
        const diff = {
            days:       Math.floor(difference / DAYS),
            hours:      Math.floor(difference % DAYS / HOURS),
            minutes:    Math.floor(difference % HOURS / MINUTES),
            seconds:    Math.floor(difference % MINUTES)
        };

        if (difference <= 0)
        {
            return;
        }

        $this.UpdateCountdownDOM(diff);

        window.setTimeout(() => { window.requestAnimationFrame(function() { $this.CountDown(); }) }, 1000);
    }

    /**
    *   Cette méthode permet de mettre à jour la strucutre HTML du compteur.
    *
    *   @param {{days: number, hours: number, minutes: number, seconds: number}} diff 
    * 
    *   @return {void}
    **/
    UpdateCountdownDOM(diff: { days: number, hours: number, minutes: number, seconds: number }): void
    {
        Object.keys(diff).forEach((key) => 
        {
            const diffkey = diff[key as keyof Object];

            if (previousdiff[key] !== diffkey)
            {
                $countele[key].innerText = diffkey;
            }
        });

        previousdiff = diff;
    }

    /**
    *   Cette méthode permet de calculer le montant TVAC / TTC.
    * 
    *   @param {number} vat                                                                 Taux de TVA
    *   @param {number} price                                                               Prix de l'article
    * 
    *   @return {void}
    **/
    CalculateVAT(vat: number, price: number)
    {
        
    }

    /**
    *   Cette méthode sert à nettoyer les espaces blancs au début du code.
    * 
    *   @param {string} string                                                              Texte / Message
    * 
    *   @return {string}
    **/
    TrimCode(string: string) 
    {
        let	str = string.replace(/^\s\s*/, '');
		let ws = /\s/;
        let i = str.length;
        
        while (ws.test(str.charAt(--i)));
        
	    return str.slice(0, i + 1);
    }

    /**
    *   Cette méthode permet de créer la balise Code avec le code.
    * 
    *   @param {string} string                                                              Texte / Message
    * 
    *   @return {void}              
    **/
    Code(string: string): void
    {
        const code_tag = document.querySelector('.postbody code') as HTMLElement;

        code_tag.innerHTML = `
            <div class="header">Code</div>
            <pre>${this.TrimCode(string)}</pre>
        `;
    }

    /**
    *   Cette méthode supprime toutes les balises afin de s'assurer que la chaîne de caractère
    *   retournée ne contient pas de balises interdites (exemple : '<<bait/>switch/>')
    * 
    *   @param {HTMLInputElement} input                                                     Elément HTML
    *   @param {string} allowed                                                             Balises autorisées
    * 
    *   @return {TMLInputElement}
    **/
    StripTags(input: HTMLInputElement, allowed: string): HTMLInputElement
    {
        let tagallowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
        let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
        let commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        let before = input;
        let after = input as any;

        while(true) 
        {
            before = after;
            after = before.value.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) =>
            {
                return tagallowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
            
            if (before === after) 
            {
                return after;
            }
        }
    }

    /**
    *   Cette méthode permet d'afficher les erreurs en console.
    * 
    *   @param {{ name: string, message: string }} error                                    L'objet de l'erreur
    *   @param {boolean} explicit                                                           Explicite ou implicite
    * 
    *   @return {void}
    **/
    PrintError (error: { name: string, message: string }, explicit: boolean): void
    {
        console.error(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name} : ${error.message}`);
    }

    /**
    *   Cette méthode permet de retourner une chaîne formatée.
    *
    *   @author redexp (de Stackoverflow)
    * 
    *   @param {string} str                                                                 Chaîne de caractère
    * 
    *   @return {string}
    **/
    Sprintf(str: string): string 
    {
        let args = arguments, i = 1;
        
        return str.replace(/%(s|d|0\d+d)/g, function (x: string, type: string) 
        {
            let value = args[i++];
    
            switch (type) 
            {
                case 's': 
                    return value;
                break;
                case 'd': 
                    return parseInt(value, 10);
                break;
                default:
                    value = String(parseInt(value, 10));
                    let n = Number(type.slice(1, -1));
    
                    return '0' . repeat(n).slice(value.length) + value;
            }
        });
    }

    /**
    *   Cette méthode permet d'afficher la date et heure du jour.
    * 
    *   @param {Intl.LocalesArgument} locale                                                La date/heure locale
    * 
    *   @return {string}
    **/
    DisplayDateTime(locale: Intl.LocalesArgument): string
    {
        let time = new Date();

        return time.toLocaleString(locale, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
    }

    /**
	* 	Cette méthode permet d'ouvrir une fenêtre modale.
    *
	*	@param {Event} event                                                                Evènement
	*	@param {{ id: number, title: string, footer: any, content: any }} data              Données de la fenêtre
    *
    *   @return {boolean}
	**/
	OpenWindow(event: KeyboardEvent, data: { id: number, title: string, footer: any, content: any }): boolean
	{
		// Si l'évènement n'est pas défini, on retourne.
		if (typeof event === "undefined")
		{
			return false;
		}

		// Si la fenêtre n'existe pas, on la crée.
		if (typeof Modal.modal === "undefined")
		{
			return Modal.CreateModal(data);
		}

		// Si on ne définit pas d'objet data, on lui donne une valeur nulle.
		if (data === null)
		{
			data = { id: 0, title: "", footer: "", content: "" };
		}

		// Si la fenêtre existe, on l'ouvre.
		Modal.OpenModal(event);

		return true;
	}

    /**
    *   Cette méthode permet d'afficher/masque le contenu des différents blocs composant le menu.
    *   
    *   @return {void}
    **/
    Toggle(): void
    {
        const toggles = document.querySelectorAll('#toggle i') as NodeListOf<Element>;

        toggles.forEach(toggle => 
        {
            toggle.addEventListener('click', (e: Event) => 
            {
                const parentTarget = e.target as HTMLElement;

                if (parentTarget === null)
                {
                    return false;
                }

                if (parentTarget.parentNode === null)
                {
                    return false;
                }

                const parent = parentTarget.parentNode.parentNode as HTMLElement;
                const target = parent.nextElementSibling as HTMLElement;
                const head = parent as HTMLElement;
                const icon = parentTarget as HTMLElement;

                if (target === null)
                {
                    return false;
                }

                if (target.style.display === "block")
                {
                    head.classList.add('noborder');
                    icon.classList.add('fa-plus');
                    icon.classList.remove('fa-minus');
                    target.style.display = "none";
                }
                else
                {
                    head.classList.remove('noborder');
                    icon.classList.add('fa-minus');
                    icon.classList.remove('fa-plus');
                    target.style.display = "block";
                }
            });
        });
    }

    /**
    *   Cette méthode permet de calculer la somme des éléments.
    *   
    *   @param {number[]} items                                                             Tableau d'éléments
    * 
    *   @return {number}
    **/
    Sum(items: number[]): number
    {
        return items.reduce((acc: any, item: any) => acc + item, 0);
    }

    /**
    *   Cette méthode permet de valider le nombre.
    *   
    *   @param {HTMLInputElement} amount                                                    Elément HTML
    * 
    *   @return {boolean}
    **/
    Validate(amount: HTMLInputElement): boolean
    {
        if (parseFloat(amount.value) <= 0)
        {
            amount.value = "";

            return false;
        }

        return true;
    }

    /**
    *   Cette méthode permet de charger un fichier.
    *   
    *   @param {string} filename                                                            Nom du fichier
    * 
    *   @return {void}
    **/
    LoadScript(filename: string): void
    {   
        const folder = ROOT + '/scripts/core';

        let script = document.createElement('script');
        script.setAttribute('src', folder + '/' + filename + this.files_ext);
        script.setAttribute('type', 'module');

        document.body.appendChild(script);
    }

    /** 
    *   Cette méthode permet d'ajouter une information dans le bloc "statut".
    * 
    *   @param {string} name                                                                Nom du champ
    *   @param {string} value                                                               Valeur
    * 
    *   @return {void}
    **/
    AddStatus(name: string, value: string): void
    {
        let status_pane = document.querySelector("#status .content") as HTMLElement;
        let status_ul = status_pane.querySelector('ul') as HTMLUListElement;
        let money_li = status_pane.querySelector('.separator');
        let new_li = document.createElement('li');
        let li_span_label = document.createElement('span');
        let li_span_value = document.createElement('span');
 
        li_span_label.classList.add('label');
        li_span_value.classList.add('value');
        li_span_label.innerText = name;
        li_span_value.innerText = value;
 
        new_li.appendChild(li_span_label);
        new_li.appendChild(li_span_value);
 
        status_ul.insertBefore(new_li, money_li);
    }

    /**
    *   Cette méthode permet de vérifier si la chaîne de caractère est de type numérique.
    *   
    *   @param {string} character                                                           Chaîne de caractère
    *
    *   @return {boolean}
    **/
    IsDigit(character: string): boolean
    {
        return character >= "0" &&  character <= "9";
    }

    /**
    *   Cette méthode permet de vérifier si la chaîne de caractère est alphanumérique.
    *   
    *   @param {string} character                                                           Chaîne de caractère
    *
    *   @return {boolean}
    **/
    IsAlpha(character: string): boolean
    {
        return character >= "a" && character <= "z" || character >= "A" && character <= "Z" || character === "_";
    }

    /**
    *   Cette méthode permet d'inclure un fichier.
    * 
    *   @param {string} url                                                                 L'url du fichier
    * 
    *   @return {Promise<void>}
    **/
    async Require(url: string): Promise<void>
    {
        try 
        {
            return (await import(url)).default;
        } 
        catch(e) 
        {
            console.error(`Echec du chargement du module :: ${url}`, e);
        }
    }
}

export default new Utils();