/*****************************************
*	GameTextTS        :: Alias
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0.
*****************************************/
import Utils from "../lib/utils.js";
import Dices from "../lib/dices.js";
import Player from "./player.js";
import Game from "./game.js";
/******************************************
*   Utilitaires
******************************************/
/******************************************
*   Jeu (Game)
******************************************/
export function SaveGame() {
    return Game.SaveGame();
}
export function DisplayCredits() {
    return Game.DisplayCredits();
}
export function GetLevel(data) {
    return Player.GetLevel(data);
}
export async function DisplayGameInfo() {
    return await Game.DisplayGameInfo();
}
export async function GameInit() {
    return await Game.Init();
}
export async function GetPlayer() {
    return await Game.GetPlayer();
}
export async function PlayerInit() {
    return await Player.Init();
}
/******************************************
*   Jet de dés
******************************************/
export function DicesRolls(dices, data = { modifier: "", text: "", }) {
    return Dices.Rolls(dices, data);
}
export function DicesDisplayResults() {
    return Dices.DisplayResults();
}
