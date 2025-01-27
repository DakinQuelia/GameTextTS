/*****************************************
*	Gestion du joueur
*   -----------------
*	Auteur 		: Dakin Quelia
*	Version 	: 1.0.0. 
*****************************************/
import PlayerInterface from "./interfaces/playerinterface";
import { Character } from "./types/character";

class Player implements PlayerInterface
{
    character: Character;

    /**
    *   Le constructeur
    * 
    *   @return {void}
    **/
    constructor()
    {

    }

    /**
    *   Cette méthode initialise la classe "joueur".
    * 
    *   @return {void}
    **/
    Init(): void
    {
        
    }

    /**
    *   Cette méthode permet de créer le joueur avec les statistiques et compétences.  
    * 
    *   @param {Character} character                                        Les données du joueur.
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
    *   @param {Character} character                                        Les données du joueur.
    * 
    *   @return {boolean}
    **/
    GetPlayer(character: Character): boolean 
    {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet de récupérer le niveau du personnage.
    * 
    *   @param {object} data                                                Données du joueur
    * 
    *   @return {number} 
    **/
    GetLevel(data: object): number
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet de récupérer le coût de l'attribut.
    * 
    *   @param {number} index                                               Index de la stat
    * 
    *   @return {number}
    **/
    GetAttributeCost(index: number): number 
    {
        throw new Error("Method not implemented.");
    }
    
    /**
    *   Cette méthode permet de récupérer le modificateur.
    * 
    *   @param {object} modifier                                            Modificateur
    * 
    *   @return {object}
    **/
    GetModifier(modifier: object): object
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet de récupérer les modificateurs.
    * 
    *   @return {any[]}
    **/
    GetModifiers(): any[] 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cette méthode permet d'inclure les popovers d'aide.
    * 
    *   @param {object} data                                                Données de l'aide
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
    *   Cette méthode permet de récupérer les données des aides.
    * 
    *   @return {void} 
    **/
    GetHelpData(): void 
    {
        throw new Error("Method not implemented.");
    }

    /** 
    *   Cette méthode permet de récupérer une classe spécifique.
    * 
    *   @param {number} id                                                  ID de la classe
    * 
    *   @return {object}
    **/
    GetClass(id: number): object 
    {
        throw new Error("Method not implemented.");
    }

    /**
    *   Cettte méthode permet de récupérer les classes du jeu.
    * 
    *   @return {any[]} 
    **/
    GetClasses(): any[] 
    {
        throw new Error("Method not implemented.");
    }
}

export default new Player();