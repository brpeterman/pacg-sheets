import React from "react";
import { UpgradeBox } from ".";
import { HandUpgrade } from "../model/characters";

export interface HandSizeProps {
  readonly defaultSize: number;
  readonly availableUpgrades: { [key: string]: HandUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly handUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export class HandSize extends React.Component<HandSizeProps> {
  render() {
    return (
      <section className="hand-size-container">
        <div className="hand-size-header heading">
          <h2>Hand Size</h2>
        </div>
        <div className="hand-size-row">
          <div className="hand-size-item">{this.props.defaultSize}</div>
          {Object.keys(this.props.availableUpgrades).map((upgradeId) => {
            const upgrade = this.props.availableUpgrades[upgradeId]!;
            const purchased = this.props.purchasedUpgrades.includes(upgradeId);
            return (
              <div className="hand-size-item">
                <UpgradeBox
                  heroPoints={this.props.heroPoints}
                  onChange={(e) => this.props.handUpgradeHandler(upgradeId, e)}
                  purchased={purchased}
                />
                +{upgrade.modifier}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
