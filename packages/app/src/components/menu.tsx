import React from "react";
import { CharacterSheet } from "../model";
import menuIcon from "../images/menu.png";
import { NewCharacterMenu } from "./new-character-menu";

export interface MenuProps {
  readonly sheets: CharacterSheet[];
  readonly activeSheetIndex: number;
  readonly stateClearedHandler: () => void;
  readonly sheetSwitchedHandler: (s: CharacterSheet, i: number) => void;
  readonly sheetAddedHandler: (s: CharacterSheet) => void;
}

interface MenuState {
  visible: boolean;
  newCharMenuOpen: boolean;
}

export class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {
      visible: false,
      newCharMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
      newCharMenuOpen: false,
    });
  };

  toggleNewCharMenu = () => {
    this.setState({
      ...this.state,
      newCharMenuOpen: !this.state.newCharMenuOpen,
    });
  };

  changeCharacter = (index: number) => {
    this.toggleMenu();
    this.props.sheetSwitchedHandler(this.props.sheets[index], index);
  };

  createCharacter = (sheet: CharacterSheet) => {
    this.toggleMenu();
    this.props.sheetAddedHandler(sheet);
  };

  deleteAll = () => {
    this.toggleMenu();
    this.props.stateClearedHandler();
  };

  render() {
    const activeSheet = this.props.sheets[this.props.activeSheetIndex];
    return (
      <div>
        <div
          className={"blur" + (this.state.visible ? "" : " hidden")}
          onClick={this.toggleMenu}
        ></div>
        <section className="menu">
          <div className="menu-bar heading" onClick={this.toggleMenu}>
            <img className="menu-icon" src={menuIcon} alt="Menu" />
            <h1 className="view-title">
              {activeSheet ? activeSheet.character.name : "PACG Sheets"}
            </h1>
          </div>
          <div
            className={
              "menu-contents" +
              (this.state.visible && !this.state.newCharMenuOpen
                ? ""
                : " hidden")
            }
          >
            {this.props.sheets.map((sheet, index) => {
              const name = sheet.character.name;
              const race = sheet.character.race;
              const charClass = sheet.character.class;
              return (
                <div
                  className="menu-item"
                  key={index}
                  onClick={() => this.changeCharacter(index)}
                >
                  <div className="character-name">{name}</div>
                  <div className="character-description">{`${race} ${charClass}`}</div>
                </div>
              );
            })}
            <div className="menu-item" onClick={this.toggleNewCharMenu}>
              <div className="option">+New Character</div>
            </div>
            <div className="menu-item" onClick={this.deleteAll}>
              <div className="option">Delete all characters</div>
            </div>
          </div>
          <div
            className={
              "menu-contents new-character-menu" +
              (this.state.newCharMenuOpen ? "" : " hidden")
            }
          >
            <NewCharacterMenu newCharacterHandler={this.createCharacter} />
          </div>
        </section>
      </div>
    );
  }
}
