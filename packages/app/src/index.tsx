import React from "react";
import ReactDOM from "react-dom";
import { Sheet } from "./components";
import { Menu } from "./components/menu";
import { CharacterSheet } from "./model";
import { Characters } from "./model/characters";
import "./style.scss";

const VERSION = "0.1.0";

export interface AppProps {}

export interface AppState {
  version: string;
  sheets: CharacterSheet[];
  activeSheetIndex: number;
}

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    this.loadState();
  }

  loadState() {
    const serializedState = window.localStorage.getItem("appState");
    if (serializedState) {
      const storedState = JSON.parse(serializedState);
      if (!storedState.version) {
        this.setState({
          version: VERSION,
          sheets: [],
          activeSheetIndex: 0,
        });
        return;
      }
      const sheets = storedState.sheets.map((sheetData: any) => {
        const charName = sheetData.character as string;
        return new CharacterSheet(
          Characters[charName],
          sheetData.heroPoints,
          sheetData.role,
          sheetData.deckUpgrades,
          sheetData.abilityUpgrades,
          sheetData.handUpgrades,
          sheetData.proficiencyUpgrades,
          sheetData.powerUpgrades
        );
      });
      this.setState({
        version: VERSION,
        sheets,
        activeSheetIndex: storedState.activeSheetIndex,
      });
    } else {
      this.setState({
        version: VERSION,
        sheets: [],
        activeSheetIndex: 0,
      });
    }
  }

  saveState() {
    const savedSheets = this.state.sheets.map((sheet) => {
      return {
        ...sheet,
        character: sheet.character.name,
      };
    });
    localStorage.setItem(
      "appState",
      JSON.stringify({
        ...this.state,
        sheets: savedSheets,
      })
    );
  }

  clearState() {
    this.setState(
      {
        version: VERSION,
        sheets: [],
        activeSheetIndex: 0,
      },
      () => this.saveState()
    );
  }

  updateSheet = (sheet: CharacterSheet) => {
    const sheets = this.state.sheets;
    sheets[this.state.activeSheetIndex] = sheet;
    this.setState(
      {
        ...this.state,
        sheets,
      },
      () => this.saveState()
    );
  };

  switchSheet = (sheet: CharacterSheet, index: number) => {
    this.setState(
      {
        ...this.state,
        activeSheetIndex: index,
      },
      () => this.saveState()
    );
  };

  addSheet = (sheet: CharacterSheet) => {
    const sheets = this.state.sheets;
    sheets.push(sheet);
    this.setState(
      {
        ...this.state,
        sheets,
        activeSheetIndex: sheets.length - 1,
      },
      () => this.saveState()
    );
  };

  render() {
    if (!this.state) {
      return null;
    }
    const activeSheet = this.state.sheets[this.state.activeSheetIndex];
    return (
      <div>
        <Menu
          sheets={this.state.sheets}
          activeSheetIndex={this.state.activeSheetIndex}
          sheetSwitchedHandler={this.switchSheet.bind(this)}
          stateClearedHandler={this.clearState.bind(this)}
          sheetAddedHandler={this.addSheet.bind(this)}
        />
        {this.state?.sheets?.length > 0 ? (
          <Sheet
            activeSheet={activeSheet}
            sheetUpdatedHandler={this.updateSheet.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
