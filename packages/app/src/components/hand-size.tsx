import React from "react";
import { UpgradeBox } from ".";
import { HandUpgrade } from "../model/characters";

export interface HandSizeProps {
  readonly defaultSize: number;
  readonly availableUpgrades: { [key: string]: HandUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly handUpgradeHandler: (
    u: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class HandSize extends React.Component<HandSizeProps> {
  render() {
    const handSizeModifier = Object.keys(this.props.availableUpgrades)
      .filter((upgradeId) => this.props.purchasedUpgrades.includes(upgradeId))
      .map((upgradeId) => this.props.availableUpgrades[upgradeId]!)
      .reduce((sum, current) => sum + current.modifier, 0);
    return (
      <section className="hand-size-container">
        <div
          className="hand-size-header heading"
          onClick={() => this.props.toggleCollapseHandler("handSize")}
        >
          <h2>Hand Size</h2>
        </div>
        <div className={this.props.collapsed ? "hidden" : ""}>
          <div className="hand-size-row">
            <div className="hand-size-item">
              {this.props.defaultSize + handSizeModifier}
            </div>
            {Object.keys(this.props.availableUpgrades).map((upgradeId) => {
              const upgrade = this.props.availableUpgrades[upgradeId]!;
              const purchased =
                this.props.purchasedUpgrades.includes(upgradeId);
              return (
                <div className="hand-size-item" key={upgradeId}>
                  <UpgradeBox
                    heroPoints={this.props.heroPoints}
                    onChange={(e) =>
                      this.props.handUpgradeHandler(upgradeId, e)
                    }
                    purchased={purchased}
                  />
                  +{upgrade.modifier}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
