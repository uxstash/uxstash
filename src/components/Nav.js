import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    margin: 0;
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
              <li>{category.node.name}</li>
            ))}
          </ul>
        </NavBar>
      )}
    />
  );
}

Nav.propTypes = {};
export default Nav;
