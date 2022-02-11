import React from "react";

export interface UpgradeBoxProps {
  readonly purchased: boolean;
  readonly disabled: boolean;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export class UpgradeBox extends React.Component<UpgradeBoxProps> {
  render() {
    return (
      <input
        disabled={this.props.disabled}
        type="checkbox"
        className="upgrade-box"
        onChange={this.props.onChange}
      />
    );
  }
}
