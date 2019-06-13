import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridWrapper;
