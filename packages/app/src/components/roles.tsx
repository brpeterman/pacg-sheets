import React from "react";
import { Role } from "../model/characters";

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
        <div
          className="heading"
          onClick={() => this.props.toggleCollapseHandler("roles")}
        >
          <h2>Role</h2>
        </div>
        <div className="roles-container">
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
