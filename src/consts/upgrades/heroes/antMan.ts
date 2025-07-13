import {AntMan as Expansion}  from "@/consts/expansions";
import {AntMan} from "@/consts/heroes";
import {generateUpgradeCard} from "@/lib/upgrades";
import { Upgrade } from "@/types/upgrade";

export const GiantStrength = generateUpgradeCard({
    name: 'Mass Equals Force',
    card: "Giant Strength",
    requires: Expansion.name,
    requiresHero: AntMan.name,
    category: "Heroic",
    article: 'a',
})


export const AntMansHelmet = generateUpgradeCard({
    name: 'Six-Legged Network',
    card: "Ant-Man's Helmet",
    requires: Expansion.name,
    requiresHero: AntMan.name,
    category: "Heroic",
    article: 'the',
})

export const WristGauntlets = generateUpgradeCard({
    name: 'Pym’s Powergrip',
    card: "Wrist Gauntlets",
    requires: Expansion.name,
    requiresHero: AntMan.name,
    category: "Heroic",
    article: '',
})

export const Particles : any = {
        name: 'Improved Pym Particles',
        level: 1,
        maxLevel: 1,
        requires: Expansion.name,
        requiresHero: AntMan.name,

        description () {
            return "When you spend Pym Particles, ignore any Giant or Tiny restrictions and choose the effect regardless of those keywords."
        },

        levelUpMessage ()
        {
            return ""
        }
}

export const Upgrades : Upgrade[] = [
    AntMansHelmet,
    GiantStrength,
    WristGauntlets,
    Particles
]