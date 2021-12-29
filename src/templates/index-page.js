import React, { createRef, useEffect, useState } from "react";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import { CSSTransition } from "react-transition-group";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import lottie from "lottie-web";
import { StaticImage } from "gatsby-plugin-image";

import InfoBox from "../components/share/InfoBox/InfoBox";
import "./index-page.scss";
import useBreakpoint from "../hooks/useBreakpoint";

export const IndexPageTemplate = ({ links, infoBox }) => {
  const [trans, setTrans] = useState(false);
  const [imageLayer, setImageLayer] = useState(true);
  const [menuLayer, setMenuLayer] = useState(false);
  const BreakpointM = useBreakpoint("m");
  const { showInfoBox, title, text, introText } = infoBox || {};

  const startAnimation = () => {
    setImageLayer(false);
    setTimeout(() => {
      setMenuLayer(true);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      BreakpointM && setTrans(true);
    }, 5000);
  }, [BreakpointM]);

  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path:
        "https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json",
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div
      className="IndexPage"
      onClick={() => startAnimation()}
      onKeyDown={() => startAnimation()}
    >
      <div className="IndexPage__content">
        <div className="IndexPage__bg-image">
          <StaticImage
            src="../img/water.webp"
            width={`${BreakpointM ? "2300" : "300"}`}
            className="IndexPage__image"
          />
        </div>
        {BreakpointM ? (
          <>
            <div className="IndexPage__mobile">
              {menuLayer && showInfoBox && (
                <InfoBox title={title} text={text} introText={introText} />
              )}
              <div className="IndexPage__box">
                <div className={`IndexPage__logo-box`}>
                  <StaticImage
                    src="../img/hp-logo_white.png"
                    width="360"
                    alt="Heinze-Pool"
                  />
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
            in={menuLayer}
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
              <div className={`IndexPage__logo-box`}>
                <StaticImage
                  src="../img/hp-logo_white.png"
                  width="800"
                  alt="Heinze-Pool"
                />
              </div>
              <div className="IndexPage__hexa-box">
                <StaticImage
                  src="../img/hexagon_line.png"
                  width="850"
                  alt="Heinze-Pool"
                />
              </div>
              {trans && showInfoBox && (
                <InfoBox title={title} text={text} introText={introText} />
              )}
            </div>
          </CSSTransition>
        )}
      </div>
      <CSSTransition
        in={imageLayer}
        timeout={3000}
        classNames="fadeIn-late"
        unmountOnExit
      >
        <div className={`IndexPage__intro`}>
          {/* <img className="IndexPage__image" src={starterImg} alt="Harz Pool" /> */}
          <StaticImage
            className="IndexPage__image"
            src="../img/Start.webp"
            width="2800"
            alt="Harz Pool"
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={imageLayer}
        timeout={300}
        classNames="moveup"
        unmountOnExit
        mountOnEnter
      >
        <div className="IndexPage__logo">
          {/* <img src={logo2} alt="Heinze-Pool" /> */}
          <StaticImage
            src="../img/hp-logo_white-sub.png"
            width="400"
            alt="Heinze-Pool"
          />
        </div>
      </CSSTransition>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  links: PropTypes.array,
  infoBox: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout isIndex={true}>
      <IndexPageTemplate
        links={frontmatter.links}
        infoBox={frontmatter.infoBox}
      />
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
        infoBox {
          showInfoBox
          title
          text
          introText
        }
      }
    }
  }
`;
