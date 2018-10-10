import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <nav>
            <ul>
              <li className="brand">
                <NavLink to="/" className="logo">
                  <img src="ux_stash.svg" alt="UX Stash Logo" />
                  UX Stash
                </NavLink>
              </li>
              <NavItem
                title="Strategy"
                description="Objectives &amp; Needs"
                to="/strategy"
              />
              <NavItem
                title="Management"
                description="Specs &amp; Requirements"
                to="/management"
              />
              <NavItem
                title="Architecture"
                description="Structure &amp; Interaction"
                to="/architecture"
              />
              <NavItem
                title="Development"
                description="Code &amp; Navigation"
                to="/development"
              />
              <NavItem
                title="Design"
                description="Visuals &amp; Needs"
                to="/design"
              />
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
