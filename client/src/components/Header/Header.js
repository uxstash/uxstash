import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import './header.scss';

class Header extends React.Component {

  getActiveListItem = path => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {

    return (
      <header className="main-header">
        <div className="container">
          <nav>
            <ul>
              <li className="brand">
                <NavLink to="/" className="logo">
                  <img src="ux_stash.svg" />
                  UX Stash
                </NavLink>
              </li>
              <li className={this.getActiveListItem('/strategy')}>
                <NavLink to="/strategy">
                  Strategy
                  <small>
                    Objectives &amp; Needs
                  </small>
                </NavLink>
              </li>
              <li className={this.getActiveListItem('/management')}>
                <NavLink to="/management">
                  Management
                  <small>
                    Specs &amp; Requirements
                  </small>
                </NavLink>
              </li>
              <li className={this.getActiveListItem('/architecture')}>
                <NavLink to="/architecture">
                  Architecture
                  <small>
                    Structure &amp; Interaction
                  </small>
                </NavLink>
              </li>
              <li className={this.getActiveListItem('/development')}>
                <NavLink to="/development">
                  Development
                  <small>
                    Code &amp; Navigation
                  </small>
                </NavLink>
              </li>
              <li className={this.getActiveListItem('/design')}>
                <NavLink to="/design">
                  Design
                  <small>
                    Visual &amp; Interface
                  </small>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

Header = withRouter(Header);

export default Header;