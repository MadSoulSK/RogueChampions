import {CoreSet, ExpansionsMap, RiseOfRedSkull} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import { BlackWidow, Hulk, Quicksilver, Thor, Wasp } from "../heroes";

export const ValhallasBlessing = generateCounterCardInPlay({
	name: 'Valhalla\'s Blessing',
	card: 'Hall of Heroes',
	requires: ExpansionsMap.Thor.name,
	category: 'Aggression',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const CombatTraining = generateUpgradeCard({
	name: 'Combat Master',
	requires: CoreSet.name,
	card: 'Combat Training',
	category: "Aggression",
	article: 'a',
	attachedToHero: true
})

export const TacTeam = generateCounterCardInPlay({
	name: 'Merc Cadre',
	card: 'Tac Team',
	category: "Aggression",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const SpiderGirlAlly = generateAllyCard({
	name: 'Spider Friend',
	card: 'Spider-Girl',
	pronoun: 'she',
	requires: RiseOfRedSkull.name,
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const HerculessAlly = generateAllyCard({
	name: 'Great Labourer',
	card: 'Hercules',
	pronoun: 'him',
	requires: Thor.name,
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const Counterattack = generateUpgradeCard({
	name: 'Tactical Counter Play',
	requires: BlackWidow.name,
	card: 'Counterattack',
	category: "Aggression",
	article: 'a'
})

export const ShehulkAlly = generateAllyCard({
	name: 'Green Means Go',
	card: 'She-Hulk',
	pronoun: 'her',
	requires: Hulk.name,
	levels: [{
		damage: 3,
		exhausted: false,
	}, {
		damage: 2,
		exhausted: false,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const BrawnAlly = generateAllyCard({
	name: 'Punch With Purpose',
	card: 'Brawn',
	pronoun: 'him',
	requires: Hulk.name,
	levels: [{
		damage: 2,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const MartialProwess = generateExhaustedCardInPlay({
	name: 'I Know Kung Fury',
	card: 'Martial Prowess',
	requires: Hulk.name,
	pronoun: 'it',
	category: 'Aggression',
	maxLevel: 1,
	article: 'a'
})

export const LieInWait = generateUpgradeCard({
	name: 'Lurking Threat',
	requires: Wasp.name,
	card: 'Lie in Wait',
	category: "Aggression",
	article: 'a'
})

export const Bootcamp = generateUpgradeCard({
	name: 'No Pain, No Gain',
	requires: Wasp.name,
	card: 'Bootcamp',
	category: "Aggression",
	article: 'a'
})

export const BruteForce = generateUpgradeCard({
	name: 'Hit Hard',
	requires: Quicksilver.name,
	card: 'Brute Force',
	article: 'a',
	category: 'Aggression',
	attachedToHero: true
})

export const Upgrades = [
	ValhallasBlessing,
	CombatTraining,
	TacTeam,
	SpiderGirlAlly,
	HerculessAlly,
	Counterattack,
	ShehulkAlly,
	BrawnAlly,
	MartialProwess,
	LieInWait,
	Bootcamp,
	BruteForce
]
