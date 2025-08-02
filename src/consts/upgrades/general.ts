import {CoreSet, GalaxysMostWanted, MadTitanShadow, RiseOfRedSkull} from "@/consts/expansions";
import {generateExhaustedCardInPlay, levelUpMessageIncrease, generateModifiedCounterCardInPlay, generateUpgradeCard, generateAllyCard, generateAllyWithHandEffectCard} from "@/lib/upgrades";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";
import { AgentVenom, AntMan, BlackWidow, CaptainAmerica, Drax, Hulk, MsMarvel, Quicksilver, SpiderMan, StarLord, Thor, Wasp } from "../heroes";

export const Helicarrier = generateExhaustedCardInPlay({
	name: 'Pilot\'s License',
	card: 'Helicarrier',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General'
})

export const AvengersMansion = generateExhaustedCardInPlay({
	name: 'Mansion Deed',
	card: 'Avenger\'s Mansion',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General',
	maxLevel: 1,
	article: 'an'
})

export const AlwaysPrepared : Upgrade = {
	name: `Always Prepared`,
	description () {
		const num = this.level + 1
		const prefix = num == 1 ? '' : num.toString() + ' '
		return `You get an extra ${prefix}mulligan${num > 1 ? 's': ''} at the start of each game.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.level+1, this.level+2, 'mulligan')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const StarkGadget = {
	name: 'Stark Gadgets',
	numCards (level: number) {
		return 1+level
	},
	description () {
		return `At the start of your first turn, draw ${this.numCards(this.level)} cards.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	requires: null,
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const AvengersTower = generateExhaustedCardInPlay({
	name: 'The Tower Protocol',
	card: 'Avenger\'s Tower',
	requires: CaptainAmerica.name,
	pronoun: 'it',
	category: 'General',
	maxLevel: 2,
	article: 'the'
})

export const EnhancedAwareness = generateModifiedCounterCardInPlay({
	name: 'Brain is at 110%',
	category: "General",
	card: 'Enhanced Awareness',
	requires: CaptainAmerica.name,
	extraCounters: {
		1: -2,
		2: -1,
		3: 0
	},
	pronoun: 'it'
})

export const DownTime = generateUpgradeCard({
	name: 'Recommended 8 Hours',
	requires: MsMarvel.name,
	card: 'Down Time',
	article: 'a',
	category: "General",
	attachedToHero: true
})

export const EnhancedReflexes = generateModifiedCounterCardInPlay({
	name: 'Focus is at 110%',
	category: "General",
	card: 'Enhanced Reflexes',
	requires: MsMarvel.name,
	extraCounters: {
		1: -2,
		2: -1,
		3: 0
	},
	pronoun: 'it'
})

export const EnhancedPhysique = generateModifiedCounterCardInPlay({
	name: 'Muscles are at 110%',
	category: "General",
	card: 'Enhanced Reflexes',
	requires: Thor.name,
	extraCounters: {
		1: -2,
		2: -1,
		3: 0
	},
	pronoun: 'it'
})

export const Endurance = generateUpgradeCard({
	name: 'Plot Armor',
	requires: MsMarvel.name,
	card: 'Endurance',
	article: 'an',
	category: "General",
	attachedToHero: true
})

export const Quincarrier = generateExhaustedCardInPlay({
	name: 'S.H.I.E.L.D. Camper Van',
	card: 'Quincarrier',
	requires: BlackWidow.name,
	pronoun: 'it',
	category: 'General',
	maxLevel: 1,
	article: 'a'
})

export const TargetAquired = generateUpgradeCard({
	name: 'Search and Destroy',
	requires: BlackWidow.name,
	card: 'Target Aquired',
	article: 'a',
	category: "General",
})

export const Resourceful = generateUpgradeCard({
	name: 'Wildcard Economy',
	requires: Hulk.name,
	card: 'Resourceful',
	article: 'a',
	category: "General",
	copies: 3
})


/*

export const HeroicConditioning = {
	name: `Heroic Conditioning`,
	numHitPoints (level: number) {
		return 2 + (level * 3)
	},
	description () {
		return `You get +${this.numHitPoints(this.level)} maximum hit points.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.numHitPoints(this.level), this.numHitPoints(this.level+1), 'hit point')
	},
	level: 1,
	category: 'General' as UpgradeCategory
	// TODO: Add a function that will actually change the startingHP value of the player
	//  maybe some kind of whenChosen() hook? and a whenLeveled() hook?
}
*/

export const WarMachineALly = generateAllyCard({
	name: `Rhodey or Not...`,
	card: 'War Machine',
	requires: RiseOfRedSkull.name,
	pronoun: 'him',
	category: "General",
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted : false
	}]
})

