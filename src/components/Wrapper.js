import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ModernNormalize from 'modern-normalize';

const theme = {
  offWhite: '#fffae1',
  offWhite10: 'rgba(255, 250, 225, 0.1)',
  gunmetal: '#4b5f5f',
  steel: '#818488',
  purpleBrown: '#643741',
  purplishBrown: '#463741',
  brownishPurple: '#823741',
  lightBurgundy: '#a03741',
  dark: '#263238',
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const GlobalStyle = createGlobalStyle`
${ModernNormalize}
  body {
    color: ${props => props.theme.offWhite};
    background-color: ${props => props.theme.dark};
    font-family: 'Helvetica Neue';
    line-height: 1.29;

    &.strategy {
      background-color: ${props => props.theme.gunmetal};
    }

    &.management {
      background-color: ${props => props.theme.purplishBrown};
    }

    &.architecture {
      background-color: ${props => props.theme.purpleBrown};
    }

    &.development {
      background-color: ${props => props.theme.brownishPurple};
    }

    &.design {
      background-color: ${props => props.theme.lightBurgundy};
    }
  }

  h4 {
    font-size: 0.625rem;
    opacity: 0.5;
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  p, dl, table {
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.offWhite}

    &:hover {
      opacity: 0.5;
    }
  }
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding-right: 42px;
  padding-left: 42px;
  margin-right: auto;
  margin-left: auto;
`;

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {children}
      </Container>
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
