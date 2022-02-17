import React from "react";
import {
  Abilities,
  Deck,
  HandSize,
  HeroPoints,
  Powers,
  Proficiencies,
} from ".";
import { CharacterSheet } from "../model";
import { Role, Proficiencies as CharProficiencies } from "../model/characters";
import { Roles } from "./roles";

export interface SheetProps {
  readonly activeSheet: CharacterSheet;
  readonly sheetUpdatedHandler: (s: CharacterSheet) => void;
}

export class Sheet extends React.Component<SheetProps> {
  pointsChangedHandler = (diff: number) => {
    const newValue = this.props.activeSheet.heroPoints + diff;
    if (newValue >= 0) {
      this.props.activeSheet.heroPoints = newValue;
    }
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  deckUpgradeHandler = (upgrade: string) => {
    this.props.activeSheet.toggleDeckUpgrade(upgrade);
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  abilityUpgradeHandler = (upgrade: string) => {
    this.props.activeSheet.toggleAbilityUpgrade(upgrade);
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  handSizeUpgradeHandler = (upgrade: string) => {
    this.props.activeSheet.toggleHandUpgrade(upgrade);
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  proficiencyUpgradeHandler = (upgrade: string) => {
    this.props.activeSheet.toggleProficiencyUpgrade(upgrade);
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  powersUpgradeHandler = (upgradeId: string, powerId: string) => {
    this.props.activeSheet.togglePower(upgradeId, powerId);
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  toggleCollapseHandler = (sectionName: string) => {
    if (this.props.activeSheet.collapsedSections.includes(sectionName)) {
      const index =
        this.props.activeSheet.collapsedSections.indexOf(sectionName);
      this.props.activeSheet.collapsedSections.splice(index, 1);
    } else {
      this.props.activeSheet.collapsedSections.push(sectionName);
    }
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  changeRole = (role?: Role) => {
    this.props.activeSheet.role = role?.name;
    this.props.sheetUpdatedHandler(this.props.activeSheet);
  };

  render() {
    const role = this.props.activeSheet.character.roles.find(
      (role) => role.name === this.props.activeSheet.role
    );
    const handUpgrades = {
      ...this.props.activeSheet.character.hand.upgrades,
      ...(role?.handUpgrades || {}),
    };
    const proficiencies: CharProficiencies = {
      proficiencies:
        this.props.activeSheet.character.proficiencies.proficiencies,
      upgrades: {
        ...this.props.activeSheet.character.proficiencies.upgrades,
        ...(role?.proficiencyUpgrades || {}),
      },
    };
    const powers = {
      ...this.props.activeSheet.character.powers,
      ...(role?.classPowerOverrides || {}),
      ...(role?.rolePowers || {}),
    };
    return (
      <div>
        <HeroPoints
          points={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes(
            "heroPoints"
          )}
          pointsChangeHandler={this.pointsChangedHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <Deck
          baseDeck={this.props.activeSheet.character.deck}
          purchasedUpgrades={this.props.activeSheet.deckUpgrades}
          favoredCards={this.props.activeSheet.character.favoredCards}
          heroPoints={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes("deck")}
          deckUpgradeHandler={this.deckUpgradeHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <Abilities
          baseAbilities={this.props.activeSheet.character.abilities}
          purchasedUpgrades={this.props.activeSheet.abilityUpgrades}
          heroPoints={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes(
            "abilities"
          )}
          abilityUpgradeHandler={this.abilityUpgradeHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <HandSize
          hand={this.props.activeSheet.character.hand}
          availableUpgrades={handUpgrades}
          purchasedUpgrades={this.props.activeSheet.handUpgrades}
          heroPoints={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes(
            "handSize"
          )}
          handUpgradeHandler={this.handSizeUpgradeHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <Proficiencies
          proficiencies={proficiencies}
          purchasedUpgrades={this.props.activeSheet.proficiencyUpgrades}
          heroPoints={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes(
            "proficiencies"
          )}
          proficiencyUpgradeHandler={this.proficiencyUpgradeHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <Roles
          roles={this.props.activeSheet.character.roles}
          selectedRole={this.props.activeSheet.role}
          collapsed={this.props.activeSheet.collapsedSections.includes("roles")}
          roleChangedHandler={this.changeRole.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
        <Powers
          powers={powers}
          purchasedUpgrades={this.props.activeSheet.powerUpgrades}
          heroPoints={this.props.activeSheet.heroPoints}
          collapsed={this.props.activeSheet.collapsedSections.includes(
            "powers"
          )}
          powerUpgradeHandler={this.powersUpgradeHandler.bind(this)}
          toggleCollapseHandler={this.toggleCollapseHandler.bind(this)}
        />
      </div>
    );
  }
}
