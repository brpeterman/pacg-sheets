import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const CelestialRunecaster: Role = {
  name: "Celestial Runecaster",
  description: `They cover themselves in tattoos to harness their power. These cannot 
  be hidden.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `For your combat check, you may discard a card ({recharge}or recharge a spell) to use 
      Arcane + 2d4 ({2d6}2d6) plus the card's level and add the Attack, Force ({divine}or 
      Divine), and Magic traits. This counts as playing an Arcane spell.`,
      upgrades: ["recharge", "2d6", "divine"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your blessed check or your check at a Sacred location, you may reroll 
      a die.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}When you suffer Acid or Cold ({electricity-fire}or Electricity or Fire) damage, reduce 
      it by 1.`,
      upgrades: ["unlock", "electricity-fire"],
    },
    "role-power-3": {
      description: `{unlock}At the end of your turn, you may ({examine}examine the top card of any 
        location, then may) move. `,
      upgrades: ["unlock", "examine"],
    },
  },
};

const Dreamweaver: Role = {
  name: "Dreamweaver",
  description: `Nightmares can be woven too.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {},

  rolePowers: {
    "role-power-1": {
      description: `{unlock}At the start of your turn, you may draw up to 2 ({draw-3}3) cards; if you do, 
      recharge that many cards.`,
      upgrades: ["unlock", "draw-3"],
    },
    "role-power-2": {
      description: `{unlock}Gain the skill Perception: Intelligence + 2. On a local check against a barrier, 
      you may recharge a spell ({boon}or boon) to add 1d4.`,
      upgrades: ["unlock", "boon"],
    },
    "role-power-3": {
      description: `{unlock}After your exploration, you may recharge the top 2 cards of your deck 
      ({local}then another local character may recharge the top 2 cards of their 
      deck). `,
      upgrades: ["unlock", "local"],
    },
    "role-power-4": {
      description: `{unlock}After your location is shuffled, you may examine its top card.`,
      upgrades: ["unlock"],
    },
  },
};

export const Seoni: Character = {
  name: "Seoni",
  race: "Human",
  class: "Sorcerer",
  description: `Seoni is a young, natural-born leader, bringing the 
  wisdom of her tribe of nomads to the rest of Golarion. 
  Each of her dozens of tattoos tells a story of her 
  people, many of which are punctuated by the blasts of 
  fire she can summon at a thought. She is youthful, but 
  she knows more than most.`,

  roles: [CelestialRunecaster, Dreamweaver],

  hand: {
    count: 6,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: [CardType.Spell],

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
        "spell-3": {
          modifier: 1,
        },
      },
    },
    [CardType.Armor]: {
      count: 0,
      upgrades: {},
    },
    [CardType.Item]: {
      count: 2,
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
      count: 4,
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
      die: Die.D4,
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
      die: Die.D6,
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
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "con-1": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D8,
      proficiencies: {
        [SkillType.Knowledge]: 1,
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
      die: Die.D12,
      proficiencies: {
        [SkillType.Arcane]: 2,
        [SkillType.Diplomacy]: 2,
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
    proficiencies: [ProficiencyType.Arcane],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `For your combat check, you may discard a card 
      ({recharge}or recharge a spell) to use Arcane + 2d4 
      plus the card's level and add the Attack, Force, 
      and Magic traits. This counts as playing an 
      Arcane spell`,
      upgrades: ["recharge"],
    },
    "power-2": {
      description: `On your check to recharge an Arcane spell 
      ({item}or an Arcane item), you automatically 
      succeed. ({shuffle}You may instead shuffle it into 
      your deck.)`,
      upgrades: ["item", "shuffle"],
    },
  },
};
