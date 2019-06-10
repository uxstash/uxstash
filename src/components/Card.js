import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  small,
  p {
    opacity: 0.5;
  }

  small {
    font-size: 0.625rem;
    text-transform: uppercase;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.29;
  }
`;

function Card() {
  return (
    <CardWrapper>
      <h3>Accesibility Analysis</h3>
      <small>3 resources</small>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sit
        tenetur minima eligendi totam quae perferendis ab facilis. Harum culpa
        est placeat? Laborum, recusandae numquam autem consequatur suscipit
        culpa. Quo.
      </p>
    </CardWrapper>
  );
}

Card.propTypes = {};

export default Card;
