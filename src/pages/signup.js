import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';

const SignupPage = ({ data = {} }) => {
  const page = data?.takeshape?.getSignup || {};

  return (
    <Layout pageName="signup">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <h1>{page.heading}</h1>

          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit" className="button">
              Signup
            </button>
          </form>
        </div>
      </header>
    </Layout>
  );
};

export default SignupPage;

export const pageQuery = graphql`
  query {
    takeshape {
      getSignup {
        title
        heading
      }
    }
  }
`;
