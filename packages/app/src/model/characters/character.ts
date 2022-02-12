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
  readonly deck: { [key in CardType]: number };
  readonly deckUpgrades: { [key: string]: DeckUpgrade };
  readonly abilityUpgrades: { [key: string]: AbilityUpgrade };
  readonly handUpgrades: { [key: string]: HandUpgrade };
  readonly proficiencyUpgrades: { [key: string]: ProficiencyUpgrade };
  readonly powerUpgrades: PowerUpgrade[];
  readonly roles: Role[];
}

export interface Ability {
  readonly abilityType: AbilityType;
  readonly die: Die;
  readonly proficiencies: { [key in SkillType]?: number };
}

export enum AbilityType {
  Strength = "Strength",
  Dexterity = "Dexterity",
  Constitution = "Constitution",
  Intelligence = "Intelligence",
  Wisdom = "Wisdom",
  Charisma = "Charisma",
}

export enum Die {
  D4 = "D4",
  D6 = "D6",
  D8 = "D8",
  D10 = "D10",
  D12 = "D12",
}

export enum SkillType {
  Melee = "Melee",
  Ranged = "Ranged",
  Disable = "Disable",
  Acrobatics = "Acrobatics",
  Stealth = "Stealth",
  Fortitude = "Fortitude",
  Arcane = "Arcane",
  Craft = "Craft",
  Knowledge = "Knowledge",
  Survival = "Survival",
  Divine = "Divine",
  Perception = "Perception",
  Diplomacy = "Diplomacy",
}

export enum CardType {
  Weapon = "Weapon",
  Spell = "Spell",
  Armor = "Armor",
  Item = "Item",
  Ally = "Ally",
  Blessing = "Blessing",
}

export enum ProficiencyType {
  Armor = "Armor",
  Weapon = "Weapon",
  Divine = "Divine",
  Arcane = "Arcane",
  Instrument = "Instrument",
  Alchemical = "Alchemical",
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
  readonly handUpgrades: { [key: string]: HandUpgrade };
  readonly classPowerOverrides: Power[];
  readonly rolePowers: Power[];
  readonly rolePowerUpgrades: PowerUpgrade[];
}
