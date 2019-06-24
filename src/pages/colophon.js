import React from 'react';
import { Link, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/PageHeader';

function Colophon({ data }) {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <PageHeader header="Colophon" />
      <p>This site was developed using the following:</p>
      <ul>
        <li>
          <OutboundLink href="https://www.gatsbyjs.org/">Gatsby</OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.netlify.com/">Netflify</OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.sketch.com/">Sketch</OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://zeplin.io/">Zeplin</OutboundLink>
        </li>
      </ul>
      <p>The typeface used is Helvetica Neue on an 6-column grid.</p>
    </Layout>
  );
}

export const query = graphql`
  query ColophonQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default Colophon;
