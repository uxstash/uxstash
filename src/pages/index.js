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
        header="UX curated design collections. A hand-picked glossary of theories, tools
        and principles"
        description=" Many of us are so used to working on a computer desktop that when it
        comes time to purchase a new computer, we don’t consider other options.
        Today, computer notebooks – which were once called laptops – offer a
        number of advantages over a computer desktop. Here are just five reasons
        why you should take a second look at notebooks."
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
