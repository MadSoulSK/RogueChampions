import {EncounterSet} from "@/types/encounterset";
import { DF_ES_EASY, DF_ES_HARD, DF_ES_MEDIUM } from "@/consts/difficulty";

// Encounter sets marked as "boss: true" cannot be used as modular sets
// Their difficulty is 0 because the villain's difficulty is set in the villains.ts file

// Helper to create an encounter quickly
function quick(name: string, diff = DF_ES_EASY) : EncounterSet {
	const encounter = {
		name: name,
		difficulty: diff,
		boss: false,
	}
	EncounterSetsMap[name] = encounter
	EncounterSetsList.push(encounter)
	return encounter
}

export const Rhino : EncounterSet = {
	name: 'Rhino',
	difficulty: 0,
	boss: true
}

export const Klaw : EncounterSet = {
	name: 'Klaw',
	difficulty: 0,
	boss: true
}

export const Ultron : EncounterSet = {
	name: 'Ultron',
	difficulty: 0,
	boss: true
}

//Goblin
export const RiskyBusiness : EncounterSet = {
	name: 'Risky Business',
	difficulty: 0,
	boss: true
}

export const MutagenFormula : EncounterSet = {
	name: 'Mutagen Formula',
	difficulty: 0,
	boss: true
}

//Wrecking Crew
export const WreckingCrew : EncounterSet = {
	name: 'Wrecking Crew',
	difficulty: 0,
	boss: true,
}

//Rise of the Red Skull
export const Crossbones : EncounterSet = {
	name: 'Crossbones',
	difficulty: 0,
	boss: true
}

export const AbsorbingMan : EncounterSet = {
	name: 'Absorbing Man',
	difficulty: 0,
	boss: true
}

export const Taskmaster : EncounterSet = {
	name: 'Taskmaster',
	difficulty: 0,
	boss: true
}

export const Zola : EncounterSet = {
	name: 'Zola',
	difficulty: 0,
	boss: true
}

export const RedSkull : EncounterSet = {
	name: 'Red Skull',
	difficulty: 0,
	boss: true
}

//Kang
export const Kang : EncounterSet = {
	name: 'Kang',
	difficulty: 0,
	boss: true
}

//Galaxy's Most Wanted
export const Drang : EncounterSet = {
	name: 'Drang',
	difficulty: 0,
	boss: true
}

export const InfiltrateTheMuseum : EncounterSet = {
	name: 'Infiltrate the Museum',
	difficulty: 0,
	boss: true
}

export const EscapeTheMuseum : EncounterSet = {
	name: 'Escape the Museum',
	difficulty: 0,
	boss: true
}

export const Nebula : EncounterSet = {
	name: 'Nebula',
	difficulty: 0,
	boss: true
}

export const RonanTheAccuser : EncounterSet = {
	name: 'Ronan the Accuser',
	difficulty: 0,
	boss: true
}

//Non boss bellow
/**********************************/

export const BombScare : EncounterSet = {
	name: 'Bomb Scare',
	difficulty: DF_ES_EASY,
	boss: false
}

