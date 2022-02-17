import {
  Character,
  CardType,
  AbilityType,
  Die,
  Role,
  SkillType,
  ProficiencyType,
} from "./character";

const Liberator: Role = {
  name: "Liberator",
  description: `Might as well just leave the front door open.`,

  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
    "role-hand-2": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {},

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your non-combat ({combat}or combat) check at an Urban location, add 1d4.`,
      upgrades: ["unlock", "combat"],
    },
    "role-power-2": {
      description: `{unlock}On your check to acquire, if you are the only local character, you may 
      reroll a die.`,
      upgrades: ["unlock"],
    },
    "role-power-3": {
      description: `{unlock}When you acquire a boon, you may bury ({discard}or discard) it to explore.`,
      upgrades: ["unlock", "discard"],
    },
    "role-power-4": {
      description: `{unlock}When another local character fails to acquire a boon, you may bury 
      ({recharge}or recharge) a card to encounter it.`,
      upgrades: ["unlock", "recharge"],
    },
  },
};

const Waylayer: Role = {
  name: "Waylayer",
  description: `Watch your back... get stabbed in the front.`,

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
      description: `When you encounter a card, if you are the only local character ({not-my-turn}or it is not your 
        turn), you may evade it. ({reload}If you do, you may reload it into its location instead 
        of shuffling it.)`,
      upgrades: ["not-my-turn", "reload"],
    },
    "power-3": {
      description: `On your combat check ({acquire}or on a local check to acquire) ({skills-check}or a local 
        Acrobatics, Disable, or Stealth check), you may discard ({recharge}or recharge) a card 
        to add 1d6 ({d8}1d8).`,
      upgrades: ["acquire", "skills-check", "recharge", "d8"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you encounter a bane, you may recharge a card to ignore the bane's 
      before acting powers.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}On your combat ({non-combat}or non-combat) check at an Underground location, 
      add 1d4.`,
      upgrades: ["unlock", "non-combat"],
    },
    "role-power-3": {
      description: `{unlock}After you explore, you may examine the top card of your location.`,
      upgrades: ["unlock"],
    },
  },
};

export const Merisiel: Character = {
  name: "Merisiel",
  race: "Elf",
  class: "Rogue",
  description: `Merisiel is an adventurous rogue who lets no one limit 
  her experience. She has enough knives to eliminate 
  any number of small problems, choosing when and 
  where to tackle the big ones. She has a simple mantra: 
  If you have a thing she needs, she has a thing she 
  needs.`,

  roles: [Liberator, Waylayer],

  hand: {
    count: 5,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: [CardType.Item, "Knife Weapon"],

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
      },
    },
    [CardType.Spell]: {
      count: 0,
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
      count: 4,
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
      die: Die.D12,
      proficiencies: {
        [SkillType.Acrobatics]: 2,
        [SkillType.Disable]: 2,
        [SkillType.Stealth]: 2,
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
      die: Die.D4,
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
      proficiencies: {},
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
      die: Die.D8,
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
    proficiencies: [ProficiencyType.Weapon],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `When you encounter a card, if you are the only 
      local character ({not-my-turn}or it is not your turn), you 
      may evade it.`,
      upgrades: ["not-my-turn"],
    },
    "power-2": {
      description: `When you would recharge or discard a Knife 
      weapon for its power, you may reload it instead.`,
    },
    "power-3": {
      description: `On your combat check ({acquire}or on a local check 
        to acquire), you may discard ({recharge}or recharge) a 
        card to add 1d6.`,
      upgrades: ["acquire", "recharge"],
    },
  },
};
