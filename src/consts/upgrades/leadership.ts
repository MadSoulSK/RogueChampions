import {AntMan, CaptainAmerica, CoreSet, RiseOfRedSkull} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {BlackWidow, Hawkeye} from "@/consts/heroes";

export const TheTriskelion = generateUpgradeCard({
	name: 'Forward HQ',
	card: 'The Triskelion',
	article: '',
	requires: CoreSet.name,
	category: 'Leadership'
})

export const IKnowAHawkeye = generateCounterCardInPlay({
	name: 'I Know a Hawkeye',
	card: 'Hawkeye (Clint)',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'him',
	category: "Leadership",
	exhausted: true,
	they: 'He',
	conflictingHeroes: [Hawkeye.name],
})

export const WonderManAlly = generateAllyCard({
	name: `Wonderful`,
	card: 'Wonder Man',
	requires: CaptainAmerica.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
		tough: true,
	}]
})

export const GoliathAlly = generateAllyCard({
	name: `Supersize Me`,
	card: 'Goliath',
	requires: RiseOfRedSkull.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const BlackKnightAlly = generateAllyCard({
	name: `Knightfall Protocol`,
	card: 'Black Knight',
	requires: RiseOfRedSkull.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
		tough: true
	}]
})

export const HawkeyeKateAlly = generateAllyCard({
	name: `The Other Hawkeye`,
	card: 'Hawkeye (Kate)',
	requires: RiseOfRedSkull.name,
	pronoun: 'her',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: false,
	}]
})

export const USAgentAlly = generateAllyCard({
	name: `America’s Blunt Instrument`,
	card: 'U.S. Agent',
	requires: RiseOfRedSkull.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 2,
		exhausted: false,
	}, {
		damage: 0,
		exhausted : false
	}]
})

export const GiantManAlly = generateAllyCard({
	name: `Massive Impact`,
	card: 'Giant-Man',
	requires: AntMan.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 2,
		exhausted: false,
	}, {
		damage: 1,
		exhausted : false
	}, {
		damage: 0,
		exhausted : false
	}]
})

export const RoninAlly = generateAllyCard({
	name: `Disavowed`,
	card: 'Ronin',
	requires: AntMan.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 1,
		exhausted : true
	}, {
		damage: 0,
		exhausted : false
	}]
})

export const StingerAlly = generateAllyCard({
	name: `Size doesn't matter`,
	card: 'Stinger',
	requires: AntMan.name,
	pronoun: 'her',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted : false
	}]
})

export const Quinjet = generateCounterCardInPlay({
	name: 'Cleared for Takeoff',
	category: "Leadership",
	card: 'Quinjet',
	requires: CaptainAmerica.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const RapidResponse = generateUpgradeCard({
	name: 'Rapid Deployment',
	card: 'Rapid Response',
	article: 'a',
	requires: BlackWidow.name,
	category: 'Leadership'
})

export const TeamTraining = generateUpgradeCard({
	name: 'Allies Assemble',
	card: 'Team Training',
	article: 'a',
	requires: RiseOfRedSkull.name,
	category: 'Leadership'
})


export const Upgrades = [IKnowAHawkeye, WonderManAlly, TheTriskelion, Quinjet, RapidResponse, GoliathAlly, BlackKnightAlly, HawkeyeKateAlly, USAgentAlly, TeamTraining, GiantManAlly, RoninAlly, StingerAlly]
