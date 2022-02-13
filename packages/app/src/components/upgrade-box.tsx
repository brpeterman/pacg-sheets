import React from "react";

export interface UpgradeBoxProps {
  readonly purchased: boolean;
  readonly heroPoints: number;
  readonly upgradeId: string;
  readonly label?: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export class UpgradeBox extends React.Component<UpgradeBoxProps> {
  render() {
    return (
      <div className="upgrade-checkbox">
        <input
          id={this.props.upgradeId}
          type="checkbox"
          className="upgrade-box"
          checked={this.props.purchased}
          disabled={this.props.heroPoints < 1 && !this.props.purchased}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.upgradeId}>
          {this.props.label || (this.props.purchased ? "✔" : <>&nbsp;</>)}
        </label>
      </div>
    );
  }
}
