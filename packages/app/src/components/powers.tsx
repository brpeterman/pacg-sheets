import React from "react";
import { UpgradeBox } from ".";
import { Power, PowerUpgrade } from "../model/characters";

export interface PowersProps {
  readonly powers: Power[];
  readonly availableUpgrades: PowerUpgrade[];
  readonly purchasedUpgrades: PowerUpgrade[];
  readonly heroPoints: number;
  readonly powerUpgradeHandler: (
    u: PowerUpgrade,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
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
      const purchased = false;
      segments.push(
        <UpgradeBox
          disabled={this.props.heroPoints < 1}
          onChange={(e) => this.props.powerUpgradeHandler(upgrade, e)}
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
        <div className="powers-header heading">
          <h2>Powers</h2>
        </div>
        {this.props.powers.map((power) => {
          return (
            <div className="power-item">
              {this.powerToSegments(power).map((segment) => segment)}
            </div>
          );
        })}
      </section>
    );
  }
}
