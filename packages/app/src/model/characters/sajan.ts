import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  Role,
} from "./character";

const ExiledPadapranja: Role = {
  name: "Exiled Padapranja",
  description: `The goddess Suyuddha teaches anyone who will listen, whether by word 
  or fist.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-3": {
      description: `When you play a blessing on your check, you may recharge it instead of 
      discarding it. ({local}A local character may do so on your check.) `,
      upgrades: ["local"],
    },
    "power-4": {
      description: `When you suffer ({local}or a local character suffers) Combat ({any-damage}or any) damage, 
      reduce it by 1. ({reload}Before you discard cards as damage, you may reload up 
      to 2 cards.)`,
      upgrades: ["local", "any-damage", "reload"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}Gain the skill Melee: Strength +3 and you are proficient with Melee 
      weapons`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}Gain the skill Ranged: Dexterity +3 and you are proficient with Ranged 
      weapons.`,
      upgrades: ["unlock"],
    },
    "role-power-3": {
      description: `{unlock}On your check, you may recharge an item ({boon}or a boon) to reroll a die.`,
      upgrades: ["unlock", "boon"],
    },
  },
};

const IroranDedicant: Role = {
  name: "Iroran Dedicant",
  description: `Knowing yourself means first knowing everything else.`,

  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
    "role-hand-2": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `For your combat check, you may recharge a card to use Acrobatics or Melee + 
      1d6 ({d10-magic}1d10 and add the Magic trait) plus the card's level ({plus-d4}+1d4) and add 
      the Bludgeoning and Melee traits.`,
      upgrades: ["d10-magic", "plus-d4"],
    },
    "power-3": {
      description: `When you play a blessing on your check, you may recharge it instead of 
      discarding it. ({irori}If it is an Irori blessing, you may shuffle it into your deck 
      instead.)`,
      upgrades: ["irori"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your check, if 2 or more of your dice show the same number, add 3.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}On your check, you may reroll 1s ({reroll-2}and 2s).`,
      upgrades: ["unlock", "reroll-2"],
    },
    "role-power-3": {
      description: `{unlock}When you gain a skill feat or card feat, you may additionally erase a feat 
      of that type to gain another feat of that type.`,
      upgrades: ["unlock"],
    },
  },
};

export const Sajan: Character = {
  name: "Sajan",
  race: "Human",
  class: "Monk",
  description: `A member of a disciplined caste of warriors in the 
  service of the knowledge god Irori, Sajan scours the 
  world for his kidnapped sister Sajni, whose martial 
  arts prowess matches his own. He is as comfortable 
  with a tatami mat as a temple sword, or his fists that 
  move with lightning speed.`,

  roles: [ExiledPadapranja, IroranDedicant],

  hand: {
    count: 5,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: [CardType.Blessing],

  deck: {
    [CardType.Weapon]: {
      count: 2,
      upgrades: {
        "weapon-1": {
          modifier: 1,
        },
      },
    },
    [CardType.Spell]: {
      count: 0,
      upgrades: {
        "spell-1": {
          modifier: 1,
        },
        "spell-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Armor]: {
      count: 0,
      upgrades: {},
    },
    [CardType.Item]: {
      count: 3,
      upgrades: {
        "item-1": {
          modifier: 1,
        },
        "item-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Ally]: {
      count: 3,
      upgrades: {
        "ally-1": {
          modifier: 1,
        },
        "ally-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Blessing]: {
      count: 7,
      upgrades: {
        "blessing-1": {
          modifier: 1,
        },
        "blessing-2": {
          modifier: 1,
        },
        "blessing-3": {
          modifier: 1,
        },
      },
    },
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D8,
      proficiencies: {
        [SkillType.Melee]: 1,
      },
      upgrades: {
        "str-1": {
          modifier: 1,
        },
        "str-2": {
          modifier: 1,
        },
        "str-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: {
        [SkillType.Acrobatics]: 2,
      },
      upgrades: {
        "dex-1": {
          modifier: 1,
        },
        "dex-2": {
          modifier: 1,
        },
        "dex-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D6,
      proficiencies: {
        [SkillType.Fortitude]: 2,
      },
      upgrades: {
        "con-1": {
          modifier: 1,
        },
        "con-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "int-1": {
          modifier: 1,
        },
        "int-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D8,
      proficiencies: {
        [SkillType.Perception]: 1,
      },
      upgrades: {
        "wis-1": {
          modifier: 1,
        },
        "wis-2": {
          modifier: 1,
        },
        "wis-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "cha-1": {
          modifier: 1,
        },
        "cha-2": {
          modifier: 1,
        },
      },
    },
  ],

  proficiencies: {
    proficiencies: [],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `For your combat check, you may recharge a card 
      to use Acrobatics or Melee + 1d6 ({d10-magic}1d10 and 
      add the Magic trait) plus the card's level and add 
      the Bludgeoning and Melee traits.`,
      upgrades: ["d10-magic"],
    },
    "power-2": {
      description: `On your combat or Acrobatics check, you may 
      freely play 1 blessing 
      ({2-blessings}or 2 blessings).`,
      upgrades: ["2-blessings"],
    },
    "power-3": {
      description: `When you play a blessing on your check, you 
      may recharge it instead of discarding it.`,
    },
    "power-4": {
      description: `When you suffer Combat ({any-damage}or any) damage, 
      reduce it by 1.`,
      upgrades: ["any-damage"],
    },
  },
};
