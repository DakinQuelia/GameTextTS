/*****************************************
*	GameTextTS        :: App
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0.
*****************************************/
import { DEFAULT_LANGUAGE } from "./core/constants.js";
import Game from "./core/game.js";
import Modal from "./lib/modal.js";
import Dices from "./lib/dices.js";
//import settings from "./data/settings.js";
//Modal.Init();
/* Initialisation du jeu */
await Game.Init();
//await Game.DisplayGameInfo();
console.log(await Game.DisplayGameInfo());
console.log(`La langue par défaut est : ${DEFAULT_LANGUAGE}`);
