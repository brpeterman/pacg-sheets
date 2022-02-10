import React from "react";
import { Power, PowerUpgrade } from "../model/characters";

export interface PowersProps {
  readonly powers: Power[];
  readonly powerUpgrades: PowerUpgrade[];
}

export class Powers extends React.Component<PowersProps> {
  constructor(props: PowersProps) {
    super(props);
  }

  render() {
    return <div></div>
  }
}
