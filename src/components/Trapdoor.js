import React from 'react';
import { Link } from 'gatsby';

const Trapdoor = ({ heading, contact = {}, signup = {} }) => {
  const { text: contactText, button: contactButton } = contact;
  const { text: signupText, button: signupButton } = signup;

  return (
    <div className="trapdoor">
      <div className="container">
        <h1>{heading}</h1>

        <div className="trapdoor-items">
          <div className="contact">
            <p>{contactText}</p>
            <Link to={contactButton.url} className="button">
              {contactButton.text}
            </Link>
          </div>
          <div className="signup">
            <p>{signupText}</p>
            <Link to={signupButton.url} className="button">
              {signupButton.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trapdoor;
