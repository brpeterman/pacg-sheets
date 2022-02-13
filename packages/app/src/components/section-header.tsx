import React from "react";

interface SectionHeaderProps {
  readonly heading: string;
  readonly id: string;
  readonly collapsed: boolean;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class SectionHeader extends React.Component<SectionHeaderProps> {
  render() {
    return (
      <div
        className="heading"
        onClick={() => this.props.toggleCollapseHandler(this.props.id)}
      >
        <h2>{this.props.heading}</h2>
        <div className="expand-collapse-icon">
          {this.props.collapsed ? "+" : <>&#8211;</>}
        </div>
      </div>
    );
  }
}
