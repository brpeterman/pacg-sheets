import {
  AbilityType,
  Die,
  ProficiencyType,
  SkillType,
  CardType,
  Character,
  Role,
} from "./character";

const Dawnseeker: Role = {
  name: "Dawnseeker",
  description: `Heaven is what you make of it.`,

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
      description: `On a local check against an Outsider or Undead bane ({boon}or against a Divine 
        or Healing boon), add 1d4 ({d6}1d6) and the Magic trait. `,
      upgrades: ["boon", "d6"],
    },
    "power-2": {
      description: `At the ({turn-start}start or) end of your turn, you may recharge a Divine card to 
      ({cure-scourge}remove a scourge from a local character or) heal a local character a card 
      ({extra-healing}or 1d4 cards).`,
      upgrades: ["turn-start", "cure-scourge", "extra-healing"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your check to recharge a Divine non-Attack spell, you automatically 
      succeed. ({shuffle}Then you may shuffle your deck.) `,
      upgrades: ["unlock", "shuffle"],
    },
    "role-power-2": {
      description: `{unlock}When a local character would suffer a scourge, you may suffer it instead.`,
      upgrades: ["unlock"],
    },
  },
};

const Smiter: Role = {
  name: "Smiter",
  description: `"Being smitten" means something different to some people.`,

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
      description: `On a local check against an Outsider or Undead ({summoned}or summoned) bane, add 
      1d4 ({d6}1d6) ({d8}1d8) and the Magic trait.`,
      upgrades: ["summoned", "d6", "d8"],
    },
    "power-2": {
      description: `At the end of your turn, you may recharge a Divine card to heal a local 
      character a card ({heal-2}or 2 cards)`,
      upgrades: ["heal-2"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}After you play a weapon or an Attack spell, you may examine the top card 
      of your deck. If it is a weapon or an Attack spell, you may draw it.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}On your check to recharge a Divine Attack spell, you automatically 
      succeed. ({shuffle}Then you may shuffle your deck.)`,
      upgrades: ["unlock", "shuffle"],
    },
    "role-power-3": {
      description: `{unlock}You may avenge by discarding a blessing; during the encounter, your 
      checks are blessed by the deity Sarenrae.`,
      upgrades: ["unlock"],
    },
  },
};

export const Kyra: Character = {
  name: "Kyra",
  race: "Human",
  class: "Cleric",
  description: `Kyra serves at the behest of the dawn goddess 
  Sarenrae, healing the sick and guarding the weak. 
  Her sword is ready to repel marauders who would 
  disturb the worship of the sun goddess. When the 
  Dawnflower rises over Golarion, Kyra basks in her 
  light.`,

  favoredCards: [CardType.Blessing],

  roles: [Dawnseeker, Smiter],

  hand: {
    count: 5,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  deck: {
    [CardType.Weapon]: {
      count: 2,
      upgrades: {
        "weapon-1": {
          modifier: 1,
        },
        "weapon-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Spell]: {
      count: 4,
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
      count: 1,
      upgrades: {
        "armor-1": {
          modifier: 1,
        },
      },
    },
    [CardType.Item]: {
      count: 2,
      upgrades: {
        "item-1": {
          modifier: 1,
        },
      },
    },
    [CardType.Ally]: {
      count: 1,
      upgrades: {
        "ally-1": {
          modifier: 1,
        },
      },
    },
    [CardType.Blessing]: {
      count: 5,
      upgrades: {
        "blessing-1": {
          modifier: 1,
        },
        "blessing-2": {
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
        [SkillType.Melee]: 2,
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
      die: Die.D4,
      proficiencies: {},
      upgrades: {
        "dex-1": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D6,
      proficiencies: {},
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
      die: Die.D10,
      proficiencies: {
        [SkillType.Divine]: 3,
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
        "wis-4": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D8,
      proficiencies: {
        [SkillType.Diplomacy]: 1,
      },
      upgrades: {
        "cha-1": {
          modifier: 1,
        },
        "cha-2": {
          modifier: 1,
        },
        "cha-3": {
          modifier: 1,
        },
      },
    },
  ],

  proficiencies: {
    proficiencies: [ProficiencyType.Armor, ProficiencyType.Divine],
    upgrades: {
      [ProficiencyType.Weapon]: {
        proficiencyType: ProficiencyType.Weapon,
      },
    },
  },

  powers: {
    "power-1": {
      description: `On a local check against an Outsider or Undead 
      bane, add 1d4 ({d6}1d6) and the Magic trait.`,
      upgrades: ["d6"],
    },
    "power-2": {
      description: `At the end of your turn, you may recharge a 
      Divine card to heal a local character a card.`,
    },
    "power-3": {
      description: `{unlock}Gain the skills Fortitude: Constitution +2 and 
      Perception: Wisdom +2`,
      upgrades: ["unlock"],
    },
  },
};
