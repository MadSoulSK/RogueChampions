import {CoreSet, GalaxysMostWanted} from "@/consts/expansions";
import {generateCounterCardInPlay, generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import { BlackWidow, DoctorStrange, Drax, Hulk, MsMarvel, Quicksilver } from "../heroes";

export const MedTeam = generateCounterCardInPlay({
	name: 'Family Doctor',
	category: "Protection",
	card: 'Med Team',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const ArmoredVest = generateUpgradeCard({
	name: 'Upgraded Defenses',
	requires: CoreSet.name,
	category: "Protection",
	card: 'Armored Vest',
	article: 'an',
	attachedToHero: true,
})

export const BlackWidowAlly = generateAllyCard({
	name: `Spyder Web`,
	card: 'Black Widow',
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: true
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: CoreSet.name,
	pronoun: 'her',
	category: "Protection",
})

export const EnergyBarrier = generateCounterCardInPlay({
	name: 'Shock and Guard',
	category: "Protection",
	card: 'Energy Barrier',
	requires: MsMarvel.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const NovaAlly = generateAllyCard({
	name: `The Human Rocket`,
	card: 'Nova',
	levels: [{
		damage: 2,
		exhausted: false,
	}, {
		damage: 1,
		exhausted: false
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: MsMarvel.name,
	pronoun: 'him',
	category: "Protection",
})

export const DefensiveStance = generateUpgradeCard({
	name: 'Upgraded Defenses',
	requires: BlackWidow.name,
	category: "Protection",
	card: 'DefensiveStance',
	article: 'a',
})

export const IronfistAlly = generateAllyCard({
	name: `Mortal Combatant`,
	card: 'Ironfist',
	levels: [{
		damage: 2,
		exhausted: true
	}, {
		exhausted: false,
		damage: 1
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: DoctorStrange.name,
	pronoun: 'him',
	category: "Protection",
})

export const CleatAlly = generateAllyCard({
	name: `Loop of the Vishanti`,
	card: 'Clea',
	levels: [{
		damage: 0,
		exhausted: false
	}],
	requires: DoctorStrange.name,
	pronoun: 'her',
	category: "Protection",
})

export const TheNightNurse = generateCounterCardInPlay({
	name: 'Midnight Shift',
	card: 'The Night Nurse',
	requires: DoctorStrange.name,
	pronoun: 'her',
	category: 'Protection',
		extraCounters: {
		1: 0,
		2: 1
	},
	article: ''
})

export const Unflappable = generateExhaustedCardInPlay({
	name: 'Calm Like Water',
	card: 'Unflappable',
	requires: DoctorStrange.name,
	pronoun: 'it',
	category: 'Protection',
	maxLevel: 1,
	article: 'a'
})

export const ElectrostaticArmor = generateUpgradeCard({
	name: 'Don’t Touch Me',
	requires: Hulk.name,
	card: 'Electrostatic Armor',
	article: 'a',
	category: "Protection",
})

export const NervesOfSteel = generateExhaustedCardInPlay({
	name: 'Cool-Headed Brawler',
	requires: Quicksilver.name,
	card: 'Nerves of Steel',
	article: 'a',
	category: 'Protection',
	pronoun: "it"
})

export const StarhawkAlly = generateAllyCard({
	name: 'Orbiting Ally',
	requires: GalaxysMostWanted.name,
	card: 'StarhawkAlly',
	category: 'Protection',
	pronoun: "him",
	levels: [
		{
			exhausted: true,
			damage: 0
		},
		{
			exhausted: false,
			damage: 0
		}
	]
})

export const Dauntless = generateUpgradeCard({
	name: 'Face-Tank Flex',
	requires: GalaxysMostWanted.name,
	card: 'Dauntless',
	article: 'a',
	category: "Protection",
})

export const HardToIgnore = generateUpgradeCard({
	name: 'Easy to Accept',
	requires: GalaxysMostWanted.name,
	card: 'Hard to Ignore',
	article: 'a',
	category: "Protection",
	copies: 3
})

export const Indomitable = generateUpgradeCard({
	name: 'Still Standing',
	requires: GalaxysMostWanted.name,
	card: 'Indomitable',
	article: 'a',
	category: "Protection",
	copies: 3
})

export const MartyrAlly = generateAllyCard({
	card: "Martyr",
	requires: Drax.name,
	name: "Tough Alien",
	pronoun: "she",
	category: "Protection",
	levels: [{
		damage: 2,
		exhausted : false
	},{
		damage: 1,
		exhausted : false
	},{
		damage: 0,
		exhausted : false
	}],
})

export const MoondragonAlly = generateAllyCard({
	card: "Moondragon",
	requires: Drax.name,
	name: "Enemy vs my enemy",
	pronoun: "she",
	category: "Protection",
	levels: [{
		damage: 1,
		exhausted : true
	},{
		damage: 1,
		exhausted : false
	},{
		damage: 0,
		exhausted : false
	}],
})


export const Upgrades = [ArmoredVest, BlackWidowAlly, MedTeam, EnergyBarrier, NovaAlly, DefensiveStance, IronfistAlly, CleatAlly, TheNightNurse, Unflappable, ElectrostaticArmor, NervesOfSteel, StarhawkAlly, Dauntless, HardToIgnore, 
	Indomitable, MartyrAlly, MoondragonAlly]
