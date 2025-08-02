import {CoreSet, MadTitanShadow, RiseOfRedSkull} from "@/consts/expansions";
import {generateCounterCardInPlay, generateUpgradeCard, generateAllyCard, generateExhaustedCardInPlay, generateModifiedCounterCardInPlay} from "@/lib/upgrades";
import { AgentVenom, BlackWidow, Hulk, Quicksilver, Thor } from "../heroes";

export const SurveillanceTeam = generateCounterCardInPlay({
	name: 'Trusty Spies',
	card: 'Surveillance Team',
	category: "Justice",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const HeroicIntuition = generateUpgradeCard({
	name: 'Heroic Instincts',
	requires: CoreSet.name,
	card: 'Heroic Intuition',
	article: 'a',
	category: "Justice",
	attachedToHero: true
})

export const UnderSurveillance = generateUpgradeCard({
	name: 'Big Brother is watching',
	requires: Thor.name,
	card: 'Under Surveillance',
	article: 'an',
	category: "Justice",
	attachedToMainScheme: true
})

export const CounterIntelligence = generateUpgradeCard({
	name: 'Who is watching the KGB?',
	requires: BlackWidow.name,
	card: 'CounterIntelligence',
	article: 'a',
	category: "Justice",
})

export const QuakeAlly = generateAllyCard({
	name: `Shake it till you make it.`,
	card: 'Quake',
	requires: BlackWidow.name,
	pronoun: 'her',
	category: "Justice",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const BeatCop = generateExhaustedCardInPlay({
		name: 'Keep the Streets Clean',
		card: 'Beat Cop',
		requires: Hulk.name,
		pronoun: 'him',
		category: 'Justice',
		maxLevel: 2,
		article: 'a'
})

export const SkilledInvestigator = generateUpgradeCard({
	name: 'Case Closed',
	requires: RiseOfRedSkull.name,
	card: 'Skilled Investigator',
	article: 'a',
	category: "Justice",
})

export const SenseOfJustice = generateUpgradeCard({
	name: 'Righteous Deduction',
	requires: Quicksilver.name,
	card: 'Sense of Justice',
	article: 'a',
	category: 'Justice',
})

export const JackFlagAlly = generateAllyCard({
	card: "Jack Flag",
	requires: AgentVenom.name,
	name: "Bannerlord",
	pronoun: "he",
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: "Justice"
})

export const SonicRifle = generateModifiedCounterCardInPlay({
	card: "Sonic Rifle",
	requires: AgentVenom.name,
	name: "I love the sound of...",
	extraCounters: {
		0 : -1,
		1 : 0,
		2 : 1
	},
	pronoun: "",
	category: 'Justice',
})

export const QuasarAlly = generateAllyCard({
	card: "Quasar",
	requires: MadTitanShadow.name,
	name: "Light Lockdown",
	pronoun: "him",
	category: "Justice",
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
})

export const Upgrades = [SurveillanceTeam, HeroicIntuition, UnderSurveillance, CounterIntelligence, QuakeAlly, BeatCop, SkilledInvestigator, SenseOfJustice, JackFlagAlly, SonicRifle, QuasarAlly]
