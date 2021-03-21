import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
const Filters = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href="#">All</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Completed</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Like</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Filters;
