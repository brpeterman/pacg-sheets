export interface Character {
  readonly name: string;
  readonly class: string;
  readonly race: string;
  readonly description: string;
  readonly favoredCards: string[];
  readonly abilities: Ability[];
  readonly hand: Hand;
  readonly proficiencies: Proficiencies;
  readonly powers: { [key: string]: Power };
  readonly deck: { [key in CardType]: DeckCards };
  readonly roles: Role[];
}

export interface Hand {
  readonly count: number;
  readonly upgrades: { [key: string]: ModifierUpgrade };
}

export interface Ability {
  readonly abilityType: AbilityType;
  readonly die: Die;
  readonly proficiencies: { [key in SkillType]?: number };
  readonly upgrades: { [key: string]: ModifierUpgrade };
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
  readonly description: string;
  readonly upgrades?: string[];
}

export interface DeckCards {
  readonly count: number;
  readonly upgrades: { [key: string]: ModifierUpgrade };
}

export interface ModifierUpgrade {
  readonly modifier: number;
}

export interface Proficiencies {
  readonly proficiencies: ProficiencyType[];
  readonly upgrades: { [key: string]: ProficiencyUpgrade };
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
  readonly handUpgrades: { [key: string]: ModifierUpgrade };
  readonly classPowerOverrides: { [key: string]: Power };
  readonly rolePowers: { [key: string]: Power };
}
