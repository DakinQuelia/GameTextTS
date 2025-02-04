/*****************************************
*	GameTextTS        :: App
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0. 
*****************************************/
import { DEFAULT_LANGUAGE } from "./core/constants.js";
import Game from "./core/game.js";
import Modal from "./lib/modal.js";
import Dices from "./lib/dices.js";

/* Initialisation du jeu */
await Game.Init();

//await Game.DisplayGameInfo();

console.log(`La langue par défaut est : ${DEFAULT_LANGUAGE}`);