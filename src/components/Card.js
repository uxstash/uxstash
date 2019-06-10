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

function Card(props) {
  return (
    <CardWrapper>
      <h3>{props.name}</h3>
      <small>{`${props.resourceCount} resources`}</small>
      <hr />
      <p>{props.description}</p>
    </CardWrapper>
  );
}

Card.propTypes = {};

export default Card;
