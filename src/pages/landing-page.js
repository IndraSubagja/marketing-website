import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { tsImageUrl } from 'lib/takeshape';

import { useSiteMetadata } from 'hooks';

import logo from 'assets/images/logo--white.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
const Icon = require('@fortawesome/free-solid-svg-icons');

config.autoAddCss = false;

const LandingPage = ({ data = {} }) => {
  const page = data?.takeshape?.getLandingPage || {};
  const backgroundStyle = {
    backgroundImage: `url(${tsImageUrl(page.backgroundImage)})`,
  };
  const { companyName, authorName, authorUrl } = useSiteMetadata();
  const LinkIsExternal = page.button.url.charAt(0) === '/';

  return (
    <>
      <Helmet bodyAttributes={{ class: 'page-landing-page' }}>
        <title>Gatsby Site</title>
        <link rel="author" href="/humans.txt" />
      </Helmet>
      <div className="wrapper">
        <Helmet>
          <title>{page.title}</title>
        </Helmet>

        <main className="main">
          <div className="landing-page landing-page--text" style={backgroundStyle}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt={`${companyName} Logo`} />
              </Link>
            </div>
            <div className="container">
              <div className="landing-page__content">
                <h1>{page.heading}</h1>
                <p>{page.text}</p>
                <form>
                  <input type="text" placeholder="Enter Your Email Address" />
                  {LinkIsExternal && (
                    <Link to={page.button.url} className="button">
                      {page.button.text}
                    </Link>
                  )}
                  {!LinkIsExternal && (
                    <a href={page.button.url} className="button">
                      {page.button.text}
                    </a>
                  )}
                </form>
              </div>

              <div className="thumb-list thumb-list--three">
                <h2 style={{ textAlign: 'center' }}>What Will You Get:</h2>

                <div className="feature">
                  <ul>
                    {page.feature.map((feature, i) => {
                      const text = feature.bodyHtml.match(/<p>(.*?\.)/)[1];
                      return (
                        <li key={`Feature-${i}`}>
                          <div className="feature-item">
                            <div>
                              <FontAwesomeIcon icon={Icon[feature.icon]} size="4x" />
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
                </div>
              </div>
            </div>

            <div className="footer">
              <small>
                &copy; {new Date().getFullYear()}{' '}
                <a href={authorUrl} rel="nofollow">
                  {authorName}
                </a>
              </small>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;

export const pageQuery = graphql`
  query {
    takeshape {
      getLandingPage {
        title
        heading
        text
        backgroundImage {
          path
        }
        button {
          text
          url
        }
        feature {
          title
          icon
          bodyHtml
          _enabledAt
        }
      }
    }
  }
`;
