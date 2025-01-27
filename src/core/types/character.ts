/*****************************************
*	GameTextTS :: types/character.ts
*   ---------------------------------
*	Auteur 		: Dakin Quelia
*	Version 	: 1.0.0. 
*****************************************/
export type Character = { 
    name: string,
    gender: string,
    appareance: string,
    attributes: {
        strength:      { base: number, modifier: string|null },
        dexterity:     { base: number, modifier: string|null },
        constitution:  { base: number, modifier: string|null },
        intelligence:  { base: number, modifier: string|null },
        wisdom:        { base: number, modifier: string|null },
        charisma:      { base: number, modifier: string|null },
        vigor:         { base: number, modifier: string|null },
        reflex:        { base: number, modifier: string|null },
        willingness:   { base: number, modifier: string|null }
    },
    equipment: {
        
    },
    money: number,
    force_points: number,
    max_force_points: number,
    hit_points: number,
    max_hit_points: number,
    experience: number,
    alignment: number,
    classes: {
        0: { name: string, color: string, level: number },
        1: { name: string, color: string, level: number }
    },
    skills: {
        computeruse:      { base: number, modifier: string|null },
        persuade:         { base: number, modifier: string|null },
        demolitions:      { base: number, modifier: string|null },
        stealth:          { base: number, modifier: string|null },
        awareness:        { base: number, modifier: string|null },
        security:         { base: number, modifier: string|null },
        repair:           { base: number, modifier: string|null },
        treatinjury:      { base: number, modifier: string|null }
    },
    feats: any[],
    inventory: any[]
};