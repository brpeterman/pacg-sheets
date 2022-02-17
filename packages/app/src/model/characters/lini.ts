import {
  Character,
  CardType,
  AbilityType,
  Die,
  SkillType,
  ProficiencyType,
  Role,
} from "./character";

const WildWhisperer: Role = {
  name: "Wild Whisperer",
  description: `Everything talks, if you know its language.`,

  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
    "role-hand-2": {
      modifier: 1,
    },
    "role-hand-3": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `For your combat check, you may bury ({discard}or discard) a card or recharge an 
      Animal ally to use Survival + 1d4 ({d6}1d6) plus the card's level and add the 
      Animal and Melee traits.`,
      upgrades: ["discard", "d6"],
    },
    "power-3": {
      description: `{unlock}On a local check that invokes the Animal trait, add 1d4 ({d6}1d6).`,
      upgrades: ["unlock", "d6"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}You may recharge a card to roll d10 instead of your normal Strength, 
      Dexterity, or Constitution die.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}You may discard a spell or a blessing to heal an Animal ally ({draw}then you 
        may draw a card).`,
      upgrades: ["unlock", "draw"],
    },
    "role-power-3": {
      description: `{unlock}Gain the skills Acrobatics: Dexterity +2 and Fortitude: Constitution +2.`,
      upgrades: ["unlock"],
    },
  },
};

const WorldWalker: Role = {
  name: "World Walker",
  description: `The world is her cloister.`,

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
    "power-3": {
      description: `{unlock}On a local check ({wild}at a Wild location or) that invokes the Animal trait, 
      add 1d4.`,
      upgrades: ["unlock", "wild"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you suffer Poison ({cold-fire}or Cold or Fire) ({acid-electricity}or Acid or Electricity) 
      damage, reduce it by 2.`,
      upgrades: ["unlock", "cold-fire", "acid-electricity"],
    },
    "role-power-2": {
      description: `{unlock}You may recharge an Animal or Plant boon to remove a scourge from a 
      local character.`,
      upgrades: ["unlock"],
    },
    "role-power-3": {
      description: `{unlock}At the end of your turn, you may move. ({recharge}Then you may recharge any 
        number of cards.`,
      upgrades: ["unlock", "recharge"],
    },
  },
};

export const Lini: Character = {
  name: "Lini",
  race: "Gnome",
  class: "Druid",
  description: `Lini is a friend to all the savage beasts of the forest, 
  soothing their hungers and redirecting their baser 
  instincts. With her snow leopard Droogami nearby, 
  she collects sticks from every forest she has visited, 
  a wooden road map of her travels; should she settle 
  down, they may become a house.`,

  roles: [WildWhisperer, WorldWalker],

  hand: {
    count: 5,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: ["Animal Ally"],

  deck: {
    [CardType.Weapon]: {
      count: 1,
      upgrades: {
        "weapon-1": {
          modifier: 1,
        },
      },
    },
    [CardType.Spell]: {
      count: 5,
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
      count: 1,
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
      count: 5,
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
      count: 2,
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
      die: Die.D4,
      proficiencies: {},
      upgrades: {
        "str-1": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: {},
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
      die: Die.D8,
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
        [SkillType.Divine]: 1,
        [SkillType.Perception]: 2,
        [SkillType.Survival]: 3,
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
      die: Die.D6,
      proficiencies: {},
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
    proficiencies: [ProficiencyType.Divine],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `For your combat check, you may bury ({discard}or 
        discard) a card or recharge an Animal ally to use 
        Survival + 1d4 plus the card's level and add the 
        Animal and Melee traits.`,
      upgrades: ["discard"],
    },
    "power-2": {
      description: `When you would recharge an Animal ally for 
      its power ({char-power}or for your character power), you 
      may shuffle it into your deck instead.`,
      upgrades: ["char-power"],
    },
    "power-3": {
      description: `{unlock}On a local check that invokes the Animal 
      trait, add 1d4.`,
      upgrades: ["unlock"],
    },
  },
};
