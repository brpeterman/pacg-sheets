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

  classPowerOverrides: {
    "power-1": {
      description: `For your combat check, you may bury ({discard}or discard) a card or recharge an 
      Animal ally to use Survival + 1d4 ({d6}1d6) plus the card's level and add the 
      Animal and Melee traits.`,
    },
    "power-3": {
      description: `{unlock}On a local check that invokes the Animal trait, add 1d4 ({d6}1d6).`,
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}You may recharge a card to roll d10 instead of your normal Strength, 
      Dexterity, or Constitution die.`,
    },
    "role-power-2": {
      description: `{unlock}You may discard a spell or a blessing to heal an Animal ally ({draw}then you 
        may draw a card).`,
    },
    "role-power-3": {
      description: `{unlock}Gain the skills Acrobatics: Dexterity +2 and Fortitude: Constitution +2.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "d6",
    },
    {
      powerId: "power-3",
      upgradeId: "d6",
    },
    {
      powerId: "role-power-1",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-2",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-2",
      upgradeId: "draw",
    },
    {
      powerId: "role-power-3",
      upgradeId: "unlock",
    },
  ],
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

  classPowerOverrides: {
    "power-3": {
      description: `{unlock}On a local check ({wild}at a Wild location or) that invokes the Animal trait, 
      add 1d4.`,
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you suffer Poison ({cold-fire}or Cold or Fire) ({acid-electricity}or Acid or Electricity) 
      damage, reduce it by 2.`,
    },
    "role-power-2": {
      description: `{unlock}You may recharge an Animal or Plant boon to remove a scourge from a 
      local character.`,
    },
    "role-power-3": {
      description: `{unlock}At the end of your turn, you may move. ({recharge}Then you may recharge any 
        number of cards.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "power-3",
      upgradeId: "wild",
    },
    {
      powerId: "role-power-1",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-1",
      upgradeId: "cold-fire",
    },
    {
      powerId: "role-power-1",
      upgradeId: "acid-electricity",
    },
    {
      powerId: "role-power-2",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-3",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-3",
      upgradeId: "recharge",
    },
  ],
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

  handSize: 5,

  favoredCards: ["Animal Ally"],

  deck: {
    [CardType.Weapon]: 1,
    [CardType.Spell]: 5,
    [CardType.Armor]: 1,
    [CardType.Item]: 1,
    [CardType.Ally]: 5,
    [CardType.Blessing]: 2,
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D4,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D8,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D6,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D10,
      proficiencies: {
        [SkillType.Divine]: 1,
        [SkillType.Perception]: 2,
        [SkillType.Survival]: 3,
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D6,
      proficiencies: {},
    },
  ],

  proficiencies: [ProficiencyType.Divine],

  powers: {
    "power-1": {
      description: `For your combat check, you may bury ({discard}or 
        discard) a card or recharge an Animal ally to use 
        Survival + 1d4 plus the card's level and add the 
        Animal and Melee traits.`,
    },
    "power-2": {
      description: `When you would recharge an Animal ally for 
      its power ({char-power}or for your character power), you 
      may shuffle it into your deck instead.`,
    },
    "power-3": {
      description: `{unlock}On a local check that invokes the Animal 
      trait, add 1d4.`,
    },
  },

  deckUpgrades: {
    "weapon-1": {
      cardType: CardType.Weapon,
      modifier: 1,
    },
    "spell-1": {
      cardType: CardType.Spell,
      modifier: 1,
    },
    "spell-2": {
      cardType: CardType.Spell,
      modifier: 1,
    },
    "armor-1": {
      cardType: CardType.Armor,
      modifier: 1,
    },
    "item-1": {
      cardType: CardType.Item,
      modifier: 1,
    },
    "item-2": {
      cardType: CardType.Item,
      modifier: 1,
    },
    "ally-1": {
      cardType: CardType.Ally,
      modifier: 1,
    },
    "ally-2": {
      cardType: CardType.Ally,
      modifier: 1,
    },
    "blessing-1": {
      cardType: CardType.Blessing,
      modifier: 1,
    },
    "blessing-2": {
      cardType: CardType.Blessing,
      modifier: 1,
    },
  },

  abilityUpgrades: {
    "str-1": {
      ablilityType: AbilityType.Strength,
      modifier: 1,
    },
    "dex-1": {
      ablilityType: AbilityType.Dexterity,
      modifier: 1,
    },
    "dex-2": {
      ablilityType: AbilityType.Dexterity,
      modifier: 1,
    },
    "dex-3": {
      ablilityType: AbilityType.Dexterity,
      modifier: 1,
    },
    "con-1": {
      ablilityType: AbilityType.Constitution,
      modifier: 1,
    },
    "con-2": {
      ablilityType: AbilityType.Constitution,
      modifier: 1,
    },
    "int-1": {
      ablilityType: AbilityType.Intelligence,
      modifier: 1,
    },
    "int-2": {
      ablilityType: AbilityType.Intelligence,
      modifier: 1,
    },
    "wis-1": {
      ablilityType: AbilityType.Wisdom,
      modifier: 1,
    },
    "wis-2": {
      ablilityType: AbilityType.Wisdom,
      modifier: 1,
    },
    "wis-3": {
      ablilityType: AbilityType.Wisdom,
      modifier: 1,
    },
    "wis-4": {
      ablilityType: AbilityType.Wisdom,
      modifier: 1,
    },
    "cha-1": {
      ablilityType: AbilityType.Charisma,
      modifier: 1,
    },
    "cha-2": {
      ablilityType: AbilityType.Charisma,
      modifier: 1,
    },
    "cha-3": {
      ablilityType: AbilityType.Charisma,
      modifier: 1,
    },
  },

  handUpgrades: {
    "class-hand": {
      modifier: 1,
    },
  },

  proficiencyUpgrades: {},

  powerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "discard",
    },
    {
      powerId: "power-2",
      upgradeId: "char-power",
    },
    {
      powerId: "power-3",
      upgradeId: "unlock",
    },
  ],
};
