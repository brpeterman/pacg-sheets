import {
  AbilityType,
  AbilityUpgrade,
  CardType,
  Character,
  DeckUpgrade,
  PowerUpgrade,
  Role,
} from "./characters";

export class CharacterSheet {
  heroPoints: number = 0;
  character: Character;
  readonly role?: Role;
  readonly deckUpgrades: DeckUpgrade[] = [];
  readonly abilityUpgrades: AbilityUpgrade[] = [];
  readonly powerUpgrades: PowerUpgrade[] = [];

  constructor(character: Character) {
    this.character = character;
  }

  getCardTypeLimit(cardType: CardType): number {
    return this.deckUpgrades
      .filter((card) => card.cardType == cardType)
      .reduce(
        (sum, current) => sum + current.modifier,
        this.character.handSize
      );
  }

  addDeckUpgrade(upgrade: DeckUpgrade) {
    if (this.heroPoints < 1) {
      return;
    }
    this.deckUpgrades.push(upgrade);
    this.heroPoints--;
  }

  addAbilityUpgrade(upgrade: AbilityUpgrade) {
    if (this.heroPoints < 1) {
      return;
    }
    this.abilityUpgrades.push(upgrade);
    this.heroPoints--;
  }

  addPowerUpgrade(upgrade: PowerUpgrade) {
    if (this.heroPoints < 1) {
      return;
    }
    this.powerUpgrades.push(upgrade);
    this.heroPoints--;
  }
}
