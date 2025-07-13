import * as EncounterSets from "@/consts/encountersets"
import {Expansion} from "@/types/expansion";

export const CoreSet : Expansion = {
	name: 'Core Set',
	encounterSets: [
		EncounterSets.TheDoomsdayChair.name,
		EncounterSets.MastersOfEvil.name,
		EncounterSets.LegionOfHydra.name,
		EncounterSets.BombScare.name,
		EncounterSets.Klaw.name,
		EncounterSets.Rhino.name,
		EncounterSets.Ultron.name
	]
}

export const RiseOfRedSkull : Expansion = {
	name: 'The Rise of Red Skull',
	encounterSets: [
		EncounterSets.HydraAssault.name,
		EncounterSets.HydraPatrol.name,
		EncounterSets.WeaponMaster.name,
		EncounterSets.ExperimentalWeapons.name,

		EncounterSets.Crossbones.name,
		EncounterSets.AbsorbingMan.name,
		EncounterSets.Taskmaster.name,
		EncounterSets.Zola.name,
		EncounterSets.RedSkull.name
	]
}

export const GalaxysMostWanted : Expansion = {
	name: 'Galaxy\'s Most Wanted',
	encounterSets: [
		EncounterSets.Drang.name,
		EncounterSets.InfiltrateTheMuseum.name,
		EncounterSets.EscapeTheMuseum.name,
		EncounterSets.Nebula.name,
		EncounterSets.RonanTheAccuser.name,
		EncounterSets.BandOfBadoon.name,
		EncounterSets.BadoonHeadhunter.name,
		EncounterSets.SpacePirates.name,
		EncounterSets.MenagerieMedley.name,
		EncounterSets.KreeMilitants.name,
		EncounterSets.PowerStone.name,
		EncounterSets.GalacticArtefacts.name,
		EncounterSets.ShipCommand.name
	]
}

// Scenarios 
export const GreenGoblin : Expansion = {
	name: 'Green Goblin',
	encounterSets: [
		EncounterSets.GoblinGimmicks.name,
		EncounterSets.RiskyBusiness.name,
		EncounterSets.MutagenFormula.name,
	]
}
export const WreckingCrew : Expansion = {
	name: 'Wrecking Crew',
	encounterSets: ['Wrecking Crew']
}

export const Kang : Expansion = {
	name: 'The Once and Future Kang',
	encounterSets: [
		EncounterSets.Temporal.name,
		EncounterSets.MasterOfTime.name,
		EncounterSets.Anachronauts.name,
		EncounterSets.Kang.name
	]
}


// Good guys
export const CaptainAmerica : Expansion = {
	name: 'Captain America',
	encounterSets: [],
}

export const BlackWidow : Expansion = {
	name: 'Black Widow',
	encounterSets: [],
}

export const Thor : Expansion = {
	name: 'Thor',
	encounterSets: [],
}

export const ScarletWitch : Expansion = {
	name: 'Scarlet Witch',
	encounterSets: [],
}

export const MsMarvel : Expansion = {
	name: 'Ms. Marvel',
	encounterSets: [],
}

export const Hulk : Expansion = {
	name: 'Hulk',
	encounterSets: [],
}

export const DoctorStrange : Expansion = {
	name: 'Doctor Strange',
	encounterSets: [],
}

export const AntMan : Expansion = {
	name: 'Ant-Man',
	encounterSets: [],
}

export const Wasp : Expansion = {
	name: 'Wasp',
	encounterSets: [],
}

export const Quicksilver: Expansion = {
	name: 'Quicksilver',
	encounterSets: [],
}

export const ExpansionsMap : Record<string, Expansion> = {
	// Expansions
	[CoreSet.name]: CoreSet,
	[RiseOfRedSkull.name]: RiseOfRedSkull,
	[GalaxysMostWanted.name]: GalaxysMostWanted,

	// Villain packs
	[GreenGoblin.name]: GreenGoblin,
	[WreckingCrew.name]: WreckingCrew,
	[Kang.name]: Kang,

	// Hero packs
	[AntMan.name]: AntMan,
	[BlackWidow.name]: BlackWidow,
	[CaptainAmerica.name]: CaptainAmerica,
	[DoctorStrange.name]: DoctorStrange,
	[Hulk.name]: Hulk,
	[Thor.name]: Thor,
	[MsMarvel.name]: MsMarvel,
	[ScarletWitch.name]: ScarletWitch,
	[Wasp.name]: Wasp,
	[Quicksilver.name]: Quicksilver
}

export const ExpansionsList = Object.keys(ExpansionsMap).map(key => ExpansionsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

