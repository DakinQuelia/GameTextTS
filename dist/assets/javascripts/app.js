/*****************************************
*	GameTextTS        :: App
*	Auteur 		       : Dakin Quelia
*	Version 	       : 1.0.0.
*****************************************/
import { DEFAULT_LANGUAGE } from "./core/constants.js";
import Modal from "./lib/modal.js";
Modal.Init();
/*
const compteur = document.querySelector("#compteur") as HTMLButtonElement | null;

let i = 0;

const increment = (e: Event): void => {
    i++;

    e.preventDefault();

    const span = compteur?.querySelector("span");

    if (span)
    {
        span.innerText = i.toString();
    }
};

compteur?.addEventListener("click", increment);
*/
console.log(`La langue par défaut est : ${DEFAULT_LANGUAGE}`);
