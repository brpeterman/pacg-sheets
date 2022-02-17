import React from "react";
import { UpgradeBox } from ".";
import { Ability, SkillType } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface AbilitiesProps {
  readonly baseAbilities: Ability[];
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly abilityUpgradeHandler: (u: string) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Abilities extends React.Component<AbilitiesProps> {
  render() {
    return (
      <section className="abilities-container">
        <SectionHeader
          heading="Skills"
          id="abilities"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={"collapsible" + (this.props.collapsed ? " hidden" : "")}
        >
          {this.props.baseAbilities.map((ability) => {
            const upgradesModifier = Object.keys(ability.upgrades)
              .filter((upgradeId) =>
                this.props.purchasedUpgrades.includes(upgradeId)
              )
              .map((upgradeId) => ability.upgrades[upgradeId])
              .reduce((sum, current) => sum + current.modifier, 0);
            return (
              <div
                className={`abilities-row abilities-row-${ability.abilityType}`}
                key={ability.abilityType}
              >
                <div className="abilities-list">
                  <div className="ability-primary-row">
                    <div className="ability-primary-title">
                      {ability.abilityType}
                    </div>
                    <div className="ability-primary-modifier">
                      +{upgradesModifier}
                    </div>
                  </div>
                  {ability.proficiencies ? (
                    <div className="ability-secondary-container">
                      {Object.keys(ability.proficiencies).map((proficiency) => {
                        return (
                          <div
                            className="ability-secondary-row"
                            key={proficiency}
                          >
                            <div className="ability-secondary-title">
                              {proficiency}
                            </div>
                            <div className="ability-secondary-modifier">
                              +
                              {ability.proficiencies[
                                proficiency as SkillType
                              ]! + upgradesModifier}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="ability-primary-die">{ability.die}</div>
                <div className="ability-primary-upgrades">
                  {Object.keys(ability.upgrades).map((upgradeId) => {
                    const purchased =
                      this.props.purchasedUpgrades.includes(upgradeId);
                    const upgrade = ability.upgrades[upgradeId];
                    return (
                      <div className="ability-upgrade" key={upgradeId}>
                        <UpgradeBox
                          upgradeId={upgradeId}
                          heroPoints={this.props.heroPoints}
                          label={`+${upgrade.modifier}`}
                          onChange={(e) =>
                            this.props.abilityUpgradeHandler(upgradeId)
                          }
                          purchased={purchased}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
