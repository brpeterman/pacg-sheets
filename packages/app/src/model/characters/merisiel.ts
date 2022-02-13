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

  classPowerOverrides: {},

  rolePowers: {
    "role-power-1": {
      description: `{unlock}On your non-combat ({combat}or combat) check at an Urban location, add 1d4.`,
    },
    "role-power-2": {
      description: `{unlock}On your check to acquire, if you are the only local character, you may 
      reroll a die.`,
    },
    "role-power-3": {
      description: `{unlock}When you acquire a boon, you may bury ({discard}or discard) it to explore.`,
    },
    "role-power-4": {
      description: `{unlock}When another local character fails to acquire a boon, you may bury 
      ({recharge}or recharge) a card to encounter it.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "role-power-1",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-1",
      upgradeId: "combat",
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
      upgradeId: "discard",
    },
    {
      powerId: "role-power-4",
      upgradeId: "unlock",
    },
    {
      powerId: "role-power-4",
      upgradeId: "recharge",
    },
  ],
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

  classPowerOverrides: {
    "power-1": {
      description: `When you encounter a card, if you are the only local character ({not-my-turn}or it is not your 
        turn), you may evade it. ({reload}If you do, you may reload it into its location instead 
        of shuffling it.)`,
    },
    "power-3": {
      description: `On your combat check ({acquire}or on a local check to acquire) ({skills-check}or a local 
        Acrobatics, Disable, or Stealth check), you may discard ({recharge}or recharge) a card 
        to add 1d6 ({d8}1d8).`,
    },
  },

  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you encounter a bane, you may recharge a card to ignore the bane's 
      before acting powers.`,
    },
    "role-power-2": {
      description: `{unlock}On your combat ({non-combat}or non-combat) check at an Underground location, 
      add 1d4.`,
    },
    "role-power-3": {
      description: `{unlock}After you explore, you may examine the top card of your location.`,
    },
  },

  rolePowerUpgrades: [
    {
      powerId: "power-1",
      upgradeId: "reload",
    },
    {
      powerId: "power-3",
      upgradeId: "skills-check",
    },
    {
      powerId: "power-3",
      upgradeId: "d8",
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
      upgradeId: "non-combat",
    },
    {
      powerId: "role-power-3",
      upgradeId: "unlock",
    },
  ],
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

  handSize: 5,

  favoredCards: [CardType.Item, "Knife Weapon"],

  deck: {
    [CardType.Weapon]: 4,
    [CardType.Spell]: 0,
    [CardType.Armor]: 1,
    [CardType.Item]: 4,
    [CardType.Ally]: 3,
    [CardType.Blessing]: 3,
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D6,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D12,
      proficiencies: {
        [SkillType.Acrobatics]: 2,
        [SkillType.Disable]: 2,
        [SkillType.Stealth]: 2,
      },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D6,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D4,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D6,
      proficiencies: {},
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D8,
      proficiencies: {},
    },
  ],

  proficiencies: [ProficiencyType.Weapon],

  powers: {
    "power-1": {
      description: `When you encounter a card, if you are the only 
      local character ({not-my-turn}or it is not your turn), you 
      may evade it.`,
    },
    "power-2": {
      description: `When you would recharge or discard a Knife 
      weapon for its power, you may reload it instead.`,
    },
    "power-3": {
      description: `On your combat check ({acquire}or on a local check 
        to acquire), you may discard ({recharge}or recharge) a 
        card to add 1d6.`,
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
    "str-2": {
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
    "dex-4": {
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
      upgradeId: "not-my-turn",
    },
    {
      powerId: "power-3",
      upgradeId: "acquire",
    },
    {
      powerId: "power-3",
      upgradeId: "recharge",
    },
  ],
};
