/*****************************************
*	Gestion du joueur
*   -----------------
*	Auteur 		: Dakin Quelia
*	Version 	: 1.0.0. 
*****************************************/
import PlayerInterface from "./interfaces/playerinterface";
import type { Character } from "./types/character";
import type { Klass } from "./types/class";
import { FILES } from "./constants.js";
import * as Config from "../data/settings.json";

class Player implements PlayerInterface
{
    /* Global */
    public points_stats_max: number;
    public points_skills_max: number;
    public stats_default_value: number;
    public point_diff: number;
    public value: number;
    public cost: number;
    public diff: number;
    public name: string;
    public helps: any[];
    public classes: Klass[];
    public stats: any[];
    public skills: any[];
    public feats: any[];
    public modifiers: any[];
    public inventory: any[];
    public errors: string[];
    public total: { stats: number, skills: number };
    public points: { stats: number, skills: number };
    public stats_modifier: string;
    /* Eléments HTML */
    public form: HTMLFormElement|null;
    public character_name: HTMLElement|null;
    public character_class: HTMLElement|null;

    /**
    *   Le constructeur
    * 
    *   @return {void}
    **/
    constructor()
    {
        /* Global */
        this.points_stats_max = Config.points.stats_max ? Config.points.stats_max : 30;                           // Maximum de points de stats
        this.points_skills_max = Config.points.skills_max ? Config.points.skills_max : 20;                        // Maximum de points pour compétences
        this.stats_default_value = Config.base_points ? Config.base_points : 0;                                   // Défaut : 0 | Kotor = 8 par défaut
        this.point_diff = 0;
        this.value = 0;
        this.cost = 0;
        this.diff = 0;
        this.name = "";
        this.helps = [];
        this.classes = [];
        this.stats = [];
        this.skills = [];
        this.feats = [];
        this.modifiers = [];
        this.inventory = [];
        this.errors = [];
        this.total = { stats: 0, skills: 0 };
        this.points = { stats: 0, skills: 0 };
        this.stats_modifier = "";

        /* Eléments HTML */
        this.form = document.querySelector("#create_character") ? document.querySelector("#create_character") : null;
        this.character_name = document.querySelector("#character_name") ? document.querySelector("#character_name") : null;
        this.character_class = document.querySelector("#character_class") ? document.querySelector("#character_class") : null;

        /*
        this.stats_number = document.querySelectorAll('#stats input[type="number"]') ? document.querySelectorAll('#stats input[type="number"]') : null;
        this.skills_number = document.querySelectorAll('#skills input[type="number"]') ? document.querySelectorAll('#skills input[type="number"]') : null;
        this.button_copy = document.querySelector("#gcopy") ? document.querySelector("#gcopy") : null;
        this.button_play = document.querySelector("#play") ? document.querySelector("#play") : null;
        this.button_cancel = document.querySelector("#cancel") ? document.querySelector("#cancel") : null;
        this.header_stats_points = document.querySelector("#points_stats .points") ? document.querySelector("#points_stats .points") : null;
        this.header_skills_points = document.querySelector("#points_skills .points") ? document.querySelector("#points_skills .points") : null;
        this.stats_input_name = document.querySelectorAll("#stats .category-name") ? document.querySelectorAll("#stats .category-name") : null;
        this.stats_container = document.querySelector("#stats") ? document.querySelector("#stats") : null;
        this.stat_category = document.querySelectorAll("#stats .sub-category") ? document.querySelectorAll("#stats .sub-category") : null;
        this.stat_category_name = document.querySelectorAll("#stats .category-name") ? document.querySelectorAll("#stats .category-name") : null;
        this.skill_category = document.querySelectorAll("#skills .sub-category") ? document.querySelectorAll("#skills .sub-category") : null;
        this.skill_category_name = document.querySelectorAll("#skills .category-name") ? document.querySelectorAll("#skills .category-name") : null;
        */
    }

    /**
    *   Cette méthode permet de créer le joueur avec les statistiques et compétences.  
    * 
    *   @param {Character} character                                            Les données du joueur.
    * 
    *   @return {boolean}
    **/
    CreatePlayer(character: Character): boolean 
    {
        throw new Error("Method not implemented.");
    }
    
    /**
    *   Cette fonction permet de récupérer les informations du joueur.
    * 
    *   @return {boolean}
    **/
    async GetPlayer(): Promise<any> 
    {
        return await fetch(`${FILES['player']}`)
                .then(response => response.json())
                .then(data =>
                { 
                    return data ? data : "Joueur"; 
                })
                .catch((err) => { console.log('ERROR :: ' + err); });
    }

