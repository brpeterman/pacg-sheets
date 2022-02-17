import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const Busker: Role = {
  name: "Busker",
  description: `From time to time, even the richest of us must sing for our supper.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-1": {
      description: `On a local non-combat check ({another-char}or another local character's combat check), 
      you may recharge ({reload}or reload) a card to add 1d4 ({d6}1d6). `,
      upgrades: ["another-char", "reload", "d6"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you would encounter a bane, another local character may bury a 
      card to encounter it instead.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}On your non-combat check at an Urban location, add 1d4. ({bless}You may 
        additionally recharge a card to bless the check by the deity Shelyn.)`,
      upgrades: ["unlock", "bless"],
    },
    "role-power-3": {
      description: `{unlock}When you suffer damage, you may recharge an ally to reduce it by 
      1 ({reduce-3}3). If you are at an Urban location, you may reload the ally instead.`,
      upgrades: ["unlock", "reduce-3"],
    },
    "role-power-4": {
      description: `{unlock}When another local character fails to acquire an ally, you may encounter 
      it.`,
      upgrades: ["unlock"],
    },
  },
};

const PoetLaureate: Role = {
  name: "Poet Laureate",
  description: `But speak these humble words, and they will echo forever.`,

  handUpgrades: {
    "role-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  classPowerOverrides: {
    "power-2": {
      description: `At the end of your turn, you may discard ({recharge}or recharge) a card to recharge 
      ({shuffle}or to shuffle into your deck) a card from your discards.`,
      upgrades: ["recharge", "shuffle"],
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}At the start of your turn, you may draw a card ({draw-2}or 2 cards).`,
      upgrades: ["unlock", "draw-2"],
    },
    "role-power-2": {
      description: `{unlock}On your ({local}or a local) check, after the roll, you may bury a card from 
      your discards to add 1d4.`,
      upgrades: ["unlock", "local"],
    },
    "role-power-3": {
      description: `{unlock}Before a local character discards cards as damage, you may discard a spell 
      or a blessing to heal that character 2 ({more-healing}1d4+1) cards.`,
      upgrades: ["unlock", "more-healing"],
    },
  },
};

export const Lem: Character = {
  name: "Lem",
  race: "Halfling",
  class: "Bard",
  description: `A silver-tongued adherent of the love goddess Shelyn, 
  Lem weaves anthems to obscure his dark past. Having 
  escaped slavery in Cheliax, he now frequents Varisia's 
  guilds and taverns seeking companions he can 
  accompany. If his stirring music can't save the day, his 
  swift sword will.`,

  roles: [Busker, PoetLaureate],

  hand: {
    count: 6,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  favoredCards: ["Choose 1 card type"],

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
      count: 0,
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
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: {
        [SkillType.Acrobatics]: 1,
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
      },
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D6,
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
      die: Die.D10,
      proficiencies: {
        [SkillType.Arcane]: 1,
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
      ProficiencyType.Arcane,
      ProficiencyType.Divine,
      ProficiencyType.Instrument,
    ],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `On a local non-combat check ({another-char}or another 
        local character's combat check), you may 
        recharge a card to add 1d4 ({d6}1d6).`,
      upgrades: ["another-char", "d6"],
    },
    "power-2": {
      description: `At the end of your turn, you may discard a card 
      to recharge ({shuffle}or to shuffle into your deck) a 
      card from your discards.`,
      upgrades: ["shuffle"],
    },
  },
};
