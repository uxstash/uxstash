import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ModernNormalize from 'modern-normalize';

const theme = {
  offWhite: '#fffae1',
  gunmetal: '#4b5f5f',
  steel: '#818488',
  purpleBrown: '#643741',
  purplishBrown: '#463741',
  brownishPurple: '#823741',
  lightBurgundy: '#a03741',
  dark: '#263238',
};

const GlobalStyle = createGlobalStyle`
${ModernNormalize}
  body {
    background-color: ${props => props.theme.dark};
  }
`;

function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        {children}
      </div>
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
