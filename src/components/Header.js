import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import logo from '../images/ux_stash.svg';

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 94px;

  a {
    color: ${props => props.theme.offWhite};
  }
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <object type="image/svg+xml" data={logo} />
    <Link to="/">{siteTitle}</Link>
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
