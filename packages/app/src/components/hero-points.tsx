import React from "react";

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
        <div
          className="heading"
          onClick={() => this.props.toggleCollapseHandler("heroPoints")}
        >
          <h2>Hero points</h2>
        </div>
        <div
          className={
            "hero-points-row " + (this.props.collapsed ? "hidden" : "")
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
