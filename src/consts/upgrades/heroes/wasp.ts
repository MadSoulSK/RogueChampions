import {Wasp as Expansion}  from "@/consts/expansions";
import {Wasp} from "@/consts/heroes";
import {generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import { Upgrade } from "@/types/upgrade";

export const RedRoomTraining = generateUpgradeCard({
    name: 'Red Room Discipline',
    card: "Red Room Training",
    requires: Expansion.name,
    requiresHero: Wasp.name,
    category: "Heroic",
    article: 'the',
})

export const WaspsHelmet = generateUpgradeCard({
    name: 'Tactical Interface',
    card: "Wasp's Helmet",
    requires: Expansion.name,
    requiresHero: Wasp.name,
    category: "Heroic",
    article: 'the',
})

export const BioSyntheticWings = generateExhaustedCardInPlay({
    card: "Bio-Synthetic Wings",
    requires: Expansion.name,
    requiresHero: Wasp.name,
    name: "Nano-Flight Systems",
    pronoun: ""
})

export const Particles : any = {
        name: 'Improved Pym Particles',
        level: 1,
        maxLevel: 1,
        requires: Expansion.name,
        requiresHero: Wasp.name,

        description () {
            return "When you spend Pym Particles, ignore any Giant or Tiny restrictions and choose the effect regardless of those keywords."
        },

        levelUpMessage ()
        {
            return ""
        }
}


export const Upgrades : Upgrade[] = [
    RedRoomTraining,
    WaspsHelmet,
    BioSyntheticWings,
    Particles
]