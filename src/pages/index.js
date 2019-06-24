import React from 'react';
import { Link, graphql } from 'gatsby';
import GridWrapper from '../components/styles/GridWrapper';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <PageHeader
        header="UX curated design collections"
        description={data.site.siteMetadata.description}
      />
      <GridWrapper>
        {data.allContentfulStash.edges.map(stash => (
          <Card
            key={stash.node.id}
            name={stash.node.name}
            slug={stash.node.slug}
            resourceCount={stash.node.article.length}
            description={stash.node.description.description}
          />
        ))}
      </GridWrapper>
    </Layout>
  );
}

export const query = graphql`
  query StashesQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allContentfulStash(
      sort: { fields: name }
      filter: { article: { elemMatch: { id: { ne: null } } } }
    ) {
      edges {
        node {
          name
          id
          slug
          description {
            description
          }
          article {
            id
          }
        }
      }
    }
  }
`;

export default IndexPage;
