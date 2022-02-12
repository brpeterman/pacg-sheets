import React from "react";
import { UpgradeBox } from ".";
import { CardType, DeckUpgrade } from "../model/characters";

export interface DeckProps {
  readonly baseDeck: { [key in CardType]: number };
  readonly favoredCards: CardType[];
  readonly availableUpgrades: { [key: string]: DeckUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly deckUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Deck extends React.Component<DeckProps> {
  getCardTypeLimit(cardType: CardType): number {
    return Object.keys(this.props.availableUpgrades)
      .filter((upgradeId) => this.props.purchasedUpgrades.includes(upgradeId))
      .map((upgradeId) => this.props.availableUpgrades[upgradeId]!)
      .filter((deckUpgrade) => deckUpgrade.cardType === cardType)
      .reduce(
        (sum, current) => sum + current.modifier,
        this.props.baseDeck[cardType] || 0
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
        <div
          className="deck-header heading"
          onClick={() => this.props.toggleCollapseHandler("deck")}
        >
          <h2>Deck List</h2>
          <div className="favored-cards">
            Favored cards: {this.props.favoredCards.join(", ")}
          </div>
        </div>
        <div className={this.props.collapsed ? "hidden" : ""}>
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
              <div className="deck-row" key={cardType}>
                <div className="deck-card-type">{cardType.toString()}</div>
                <div className="deck-card-type-limit">{total}</div>
                <div className="deck-upgrades">
                  {availableUpgrades.map((upgradeEntry) => {
                    const purchased = this.props.purchasedUpgrades.includes(
                      upgradeEntry.id
                    );
                    return (
                      <div className="deck-upgrade" key={upgradeEntry.id}>
                        <UpgradeBox
                          heroPoints={this.props.heroPoints}
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
        </div>
      </section>
    );
  }
}
