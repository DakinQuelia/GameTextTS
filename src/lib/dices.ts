/*****************************************
*	Gestion des lancers de dés
*   ----------------------------
*	Auteur 		: Dakin Quelia <dakinquelia@gmail.com>
*	Version 	: 1.0.0. 
*****************************************/
import Utils from "./utils.js";
import type { Dice } from "../core/types/dice";

class Dices
{
    private dices: number;
    private sides: number;
    private total: number;
    private result: Dice;
    private results: [];
    private dicef: string|null;
    private modifier: string|null;
    private text: string|null;
    private classCSS: string|null;
    private format: RegExp;

    /**
    *   Le constructeur
    * 
    *   @return {void}
    **/
    constructor()
    {
        this.dices = 0;
        this.sides = 0;
        this.total = 0;
        this.result = { rolls: [], sides: 0, dices: 0, text: "", modifier: "" };
        this.results = [];
        this.dicef = null;
        this.modifier = null;
        this.text = "";
        this.classCSS = "dices-modifier";
        this.format = new RegExp(/(\d+)d(\d+)$/i);
    }

    /**
    *   Cette méthode permet d'exécuter le lanscer de dés.
    * 
    *   @param {string} dices                                           Jet de dés (exemple : 1d10)
    *   @param {{ modifier: string, text: string }} data                Données : { modifier: "+1", text: "..." }
    * 
    *   @return {boolean}
    **/
    Rolls(dices: string, data: { modifier: string, text: string }): boolean
    {
        let rolls: number[] = [];
        let dicesMatch = this.format.exec(dices) as any;
        let array = [this.result] as never; //

        if (dicesMatch === null || typeof dicesMatch === "undefined")
        {
            return false;
        }

        this.dicef = dices;
        this.dices = parseInt(dicesMatch[1]);
        this.sides = parseInt(dicesMatch[2]);
        this.modifier = data.modifier ? data.modifier : null;
        this.text = data.text ? data.text : null;

        do 
        {
            rolls.push(this.GetDicesRoll());
        }
        while(rolls.length < this.dices);

        this.result = {
            sides: this.sides,
            dices: this.dices,
            text: this.text,
            modifier: this.modifier,
            rolls: rolls
        };
        
        this.results.push(array);

        return true;
    }

    /**
    *   Cette méthode permet de récupérer le nombre de dés jetés.
    * 
    *   @return {number}
    **/
    GetDices(): number
    {
        return this.dices;
    }

    /**
    *   Cette méthode permet de récupérer le nombre de faces des dès.
    * 
    *   @return {number}
    **/
    GetSides(): number
    {
        return this.sides;
    }

    /**
    *   Cette méthode permet d'obtenir le lancer de dés.
    * 
    *   @return {number} 
    **/
    GetDicesRoll(): number
    {
        return Math.floor(Math.random() * (this.GetSides() - this.GetDices() + 1)) + this.GetDices();
    }

    /**
    *   Cette méthode permet d'obtenir le résultat total.
    * 
    *   @return {string} 
    **/
    GetResults(): string
    {
        let rolls = this.result.rolls as number[];
        let roll = rolls.map(r => r).join(" + ");
        let total = this.GetModifier().total;
        let color = this.GetModifier().color;
        let style = `--dices-modifier-color: ${color};`;
        let modifier = this.modifier ? `(<span style="${style}" class="${this.classCSS}">${this.modifier}</span>) = ${total}` : "";

        return `(${roll}) = ${this.GetTotal()} ${modifier}`;
    }

    /**
    *   Cette méthode permet de récupérer le total du modificateur.
    * 
    *   @return {{ color: string, total: number }}
    **/
    GetModifier():  { color: string, total: number }
    {
        let total: number;
        let color: string;

        if (this.modifier === null || this.modifier === typeof undefined)
        {
            return {
                color: "#000000",
                total: 0
            };
        }

        let modifier_n = parseInt(this.modifier.slice(1));
        let modifier_c = this.modifier.slice(0).charAt(0);

        if (modifier_c === "+")
        {
            color = "#008000";
            total = this.GetTotal() + modifier_n;
        }
        else
        {
            color = "#FF0000";
            total = this.GetTotal() - modifier_n;
        }

        return {
            color,
            total
        };
    }

    /**
    *   Cette méthode permet d'obtenir le total final.  
    * 
    *   @return {number}
    **/
    GetTotal(): number
    {
        if (typeof this.result.rolls === "undefined")
        {
            return 0;
        }

        return Utils.Sum(this.result.rolls);
    }

    /**
    *   Cette méthode permet d'afficher le résultat.
    * 
    *   @return {void}
    **/
    DisplayResults(): boolean
    {
        const dices_content = document.querySelector("#dicesresult");
        const dice_result = document.createElement('div');
        const dice_text = this.text;

        if (dices_content === null)
        {
            return false;
        }

        dice_result.classList.add("dices-content");

        dice_result.innerHTML = `
            <div class="title">Lancer(s) de dés ${this.text ? ":: " + dice_text : ""} </div>
            <div id="rolldice">
                <strong>Jet de dés</strong>  : ${this.dicef} 
            </div>
            <div id="result">
                <strong>Résultat</strong>    : ${this.GetResults()}
            </div>
        `;

        dices_content.appendChild(dice_result);

        return true;
    }
}

export default new Dices();