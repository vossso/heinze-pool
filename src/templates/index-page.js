import React, { useEffect, useState } from "react";

import bgImage from "../img/water.jpg";
import starterImg from "../img/Start.jpg";
import logo from "../img/hp-logo_white.png";
import logo2 from "../img/hp-logo_white-sub.png";
import hexa from "../img/hexagon_line.png";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import ReactPlayer from 'react-player'

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";

export const IndexPageTemplate = ({ links }) => {
  const [trans, setTrans] = useState(false);

  const onMouseMove = () => {
    console.log("mouseMoved");
    setTrans(true);
  };

  return (
    <div className="IndexPage" onMouseMove={onMouseMove}>
      <CSSTransition
        in={trans}
        timeout={300}
        classNames="fadeIn"
        unmountOnExit
        mountOnEnter
      >
        <div className={`IndexPage__wrapper`}>
          <div className="IndexPage__bg-image">
            <img src={bgImage} alt="Poool" />
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=qwz88S1P0os' playing muted loop width= "100%" height="100vh"/> */}
          </div>
          <div className="IndexPage__content">
            <div className={`IndexPage__menu-left`}>
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
            <div className={`IndexPage__menu-right`}>
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
            <div className={`IndexPage__logo-box`}>
              <img src={logo} alt="Heinze-Pool" />
            </div>
            <div className="IndexPage__hexa-box">
              <img src={hexa} alt="Heinze-Pool" />
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!trans}
        timeout={300}
        classNames="fadeOut"
        unmountOnExit
        mountOnEnter
      >
        <div className={`IndexPage__intro`}>
          <img src={starterImg} alt="Harz Poolbild" />
          <div className="IndexPage__logo">
            <img src={logo2} alt="Heinze-Pool" />
          </div>
        </div>
      </CSSTransition>
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
