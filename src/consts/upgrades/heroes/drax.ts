import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {Drax as Expansion} from "@/consts/expansions";
import {Drax} from "@/consts/heroes";
import { Upgrade } from "@/types/upgrade";

export const MantisAlly = generateAllyCard({
    card: "Mantis",
    requires: Expansion.name,
    requiresHero: Drax.name,
    name: "Extraterrestrial Nurse",
    pronoun: "her",
    category: "Heroic",
    levels: [{
        exhausted: true,
        damage: 1
    },
    {
        exhausted: false,
        damage: 0
    }]
})

export const TooStubornToDie = generateUpgradeCard({
    card: "Too Stuborn to Die",
    requires: Expansion.name,
    requiresHero: Drax.name,
    name: ""
})

export const DwiTheetMastery = generateUpgradeCard({
    card: "Dwi Theet Mastery",
    requires: Expansion.name,
    requiresHero: Drax.name,
    name: "I Know Kung-Fu"
})

export const DraxsOtherKnife = generateUpgradeCard({
    card: "Draxs Other Knife",
    requires: Expansion.name,
    requiresHero: Drax.name,
    name: "Warrior's Other Hand"
})

export const DraxsKnife = generateUpgradeCard({
    card: "Drax's Knife",
    requires: Expansion.name,
    requiresHero: Drax.name,
    name: "Warrior's Right Hand"
})

export const Upgrades : Upgrade[] = [
    TooStubornToDie,
    MantisAlly,
    DwiTheetMastery,
    DraxsOtherKnife,
    DraxsKnife
]