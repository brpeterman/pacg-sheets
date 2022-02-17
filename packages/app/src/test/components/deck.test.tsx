import { render, unmountComponentAtNode } from "react-dom";
import { Deck } from "../../components/deck";
import { CardType, DeckCards } from "../../model/characters";

let container: Element | undefined;

describe("render deck", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container?.remove();
    container = undefined;
  });

  const baseDeck: { [key in CardType]: DeckCards } = {
    [CardType.Weapon]: {
      count: 1,
      upgrades: { weapon: { modifier: 1 } },
    },
    [CardType.Spell]: {
      count: 2,
      upgrades: { spell: { modifier: 1 } },
    },
    [CardType.Armor]: {
      count: 3,
      upgrades: { armor: { modifier: 1 } },
    },
    [CardType.Item]: {
      count: 4,
      upgrades: { item: { modifier: 1 } },
    },
    [CardType.Ally]: {
      count: 5,
      upgrades: { ally: { modifier: 1 } },
    },
    [CardType.Blessing]: {
      count: 6,
      upgrades: { blessing: { modifier: 1 } },
    },
  };

  test("render correct deck values", () => {
    render(
      <Deck
        baseDeck={baseDeck}
        purchasedUpgrades={[]}
        collapsed={false}
        favoredCards={["Favored"]}
        heroPoints={0}
        toggleCollapseHandler={() => {}}
        deckUpgradeHandler={() => {}}
      />,
      container!
    );

    Object.keys(baseDeck).forEach((cardType) => {
      const renderedLimit = container?.querySelector(
        `.deck-row-${cardType} > .deck-card-type-limit`
      )?.textContent;
      expect(renderedLimit).toEqual(
        baseDeck[cardType as CardType]!.count.toString()
      );
    });
  });

  test("render correct deck values with upgrades", () => {
    render(
      <Deck
        baseDeck={baseDeck}
        purchasedUpgrades={["weapon"]}
        collapsed={false}
        favoredCards={["Favored"]}
        heroPoints={0}
        toggleCollapseHandler={() => {}}
        deckUpgradeHandler={() => {}}
      />,
      container!
    );

    const renderedLimit = container?.querySelector(
      `.deck-row-Weapon > .deck-card-type-limit`
    )?.textContent;
    expect(renderedLimit).toEqual("2");
  });
});
