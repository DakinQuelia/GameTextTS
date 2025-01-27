/*****************************************
*	GameTextTS        :: settings
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0. 
*****************************************/
declare var settings: any[];
declare var configuration: 
{
    prototype: Configuration;
    new(): Configuration;
};
interface Configuration 
{
    /**
    *   Cette fonction permet de récupérer le paramètre.
    *   @param setting Le nom du paramètre à récupérer.
    **/
    getSetting(setting: string): string;
    /**
    *   Cette fonction permet de définir un paramètre.
    *   @param setting Le nom du paramètre que vous déterminez.
    *   @param value La valeur du paramètre que vous définissez.
    **/
    setSetting(setting: string, value: string): boolean;
}