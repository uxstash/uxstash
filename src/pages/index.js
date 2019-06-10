import React from 'react';
import { Link, graphql } from 'gatsby';
import GridWrapper from '../components/styles/GridWrapper';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Card from '../components/Card';

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        UX curated design collections. A hand-picked glossary of theories, tools
        and principles.
      </h1>
      <p>
        Many of us are so used to working on a computer desktop that when it
        comes time to purchase a new computer, we don’t consider other options.
        Today, computer notebooks – which were once called laptops – offer a
        number of advantages over a computer desktop. Here are just five reasons
        why you should take a second look at notebooks.
      </p>
      <GridWrapper>
        {data.allContentfulStash.edges.map(stash => (
          <Card
            key={stash.node.id}
            name={stash.node.name}
            resourceCount={stash.node.article.length}
            description={stash.node.description.description}
          />
        ))}
      </GridWrapper>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export const query = graphql`
  query StashesQuery {
    allContentfulStash(limit: 6, sort: { fields: name }) {
      edges {
        node {
          name
          id
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
