import React from "react";
import { Role } from "../model/characters";
import { SectionHeader } from "./section-header";

export interface RolesProps {
  readonly roles: Role[];
  readonly selectedRole?: string;
  readonly collapsed: boolean;
  readonly roleChangedHandler: (r?: Role) => void;
  readonly toggleCollapseHandler: (s: string) => void;
}

export class Roles extends React.Component<RolesProps> {
  selectRole = (roleName?: string) => {
    const role = this.props.roles.find((role) => role.name === roleName);
    this.props.roleChangedHandler(role);
  };

  render() {
    return (
      <section className="roles">
        <SectionHeader
          heading="Role"
          id="roles"
          collapsed={this.props.collapsed}
          toggleCollapseHandler={this.props.toggleCollapseHandler}
        />
        <div
          className={
            "roles-container collapsible" +
            (this.props.collapsed ? " hidden" : "")
          }
        >
          <select
            value={this.props.selectedRole}
            onChange={(e) => this.selectRole(e.currentTarget.value)}
          >
            <option value={undefined}>None</option>
            {this.props.roles.map((role) => {
              return (
                <option value={role.name} key={role.name}>
                  {role.name}
                </option>
              );
            })}
          </select>
        </div>
      </section>
    );
  }
}
