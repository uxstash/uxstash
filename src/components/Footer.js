import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const MainFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
`;

const About = styled.div`
  grid-area: 1 / 1/ 2/ 4;
`;

const LastUpdates = styled.div`
  grid-area: 1 / 5 / 2 / 7;

  dd {
    opacity: 0.5;
    margin-left: 0;
    margin-bottom: 30px;
  }
`;

function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allContentfulArticle(
            limit: 3
            sort: { fields: createdAt, order: DESC }
          ) {
            edges {
              node {
                title
                createdAt
                stash {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <MainFooter>
          <About>
            <h4>About</h4>
            <p>
              Why UX Stash? Because we wanted a clean and colorful place for all
              the theories, tools and principles we could never seem to
              remember. If you like the site or have a suggestion, drop us a
              line at info@uxstash.io. Feedback is always welcome and much
              appreciated.
            </p>
          </About>
          <LastUpdates>
            <h4>Last Updates</h4>
            <dl>
              {data.allContentfulArticle.edges.map(article => (
                <>
                  <dt>{article.node.title}</dt>
                  <dd>{article.node.stash.name}</dd>
                </>
              ))}
            </dl>
          </LastUpdates>
        </MainFooter>
      )}
    />
  );
}

export default Footer;
