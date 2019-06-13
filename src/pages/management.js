import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import GridWrapper from '../components/styles/GridWrapper';

function ManagementPage({ data }) {
  return (
    <Layout>
      <SEO title="Management" />
      <PageHeader
        header={data.contentfulCategory.name}
        subHeader={data.contentfulCategory.shortDescription.shortDescription}
        description={data.contentfulCategory.description.description}
      />
      <GridWrapper>
        {data.allContentfulStash.edges.map(
          stash => stash.node.article != null && (
              <Card
                key={stash.node.id}
                name={stash.node.name}
                resourceCount={stash.node.article.length}
                description={stash.node.description.description}
              />
            ),
        )}
      </GridWrapper>
    </Layout>
  );
}

export const query = graphql`
  query ManagementQuery {
    allContentfulStash(
      limit: 10
      sort: { fields: name }
      filter: { category: { slug: { eq: "management" } } }
    ) {
      edges {
        node {
          name
          description {
            description
          }
          id
          article {
            id
          }
        }
      }
    }
    contentfulCategory(name: { eq: "Management" }) {
      name
      shortDescription {
        shortDescription
      }
      description {
        description
      }
    }
  }
`;

export default ManagementPage;
