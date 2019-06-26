import React from 'react';
import Helmut from 'react-helmet';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import GridWrapper from '../components/styles/GridWrapper';
import Card from '../components/Card';

export default ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: data.contentfulCategory.slug }} />
    <SEO
      title={data.contentfulCategory.name}
      description={data.contentfulCategory.description.description}
    />
    <PageHeader
      header={data.contentfulCategory.name}
      subHeader={data.contentfulCategory.shortDescription.shortDescription}
      description={data.contentfulCategory.description.description}
    />
    <GridWrapper>
      {data.allContentfulStash.edges.map(
        stash =>
          stash.node.article != null && (
            <Card
              key={stash.node.id}
              name={stash.node.name}
              slug={stash.node.slug}
              category={stash.node.category.slug}
              resourceCount={stash.node.article.length}
              description={stash.node.description.description}
            />
          )
      )}
    </GridWrapper>
  </Layout>
);

export const query = graphql`
  query CategoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
      shortDescription {
        shortDescription
      }
      description {
        description
      }
    }
    allContentfulStash(
      filter: { category: { slug: { eq: $slug } } }
      sort: { fields: name }
    ) {
      edges {
        node {
          name
          slug
          description {
            description
          }
          id
          article {
            id
          }
          category {
            slug
          }
        }
      }
    }
  }
`;
