import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CardWrapper = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  hr {
    margin: 20px 0;
  }

  small,
  p {
    opacity: 0.5;
  }

  small {
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`;

const CardDescription = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  p {
    margin: 0;
  }
`;

function Card(props) {
  return (
    <CardWrapper>
      <h3>
        <Link to={`/category/${props.category}/stash/${props.slug}/`}>
          {props.name}
        </Link>
      </h3>
      <small>{`${props.resourceCount} resources`}</small>
      <hr />
      <CardDescription>
        <p>{props.description}</p>
      </CardDescription>
    </CardWrapper>
  );
}

Card.propTypes = {};

export default Card;
