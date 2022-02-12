import React from "react";
import { UpgradeBox } from ".";
import { Power, PowerUpgrade } from "../model/characters";

export interface PowersProps {
  readonly powers: Power[];
  readonly availableUpgrades: PowerUpgrade[];
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly powerUpgradeHandler: (
    u: string,
    p: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Powers extends React.Component<PowersProps> {
  powerToSegments(power: Power): any[] {
    const matches = power.description.match(/\{\w+?\}/g);
    if (!matches) {
      return [power.description];
    }

    const segments: any[] = [];
    let lastIndex = 0;
    matches.forEach((match) => {
      const placeholderStart = power.description.indexOf(match);
      const textSegment = power.description.substring(
        lastIndex,
        placeholderStart
      );
      if (textSegment.length > 0) {
        segments.push(textSegment);
      }
      lastIndex = placeholderStart + match.length;
      // Make an UpgradeBox for the placeholder
      const upgradeId = match.substring(1, match.length - 1);
      const upgrade = (this.props.availableUpgrades.filter(
        (upgrade) =>
          upgrade.powerId === power.powerId && upgrade.upgradeId === upgradeId
      ) || [])[0];
      if (!upgrade) {
        throw new Error(
          `Tried to populate placeholder ${upgradeId} on ${power.powerId} but didn't find a matching upgrade.`
        );
      }
      const purchased = this.props.purchasedUpgrades.includes(
        `${power.powerId}|${upgradeId}`
      );
      segments.push(
        <UpgradeBox
          heroPoints={this.props.heroPoints}
          onChange={(e) =>
            this.props.powerUpgradeHandler(upgradeId, power.powerId, e)
          }
          purchased={purchased}
        />
      );
    });
    if (lastIndex < power.description.length - 1) {
      segments.push(
        power.description.substring(lastIndex, power.description.length)
      );
    }
    return segments;
  }

  render() {
    return (
      <section className="powers-container">
        <div
          className="powers-header heading"
          onClick={() => this.props.toggleCollapseHandler("powers")}
        >
          <h2>Powers</h2>
        </div>
        <div className={this.props.collapsed ? "hidden" : ""}>
          {this.props.powers.map((power) => {
            return (
              <p className="power-item" key={power.powerId}>
                {this.powerToSegments(power)}
              </p>
            );
          })}
        </div>
      </section>
    );
  }
}
