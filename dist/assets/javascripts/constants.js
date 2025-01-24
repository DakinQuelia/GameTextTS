/*****************************************
*	CorvanisLang      :: constants
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0.
*****************************************/
export const DEFAULT_LANGUAGE = 'fr'; // Langue par défaut
export const ROOT = location.protocol + '//' + location.host; // Dossier racine
export const ASSETS_ROOT = ROOT + '/assets'; // Dossier :: /assets
export const CSS_ROOT = ASSETS_ROOT + '/stylesheets'; // Dossier :: /assets/stylesheets
export const SCRIPTS_ROOT = ASSETS_ROOT + '/javascripts'; // Dossier :: /assets/javascripts
export const DATA_ROOT = ROOT + '/data'; // Dossier :: /data
export const FILES = {
    'styles': DATA_ROOT + '/style.css', // Le code de l'application
};
