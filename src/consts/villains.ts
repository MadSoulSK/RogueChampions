import {Villain} from "@/types/villain";
import {EncounterSetsMap} from "@/consts/encountersets";
import {ExpansionsMap} from "@/consts/expansions";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_MED} from "@/consts/difficulty";

// BASE GAME
export const Rhino : Villain = {
	name: 'Rhino',
	key: 'Rhino',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Rhino.name],
	additionalSets: 1
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'Klaw',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap.Klaw.name],
	additionalSets: 1
}

export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_LARGE,
	key: 'Ultron',
	sets: [EncounterSetsMap.Ultron.name],
	additionalSets: 1
}

// VILLAIN PACKS
export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap["Wrecking Crew"].name],
	additionalSets: 0,
}

export const GreenGoblin : Villain = {
	name: 'Mutagen Formula',
	key: 'MutagenFormula',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap["Mutagen Formula"].name],
	additionalSets: 1
}

export const NormanOsborn : Villain = {
	name: 'Risky Business',
	key: 'RiskyBusiness',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap["Risky Business"].name],
	additionalSets: 1
}

export const Kang : Villain = {
	name: 'Kang',
	key: 'Kang',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap["Kang"].name],
	additionalSets: 1 
}

// THE RISE OF RED SKULL
export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Crossbones.name, EncounterSetsMap["Experimental Weapons"].name],
	additionalSets: 3
}

export const AbsorbingMan : Villain = {
	name: 'Absorbing Man',
	key: 'AbsorbingMan',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap["Absorbing Man"].name],
	additionalSets: 1
}

export const Taskmaster : Villain = {
	name: 'Taskmaster',
	key: 'Taskmaster',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Taskmaster.name, EncounterSetsMap["Hydra Patrol"].name],
	additionalSets: 1
}

export const Zola : Villain = {
	name: 'Zola',
	key: 'Zola',
	difficulty: DF_BASE + DF_STEP_MED - 1,
	sets: [EncounterSetsMap.Zola.name],
	additionalSets: 1
}

export const RedSkull : Villain = {
	name: 'Red Skull',
	key: 'RedSkull',
	difficulty: DF_BASE + DF_STEP_LARGE - 1,
	sets: [EncounterSetsMap["Red Skull"].name] ,
	additionalSets: 2
}

//GALAXY'S MOST WANTED
export const Drang : Villain = {
	name: 'Drang',
	key: 'Drang',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap["Drang"].name, EncounterSetsMap["Ship Command"].name] ,
	additionalSets: 1
}

export const InfiltrateTheMuseum : Villain = {
	name: 'Infiltrate the Museum',
	key: 'InfiltrateTheMuseum',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap["Infiltrate the Museum"].name, EncounterSetsMap["Galactic Artefacts"].name] ,
	additionalSets: 1
}
console.info(5)
export const EscapeTheMuseum : Villain = {
	name: 'Escape the Museum',
	key: 'EscapeTheMuseum',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap["Escape the Museum"].name, EncounterSetsMap["Galactic Artefacts"].name, EncounterSetsMap["Ship Command"].name] ,
	additionalSets: 1
}

export const Nebula : Villain = {
	name: 'Nebula',
	key: 'Nebula',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [EncounterSetsMap.Nebula.name, EncounterSetsMap["Power Stone"].name, EncounterSetsMap["Ship Command"].name] ,
	additionalSets: 1
}
console.info(EncounterSetsMap["Power Stone"])
export const RonanTheAccuser : Villain = {
	name: 'Ronan the Accuser',
	key: 'RonanTheAccuser',
	difficulty: DF_BASE + DF_STEP_LARGE + 2,
	sets: [EncounterSetsMap["Ronan the Accuser"].name, EncounterSetsMap["Power Stone"].name, EncounterSetsMap["Ship Command"].name] ,
	additionalSets: 1
}

export const VillainsMap : Record<string, Villain> = {
	[Ultron.name]: Ultron,
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,

	[WreckingCrew.name]: WreckingCrew,
	[GreenGoblin.name]: GreenGoblin,
	[NormanOsborn.name]: NormanOsborn,
	[Kang.name]: Kang,

	[Crossbones.name] : Crossbones,
	[AbsorbingMan.name] : AbsorbingMan,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,

	[Drang.name] : Drang,
	[InfiltrateTheMuseum.name] : InfiltrateTheMuseum,
	[EscapeTheMuseum.name]: EscapeTheMuseum,
	[Nebula.name]: Nebula,
	[RonanTheAccuser.name]: RonanTheAccuser
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

