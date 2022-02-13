import React from "react";
import { UpgradeBox } from ".";
import { ProficiencyType, ProficiencyUpgrade } from "../model/characters";

export interface ProficienciesProps {
  readonly baseProficiencies: ProficiencyType[];
  readonly availableUpgrades: { [key: string]: ProficiencyUpgrade };
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
        <div
          className="proficiencies-header heading"
          onClick={() => this.props.toggleCollapseHandler("proficiencies")}
        >
          <h2>Proficiencies</h2>
        </div>
        <div className={this.props.collapsed ? "hidden" : ""}>
          <div className="proficiencies-row">
            {this.props.baseProficiencies.map((proficiency) => {
              return (
                <div className="proficiencies-item" key={proficiency}>
                  {proficiency}
                </div>
              );
            })}
            {Object.keys(this.props.availableUpgrades).map((upgradeId) => {
              const upgrade = this.props.availableUpgrades[upgradeId]!;
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
