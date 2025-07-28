import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Gamora as Expansion} from "@/consts/expansions";
import {Gamora} from "@/consts/heroes";
import { Upgrade } from "@/types/upgrade";


export const GamorasSword = generateUpgradeCard({
    name: 'Assassin\'s Best Friend',
    card: "Gamora's Sword",
    requires: Expansion.name,
    requiresHero: Gamora.name,
    category: "Heroic",
    article: 'the',
})

export const KeenInstincts = generateUpgradeCard({
    name: 'Just a Hunch',
    card: "Keen Instincts",
    requires: Expansion.name,
    requiresHero: Gamora.name,
    category: "Heroic",
    article: 'the',
    copies: 2
})

export const ConditioningRoom = generateExhaustedCardInPlay({
    card: "Conditioning Room",
    requires: Expansion.name,
    requiresHero: Gamora.name,
    name: "No Pain, No Gain",
    pronoun: "it"
})

export const NebulaAlly = generateAllyCard({
    card: "Nebula",
    requires: Expansion.name,
    requiresHero: Gamora.name,
    name: "Blue Sister",
    pronoun: "her",
    category: "Heroic",
    levels: [
        {
            exhausted: true,
            damage: 1,
        },{
            exhausted: false,
            damage: 0,
        },]
})

export const Upgrades : Upgrade[] = [
    NebulaAlly,
    ConditioningRoom,
    KeenInstincts,
    GamorasSword,
]