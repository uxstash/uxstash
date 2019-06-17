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
    <SEO title="Design" />
    <PageHeader
      header={data.contentfulCategory.name}
      subHeader={data.contentfulCategory.shortDescription.shortDescription}
      description={data.contentfulCategory.description.description}
    />
    <GridWrapper>
      {data.contentfulCategory.stash.map(
        stash =>
          stash.article != null && (
            <Card
              key={stash.id}
              name={stash.name}
              slug={stash.slug}
              resourceCount={stash.article.length}
              description={stash.description.description}
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
      stash {
        name
        slug
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
`;
