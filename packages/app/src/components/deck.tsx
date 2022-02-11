import React from "react";
import { UpgradeBox } from ".";
import { CardType, DeckUpgrade } from "../model/characters";

export interface DeckProps {
  readonly baseDeck: Map<CardType, number>;
  readonly favoredCards: CardType[];
  readonly availableUpgrades: { [key: string]: DeckUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly deckUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export class Deck extends React.Component<DeckProps> {
  getCardTypeLimit(cardType: CardType): number {
    return Object.keys(this.props.availableUpgrades)
      .filter((upgradeId) => this.props.purchasedUpgrades.includes(upgradeId))
      .map((upgradeId) => this.props.availableUpgrades[upgradeId]!)
      .filter((deckUpgrade) => deckUpgrade.cardType === cardType)
      .reduce(
        (sum, current) => sum + current.modifier,
        this.props.baseDeck.get(cardType) || 0
      );
  }

  render() {
    const cardTypes = [
      CardType.Weapon,
      CardType.Spell,
      CardType.Armor,
      CardType.Item,
      CardType.Ally,
      CardType.Blessing,
    ];
    return (
      <section className="deck-container">
        <div className="deck-header heading">
          <h2>Deck List</h2>
          <div className="favored-cards">
            Favored cards: {this.props.favoredCards.join(", ")}
          </div>
        </div>
        {cardTypes.map((cardType) => {
          const total = this.getCardTypeLimit(cardType);
          const availableUpgrades = Object.keys(this.props.availableUpgrades)
            .map((upgradeId) => {
              return {
                id: upgradeId,
                upgrade: this.props.availableUpgrades[upgradeId]!,
              };
            })
            .filter((entry) => entry.upgrade.cardType === cardType);
          return (
            <div className="deck-row">
              <div className="deck-card-type">{cardType.toString()}</div>
              <div className="deck-card-type-limit">{total}</div>
              <div className="deck-upgrades">
                {availableUpgrades.map((upgradeEntry) => {
                  const purchased = this.props.purchasedUpgrades.includes(
                    upgradeEntry.id
                  );
                  return (
                    <div className="deck-upgrade">
                      <UpgradeBox
                        disabled={this.props.heroPoints < 1}
                        onChange={(e) =>
                          this.props.deckUpgradeHandler(upgradeEntry.id, e)
                        }
                        purchased={purchased}
                      />
                      +{upgradeEntry.upgrade.modifier}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
