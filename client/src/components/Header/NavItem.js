import React from "react";
import { NavLink, withRouter } from "react-router-dom";

export const NavItem = props => {
  return (
    <li className={props.to === props.location.pathname ? "active" : ""}>
      <NavLink to={props.to}>
        {props.title}
        <small>{props.subtitle}</small>
      </NavLink>
    </li>
  );
};

NavItem.defaultProps = {
  to: "/",
  title: "",
  subtitle: ""
};

export default withRouter(NavItem);
