import React from "react";
import { UpgradeBox } from ".";
import { Proficiencies as CharProficiencies } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface ProficienciesProps {
  readonly proficiencies: CharProficiencies;
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly proficiencyUpgradeHandler: (u: string) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Proficiencies extends React.Component<ProficienciesProps> {
  render() {
    return (
      <section className="proficiencies-container">
        <SectionHeader
          heading="Proficiencies"
          id="proficiencies"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={"collapsible" + (this.props.collapsed ? " hidden" : "")}
        >
          <div className="proficiencies-row">
            {this.props.proficiencies.proficiencies.map((proficiency) => {
              return (
                <div className="proficiencies-item" key={proficiency}>
                  {proficiency}
                </div>
              );
            })}
            {Object.keys(this.props.proficiencies.upgrades).map((upgradeId) => {
              const upgrade = this.props.proficiencies.upgrades[upgradeId]!;
              const purchased =
                !!this.props.purchasedUpgrades.includes(upgradeId);
              return (
                <div
                  className="proficiencies-item"
                  key={upgrade.proficiencyType}
                >
                  <UpgradeBox
                    upgradeId={upgradeId}
                    heroPoints={this.props.heroPoints}
                    onChange={(e) =>
                      this.props.proficiencyUpgradeHandler(upgradeId)
                    }
                    purchased={purchased}
                  />
                  {upgrade.proficiencyType}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
