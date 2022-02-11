import React from "react";

export interface HeroPointsProps {
  readonly points: number;
  readonly pointsChangeHandler: (d: number) => void;
}

export class HeroPoints extends React.Component<HeroPointsProps> {
  render() {
    return (
      <section className="hero-points-container heading">
        <h2>Hero points</h2>
        <div
          className="hero-points-minus"
          onClick={() => this.props.pointsChangeHandler(-1)}
        >
          -
        </div>
        <div className="hero-points-display">{this.props.points}</div>
        <div
          className="hero-points-plus"
          onClick={() => this.props.pointsChangeHandler(1)}
        >
          +
        </div>
      </section>
    );
  }
}
