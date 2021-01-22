// const path = require('path');

// const routes = require('./src/lib/routes');

// const createFeatureError = 'Could not create post pages';

exports.createPages = async ({ actions, graphql }) => {
  // const { createPage } = actions;
  // const featureTemplate = path.resolve(`./src/templates/feature.js`);
  // const { data, errors } = await graphql(`
  //   query {
  //     takeshape {
  //       takeshape {
  //         getSignup {
  //           title
  //           heading
  //         }
  //         getLandingPage {
  //           title
  //           heading
  //           text
  //           backgroundImage {
  //             path
  //           }
  //           button {
  //             text
  //             url
  //           }
  //           feature {
  //             title
  //             icon
  //             bodyHtml
  //             _enabledAt
  //           }
  //         }
  //       }
  //       getHomepage {
  //         title
  //         hero {
  //           image {
  //             path
  //           }
  //           heading
  //           button {
  //             text
  //             url
  //           }
  //         }
  //         introduction {
  //           image {
  //             path
  //           }
  //           heading
  //           text
  //         }
  //         statBar {
  //           value
  //           label
  //         }
  //         feature {
  //           title
  //           featureImage {
  //             path
  //           }
  //           icon
  //           bodyHtml
  //           _enabledAt
  //         }
  //         trapdoor {
  //           heading
  //           contact {
  //             button {
  //               text
  //               url
  //             }
  //             text
  //           }
  //           signup {
  //             button {
  //               text
  //               url
  //             }
  //             text
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // if (errors) throw errors;
  // const features = data.takeshape.getFeatureList && data.takeshape.getFeatureList.items;
  // if (!Array.isArray(features)) {
  //   throw new Error(`${createFeatureError}: Invalid features`);
  // }
  // features.forEach(({ _id, title }) => {
  //   createPage({
  //     path: routes.feature(title),
  //     component: featureTemplate,
  //     context: {
  //       featureId: _id,
  //     },
  //   });
  // });
};
