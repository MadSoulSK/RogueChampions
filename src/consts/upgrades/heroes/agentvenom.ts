import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {AgentVenom as Expansion} from "@/consts/expansions";
import {AgentVenom} from "@/consts/heroes";
import { Upgrade } from "@/types/upgrade";


export const Upgrade20 = generateExhaustedCardInPlay({
    name: 'Upgrade 2.0',
    card: "Project Rebirth 2.0",
    requires: Expansion.name,
    requiresHero: AgentVenom.name,
    category: "Heroic",
    article: 'a',
    pronoun: "it"
})

export const DeadlyMultipass = generateExhaustedCardInPlay({
    name: 'Deadly Multipass',
    card: "Multi-Gun",
    requires: Expansion.name,
    requiresHero: AgentVenom.name,
    category: "Heroic",
    article: 'a',
    pronoun: "it"
})

export const SymbioteCopycat = generateUpgradeCard({
    name: 'Symbiote Copycat',
    card: "Spider-Sense",
    requires: Expansion.name,
    requiresHero: AgentVenom.name,
    category: "Heroic",
    article: 'a',
})

export const UnderThePillow = generateUpgradeCard({
    name: 'Under The Pillow',
    card: "Venom's Pistol",
    requires: Expansion.name,
    requiresHero: AgentVenom.name,
    category: "Heroic",
    article: 'a',
})

export const Upgrades : Upgrade[] = [
    Upgrade20,
    DeadlyMultipass,
    SymbioteCopycat,
    UnderThePillow
]