export const MastersOfEvil : EncounterSet = {
	name: 'Masters of Evil',
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const UnderAttack : EncounterSet = {
	name: 'Under Attack',
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const TheDoomsdayChair : EncounterSet = {
	name: 'The Doomsday Chair',
	difficulty: DF_ES_HARD - 1,
	boss: false
}

export const Expert : EncounterSet = {
	name: 'Expert',
	difficulty: DF_ES_MEDIUM + 1,
	boss: false,
	dontCount: true
}

export const LegionOfHydra : EncounterSet = {
	name: 'Legion of Hydra',
	difficulty: DF_ES_HARD - 1,
	boss: false
}

export const GoblinGimmicks : EncounterSet = {
	name: 'Goblin Gimmicks',
	difficulty: DF_ES_HARD - 1,
	boss: false
}

export const AMessOfThings : EncounterSet = {
	name: 'A Mess Of Things',
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const PowerDrain : EncounterSet = {
	name: 'Power Drain',
	difficulty: DF_ES_MEDIUM - 1,
	boss: false
}

export const RunningInterference : EncounterSet = {
	name: 'Running Interference',
	difficulty: DF_ES_MEDIUM + 1,
	boss: false
}

export const HydraAssault : EncounterSet = {
	name: "Hydra Assault",
	difficulty: DF_ES_EASY,
	boss: false
}

export const WeaponMaster : EncounterSet = {
	name: "Weapon Master",
	difficulty: DF_ES_EASY,
	boss: false
}

export const HydraPatrol : EncounterSet = {
	name: "Hydra Patrol",
	difficulty: DF_ES_EASY,
	boss: false
}

export const ExperimentalWeapons : EncounterSet = {
	name: "Experimental Weapons",
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const Anachronauts: EncounterSet = {
	name: "Anachronauts",
	difficulty: DF_ES_MEDIUM + 1,
	boss: false
}

export const MasterOfTime: EncounterSet = {
	name: "Master of Time",
	difficulty: DF_ES_HARD - 1,
	boss: false
}

export const Temporal: EncounterSet = {
	name: "Temporal",
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const BandOfBadoon: EncounterSet = {
	name: "Band Of Badoon",
	difficulty: DF_ES_MEDIUM - 1,
	boss: false
}

export const GalacticArtefacts: EncounterSet = {
	name: "Galactic Artefacts",
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const KreeMilitants: EncounterSet = {
	name: "Kree Militants",
	difficulty: DF_ES_MEDIUM + 1,
	boss: false
}

export const MenagerieMedley: EncounterSet = {
	name: "Menagerie Medley",
	difficulty: DF_ES_HARD - 1,
	boss: false
}

export const SpacePirates: EncounterSet = {
	name: "Space Pirates",
	difficulty: DF_ES_HARD,
	boss: false
}

export const BadoonHeadhunter: EncounterSet = {
	name: "Badoon Headhunter",
	difficulty: DF_ES_HARD,
	boss: false
}

export const ShipCommand: EncounterSet = {
	name: "Ship Command",
	difficulty: DF_ES_MEDIUM,
	boss: false
}

export const PowerStone: EncounterSet = {
	name: "Power Stone",
	difficulty: DF_ES_MEDIUM + 1,
	boss: false
}

export const EncounterSetsMap : Record<string, EncounterSet> = {
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[Ultron.name]: Ultron,

	[WreckingCrew.name]: WreckingCrew,
	[RiskyBusiness.name]: RiskyBusiness,
	[MutagenFormula.name]: MutagenFormula,
	[Kang.name]: Kang,

	[Crossbones.name]: Crossbones,
	[AbsorbingMan.name]: AbsorbingMan,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,

	[Drang.name]: Drang,
	[InfiltrateTheMuseum.name]: InfiltrateTheMuseum,
	[EscapeTheMuseum.name]: EscapeTheMuseum,
	[Nebula.name]: Nebula,
	[RonanTheAccuser.name]: RonanTheAccuser,

	[Expert.name]: Expert,
	[BombScare.name]: BombScare,
	[MastersOfEvil.name]: MastersOfEvil,
	[UnderAttack.name]: UnderAttack,
	[TheDoomsdayChair.name]: TheDoomsdayChair,
	[LegionOfHydra.name]: LegionOfHydra,

	[GoblinGimmicks.name]: GoblinGimmicks,
	[AMessOfThings.name]: AMessOfThings, 
	[PowerDrain.name]: PowerDrain,
	[RunningInterference.name]: RunningInterference,

	[HydraAssault.name]: HydraAssault,
	[WeaponMaster.name]: WeaponMaster,
	[HydraPatrol.name]: HydraPatrol,
	[ExperimentalWeapons.name]: ExperimentalWeapons,

	[Temporal.name]: Temporal,
	[MasterOfTime.name]: MasterOfTime,
	[Anachronauts.name]: Anachronauts,

	[BandOfBadoon.name]: BandOfBadoon,
	[GalacticArtefacts.name]: GalacticArtefacts,
	[KreeMilitants.name]: KreeMilitants,
	[MenagerieMedley.name]: MenagerieMedley,
	[SpacePirates.name]: SpacePirates,
	[BadoonHeadhunter.name]: BadoonHeadhunter,
	[ShipCommand.name]: ShipCommand,
	[PowerStone.name]: PowerStone,

}

export let EncounterSetsList = Object.keys(EncounterSetsMap).map(key => EncounterSetsMap[key])


EncounterSetsList = EncounterSetsList.sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
