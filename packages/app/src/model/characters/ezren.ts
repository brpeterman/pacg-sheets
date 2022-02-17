import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const MysticDiviner: Role = {
  name: "Mystic Diviner",
  description: `Knowing all predictable outcomes doesn't guarantee success, but it does 
  guarantee a predicted outcome`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `At the start of your turn, you may examine the top card of your deck; if it is a 
      spell ({card-type}or a card of a type you choose before examining), you may draw it. 
      ({recharge}Then you may recharge the top card of your deck.)`,
      upgrades: ["card-type", "recharge"],
    },
    "power-2": {
      description: `On your ({any-turn}or any) turn, you may recharge a spell to examine the top card 
      of your ({any-location}or any) location. If you do, you may discard ({recharge}or recharge) a 
      card to explore.`,
      upgrades: ["any-turn", "any-location", "recharge"],
    },
    "power-3": {
      description: `On a local check against a Magic ({trigger}or Trigger) card, you may recharge a card 
      to add 1d4 ({d6}1d6).`,
      upgrades: ["trigger", "d6"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you examine the top card of a location or deck, you may examine 
      the top 2 cards instead.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}Gain the skill Perception: Wisdom +2. ({reroll}On your non-combat check, you 
        may discard a card to reroll a die.`,
      upgrades: ["unlock", "reroll"],
    },
  },
};

const WizenedExplorer: Role = {
  name: "Wizened Explorer",
  description: `Age and experience beats youth and courage with a sturdy walking stick`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {
    alchemical: {
      proficiencyType: ProficiencyType.Alchemical,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `At the start of your turn, you may examine the top card of your deck; if it is 
      a spell ({ally}or an ally), you may draw it. ({recharge}Then you may recharge the top 
      card of your deck.`,
      upgrades: ["ally", "recharge"],
    },
    "power-2": {
      description: `On your turn, you may recharge a spell to examine the top card of your 
      location. If you do, you may discard ({recharge}or recharge) ({reload}or reload) a card 
      to explore.`,
      upgrades: ["recharge", "reload"],
    },
    "power-3": {
      description: `On a local check against a Magic card ({non-divine}or against a non-Divine boon), you 
      may recharge a card to add 1d4 ({d6}1d6).`,
      upgrades: ["non-divine", "d6"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your non-Intelligence check, you may discard a spell to add your 
      Intelligence.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}When you defeat ({acquire}or acquire) a card using a non-combat check, you 
      may draw a card.`,
      upgrades: ["unlock", "acquire"],
    },
  },
};

export const Ezren: Character = {
  name: "Ezren",
  race: "Human",
  class: "Wizard",
  description: `An atheist in a world overrun by gods, the scholar 
  Ezren came to wizarding later in life than most. 
  Self-taught and knowledgeable, he crafts arcane 
  power with a sculptor's skill. His grizzled mein belies 
  a childlike wonder at the world of adventure before 
  him`,

  roles: [MysticDiviner, WizenedExplorer],

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
      count: 7,
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
        "item-3": {
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
      count: 0,
      upgrades: {},
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
      die: Die.D4,
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
      die: Die.D12,
      proficiencies: {
        [SkillType.Arcane]: 2,
        [SkillType.Craft]: 1,
        [SkillType.Knowledge]: 2,
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
        "int-4": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D8,
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
    proficiencies: [ProficiencyType.Arcane],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `At the start of your turn, you may examine the 
      top card of your deck; if it is a spell, you may 
      draw it. ({recharge}Then you may recharge the top 
      card of your deck.)`,
      upgrades: ["recharge"],
    },
    "power-2": {
      description: `On your turn, you may recharge a spell to 
      examine the top card of your location. If you 
      do, you may discard ({recharge}or recharge) a card 
      to explore.`,
      upgrades: ["recharge"],
    },
    "power-3": {
      description: `On a local check against a Magic card, you may 
      recharge a card to add 1d4 ({d6}1d6)`,
      upgrades: ["d6"],
    },
  },
};
