import React from "react";
import { UpgradeBox } from ".";
import { Hand, ModifierUpgrade } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface HandSizeProps {
  readonly hand: Hand;
  readonly availableUpgrades: { [key: string]: ModifierUpgrade };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly handUpgradeHandler: (u: string) => void;
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
        <SectionHeader
          heading="Hand Size"
          id="handSize"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={"collapsible" + (this.props.collapsed ? " hidden" : "")}
        >
          <div className="hand-size-row">
            <div className="hand-size-item">
              {this.props.hand.count + handSizeModifier}
            </div>
            {Object.keys(this.props.availableUpgrades).map((upgradeId) => {
              const upgrade = this.props.availableUpgrades[upgradeId]!;
              const purchased =
                this.props.purchasedUpgrades.includes(upgradeId);
              return (
                <div className="hand-size-item" key={upgradeId}>
                  <UpgradeBox
                    upgradeId={upgradeId}
                    heroPoints={this.props.heroPoints}
                    label={`+${upgrade.modifier}`}
                    onChange={(e) => this.props.handUpgradeHandler(upgradeId)}
                    purchased={purchased}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
