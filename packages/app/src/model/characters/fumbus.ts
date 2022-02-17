import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const Boomshaker: Role = {
  name: "Boomshaker",
  description: `A situation that is not yet volatile hasn't gotten out of bed yet.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {
    arcane: {
      proficiencyType: ProficiencyType.Arcane,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `On a local combat check ({obstacle-barrier}or a local check to defeat an Obstacle or Trap 
        barrier), you may discard a card ({recharge}or recharge an Alchemical or Attack card) 
        to add 1d4 ({d6}1d6) and the Acid, Fire, or Poison trait.`,
      upgrades: ["obstacle-barrier", "recharge", "d6"],
    },
    "power-2": {
      description: `During recovery, when you would banish an Alchemical boon or an Arcane 
      Attack spell, you may discard it instead. ({recharge}Then you may recharge a new 
      Arcane Attack spell whose level is 0.)`,
      upgrades: ["recharge"],
    },
    "power-3": {
      description: `{unlock}On your check that invokes Acid, Fire, or Poison, add 1d6 ({d8}1d8).`,
      upgrades: ["unlock", "d8"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}At the end of your exploration, draw a card.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}At the end of your turn, if there are more cards in your discards than in 
      your deck, you may bury a random ({any-card}or any) card from your discards 
      to heal 1d4 cards.`,
      upgrades: ["unlock", "any-card"],
    },
  },
};

const Fumbler: Role = {
  name: "Fumbler",
  description: `What does this shiny thing—BANG!`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `On a local combat check ({obstacle-trap}or a local check to defeat an
        Obstacle or Trap barrier) ({local}or any local check), you may discard a card
        ({recharge}or recharge an Alchemical or Attack card) to add 1d4 and the Acid,
        Fire, or Poison trait.`,
      upgrades: ["obstacle-trap", "recharge", "local"],
    },
    "power-2": {
      description: `During recovery, when you would banish an Alchemical boon or an Arcane 
      Attack spell, you may discard it instead. ({recharge}Then you may recharge a new Alchemical item whose level is 0.`,
      upgrades: ["recharge"],
    },
    "power-3": {
      description: `{unlock}On your check that invokes Acid, Fire, or Poison, add 1d6.
      (}multiple}If your check invokes more than 1 of those traits, add another 1d6.)`,
      upgrades: ["unlock", "multiple"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}At the start of your turn, you may remove your scourge
      Poisoned ({dazed-exhausted}or Dazed or Exhausted).`,
      upgrades: ["unlock", "dazed-exhausted"],
    },
    "role-power-2": {
      description: `{unlock}At the start of your check, you may draw a card. If you do not play it by the 
      end of the check, recharge it and suffer the scourge Poisoned.`,
      upgrades: ["unlock"],
    },
    "role-power-3": {
      description: `{unlock}Treat your powers as if the words "Acid, Fire, or Poison" were "Acid, Cold, 
      Electricity, Fire, or Poison."`,
      upgrades: ["unlock"],
    },
  },
};

export const Fumbus: Character = {
  name: "Fumbus",
  race: "Goblin",
  class: "Alchemist",
  description: `If goblins knew how to read, they’d write books about 
  Fumbus, a whizbang fungus alchemist who specializes 
  in potent bombs and miraculous escapes. Despite his 
  best efforts, Fumbus somehow retains every toe and 
  finger he was born with. Attached, even.`,

  roles: [Boomshaker, Fumbler],

  hand: {
    count: 6,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: ["Alchemical Item", "Attack Spell"],

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
      count: 2,
      upgrades: {
        "spell-1": {
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
      count: 6,
      upgrades: {
        "item-1": {
          modifier: 1,
        },
        "item-2": {
          modifier: 1,
        },
        "item-3": {
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
      count: 3,
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
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "str-1": {
          modifier: 1,
        },
        "str-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D10,
      proficiencies: {
        [SkillType.Disable]: 0,
        [SkillType.Ranged]: 1,
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
        "dex-4": {
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
        "con-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D8,
      proficiencies: {
        [SkillType.Craft]: 3,
        [SkillType.Arcane]: 1,
      },
      upgrades: {
        "int-1": {
          modifier: 1,
        },
        "int-2": {
          modifier: 1,
        },
        "int-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D4,
      proficiencies: {},
      upgrades: {
        "wis-1": {
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
    proficiencies: [ProficiencyType.Alchemical],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `On a local combat check ({obstacle-trap}or a local check 
        to defeat an Obstacle or Trap barrier), you may 
        discard a card ({recharge}or recharge an Alchemical 
        or Attack card) to add 1d4 and the Acid, Fire, 
        or Poison trait.`,
      upgrades: ["obstacle-trap", "recharge"],
    },
    "power-2": {
      description: `During recovery, when you would banish an 
      Alchemical boon or an Arcane Attack spell, you may 
      discard it instead.`,
    },
    "power-3": {
      description: `{unlock}On your check that invokes Acid, Fire, or 
      Poison, add 1d6.`,
      upgrades: ["unlock"],
    },
  },
};
