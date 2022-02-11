import React from "react";
import ReactDOM from "react-dom";
import {
  Abilities,
  Deck,
  HandSize,
  HeroPoints,
  Powers,
  Proficiencies,
} from "./components";
import { CharacterSheet } from "./model";
import { Valeros } from "./model/characters";
import "./style.scss";

export interface AppProps {}

export interface AppState {
  sheets: CharacterSheet[];
  activeSheetIndex: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.loadState();
  }

  loadState() {
    const serializedState = window.localStorage.getItem("appState");
    if (serializedState) {
      const storedState = JSON.parse(serializedState);
      const sheets = storedState.sheets.map(
        (sheetData: CharacterSheet) =>
          new CharacterSheet(
            sheetData.character,
            sheetData.heroPoints,
            sheetData.role,
            sheetData.deckUpgrades,
            sheetData.abilityUpgrades,
            sheetData.handUpgrades,
            sheetData.proficiencyUpgrades,
            sheetData.powerUpgrades
          )
      );
      this.state = {
        sheets,
        activeSheetIndex: storedState.activeSheetIndex,
      };
    } else {
      this.state = {
        sheets: [new CharacterSheet(Valeros)],
        activeSheetIndex: 0,
      };
    }
  }

  saveState() {
    this.setState(this.state);
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  deckUpgradeHandler = (
    upgrade: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    activeSheet.toggleDeckUpgrade(upgrade);
    this.saveState();
  };

  pointsChangedHandler = (diff: number) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    const newValue = activeSheet.heroPoints + diff;
    if (newValue >= 0) {
      activeSheet.heroPoints = newValue;
    }
    this.saveState();
  };

  abilityUpgradeHandler = (
    upgrade: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    activeSheet.toggleAbilityUpgrade(upgrade);
    this.saveState();
  };

  handSizeUpgradeHandler = (
    upgrade: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    activeSheet.toggleHandUpgrade(upgrade);
    this.saveState();
  };

  proficiencyUpgradeHandler = (
    upgrade: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    activeSheet.toggleProficiencyUpgrade(upgrade);
    this.saveState();
  };

  powersUpgradeHandler = (
    upgradeId: string,
    powerId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    activeSheet.togglePower(upgradeId, powerId);
    this.saveState();
  };

  render() {
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    return (
      <div>
        <HeroPoints
          points={activeSheet.heroPoints}
          pointsChangeHandler={this.pointsChangedHandler.bind(this)}
        />
        <Deck
          baseDeck={activeSheet.character.deck}
          availableUpgrades={activeSheet.character.deckUpgrades}
          purchasedUpgrades={activeSheet.deckUpgrades}
          favoredCards={activeSheet.character.favoredCards}
          heroPoints={activeSheet.heroPoints}
          deckUpgradeHandler={this.deckUpgradeHandler.bind(this)}
        />
        <Abilities
          baseAbilities={activeSheet.character.abilities}
          availableUpgrades={activeSheet.character.abilityUpgrades}
          purchasedUpgrades={activeSheet.abilityUpgrades}
          heroPoints={activeSheet.heroPoints}
          abilityUpgradeHandler={this.abilityUpgradeHandler.bind(this)}
        />
        <HandSize
          defaultSize={activeSheet.character.handSize}
          availableUpgrades={activeSheet.character.handUpgrades}
          purchasedUpgrades={activeSheet.handUpgrades}
          heroPoints={activeSheet.heroPoints}
          handUpgradeHandler={this.handSizeUpgradeHandler.bind(this)}
        />
        <Proficiencies
          baseProficiencies={activeSheet.character.proficiencies}
          availableUpgrades={activeSheet.character.proficiencyUpgrades}
          purchasedUpgrades={activeSheet.proficiencyUpgrades}
          heroPoints={activeSheet.heroPoints}
          proficiencyUpgradeHandler={this.proficiencyUpgradeHandler.bind(this)}
        />
        <Powers
          powers={activeSheet.character.powers}
          availableUpgrades={activeSheet.character.powerUpgrades}
          purchasedUpgrades={activeSheet.powerUpgrades}
          heroPoints={activeSheet.heroPoints}
          powerUpgradeHandler={this.powersUpgradeHandler.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
