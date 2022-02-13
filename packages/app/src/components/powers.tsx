import React from "react";
import { UpgradeBox } from ".";
import { Power } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface PowersProps {
  readonly powers: { [key: string]: Power };
  readonly purchasedUpgrades: string[];
  readonly heroPoints: number;
  readonly collapsed: boolean;
  readonly powerUpgradeHandler: (u: string, p: string) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Powers extends React.Component<PowersProps> {
  powerToSegments(powerId: string, power: Power): JSX.Element[] {
    const matches = power.description.match(/\{[\w-]+?\}/g);
    if (!matches) {
      return [<span>{power.description}</span>];
    }

    const segments: JSX.Element[] = [];
    let lastIndex = 0;
    matches.forEach((match) => {
      const placeholderStart = power.description.indexOf(match);
      const textSegment = power.description.substring(
        lastIndex,
        placeholderStart
      );
      if (textSegment.length > 0) {
        segments.push(<span>{textSegment}</span>);
      }
      lastIndex = placeholderStart + match.length;
      // Make an UpgradeBox for the placeholder
      const upgradeId = match.substring(1, match.length - 1);
      const upgrade = (power.upgrades?.filter(
        (powerUpgrade) => powerUpgrade === upgradeId
      ) || [])[0];
      if (!upgrade) {
        throw new Error(
          `Tried to populate placeholder ${upgradeId} on ${powerId} but didn't find a matching upgrade.`
        );
      }
      const purchased = this.props.purchasedUpgrades.includes(
        `${powerId}|${upgradeId}`
      );
      segments.push(
        <UpgradeBox
          upgradeId={`${powerId}|${upgradeId}`}
          heroPoints={this.props.heroPoints}
          onChange={(e) => this.props.powerUpgradeHandler(upgradeId, powerId)}
          purchased={purchased}
        />
      );
    });
    if (lastIndex < power.description.length - 1) {
      segments.push(
        <span>
          {power.description.substring(lastIndex, power.description.length)}
        </span>
      );
    }
    return segments;
  }

  render() {
    return (
      <section className="powers-container">
        <SectionHeader
          heading="Powers"
          id="powers"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={"collapsible" + (this.props.collapsed ? " hidden" : "")}
        >
          {Object.keys(this.props.powers).map((powerId) => {
            const power = this.props.powers[powerId];
            return (
              <p className="power-item" key={powerId}>
                {this.powerToSegments(powerId, power)}
              </p>
            );
          })}
        </div>
      </section>
    );
  }
}