    /**
    *   Cette méthode permet de vérifier que le joueur ne dépasse pas le quota des points.
    * 
    *   @return {void}
    **/
    CheckPoints(): void 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet de retourner le nom du joueur.
    * 
    *   @return {string}
    **/
    GetName(): string
    {
        return this.name ? this.name : "Inconnu";
    }

    /**
    *   Cette méthode permet de récupérer le niveau du personnage.
    * 
    *   @param {object} data                                                    Données du joueur
    * 
    *   @return {number} 
    **/
    GetLevel(data: object): number
    {
        let player_level = 0;
        let player_classes = data as any;

        if (typeof player_classes === "undefined" || player_classes === null)
        {
            return player_level;
        }
        
        Object.values(player_classes).forEach((key: any, index: number) =>
        {
            player_level += player_classes[index].level;

            return player_level;
        });

        return player_level;
    }

    /**
    *   Cette méthode permet de récupérer le coût de l'attribut.
    * 
    *   @param {number} index                                                   Index de la stat
    * 
    *   @return {number}
    **/
    GetAttributeCost(index: number = 0): number 
    {
        let mod = 0;
        let input = this.stats;
    
        switch(index)
        {
            case 0:
                mod = Math.floor((input[0].value - 10)/2);
            break;
            case 1:
                mod = Math.floor((input[1].value - 10)/2);
            break;
            case 2:
                mod = Math.floor((input[2].value - 10)/2);
            break;
            case 3:
                mod = Math.floor((input[3].value - 10)/2);
            break;
            case 4:
                mod = Math.floor((input[4].value - 10)/2);
            break;
            case 5:
                mod = Math.floor((input[5].value - 10)/2);
            break;
        }
            
        return Math.max(1, mod);
    }
    
    /**
    *   Cette méthode permet de récupérer le modificateur.
    * 
    *   @param {any} modifier                                                   Modificateur
    * 
    *   @return {{ color: string }}
    **/
    GetModifier(modifier: any): { color: string }
    {
        let color;

        if (modifier === null || typeof modifier === "undefined")
        {
            return {
                color: "#000000"
            };
        }

        let modifier_c = modifier.slice(0).charAt(0);

        if (modifier_c === "+")
        {
            color = "#008000";
        }
        else if(modifier_c === "-")
        {
            color = "#FF0000";
        }
        else
        {
            color = "#000000";
        }

        return {
            color,
        };
    }

    /**
    *   Cette méthode permet de récupérer les modificateurs.
    * 
    *   @return {any[]}
    **/
    GetModifiers(): any[] 
    {
        return this.modifiers;
    }

    /**
    *   Cette méthode permet d'inclure les popovers d'aide.
    * 
    *   @param {object} data                                                    Données de l'aide
    * 
    *   @return {string} 
    **/
    CreateHelp(data: object): string 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet d'afficher les aides.
    * 
    *   @return {void} 
    **/
    DisplayHelp(): void 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet d'afficher le sélecteur des classes de personnage.
    * 
    *   @return {void} 
    **/
    DisplayClassSelector(): void 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet d'afficher les erreurs.   
    * 
    *   @return {void}
    **/
    DisplayErrors(): void 
    {
        throw new Error("Method not implemented.");
    }

    /** 
    *   Cette méthode permet de récupérer une classe spécifique.
    * 
    *   @param {number} id                                                      ID de la classe
    * 
    *   @return {Klass|undefined}
    **/
    GetClass(id: number): Klass|undefined
    {
        let character_class = this.classes.filter(c => c.id === id)[0];

        if (typeof character_class == "undefined")
        {
            throw new Error(`La classe n'existe pas !`);
        }

        return character_class;
    }

    /**
    *   Cettte méthode permet de récupérer les classes du jeu.
    * 
    *   @return {Promise<any>} 
    **/
    async GetClasses(): Promise<any>
    {
        return await fetch(FILES['classes'])
            .then(response => response.json())
            .then(data =>
            { 
                return data ? data : []; 
            })
            .catch((err) => { console.log('ERREUR :: ' + err); });
    }

    /**
    *   Cette méthode permet de récupérer les données des aides.
    * 
    *   @return {void} 
    **/
    async GetHelpData(): Promise<void> 
    {
        let data = await fetch(FILES['help'])
            .then(response => response.json())
            .then(data =>
            { 
                return data ? data : []; 
            })
            .catch((err) => { 
                console.log('ERREUR :: ' + err); 
                throw new Error(`ERREUR :: ${err}`);
            });
       
        this.helps.push(data);
    }

    /**
    *   Cette méthode initialise la classe "joueur".
    * 
    *   @return {void}
    **/
    async Init(): Promise<void>
    {
        throw new Error("Method not implemented.");
    }
}

export default new Player();