import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import "./header.scss";

class Header extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getCategories() {
    this.fetch('/api/v1/categories')
      .then(categories => {
        if (categories.length) {
          this.setState({categories})
        }
      })
  }

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
              {this.state.categories.map((category, index) => {
                return (
                  <NavItem
                    title={category.name}
                    subtitle={category.description}
                    to={`/${category.name.toLowerCase()}`}
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
