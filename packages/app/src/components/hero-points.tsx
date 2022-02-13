import React from "react";
import { SectionHeader } from "./section-header";

export interface HeroPointsProps {
  readonly points: number;
  readonly collapsed: boolean;
  readonly pointsChangeHandler: (d: number) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class HeroPoints extends React.Component<HeroPointsProps> {
  render() {
    return (
      <section className="hero-points-container">
        <SectionHeader
          heading="Hero Points"
          id="heroPoints"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={
            "hero-points-row collapsible" +
            (this.props.collapsed ? " hidden" : "")
          }
        >
          <div
            className="hero-points-minus"
            onClick={() => this.props.pointsChangeHandler(-1)}
          >
            &#8211;
          </div>
          <div className="hero-points-display">{this.props.points}</div>
          <div
            className="hero-points-plus"
            onClick={() => this.props.pointsChangeHandler(1)}
          >
            +
          </div>
        </div>
      </section>
    );
  }
}
