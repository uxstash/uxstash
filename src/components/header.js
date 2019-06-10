import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';

const MainHeader = styled.header`
  color: ${props => props.theme.offWhite};

  a {
    color: ${props => props.theme.offWhite};
  }
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <div>
      <Link to="/">{siteTitle}</Link>
      <Nav />
    </div>
  </MainHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
