import React, { useEffect, useState } from "react";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import Layout from "../components/Layout";

import bgImage from "../img/water.jpg";
import starterImg from "../img/Start.jpg";
import logo from "../img/hp-logo_white.png";
import logo2 from "../img/hp-logo_white-sub.png";
import hexa from "../img/hexagon_line.png";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { CSSTransition } from "react-transition-group";
// import ReactPlayer from 'react-player'

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";
import useBreakpoint from "../hooks/useBreakpoint";

export const IndexPageTemplate = ({ links }) => {
  const [trans, setTrans] = useState(false);
  const BreakpointM = useBreakpoint("m");

  const startAnimation = () => {
    setTrans(true);
  };

  useEffect(() => {
    setTimeout(() => {
      BreakpointM && setTrans(true);
    }, 5000);
  }, []);

  return (
    <div
      className="IndexPage"
      onClick={() => startAnimation()}
      onKeyDown={() => startAnimation()}
    >
      <div className="IndexPage__content">
        <div className="IndexPage__bg-image">
          <img className="IndexPage__image" src={bgImage} alt="Poolwasser" />
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=qwz88S1P0os' playing muted loop width= "100%" height="100vh"/> */}
        </div>
        {BreakpointM ? (
          <>
            <div className="IndexPage__mobile">
              <div className="IndexPage__box">
                <div className={`IndexPage__logo-box`}>
                  <img src={logo} alt="Heinze-Pool" />
                </div>
                <div className="IndexPage__hexa-box">
                  <img src={hexa} alt="Heinze-Pool" />
                </div>
              </div>
              {links.map((link, index) => {
                return (
                  <Link key={index} className="IndexPage__link" to={link.path}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <CSSTransition
            in={trans}
            timeout={300}
            classNames="fadeIn"
            unmountOnExit
            mountOnEnter
          >
            <div className={`IndexPage__wrapper`}>
              <div className={`IndexPage__menu-left`}>
                {links &&
                  links.map((link, index) => {
                    if (index < 3) {
                      return (
                        <TransitionLink
                          key={index}
                          className="IndexPage__link"
                          to={link.path}
                        >
                          {link.label}
                        </TransitionLink>
                      );
                    } else return null;
                  })}
              </div>
              <div className={`IndexPage__menu-right`}>
                {links &&
                  links.map((link, index) => {
                    if (index >= 3) {
                      return (
                        <AnchorLink
                          key={index}
                          className="IndexPage__link"
                          to={link.path}
                        >
                          {link.label}
                        </AnchorLink>
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
          </CSSTransition>
        )}
      </div>
      <CSSTransition
        in={!trans}
        timeout={300}
        classNames="fadeIn-late"
        unmountOnExit
        mountOnEnter
      >
        <div className={`IndexPage__intro`}>
          <img className="IndexPage__image" src={starterImg} alt="Harz Pool" />
        </div>
      </CSSTransition>

      <CSSTransition
        in={!trans}
        timeout={300}
        classNames="moveup"
        unmountOnExit
        mountOnEnter
      >
        <div className="IndexPage__logo">
          <img src={logo2} alt="Heinze-Pool" />
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

  return (
    <Layout isIndex={true} >
      <IndexPageTemplate links={frontmatter.links} />
    </Layout>
  );
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
