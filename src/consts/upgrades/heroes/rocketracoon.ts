import {
    generateCounterCardInPlay,
	generateExhaustedCardInPlay,
    generateUpgradeCard,
} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {RocketRacoon} from "@/consts/heroes";

export const CyberneticSkeleton = generateUpgradeCard({
    name: "Warranty Extended",
    requiresHero: RocketRacoon.name,
    card: "Cybernetic Skeleton",
    requires: GalaxysMostWanted.name
})

export const ParticleCannon = generateExhaustedCardInPlay({
    name: "Overkill Certified",
    requiresHero: RocketRacoon.name,
    card: "Particle Cannon",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const RocketLauncher = generateExhaustedCardInPlay({
    name: "Splash Damage Deluxe",
    requiresHero: RocketRacoon.name,
    card: "Rocket Launcher",
    pronoun: "it",
    requires: GalaxysMostWanted.name
})

export const RocketsPistol = generateCounterCardInPlay({
    card: "Rocket's Pistol",
    requires: GalaxysMostWanted.name,
    requiresHero: RocketRacoon.name,
    name: "Pew Pew License",
    extraCounters: {
        1: 0, 
        2: 1, 
        3: 2},
    pronoun: "it"
})

export const ThrusterBoots = generateUpgradeCard({
    card: "Thruster Boots",
    requiresHero: RocketRacoon.name,
    name: "Rocket Sneakers",
    requires: GalaxysMostWanted.name
})

export const Upgrades = [CyberneticSkeleton, ParticleCannon, RocketLauncher, RocketsPistol, ThrusterBoots]
