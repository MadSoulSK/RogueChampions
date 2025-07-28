import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {StarLord as Expansion} from "@/consts/expansions";
import {StarLord} from "@/consts/heroes";
import { Upgrade } from "@/types/upgrade";

export const BadBoy = generateUpgradeCard({
    name: 'The one your Mother Warned you About',
    card: "Bad Boy",
    requires: Expansion.name,
    requiresHero: StarLord.name,
    category: "Heroic",
    article: 'the',
})

export const JetBoots = generateExhaustedCardInPlay({
    name: 'Thief\'s Lucks',
    card: "Jet Boots",
    requires: Expansion.name,
    requiresHero: StarLord.name,
    category: "Heroic",
    article: '',
    pronoun: "it"
})

export const LeaderOfTheGuardians = generateUpgradeCard({
    name: 'Gets Paid First',
    card: "Leader of the Guardians",
    requires: Expansion.name,
    requiresHero: StarLord.name,
    category: "Heroic",
    article: 'the',
})

export const StarLordsHelmet = generateUpgradeCard({
    name: 'Troublemaker\'s Thought',
    card: "Star-Lord's Helmet",
    requires: Expansion.name,
    requiresHero: StarLord.name,
    category: "Heroic",
    article: 'the',
})

export const ElementGun : any = {
        name: 'Discount for Elements',
        level: 1,
        maxLevel: 2,
        requires: Expansion.name,
        requiresHero: StarLord.name,

        description () {
            return "Reduce the resource cost of 'Elemental gun' by " + this.level.toString()
        },

        levelUpMessage ()
        {
            return "Increase the resource cost reduction to " + this.level + 1
        }
}

export const Upgrades : Upgrade[] = [
    BadBoy,
    JetBoots,
    LeaderOfTheGuardians,
    StarLordsHelmet,
    ElementGun
]