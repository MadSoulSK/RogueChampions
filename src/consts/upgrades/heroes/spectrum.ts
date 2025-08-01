import { MadTitanShadow } from "@/consts/expansions";
import { Spectrum } from "@/consts/heroes";
import { generateAllyCard, generateExhaustedCardInPlay } from "@/lib/upgrades";
import { Upgrade } from "@/types/upgrade";

export const BlueMarvelAlly = generateAllyCard({
    name: 'Energetic',
    card: 'Blue Marvel',
    levels: [{
        damage: 2,
        exhausted: false,
    }, {
        damage: 1,
        exhausted: false
    }, {
        damage: 0,
        exhausted: false,
    }],
    requires: MadTitanShadow.name,
    requiresHero: Spectrum.name,
    pronoun: 'him',
    category: 'Heroic',
})

export const EnergyDuplication = generateExhaustedCardInPlay({
    card: "Energy Duplication",
    requires: MadTitanShadow.name,
    requiresHero: Spectrum.name,
    name: "Perpetum Mobile",
    pronoun: "it",
    category: "Heroic",
})

function generateSurgeUpgrade(energyTypeName: string, improvedEffectDescription: string): Upgrade {
	const upgrade: Upgrade = {
        name: `${energyTypeName} Surge`,
        level: 1,
        maxLevel: 1,
        description() {
            return `${improvedEffectDescription}`;
        },
        requires: MadTitanShadow.name,
        requiresHero: Spectrum.name,
        category: "Heroic",
        levelUpMessage: function () {
            throw new Error("Function not implemented.");
        }
    }

	return upgrade
}

export const Gamma = generateSurgeUpgrade('Gamma','The Gamma <strong>Hero Response</strong> now deals 2 damage instead of 1.');
export const Photon = generateSurgeUpgrade('Photon','The Photon <strong>Hero Response</strong> now removes 2 threat instead of 1.');
export const Pulsar = generateSurgeUpgrade('Pulsar','The Pulsar <strong>Hero Response</strong> now heals 2 damage instead of 1.');


export const Upgrades : Upgrade[] = [
    BlueMarvelAlly,
    EnergyDuplication,
    Gamma,
    Photon,
    Pulsar
];