import React from "react";
import { UpgradeBox } from ".";
import { ProficiencyType, ProficiencyUpgrade } from "../model/characters";

export interface ProficienciesProps {
  readonly baseProficiencies: ProficiencyType[];
  readonly availableUpgrades: { [key: string]: ProficiencyUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly proficiencyUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export class Proficiencies extends React.Component<ProficienciesProps> {
  render() {
    return (
      <section className="proficiencies-container">
        <div className="proficiencies-header heading">
          <h2>Proficiencies</h2>
        </div>
        <div className="proficiencies-row">
          {this.props.baseProficiencies.map((proficiency) => {
            return <div className="proficiencies-item">{proficiency}</div>;
          })}
          {Object.keys(this.props.availableUpgrades).map((upgradeId) => {
            const upgrade = this.props.availableUpgrades[upgradeId]!;
            const purchased =
              !!this.props.purchasedUpgrades.includes(upgradeId);
            return (
              <div className="proficiencies-item">
                <UpgradeBox
                  disabled={this.props.heroPoints < 1}
                  onChange={(e) =>
                    this.props.proficiencyUpgradeHandler(upgradeId, e)
                  }
                  purchased={purchased}
                />
                +{upgrade.proficiencyType}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
