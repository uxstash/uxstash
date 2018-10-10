import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const NavItem = props => {
  return (
    <li className={props.to === props.location.pathname ? "active" : ""}>
      <NavLink to={props.to}>
        {props.title}
        <small>{props.description}</small>
      </NavLink>
    </li>
  );
};

NavItem.defaultProps = {
  to: "/",
  title: "",
  description: ""
};

export default withRouter(NavItem);
