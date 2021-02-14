import React, { useEffect, useState } from "react";

import bgImage from "../img/water.jpg";
import starterImg from "../img/test.jpg";
import logo from "../img/hp-logo_white.png";
import hexa from "../img/hexagon_line.png";
import { Link } from "gatsby";

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";

export const IndexPageTemplate = ({ links }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
      console.log("Hello");
    }, 5000);
  }, []);

  return (
    <div className="IndexPage">
      <div
        className={`IndexPage__wrapper${
          !showIntro ? " IndexPage__wrapper--show" : ""
        }`}
      >
        <div className="IndexPage__bg-image">
          <img src={bgImage} alt="Poool" />
        </div>
        <div className="IndexPage__content">
          <div className="IndexPage__menu-left">
            {links &&
              links.map((link, index) => {
                if (index < 3) {
                  return (
                    <Link
                      key={index}
                      className="IndexPage__link"
                      to={link.path}
                    >
                      {link.label}
                    </Link>
                  );
                } else return null;
              })}
          </div>
          <div className="IndexPage__menu-right">
            {links &&
              links.map((link, index) => {
                if (index >= 3) {
                  return (
                    <Link
                      key={index}
                      className="IndexPage__link"
                      to={link.path}
                    >
                      {link.label}
                    </Link>
                  );
                } else return null;
              })}
          </div>
          <div className="IndexPage__logo-box">
            <img src={logo} alt="Heinze-Pool" />
          </div>
          <div className="IndexPage__hexa-box">
            <img src={hexa} alt="Heinze-Pool" />
          </div>
        </div>
      </div>
      <div
        className={`IndexPage__intro${
          showIntro ? " IndexPage__intro--show" : ""
        }`}
      >
        <img src={starterImg} alt="Harz Poolbild" />
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  links: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <IndexPageTemplate links={frontmatter.links} />;
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        links {
          label
          path
        }
      }
    }
  }
`;
