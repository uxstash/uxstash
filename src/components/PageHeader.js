import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const HeaderText = styled.div`
  grid-area: 1 / 1 / 2 / 3;

  h1 {
    font-weight: normal;
    font-size: 2.25rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

function PageHeader(props) {
  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>
          {`${props.header}.`}
          {!!props.subHeader && (
            <>
              <br />
              {`${props.subHeader}.`}
            </>
          )}
        </h1>

        <p>{props.description}</p>
      </HeaderText>
    </HeaderWrapper>
  );
}

export default PageHeader;
