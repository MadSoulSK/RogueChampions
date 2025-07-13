import {
	generateExhaustedCardInPlay,
} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {Groot} from "@/consts/heroes";

export const FertileGround = generateExhaustedCardInPlay({
    card: "Fertile Ground",
    requiresHero: Groot.name,
    name: "Photosynthetic Surge",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const EntanglingVines = generateExhaustedCardInPlay({
    card: "Entangling Vines",
    requiresHero: Groot.name,
    name: "Botanic Mastery",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const LashingVines = generateExhaustedCardInPlay({
    card: "Lashing Vines",
    requiresHero: Groot.name,
    name: "Snapstrike",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const VineSpikes = generateExhaustedCardInPlay({
    card: "Vine Spikes",
    requiresHero: Groot.name,
    name: "Vine and Cheese",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const VineShield = generateExhaustedCardInPlay({
    card: "Vine Shield",
    requiresHero: Groot.name,
    name: "Stop Whinning",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const Upgrades = [FertileGround, EntanglingVines, LashingVines, VineSpikes, VineShield]