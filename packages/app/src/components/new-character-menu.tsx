import React from "react";
import { CharacterSheet } from "../model";
import { Character, Characters } from "../model/characters";

export interface NewCharacterMenuProps {
  readonly newCharacterHandler: (sheet: CharacterSheet) => void;
}

export class NewCharacterMenu extends React.Component<NewCharacterMenuProps> {
  createSheet = (char: Character) => {
    const sheet = new CharacterSheet(char);
    this.props.newCharacterHandler(sheet);
  };

  render() {
    return (
      <section className="new-character-menu">
        {Object.keys(Characters).map((charName) => {
          const char = Characters[charName];
          return (
            <div
              className="menu-item"
              key={char.name}
              onClick={() => this.createSheet(char)}
            >
              <div className="character-name">{char.name}</div>
              <div className="character-description">{`${char.race} ${char.class}`}</div>
            </div>
          );
        })}
      </section>
    );
  }
}
