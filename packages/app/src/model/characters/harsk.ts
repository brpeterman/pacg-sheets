import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const Dragonhunter: Role = {
  name: "Dragonhunter",
  description: `Don't be born on his bad side.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-2": {
      description: `On your check that invokes the Axe or Bow trait, add 1d6 ({1d8}1d8); against a 
      Giant ({aberration-dragon}or Aberration or Dragon) monster, add another 1d4 ({2d8}1d8).`,
      upgrades: ["1d8", "aberration-dragon", "2d8"],
    },
    "power-3": {
      description: `At the ({start}start or) end of your turn, you may examine the top card ({take-2}or 2 
        cards) of your location. ({shuffle}Then you may shuffle your location.`,
      upgrades: ["start", "take-2", "shuffle"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you defeat a monster, you may remove 1 of your scourges`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}When a local character fails to defeat a story bane or an Aberration, 
      Dragon, or Giant monster, you may reload it into its location instead of 
      shuffling it ({avenge}or you may avenge by recharging a weapon).`,
      upgrades: ["unlock", "avenge"],
    },
  },
};

const Warden: Role = {
  name: "Warden",
  description: `With bow, with axe, with sharpened stick, a ranger will defend his domain.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `On any combat check, you may recharge a card or reload a weapon to add 1d4 
      ({d6}1d6). ({fail-draw}If the character fails the check, you may draw a card.)`,
      upgrades: ["d6", "fail-draw"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When a character examines a monster at your Wild ({underground}or Underground) 
      location, you may recharge a card to encounter it ({d6}and add 1d6 to your 
      checks against it).`,
      upgrades: ["unlock", "underground", "d6"],
    },
    "role-power-2": {
      description: `{unlock}When you would discard an Axe or Bow card for its power, you may 
      recharge it. ({shuffle}Then you may shuffle your deck.) `,
      upgrades: ["unlock", "shuffle"],
    },
    "role-power-3": {
      description: `{unlock}Gain the skill Divine: Wisdom +2 and you are proficient with Divine."`,
      upgrades: ["unlock"]
    }
  },
};

export const Harsk: Character = {
  name: "Harsk",
  race: "Dwarf",
  class: "Ranger",
  description: `A gruff and unyielding wanderer, Harsk finds simple 
  pleasures far from the stone tunnels of his brethren. 
  With axe in one hand and bow in the other, he stands 
  up to enemies many times his height. The open skies 
  of the world call him to adventure, and he is there 
  to answer.`,

  roles: [Dragonhunter, Warden],

  hand: {
    count: 5,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: [CardType.Weapon],

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
      },
    },
    [CardType.Blessing]: {
      count: 4,
      upgrades: {
        "blessing-1": {
          modifier: 1
        },
        "blessing-2": {
          modifier: 1,
        }
      },
    },
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D10,
      proficiencies: {},
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
      proficiencies: {
        [SkillType.Ranged]: 2,
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
      die: Die.D10,
      proficiencies: {
        [SkillType.Fortitude]: 1
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
      },
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D6,
      proficiencies: {
        [SkillType.Perception]: 2,
        [SkillType.Survival]: 3
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
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `On any combat check, you may recharge a card 
      or reload a weapon to add 1d4 ({d6}1d6).`,
      upgrades: ["d6"],
    },
    "power-2": {
      description: `On your check that invokes the Axe or Bow 
      trait, add 1d6 ({1d8}1d8); 
      against a Giant monster, add another 1d4.`,
      upgrades: ["1d8"]
    },
    "power-3": {
      description: `At the end of your turn, you may examine the 
      top card of your location. ({shuffle}Then, you may 
      shuffle your location.)`,
      upgrades: ["shuffle"],
    },
  },
};
