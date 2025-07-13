import {Challenge} from "@/types/challenge";
import {randomItem} from "@/lib/random";
import {DF_STEP_LARGE, DF_STEP_MED, DF_STEP_SMALL} from "@/consts/difficulty";

export const Devious : Challenge = {
	name: 'Devious',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards cards from the encounter deck until they find a Treachery. In player order, resolve the treacheries.`
}

export const Resilient : Challenge = {
	name: 'Resilient',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Increase the villain's max hit points by 8 for each player this stage.`
}

export const Ambush : Challenge = {
	name: 'Ambush',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Each player discards an encounter card and takes damage equal to the number of boost icons on it.`
}

export const Master : Challenge ={
	name: 'Master',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards encounter cards until they discard a minion. Engage that minion, but ignore any of its "When Revealed" or Surge effects.`
}

export const Tenacious : Challenge = {
	name: 'Tenacious',
	difficulty: DF_STEP_LARGE,
	description: `<strong>Setup:</strong> Place an 1 acceleration token per player on the main scheme.`
}

export const Dangerous : Challenge = {
	name: 'Dangerous',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Deal each player an encounter card.`
}

export const ColdRevenge : Challenge = {
	name: "Cold Revenge",
	difficulty: DF_STEP_MED + 1,
	description: `Each time you kill a minion, add 1 threat on a scheme.`
}


export const OverTheTop : Challenge = {
	name: "Over the Top",
	difficulty: DF_STEP_MED + 1,
	description: `Each time a villain kills an ally, take 1 damage.`
}

export const MassPanic : Challenge = {
	name: "Mass Panic",
	difficulty: DF_STEP_MED,
	description: `Upgrade, Supports and Allies enter game exhausted.`
}

export const Isolation : Challenge = {
	name: "Isolation",
	difficulty: DF_STEP_SMALL,
	description: `Reduce your ally limit by 1`
}

export const AlwaysScheming = {
	name: "Always Scheming",
	difficulty: DF_STEP_MED,
	description: `Each side scheme gains Hazard icon. If it already has, it gains Acceleration icon instead.`
}

export const TheSnap = {
	name: "The Snap",
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Discard half of your deck.`
}

export const ChallengesList = [Devious,
	Resilient,
	Ambush,
	Master,
	Tenacious,
	Dangerous,
	ColdRevenge,
	OverTheTop,
	MassPanic,
	Isolation,
	AlwaysScheming,
	TheSnap
]

export const randomChallenge = () : Challenge => {
	return randomItem(ChallengesList)
}
