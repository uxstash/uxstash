import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import "./header.scss";
import categories from "../../data/categories";

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <nav>
            <ul>
              <li className="brand">
                <NavLink to="/" className="logo">
                  <img src="/ux_stash.svg" alt="UX Stash Logo" />
                  UX Stash
                </NavLink>
              </li>
              {categories.map((category, index) => {
                return (
                  <NavItem
                    title={category.title}
                    subtitle={category.subtitle}
                    to={`/${category.title.toLowerCase()}`}
                    key={index}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
