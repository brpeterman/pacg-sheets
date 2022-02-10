import React from "react";
import { UpgradeBox } from ".";
import { CardType, DeckUpgrade } from "../model/characters";

export interface DeckProps {
  readonly baseDeck: Map<CardType, number>;
  readonly favoredCards: CardType[];
  readonly availableUpgrades: DeckUpgrade[];
  readonly purchasedUpgrades: DeckUpgrade[];
}

export class Deck extends React.Component<DeckProps> {
  constructor(props: DeckProps) {
    super(props);
  }

  getCardTypeLimit(cardType: CardType): number {
    return this.props.purchasedUpgrades
      .filter((card) => card.cardType == cardType)
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
        <div className="deck-header">
          <h2>Deck List</h2>
          <div className="favored-cards">
            {this.props.favoredCards.join(", ")}
          </div>
        </div>
        {cardTypes.map((cardType) => {
          const total = this.getCardTypeLimit(cardType);
          const purchasedUpgrades = this.props.purchasedUpgrades.filter(
            (upgrade) => upgrade.cardType == cardType
          );
          const availableUpgrades = this.props.availableUpgrades.filter(
            (upgrade) => upgrade.cardType == cardType
          );
          return (
            <div className="deck-row">
              <div className="deck-card-type">{cardType.toString()}</div>
              <div className="deck-card-type-limit">{total}</div>
              <div className="deck-upgrades">
                {availableUpgrades.map((availableUpgrade, index) => {
                  const purchased = !!purchasedUpgrades[index];
                  const onChange = () => {};
                  return (
                    <div className="deck-upgrade">
                      <UpgradeBox
                        upgrade={availableUpgrade}
                        onChange={onChange}
                        purchased={purchased}
                      />
                      +{availableUpgrade.modifier}
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
