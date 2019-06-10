import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

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
        <ul>
          {data.allContentfulCategory.edges.map(category => (
            <li>{category.node.name}</li>
          ))}
        </ul>
      )}
    />
  );
}

Nav.propTypes = {};
export default Nav;
