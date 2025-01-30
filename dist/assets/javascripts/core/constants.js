/*****************************************
*	GameTextTS        :: constants
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0.
*****************************************/
export const DEFAULT_LANGUAGE = 'fr'; // Langue par défaut
export const THEME = "default"; // Thème :: Défaut
export const ROOT = location.protocol + '//' + location.host + '/' + 'dist'; // Dossier racine
export const ASSETS_ROOT = ROOT + '/assets'; // Dossier :: /assets
export const CSS_ROOT = ASSETS_ROOT + '/stylesheets'; // Dossier :: /assets/stylesheets
export const SCRIPTS_ROOT = ASSETS_ROOT + '/javascripts'; // Dossier :: /assets/javascripts
export const LANGUAGE_ROOT = ASSETS_ROOT + '/javascripts/lang'; // Dossier :: /assets/javascripts/lang
export const DATA_ROOT = ROOT + '/data'; // Dossier :: /data
export const RESOURCES_ROOT = DATA_ROOT + '/resources'; // Dossier :: /data/resources
export const DATABASE_ROOT = DATA_ROOT + '/database'; // Dossier :: /data/database
export const FILES = {
    'styles': CSS_ROOT + '/' + THEME + '/style.css', // Thème et fichier CSS
    'player': RESOURCES_ROOT + '/player.json', // Informations sur le joueur
    'rules': RESOURCES_ROOT + '/rules.json', // Les règles du jeu
    'help': RESOURCES_ROOT + '/help.json', // Aides du jeu
    'classes': DATABASE_ROOT + '/classes.json', // BDD :: Classes des personnages
    'rooms': DATABASE_ROOT + '/rooms.json', // BDD :: Lieux du jeu
    'items': DATABASE_ROOT + '/items.json', // BDD :: Objets du jeu
    'code': DATA_ROOT + '/code.js', // Le code de l'application
    'data': DATA_ROOT + '/data.js', // Données du jeu
    'settings': DATA_ROOT + '/settings.js' // Paramètres du jeu
};
