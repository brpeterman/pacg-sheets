import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from ".";

const Compatriot: Role = {
  name: "Compatriot",
  description: `"Sword and board" often leads to "room and board."`,
  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
  },
  classPowerOverrides: [
    {
      powerId: "power-1",
      description: `On a local combat ({diplomacy}or your Diplomacy) check,
      you may reload or recharge a weapon or an armor ({ally}or an ally) to add 1d4 ({1d6}1d6) ({1d8}1d8).`,
    },
    {
      powerId: "power-2",
      description: `At the end of your turn, you may recharge
      a weapon or an armor ({ally}or an ally) from your hand or discards.`,
    },
  ],
  rolePowers: [
    {
      powerId: "role-power-1",
      description: `{unlock}When you would recharge or discard a Shield armor for its power, you 
      may reveal it instead. ({reduction}When a local character suffers damage, you 
      may recharge a Shield armor to reduce it by 2.)`,
    },
    {
      powerId: "role-power-2",
      description: `{unlock}When another local character would acquire an ally, you may acquire it 
      instead. ({draw}When a local character fails to acquire an ally, you may bury a 
      card to draw it.)`,
    },
  ],
  rolePowerUpgrades: [
    {
      upgradeId: "ally",
      powerId: "power-1",
    },
    {
      upgradeId: "1d8",
      powerId: "power-1",
    },
    {
      upgradeId: "ally",
      powerId: "power-2",
    },
    {
      upgradeId: "unlock",
      powerId: "role-power-1",
    },
    {
      upgradeId: "reduction",
      powerId: "role-power-1",
    },
    {
      upgradeId: "unlock",
      powerId: "role-power-2",
    },
    {
      upgradeId: "draw",
      powerId: "role-power-2",
    },
  ],
};

const DrunkenAvenger: Role = {
  name: "Drunken Avenger",
  description: `A good tavern always has cheap alcohol, friendly staff, and easily 
  replaced furniture`,
  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
  },
  classPowerOverrides: [
    {
      powerId: "power-1",
      description: `On a local combat ({diplomacy}or your Diplomacy) ({strength} or your Strength or Constitution) check,
      you may reload or recharge a weapon or an armor ({liquid}or a Liquid boon) to add 1d4 ({1d6}1d6).`,
    },
    {
      powerId: "power-2",
      description: `At the end of your turn, you may recharge
      a weapon or an armor ({liquid}or a Liquid boon) from your hand or discards.`,
    },
    {
      powerId: "power-3",
      description: `You may avenge by discarding ({recharge}or recharging) ({reveal}or revealing) a card. 
      ({reduction}You may do the same to reduce damage you suffer during that encounter 
      by 3.)`,
    },
  ],
  rolePowers: [
    {
      powerId: "role-power-1",
      description: `{unlock}When you move during your move step, you may move to a random other 
      location; if you do, heal a card, then draw a card.`,
    },
    {
      powerId: "role-power-2",
      description: `{unlock}You are proficient with Liquids. On your checks to acquire or recharge 
      Liquid boons, add 1d12.`,
    },
  ],
  rolePowerUpgrades: [
    {
      upgradeId: "strength",
      powerId: "power-1",
    },
    {
      upgradeId: "liquid",
      powerId: "power-1",
    },
    {
      upgradeId: "liquid",
      powerId: "power-2",
    },
    {
      upgradeId: "reveal",
      powerId: "power-3",
    },
    {
      upgradeId: "reduction",
      powerId: "power-3",
    },
    {
      upgradeId: "unlock",
      powerId: "role-power-1",
    },
    {
      upgradeId: "unlock",
      powerId: "role-power-2",
    },
  ],
};

export const Valeros: Character = {
  name: "Valeros",
  class: "Fighter",
  race: "Human",
  description: `The mercenary life comes with many gray conflicts, so 
    Valeros abandoned his company to help those in need. 
    His sword and shield are always at the ready, though 
    one hand might be holding a full tankard dedicated 
    to the drunkard god Cayden Cailean. It won't be full 
    for long.`,
  favoredCards: [CardType.Weapon],

  roles: [Compatriot, DrunkenAvenger],

  handSize: 4,

  deck: {
    [CardType.Weapon]: 4,
    [CardType.Spell]: 0,
    [CardType.Armor]: 3,
    [CardType.Item]: 2,
    [CardType.Ally]: 3,
    [CardType.Blessing]: 3,
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D10,
      proficiencies: { [SkillType.Melee]: 2 },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: { [SkillType.Ranged]: 1 },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D8,
      proficiencies: { [SkillType.Fortitude]: 2 },
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
      die: Die.D10,
      proficiencies: { [SkillType.Diplomacy]: 2 },
    },
  ],

  proficiencies: [ProficiencyType.Armor, ProficiencyType.Weapon],

  powers: [
    {
      powerId: "power-1",
      description: `On a local combat ({diplomacy}or your Diplomacy) check,
        you may reload or recharge a weapon or an armor to add 1d4 ({1d6}1d6).`,
    },
    {
      powerId: "power-2",
      description: `At the end of your turn, you may recharge
        a weapon or an armor from your hand or discards.`,
    },
    {
      powerId: "power-3",
      description: `You may avenge by discarding ({recharge}or recharging) a card.`,
    },
  ],

  deckUpgrades: {
    "weapon-1": {
      cardType: CardType.Weapon,
      modifier: 1,
    },
    "weapon-2": {
      cardType: CardType.Weapon,
      modifier: 1,
    },
    "weapon-3": {
      cardType: CardType.Weapon,
      modifier: 1,
    },
    "armor-1": {
      cardType: CardType.Armor,
      modifier: 1,
    },
    "armor-2": {
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
    "str-4": {
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
    "con-3": {
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
    "cha-1": {
      ablilityType: AbilityType.Charisma,
      modifier: 1,
    },
    "cha-2": {
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
      upgradeId: "diplomacy",
      powerId: "power-1",
    },
    {
      upgradeId: "1d6",
      powerId: "power-1",
    },
    {
      upgradeId: "recharge",
      powerId: "power-3",
    },
  ],
};
