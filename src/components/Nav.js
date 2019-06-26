import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
  ul {
    list-style: none;
    display: grid;
    @media (min-width: ${props => props.theme.md}) {
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 20px;
    }
    grid-row-gap: 20px;
    align-items: center;
    padding-left: 0;
    margin: 0;
    height: 100%;
  }

  li {
    padding-bottom: 18px;
  }

  .active-nav {
    li {
      border-bottom: solid 1px ${props => props.theme.offWhite};
    }
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
          allContentfulCategory(sort: { fields: order }) {
            edges {
              node {
                name
                id
                slug
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
              <Link
                activeClassName="active-nav"
                to={`/category/${category.node.slug}`}
                key={category.node.id}
              >
                <li>
                  {category.node.name}
                  <small>
                    {category.node.shortDescription.shortDescription}
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </NavBar>
      )}
    />
  );
}

Nav.propTypes = {};
export default Nav;
