import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  margin-bottom: 170px;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridWrapper;
