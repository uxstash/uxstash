import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';

const MainFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  margin-bottom: 60px;
`;

const About = styled.div`
  grid-area: 1 / 1/ 2/ 4;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: flex-end;
  height: 32px;
  margin-top: auto;

  a {
    color: ${props => props.theme.offWhite};
    opacity: 0.5;
    margin-right: 10px;
  }
`;

const LastUpdates = styled.div`
  grid-area: 1 / 5 / 2 / 7;

  dl {
    margin-bottom: 0;
  }

  dd {
    opacity: 0.5;
    margin-left: 0;
    margin-bottom: 30px;
  }

  span:last-child dd {
    margin-bottom: 0;
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
                id
                createdAt
                stash {
                  name
                  id
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
            <SocialLinks>
              <OutboundLink
                href="https://twitter.com/ux_stash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faTwitter} />
              </OutboundLink>
              <OutboundLink
                href="https://github.com/uxstash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faGithub} />
              </OutboundLink>
              <OutboundLink
                href="https://medium.com/@ux_stash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faMediumM} />
              </OutboundLink>
              <Link to="/colophon">Colophon</Link>
            </SocialLinks>
          </About>
          <LastUpdates>
            <h4>Last Updates</h4>
            <dl>
              {data.allContentfulArticle.edges.map(article => (
                <span key={article.node.id}>
                  <dt>{article.node.title}</dt>
                  <dd>{article.node.stash.name}</dd>
                </span>
              ))}
            </dl>
          </LastUpdates>
        </MainFooter>
      )}
    />
  );
}

export default Footer;
