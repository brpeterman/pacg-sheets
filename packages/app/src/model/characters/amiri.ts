import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const ResistanceFighter: Role = {
  name: "Resistance Fighter",
  description: `Barbarians can overthrow any empire, given battleaxes enough and time.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `On your Strength check or your check against a monster, you may bury a card 
      from your hand ({discards}or discards) to add your Fortitude skill. ({remove-scourge}If you do, you 
      may remove 1 of your scourges.`,
      upgrades: ["discards", "remove-scourge"],
    },
    "power-2": {
      description: `Closing your location does not prevent you from exploring ({draw}and after you 
        close your location, you may draw a card) ({heal}and you may heal a card).`,
      upgrades: ["draw", "heal"],
    },
    "power-3": {
      description: `At the end of your turn, you may move ({examine}then examine the top card of your 
        location); any local characters may move with you.`,
      upgrades: ["examine"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When cards would be recharged or discarded to bless your combat check, 
      they may be freely discarded instead.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}When you suffer damage, you may discard from the top of your deck 
      instead of your hand. ({examine}When you suffer damage, you may examine 
      the top 2 cards of your deck.) ({recharge}Then you may recharge any of the 
      examined cards.`,
      upgrades: ["unlock", "examine", "recharge"],
    },
  },
};

const Smashmouth: Role = {
  name: "Smashmouth",
  description: `No plan survives being punched in the face.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `On your Strength check or your check against a monster ({barrier}or a barrier), you 
      may bury a card from your hand ({discards}or discards) to add your Fortitude skill.`,
      upgrades: ["barrier", "discards"],
    },
    "power-2": {
      description: `Closing your location does not prevent you from exploring ({draw}and after you 
        close your location, you may draw a card) ({heal}and you may heal a weapon).`,
      upgrades: ["draw", "heal"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your ({local}or another local character's) Melee combat check, you may 
      reload a weapon to add its level.`,
      upgrades: ["unlock", "local"],
    },
    "role-power-2": {
      description: `{unlock}When a card would be discarded to bless your combat check, it may be 
      recharged instead.`,
      upgrades: ["unlock"],
    },
    "role-power-3": {
      description: `{unlock}When you suffer damage from a bane ({before}before or) after acting, you may 
      recharge a weapon to reduce the damage to 0.`,
      upgrades: ["unlock", "before"],
    },
  },
};

export const Amiri: Character = {
  name: "Amiri",
  race: "Human",
  class: "Barbarian",
  description: `The rugged northern wastes are Amiri's home. Born in 
  a clan of male warriors, Amiri bested them all and was 
  sent on a suicide mission to retrieve a frost giant's 
  sword. With that monstrous weapon in hand, Amiri 
  made it clear that no one should ever underestimate 
  her again.`,

  roles: [ResistanceFighter, Smashmouth],

  hand: {
    count: 4,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: ["Melee Weapon"],

  deck: {
    [CardType.Weapon]: {
      count: 4,
      upgrades: {
        "weapon-1": {
          modifier: 1,
        },
        "weapon-2": {
          modifier: 1,
        },
        "weapon-3": {
          modifier: 1,
        },
      },
    },
    [CardType.Spell]: {
      count: 0,
      upgrades: {},
    },
    [CardType.Armor]: {
      count: 2,
      upgrades: {
        "armor-1": {
          modifier: 1,
        },
      },
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
      count: 2,
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
      count: 4,
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
      die: Die.D12,
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
        "str-4": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "dex-1": {
          modifier: 1,
        },
        "dex-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D8,
      proficiencies: {
        [SkillType.Fortitude]: 1,
      },
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
        "con-4": {
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
      die: Die.D6,
      proficiencies: {
        [SkillType.Survival]: 2,
      },
      upgrades: {
        "wis-1": {
          modifier: 1,
        },
        "wis-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D4,
      proficiencies: {},
      upgrades: {
        "cha-1": {
          modifier: 1,
        },
      },
    },
  ],

  proficiencies: {
    proficiencies: [ProficiencyType.Weapon],
    upgrades: {
      armor: {
        proficiencyType: ProficiencyType.Armor,
      },
    },
  },

  powers: {
    "power-1": {
      description: `On your Strength check or your check against a 
      monster, you may bury a card from your hand 
      ({discards}or discards) to add your Fortitude skill.`,
      upgrades: ["discards"],
    },
    "power-2": {
      description: `Closing your location does not prevent you from 
      exploring ({draw}and after you close your location, 
      you may draw a card).`,
      upgrades: ["draw"],
    },
    "power-3": {
      description: `At the end of your turn, you may move; any 
      local characters may move with you.`,
    },
  },
};
