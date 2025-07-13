import {CoreSet, RiseOfRedSkull} from "@/consts/expansions";
import {generateCounterCardInPlay, generateUpgradeCard, generateAllyCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import { BlackWidow, Hulk, Quicksilver, Thor } from "../heroes";

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

export const Upgrades = [SurveillanceTeam, HeroicIntuition, UnderSurveillance, CounterIntelligence, QuakeAlly, BeatCop, SkilledInvestigator, SenseOfJustice]
