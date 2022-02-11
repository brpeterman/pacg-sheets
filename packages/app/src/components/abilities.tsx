import React from "react";
import { UpgradeBox } from ".";
import { Ability, AbilityUpgrade } from "../model/characters";

export interface AbilitiesProps {
  readonly baseAbilities: Ability[];
  readonly availableUpgrades: { [key: string]: AbilityUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly abilityUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export class Abilities extends React.Component<AbilitiesProps> {
  render() {
    return (
      <section className="abilities-container">
        <h2 className="abilities-header heading">Skills</h2>
        {this.props.baseAbilities.map((ability) => {
          const availableUpgrades = Object.keys(this.props.availableUpgrades)
            .map((abilityId) => {
              return {
                id: abilityId,
                upgrade: this.props.availableUpgrades[abilityId]!,
              };
            })
            .filter(
              (entry) => entry.upgrade.ablilityType === ability.abilityType
            );
          return (
            <div className="abilities-row">
              <div className="abilities-list">
                <div className="ability-primary-title">
                  {ability.abilityType}
                </div>
                {ability.proficiencies.size > 0 ? (
                  <div className="ability-secondary-container">
                    {Array.from(ability.proficiencies.entries()).map(
                      (proficiencyEntry) => {
                        return (
                          <div className="ability-secondary-row">
                            <div className="ability-secondary-title">
                              {proficiencyEntry[0]}
                            </div>
                            <div className="ability-secondary-modifier">
                              +{proficiencyEntry[1]}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : null}
              </div>
              <div className="ability-primary-die">{ability.die}</div>
              <div className="ability-primary-upgrades">
                {availableUpgrades.map((upgradeEntry, index) => {
                  const purchased = this.props.purchasedUpgrades.includes(
                    upgradeEntry.id
                  );
                  return (
                    <div className="ability-upgrade">
                      <UpgradeBox
                        heroPoints={this.props.heroPoints}
                        onChange={(e) =>
                          this.props.abilityUpgradeHandler(upgradeEntry.id, e)
                        }
                        purchased={purchased}
                      />
                      +{upgradeEntry.upgrade.modifier}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
