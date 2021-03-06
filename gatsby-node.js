/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const StashTemplate = path.resolve('src/templates/stash.js');
    const CategoryTemplate = path.resolve('src/templates/category.js');
    resolve(
      graphql(`
        {
          allContentfulStash(
            filter: { article: { elemMatch: { id: { ne: null } } } }
          ) {
            edges {
              node {
                slug
                category {
                  slug
                }
              }
            }
          }
          allContentfulCategory {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.erros);
        }
        result.data.allContentfulStash.edges.forEach((stash) => {
          createPage({
            path: `/category/${stash.node.category.slug}/stash/${
              stash.node.slug
            }/`,
            component: StashTemplate,
            context: {
              slug: stash.node.slug,
            },
          });
        });
        result.data.allContentfulCategory.edges.forEach((category) => {
          createPage({
            path: `/category/${category.node.slug}/`,
            component: CategoryTemplate,
            context: {
              slug: category.node.slug,
            },
          });
        });
      }),
    );
  });
};
