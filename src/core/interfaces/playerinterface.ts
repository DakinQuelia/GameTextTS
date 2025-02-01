/*****************************************
*	Gestion du joueur
*   -----------------
*	Auteur 		: Dakin Quelia
*	Version 	: 1.0.0. 
*****************************************/
import type { Character } from "../types/character";

declare var PlayerInterface: 
{
    prototype: PlayerInterface;
    new(): PlayerInterface;
};

interface PlayerInterface
{
    /**
    *   Cette méthode initialise la classe "joueur".
    *   @return {Promise<void>}
    **/
    Init(): Promise<void>;
    
    /**
    *   Cette méthode permet de créer le joueur avec les statistiques et compétences.  
    *   @param character Les données du joueur.
    *   @return {boolean}
    **/
    CreatePlayer(character: Character): boolean;
    
    /**
    *   Cette fonction permet de récupérer les informations du joueur
    *   @return {Promise<any>}
    **/
    GetPlayer(): Promise<any>;
    
    /**
    *   Cette méthode permet de vérifier que le joueur ne dépasse pas le quota des points.
    *   @return {void}
    **/
    CheckPoints(): void;

    /**
    *   Cette méthode permet de retourner le nom du joueur.
    *   @return {string}
    **/
    GetName(): string;

    /**
    *   Cette méthode permet de récupérer le niveau du personnage.
    *   @param {object} data                                                Données du joueur
    *   @return {number} 
    **/
    GetLevel(data: object): number;

    /**
    *   Cette méthode permet de récupérer le coût de l'attribut.
    *   @param {number} index                                               Index de la stat
    *   @return {number}
    **/
    GetAttributeCost(index: number): number;

    /**
    *   Cette méthode permet de récupérer le modificateur.
    *   @param {object} modifier                                            Modificateur
    *   @return {object}
    **/
    GetModifier(modifier: object): object;

    /**
    *   Cette méthode permet de récupérer les modificateurs.
    * 
    *   @return {any[]}
    **/
    GetModifiers(): any[];

    /**
    *   Cette méthode permet d'inclure les popovers d'aide.
    *   @param {object} data                                                Données de l'aide
    *   @return {string} 
    **/
    CreateHelp(data: object): string;

    /**
    *   Cette méthode permet d'afficher les aides.
    *   @return {void} 
    **/
    DisplayHelp(): void;

    /**
    *   Cette méthode permet d'afficher le sélecteur des classes de personnage.
    *   @return {void} 
    **/
    DisplayClassSelector(): void;

    /**
    *   Cette méthode permet d'afficher les erreurs.   
    *   @return {void}
    **/
    DisplayErrors(): void;

    /**
    *   Cette méthode permet de récupérer les données des aides
    *   @return {void} 
    **/
    GetHelpData(): void;

    /** 
    *   Cette méthode permet de récupérer une classe spécifique.
    *   @param {number} id                                                  ID de la classe
    *   @return {object}
    **/
    GetClass(id: number): object;

    /**
    *   Cettte méthode permet de récupérer les classes du jeu.
    *   @return {Promise<any>} 
    **/
    GetClasses(): Promise<any>;
}

export default PlayerInterface;