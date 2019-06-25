import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import logo from '../images/ux_stash.svg';

const MainHeader = styled.header`
  display: grid;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: repeat(6, 1fr);
  }
  grid-column-gap: 20px;
  margin-bottom: 94px;
  padding-top: 45px;

  .site-logo {
    @media (min-width: ${props => props.theme.md}) {
      grid-area: 1 / 1 / 2 / 2;
    }
    display: flex;
    align-items: center;

    > a {
      font-weight: bold;
    }
  }

  nav {
    grid-area: 1 / 2 / 2 / 3;
    @media (min-width: ${props => props.theme.md}) {
      grid-area: 1 / 2 / 2 / 7;
    }
  }

  object {
    margin-right: 16px;
  }

  a {
    color: ${props => props.theme.offWhite};
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <div className="site-logo">
      <object type="image/svg+xml" data={logo} />
      <Link to="/">{siteTitle}</Link>
    </div>
    <Nav />
  </MainHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
