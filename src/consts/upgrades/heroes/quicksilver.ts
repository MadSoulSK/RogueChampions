import {Quicksilver as Expansion}  from "@/consts/expansions";
import {Quicksilver} from "@/consts/heroes";
import {generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import { Upgrade } from "@/types/upgrade";


export const ServalIndustries = generateUpgradeCard({
    name: 'Next-Gen Tech',
    card: "Serval Industries",
    requires: Expansion.name,
    requiresHero: Quicksilver.name,
    category: "Heroic",
    article: 'the',
})

export const AcceleratedReflex = generateUpgradeCard({
    name: 'Somebody Stop Me',
    card: "Accelerated Reflex",
    requires: Expansion.name,
    requiresHero: Quicksilver.name,
    category: "Heroic",
    article: 'a',
})

export const FrictionResistance = generateExhaustedCardInPlay({
    card: "Friction Resistance",
    requires: "Expansion.name",
    requiresHero: Quicksilver.name,
    name: "Rough and Ready",
    pronoun: "a",
    category: "Heroic",
})

export const HyperPerception = generateUpgradeCard({
    name: 'Somebody Stop Him',
    card: "Hyper Perception",
    requires: Expansion.name,
    requiresHero: Quicksilver.name,
    category: "Heroic",
    article: 'a',
})

export const ReinforcedSinen = generateUpgradeCard({
    name: 'Somebody Stop It',
    card: "Reinforced Sinen",
    requires: Expansion.name,
    requiresHero: Quicksilver.name,
    category: "Heroic",
    article: 'a',
})

export const Upgrades : Upgrade[] = [
    AcceleratedReflex,
    FrictionResistance,
    HyperPerception,
    ReinforcedSinen,
    ServalIndustries
]