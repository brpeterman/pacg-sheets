import React from "react";

export interface UpgradeBoxProps {
  readonly upgrade: any;
  readonly purchased: boolean;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export class UpgradeBox extends React.Component<UpgradeBoxProps> {
  constructor(props: UpgradeBoxProps) {
    super(props);
  }

  render() {
    return (
      <input
        type="checkbox"
        className="upgrade-box"
        onChange={this.props.onChange}
      />
    );
  }
}
