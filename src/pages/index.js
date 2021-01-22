import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';

import Layout from 'components/Layout';
import Trapdoor from 'components/Trapdoor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
const Icon = require('@fortawesome/free-solid-svg-icons');

config.autoAddCss = false;

const IndexPage = ({ data = {} }) => {
  const page = data?.takeshape?.getHomepage || {};
  const { trapdoor } = page;

  const heroStyles = {
    backgroundImage: `url('${tsImageUrl(page.hero.image)}')`,
  };
  const heroLinkIsExternal = page.hero.button.url.charAt(0) === '/';

  return (
    <Layout pageName="home">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <div className="hero hero--text" style={heroStyles}>
        <div className="container">
          <div className="hero__content">
            <h1>{page.hero.heading}</h1>
            {heroLinkIsExternal && (
              <Link to={page.hero.button.url} className="button">
                {page.hero.button.text}
              </Link>
            )}
            {!heroLinkIsExternal && (
              <a href={page.hero.button.url} className="button">
                {page.hero.button.text}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="content-block">
        <div className="container">
          <div>
            <h2>{page.introduction.heading}</h2>
            <p>{page.introduction.text}</p>
          </div>

          <div>
            <img src={tsImageUrl(page.introduction.image)} alt="intro" />
          </div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="container">
          <ul>
            {page.statBar.map((stat, i) => {
              return (
                <li key={`StatBar-${i}`}>
                  <h1>{stat.value}</h1>
                  <p>{stat.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="thumb-list thumb-list--three">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Features</h2>

          <div className="feature">
            <ul>
              {page.feature.map((feature, i) => {
                const text = feature.bodyHtml.match(/<p>(.*?\.)/)[1];
                return (
                  <li key={`Feature-${i}`}>
                    <div className="feature-item">
                      <div>
                        <FontAwesomeIcon icon={Icon[feature.icon]} size="6x" />
                      </div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{text}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link to="/feature" className="button button--dark">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <Trapdoor {...trapdoor} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    takeshape {
      getHomepage {
        title
        hero {
          image {
            path
          }
          heading
          button {
            text
            url
          }
        }
        introduction {
          image {
            path
          }
          heading
          text
        }
        statBar {
          value
          label
        }
        feature {
          title
          icon
          bodyHtml
          _enabledAt
        }
        trapdoor {
          heading
          contact {
            button {
              text
              url
            }
            text
          }
          signup {
            button {
              text
              url
            }
            text
          }
        }
      }
    }
  }
`;
