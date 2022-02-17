import React from "react";
import { UpgradeBox } from ".";
import { CardType, DeckCards } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface DeckProps {
  readonly baseDeck: { [key in CardType]: DeckCards };
  readonly favoredCards: string[];
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly deckUpgradeHandler: (u: string) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Deck extends React.Component<DeckProps> {
  getCardTypeLimit(cardType: CardType): number {
    const baseCount = this.props.baseDeck[cardType].count;
    const upgrades = this.props.baseDeck[cardType].upgrades;
    return Object.keys(upgrades)
      .filter(upgradeId => this.props.purchasedUpgrades.includes(upgradeId))
      .map((upgradeId) => upgrades[upgradeId])
      .reduce((sum, upgrade) => sum + upgrade.modifier, baseCount);
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
        <SectionHeader
          heading="Deck List"
          id="deck"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={"collapsible" + (this.props.collapsed ? " hidden" : "")}
        >
          <div className="favored-cards">
            Favored cards: {this.props.favoredCards.join(", ")}
          </div>
          {cardTypes.map((cardType) => {
            const total = this.getCardTypeLimit(cardType);
            const availableUpgrades = this.props.baseDeck[cardType].upgrades;
            return (
              <div className="deck-row" key={cardType}>
                <div className="deck-card-type">{cardType.toString()}</div>
                <div className="deck-card-type-limit">{total}</div>
                <div className="deck-upgrades">
                  {Object.keys(availableUpgrades).map((upgradeId) => {
                    const purchased =
                      this.props.purchasedUpgrades.includes(upgradeId);
                    const upgrade = availableUpgrades[upgradeId];
                    return (
                      <div className="deck-upgrade" key={upgradeId}>
                        <UpgradeBox
                          upgradeId={upgradeId}
                          heroPoints={this.props.heroPoints}
                          label={`+${upgrade.modifier}`}
                          onChange={(e) =>
                            this.props.deckUpgradeHandler(upgradeId)
                          }
                          purchased={purchased}
                        />
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
