export interface Character {
  readonly name: string;
  readonly class: string;
  readonly race: string;
  readonly description: string;
  readonly favoredCards: CardType[];
  readonly abilities: Ability[];
  readonly handSize: number;
  readonly proficiencies: ProficiencyType[];
  readonly powers: Power[];
  readonly deck: Map<CardType, number>;
  readonly deckUpgrades: DeckUpgrade[];
  readonly abilityUpgrades: AbilityUpgrade[];
  readonly proficiencyUpgrades: ProficiencyUpgrade[];
  readonly powerUpgrades: PowerUpgrade[];
  readonly roles: Role[];
}

export interface Ability {
  readonly abilityType: AbilityType;
  readonly die: Die;
  readonly proficiencies: Map<SkillType, number>;
}

export enum AbilityType {
  Strength,
  Dexterity,
  Constitution,
  Intelligence,
  Wisdom,
  Charisma,
}

export enum Die {
  D4,
  D6,
  D8,
  D10,
  D12,
}

export enum SkillType {
  Melee,
  Ranged,
  Disable,
  Acrobatics,
  Stealth,
  Fortitude,
  Arcane,
  Craft,
  Knowledge,
  Survival,
  Divine,
  Perception,
  Diplomacy,
}

export enum CardType {
  Weapon,
  Spell,
  Armor,
  Item,
  Ally,
  Blessing,
}

export enum ProficiencyType {
  Armor,
  Weapon,
  Divine,
  Arcane,
  Instrument,
  Alchemical,
}

export interface Power {
  readonly powerId: string;
  readonly description: string;
}

export interface DeckUpgrade {
  readonly cardType: CardType;
  readonly modifier: number;
}

export interface AbilityUpgrade {
  readonly ablilityType: AbilityType;
  readonly modifier: number;
}

export interface HandUpgrade {
  readonly modifier: number;
}

export interface ProficiencyUpgrade {
  readonly proficiencyType: ProficiencyType;
}

export interface PowerUpgrade {
  readonly upgradeId: string;
  readonly powerId: string;
}

export interface Role {
  readonly name: string;
  readonly description: string;
  readonly handUpgrades: HandUpgrade[];
  readonly classPowerOverrides: Power[];
  readonly rolePowers: Power[];
  readonly rolePowerUpgrades: PowerUpgrade[];
}
