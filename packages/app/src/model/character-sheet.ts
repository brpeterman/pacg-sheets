import {
  AbilityType,
  AbilityUpgrade,
  Character,
  DeckUpgrade,
  HandUpgrade,
  PowerUpgrade,
  ProficiencyUpgrade,
  Role,
} from "./characters";

export class CharacterSheet {
  heroPoints: number = 0;
  character: Character;
  readonly role?: Role;
  readonly deckUpgrades: string[] = [];
  readonly abilityUpgrades: string[] = [];
  readonly handUpgrades: string[] = [];
  readonly proficiencyUpgrades: string[] = [];
  readonly powerUpgrades: PowerUpgrade[] = [];

  constructor(character: Character) {
    this.character = character;
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

  togglePower(upgrade: PowerUpgrade) {
    if (this.powerUpgrades.includes(upgrade)) {
      const index = this.powerUpgrades.indexOf(upgrade);
      this.powerUpgrades.splice(index, 1);
    } else {
      if (this.heroPoints < 1) {
        return;
      }
      this.powerUpgrades.push(upgrade);
      this.heroPoints--;
    }
  }
}
