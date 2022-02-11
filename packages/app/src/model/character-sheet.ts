import { AbilityType, Character, Role } from "./characters";

export class CharacterSheet {
  heroPoints: number = 0;
  character: Character;
  readonly role?: Role;
  readonly deckUpgrades: string[];
  readonly abilityUpgrades: string[];
  readonly handUpgrades: string[];
  readonly proficiencyUpgrades: string[];
  readonly powerUpgrades: string[];

  constructor(
    character: Character,
    heroPoints?: number,
    role?: Role,
    deckUpgrades?: string[],
    abilityUpgrades?: string[],
    handUpgrades?: string[],
    proficiencyUpgrades?: string[],
    powerUpgrades?: string[]
  ) {
    this.character = character;
    this.heroPoints = heroPoints || 0;
    this.role = role || undefined;
    this.deckUpgrades = deckUpgrades || [];
    this.abilityUpgrades = abilityUpgrades || [];
    this.handUpgrades = handUpgrades || [];
    this.proficiencyUpgrades = proficiencyUpgrades || [];
    this.powerUpgrades = powerUpgrades || [];
  }

  getAbilityModifier(abilityType: AbilityType): number {
    return Object.keys(this.character.abilityUpgrades)
      .filter((abilityId) => this.abilityUpgrades.includes(abilityId))
      .map((abilityId) => this.character.abilityUpgrades[abilityId]!)
      .filter((abilityUpgrade) => abilityUpgrade.ablilityType === abilityType)
      .reduce((sum, current) => sum + current.modifier, 0);
  }

  toggleDeckUpgrade(upgrade: string) {
    if (this.deckUpgrades.includes(upgrade)) {
      const index = this.deckUpgrades.indexOf(upgrade);
      this.deckUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.deckUpgrades.push(upgrade);
      this.heroPoints--;
    }
  }

  toggleAbilityUpgrade(upgrade: string) {
    if (this.abilityUpgrades.includes(upgrade)) {
      const index = this.abilityUpgrades.indexOf(upgrade);
      this.abilityUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.abilityUpgrades.push(upgrade);
      this.heroPoints--;
    }
  }

  toggleHandUpgrade(upgrade: string) {
    if (this.handUpgrades.includes(upgrade)) {
      const index = this.handUpgrades.indexOf(upgrade);
      this.handUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.handUpgrades.push(upgrade);
      this.heroPoints--;
    }
  }

  toggleProficiencyUpgrade(upgrade: string) {
    if (this.proficiencyUpgrades.includes(upgrade)) {
      const index = this.proficiencyUpgrades.indexOf(upgrade);
      this.proficiencyUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.proficiencyUpgrades.push(upgrade);
      this.heroPoints--;
    }
  }

  togglePower(upgradeId: string, powerId: string) {
    const upgradeSerialized = this.serializePowerUpgrade(upgradeId, powerId);
    if (this.powerUpgrades.includes(upgradeSerialized)) {
      const index = this.powerUpgrades.indexOf(upgradeSerialized);
      this.powerUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.powerUpgrades.push(upgradeSerialized);
      this.heroPoints--;
    }
  }

  serializePowerUpgrade(upgradeId: string, powerId: string) {
    return `${powerId}|${upgradeId}`;
  }
}