export const KnowYourEnemy = {
	name: `Know Your Enemy`,
	numCards (level: number) {
		return 2 + (level)
	},
	description () {
		const cards = this.numCards(this.level)
		return `<strong>Setup:</strong> Look at the top ${cards} cards of the encounter deck. You may put any number on the bottom or top of the deck in any order.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const TeamBuildingExcercise = generateExhaustedCardInPlay({
	card: "Team-Building Excercise",
	requires: AntMan.name,
	name: "All on the Same Page",
	pronoun: "it",
	category: "General"
})

export const SpiderManMMALly = generateAllyWithHandEffectCard({
	name: `Friendly Neighborhood Backup`,
	card: 'Spider-Man (Miles Morales)',
	requires: Wasp.name,
	pronoun: 'him',
	category: "General",
	levels: [{
		damage: 0,
		exhausted: false,
	}, {
		damage: 0,
		exhausted : false
	}],
	effectAtLevel : 2,
	conflictingHeroes: [SpiderMan.name]
})

export const CivicDuty = generateUpgradeCard({
	name: 'Citizen’s Resolve',
	requires: Quicksilver.name,
	card: 'Civic Duty',
	article: 'a',
	category: 'General',
	attachedToHero: true,
	copies: 3
})

export const AdrenalineRush = generateUpgradeCard({
	name: 'Full-Throttle Rush',
	requires: Quicksilver.name,
	card: 'Adrenaline Rush',
	article: 'an',
	category: 'General',
	attachedToHero: true,
	copies: 3
})

export const BoosterBoots = generateExhaustedCardInPlay({
	card: "Booster Boots",
	requires: GalaxysMostWanted.name,
	name: "Kickstart",
	pronoun: "it",
	category: "General",
})

export const DeftFocus = generateUpgradeCard({
	name: 'Zeroed In',
	requires: GalaxysMostWanted.name,
	card: 'Deft Focus',
	article: 'a',
	category: 'General',
	attachedToHero: true,
	copies: 3
})

export const CosmoAlly = generateAllyCard({
	card: "Cosmo",
	requires: StarLord.name,
	name: "Guardian's Best Friend",
	pronoun: "him",
	category: "General",
	levels: []
})

export const Citt = generateExhaustedCardInPlay({
	card: "C.I.T.T.",
	requires: StarLord.name,
	name: "Interstellar Travel",
	pronoun: "it",
	category: "General",
})

export const PulseGrenade = generateUpgradeCard({
	card: "Pulse Grenade",
	requires: StarLord.name,
	name: "Fireworks!",
	copies: 3,
	category: "General",
})

export const AthleticConditioning = generateUpgradeCard({
	card: "AthleticConditioning",
	requires: Drax.name,
	name: "Constitution Saving Throw",
	copies: 1,
	category: "General",
})

export const StarLordAlly = generateAllyCard({
	card: "Star-Lord",
	requires: AgentVenom.name,
	name: "Captain Peter Sparrow",
	pronoun: "him",
	category: "General",
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted : false
	}],
})

export const SideHolster = generateUpgradeCard({
	card: "Side Holster",
	requires: AgentVenom.name,
	name: "License to Kill",
	category: "General"
})

export const PlasmaPistol = generateUpgradeCard({
	card: "Plasma Pistol",
	requires: AgentVenom.name,
	name: "Hot-shot",
	category: "General"
})

export const MartinexAlly = generateAllyCard({
	card: "Martinex",
	requires: MadTitanShadow.name,
	name: "Cold Logic",
	pronoun: "him",
	category: "General",
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 0,
		exhausted : false
	}],
})

export const BladeAlly = generateAllyCard({
	card: "Blade",
	requires: MadTitanShadow.name,
	name: "Daywalker",
	pronoun: "him",
	category: "General",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted : false
	}],
})

export const ReadyToRumble = generateUpgradeCard({
	name: 'Rumble Mode',
	card: "Ready to Rumble",
	requires: MadTitanShadow.name,
	article: 'a',
	category: "General",
})
//TODO: for any hero?


export const Upgrades = [
	KnowYourEnemy,
	Helicarrier,
	AvengersMansion,
	StarkGadget,
	AlwaysPrepared,
	AvengersTower,
	EnhancedAwareness,
	DownTime,
	EnhancedReflexes,
	Endurance,
	Quincarrier,
	TargetAquired,
	WarMachineALly,
	SpiderManMMALly,
	CivicDuty,
	BoosterBoots,
	DeftFocus,
	CosmoAlly,
	Citt,
	PulseGrenade,
	AthleticConditioning,
	StarLordAlly,
	SideHolster,
	PlasmaPistol,
	MartinexAlly,
	BladeAlly,
	ReadyToRumble
]
