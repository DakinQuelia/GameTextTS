/*****************************************
*	GameTextTS        :: Alias
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0. 
*****************************************/
import Utils from "../lib/utils.js";
import Dices from "../lib/dices.js";
import Player from "./player.js";
import Game from "./game.js";

import { GameInfo } from "../core/types/gameinfo.js";

/******************************************
*   Utilitaires
******************************************/


/******************************************
*   Jeu (Game)
******************************************/
export function SaveGame(): void
{
    return Game.SaveGame();
}

export function DisplayCredits(): Promise<Boolean>
{
    return Game.DisplayCredits();
}

export function GetLevel(data: object): number
{
    return Player.GetLevel(data);
}

export async function DisplayGameInfo()
{
    return await Game.DisplayGameInfo();
}

export async function GameInit(): Promise<void>
{
    return await Game.Init();
}

export async function GetPlayer(): Promise<any>
{
    return await Game.GetPlayer();
}

export async function PlayerInit(): Promise<void>
{
    return await Player.Init();
}

/******************************************
*   Jet de dés
******************************************/
export function DicesRolls(dices: string, data = { modifier: "", text: "", }): boolean
{
    return Dices.Rolls(dices, data);
}

export function DicesDisplayResults(): boolean
{
    return Dices.DisplayResults();
}