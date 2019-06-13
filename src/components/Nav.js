import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    align-items: center;
    padding-left: 0;
    margin: 0;
    height: 100%;
  }

  li {
  }

  small {
    display: block;
    opacity: 0.5;
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
  }
`;

function Nav() {
  return (
    <StaticQuery
      query={graphql`
        query NavQuery {
          allContentfulCategory {
            edges {
              node {
                name
                shortDescription {
                  shortDescription
                }
              }
            }
          }
        }
      `}
      render={data => (
        <NavBar>
          <ul>
            {data.allContentfulCategory.edges.map(category => (
              <li>
                {category.node.name}
                <small>{category.node.shortDescription.shortDescription}</small>
              </li>
            ))}
          </ul>
        </NavBar>
      )}
    />
  );
}

Nav.propTypes = {};
export default Nav;
