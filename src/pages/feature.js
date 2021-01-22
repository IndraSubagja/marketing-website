import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';

import Layout from 'components/Layout';

const FeaturePage = ({ data = {} }) => {
  const page = data?.takeshape?.getFeatureList || {};
  console.log(data);

  return (
    <Layout pageName="feature">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <header className="header">
        <h1>Feature</h1>
      </header>

      <div className="feature-list">
        <div className="container">
          <ul>
            {page.items.map((feature, i) => {
              return (
                <li key={`Feature-${i}`}>
                  <div className="tout">
                    <div>
                      <img src={tsImageUrl(feature.featureImage)} alt="" />
                    </div>

                    <div className="tout__content">
                      <h3>{feature.title}</h3>
                      <div className="feature__content" dangerouslySetInnerHTML={{ __html: feature.bodyHtml }} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturePage;

export const pageQuery = graphql`
  query {
    takeshape {
      getFeatureList(sort: [{ field: "_enabledAt", order: "asc" }]) {
        total
        items {
          _contentTypeName
          _enabledAt
          title
          featureImage {
            path
          }
          icon
          bodyHtml
        }
      }
    }
  }
`;
