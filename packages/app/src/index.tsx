import React from "react";
import ReactDOM from 'react-dom';
import { Deck } from "./components";
import { CharacterSheet } from "./model";
import { Valeros } from "./model/characters";

export interface AppProps {}

export interface AppState {
  sheets: CharacterSheet[];
  activeSheet: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sheets: [new CharacterSheet(Valeros)],
      activeSheet: 0,
    };
  }

  render() {
    const activeSheet = this.state.sheets[this.state.activeSheet];
    return (
      <Deck
        baseDeck={activeSheet.character.deck}
        availableUpgrades={activeSheet.character.deckUpgrades}
        purchasedUpgrades={activeSheet.deckUpgrades}
        favoredCards={activeSheet.character.favoredCards}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
