import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const HonorShield: Role = {
  name: "Honor Shield",
  description: `People are defined not by the help they need but by the help they get.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-2": {
      description: `When you attempt a check before acting ({non-combat}or a non-combat check against a 
        monster), you may use Divine instead of any listed skill. `,
      upgrades: ["non-combat"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you encounter a boon, you may reveal a Shield armor to evade it 
      ({reload}and you may reload it into its location instead of shuffling it).`,
      upgrades: ["unlock", "reload"],
    },
    "role-power-2": {
      description: `{unlock}On your ({local}or a local) non-combat check against a bane, you may 
      recharge a weapon or a Shield armor to bless the check by the deity 
      Iomedae. `,
      upgrades: ["unlock", "local"],
    },
    "role-power-3": {
      description: `{unlock}When a local character would suffer a scourge ({damage}or damage), you may 
      recharge a card or reveal a Shield armor to suffer it instead.`,
      upgrades: ["unlock", "damage"],
    },
  },
};

const JusticWarrior: Role = {
  name: "Justice Warrior",
  description: `Justice delayed is justice denied.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-2": {
      description: `On a local check, you may discard an armor or the top card of your deck to 
      add 1d4 ({d6}1d6) ({d8}1d8) and the Magic trait. ({recharge}If you would discard an 
      armor or a blessing for this power, you may recharge it instead.) ({recharge-spell}You may 
      also do so if you would discard a spell for this power.`,
      upgrades: ["recharge", "d6", "d8", "recharge-spell"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your check against an Aberration, Outsider, or Undead bane, ({d8}add 
        1d8 and) when you would discard a weapon or an armor for its power, you 
        may recharge it instead.`,
      upgrades: ["unlock", "d8"],
    },
    "role-power-2": {
      description: `{unlock}On your ({local}or a local) check against a bane, you may discard a weapon or 
      armor to bless the check by the deity Iomedae.`,
      upgrades: ["unlock", "local"],
    },
    "role-power-3": {
      description: `{unlock}You may avenge by recharging an armor or a spell ({reveal}or revealing a 
        weapon); on your checks this encounter, you may add 1d4 and the Fire 
        trait.`,
      upgrades: ["unlock", "reveal"],
    },
  },
};

export const Seelah: Character = {
  name: "Seelah",
  race: "Human",
  class: "Paladin",
  description: `Few would believe this tower of might and resolve 
  was once a thieving urchin. The young Seelah was 
  taken in by a cathedral of paladins and has become a 
  devotee of the honor goddess Iomedae. She has left 
  the streets behind, but she'll never lose sight of the 
  downtrodden.`,

  roles: [HonorShield, JusticWarrior],

  hand: {
    count: 4,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: [CardType.Weapon, CardType.Armor],

  deck: {
    [CardType.Weapon]: {
      count: 3,
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
      count: 3,
      upgrades: {
        "armor-1": {
          modifier: 1,
        },
        "armor-2": {
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
      },
    },
    [CardType.Ally]: {
      count: 2,
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
      die: Die.D10,
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
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "dex-1": {
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
        "wis-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D8,
      proficiencies: {
        [SkillType.Diplomacy]: 3,
        [SkillType.Divine]: 1,
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
        "cha-4": {
          modifier: 1,
        },
      },
    },
  ],

  proficiencies: {
    proficiencies: [
      ProficiencyType.Armor,
      ProficiencyType.Divine,
      ProficiencyType.Weapon,
    ],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `When you attempt a check before acting, you 
      may use Divine instead of any listed skill.`,
    },
    "power-2": {
      description: `On a local check, you may discard an armor or 
      the top card of your deck to add 1d4 ({d6}1d6) 
      and the Magic trait. ({recharge}If you would discard 
      an armor or a blessing for this power, you may 
      recharge it instead.) 
      ({recharge-spell}You may also do so if you would discard a 
      spell for this power.)`,
      upgrades: ["d6", "recharge", "recharge-spell"],
    },
  },
};
