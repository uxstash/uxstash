/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const template = path.resolve('src/templates/stash.js');
    resolve(
      graphql(`
        {
          allContentfulStash(filter: { slug: { ne: null } }) {
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
            path: `stash/${stash.node.slug}`,
            component: template,
            context: {
              slug: stash.node.slug,
            },
          });
        });
      }),
    );
  });
};
