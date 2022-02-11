import React from "react";

export interface UpgradeBoxProps {
  readonly purchased: boolean;
  readonly heroPoints: number;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export class UpgradeBox extends React.Component<UpgradeBoxProps> {
  render() {
    return (
      <input
        type="checkbox"
        className="upgrade-box"
        checked={this.props.purchased}
        disabled={this.props.heroPoints < 1 && !this.props.purchased}
        onChange={this.props.onChange}
      />
    );
  }
}
