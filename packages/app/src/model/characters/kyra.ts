import {
  AbilityType,
  Die,
  ProficiencyType,
  SkillType,
  CardType,
  Character,
  Role,
} from "./character";

const Dawnseeker: Role = {
  name: "Dawnseeker",
  description: `Heaven is what you make of it.`,

  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
    "role-hand-2": {
      modifier: 1,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `On a local check against an Outsider or Undead bane ({boon}or against a Divine 
        or Healing boon), add 1d4 ({d6}1d6) and the Magic trait. `,
    },
    "power-2": {
      description: `At the ({turn-start}start or) end of your turn, you may recharge a Divine card to 
      ({cure-scourge}remove a scourge from a local character or) heal a local character a card 
      ({extra-healing}or 1d4 cards).`,
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your check to recharge a Divine non-Attack spell, you automatically 
      succeed. ({shuffle}Then you may shuffle your deck.) `,
    },
    "role-power-2": {
      description: `{unlock}When a local character would suffer a scourge, you may suffer it instead.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "boon",
    },
    {
      powerId: "power-2",
      upgradeId: "turn-start",
    },
    {
      powerId: "power-2",
      upgradeId: "cure-scourge",
    },
    {
      powerId: "power-2",
      upgradeId: "extra-healing",
    },
    {
      powerId: "role-power-1",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-1",
      upgradeId: "shuffle",
    },
    {
      powerId: "role-power-2",
      upgradeId: "unlock",
    },
  ],
};

const Smiter: Role = {
  name: "Smiter",
  description: `"Being smitten" means something different to some people.`,

  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
    "role-hand-2": {
      modifier: 1,
    },
  },

  classPowerOverrides: {
    "power-1": {
      description: `On a local check against an Outsider or Undead ({summoned}or summoned) bane, add 
      1d4 ({d6}1d6) ({d8}1d8) and the Magic trait.`,
    },
    "power-2": {
      description: `At the end of your turn, you may recharge a Divine card to heal a local 
      character a card ({heal-2}or 2 cards)`,
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}After you play a weapon or an Attack spell, you may examine the top card 
      of your deck. If it is a weapon or an Attack spell, you may draw it.`,
    },
    "role-power-2": {
      description: `{unlock}On your check to recharge a Divine Attack spell, you automatically 
      succeed. ({shuffle}Then you may shuffle your deck.)`,
    },
    "role-power-3": {
      description: `{unlock}You may avenge by discarding a blessing; during the encounter, your 
      checks are blessed by the deity Sarenrae.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "summoned",
    },
    {
      powerId: "power-1",
      upgradeId: "d8",
    },
    {
      powerId: "power-2",
      upgradeId: "heal-2",
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
      upgradeId: "shuffle",
    },
    {
      powerId: "role-power-3",
      upgradeId: "unlock",
    },
  ],
};

export const Kyra: Character = {
  name: "Kyra",
  race: "Human",
  class: "Cleric",
  description: `Kyra serves at the behest of the dawn goddess 
  Sarenrae, healing the sick and guarding the weak. 
  Her sword is ready to repel marauders who would 
  disturb the worship of the sun goddess. When the 
  Dawnflower rises over Golarion, Kyra basks in her 
  light.`,

  favoredCards: [CardType.Blessing],

  roles: [Dawnseeker, Smiter],

  handSize: 5,

  deck: {
    [CardType.Weapon]: 2,
    [CardType.Spell]: 4,
    [CardType.Armor]: 1,
    [CardType.Item]: 2,
    [CardType.Ally]: 1,
    [CardType.Blessing]: 5,
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D8,
      proficiencies: {
        [SkillType.Melee]: 2,
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D4,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D6,
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
        [SkillType.Divine]: 3,
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D8,
      proficiencies: {
        [SkillType.Diplomacy]: 1,
      },
    },
  ],

  proficiencies: [ProficiencyType.Armor, ProficiencyType.Divine],

  powers: {
    "power-1": {
      description: `On a local check against an Outsider or Undead 
      bane, add 1d4 ({d6}1d6) and the Magic trait.`,
    },
    "power-2": {
      description: `At the end of your turn, you may recharge a 
      Divine card to heal a local character a card.`,
    },
    "power-3": {
      description: `{unlock}Gain the skills Fortitude: Constitution +2 and 
      Perception: Wisdom +2`,
    },
  },

  deckUpgrades: {
    "weapon-1": {
      cardType: CardType.Weapon,
      modifier: 1,
    },
    "weapon-2": {
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
    "ally-1": {
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
    "str-2": {
      ablilityType: AbilityType.Strength,
      modifier: 1,
    },
    "str-3": {
      ablilityType: AbilityType.Strength,
      modifier: 1,
    },
    "dex-1": {
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

  proficiencyUpgrades: {
    weapon: {
      proficiencyType: ProficiencyType.Weapon,
    },
  },

  powerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "d6",
    },
    {
      powerId: "power-3",
      upgradeId: "unlock",
    },
  ],
};
