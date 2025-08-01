import { MadTitanShadow } from "@/consts/expansions";
import { AdamWarlock } from "@/consts/heroes";
import { generateCounterCardInPlay, generateExhaustedCardInPlay, generateUpgradeCard } from "@/lib/upgrades";
import { Upgrade } from "@/types/upgrade";

export const SoulWorld = generateCounterCardInPlay({
    card: "Soul World",
    requires: MadTitanShadow.name,
    requiresHero: AdamWarlock.name,
    name: "The Other Side",
    extraCounters: {1: 0, 2: 1},
    pronoun: "it",
    category : "Heroic",
})

export const KarmicStaff = generateExhaustedCardInPlay({
    card: "Karmic Staff",
    requires: MadTitanShadow.name,
    requiresHero: AdamWarlock.name,
    name: "Karma Stick",
    pronoun: "it",
    category: "Heroic",
})

export const WarlocksCape = generateExhaustedCardInPlay({
    card: "Warlock's Cape",
    requires: MadTitanShadow.name,
    requiresHero: AdamWarlock.name,
    name: "Every Hero Wears a Cape",
    pronoun: "it",
    category: "Heroic",
})

export const CosmicWard = generateUpgradeCard({
    card: "Cosmic Ward",
    requires: MadTitanShadow.name,
    requiresHero: AdamWarlock.name,
    name: "Not Today!",
    category: "Heroic",
    copies : 2,
})

export const MysticSenses = generateUpgradeCard({
    card: "Mystic Senses",
    requires: MadTitanShadow.name,
    requiresHero: AdamWarlock.name,
    name: "Karma Resources",
    category: "Heroic",
    copies : 2,
})


export const Upgrades : Upgrade[] = [
    SoulWorld,
    KarmicStaff,
    WarlocksCape,
    CosmicWard,
    MysticSenses,
];