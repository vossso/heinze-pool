import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import History from "../components/History/History";
import Stage from "../components/Stage/Stage";
import Reasons from "../components/Reasons/Reasons";
import ScrollArrow from "../components/share/ScrollArrow/ScrollArrow";
import Quote from "../components/Quote/Quote";
import useScrollPos from "../hooks/useScrollPos";
import useBreakpoint from "../hooks/useBreakpoint";

export const AboutPageTemplate = ({
  title,
  titleimage,
  history,
  reasonsArea,
}) => {
  return (
    <div className="AboutPage">
      <div className="AboutPage__stage">
        <Stage
          title={title}
          image={titleimage.image}
          alt={titleimage.alt}
          isStarter={false}
        />
      </div>
      <div className="AboutPage__content">
        <Quote
          quote={{
            text:
              "Seit über 50 Jahren haben wir als Familie das große Glück unsere Leidenschaft für die Schwimmbadtechnik leben zu können. Dabei stehen wir seither für höchste Qualität, Kundenzufriedenheit und Service. Erschaffen Sie sich Ihr eigenes Bild und entdecken unsere Geschichte und fünf Gründe, warum Sie sich für uns entscheiden sollten.",
          }}
        />
        {reasonsArea.reasonsList.length > 0 && (
          <Reasons
            title={reasonsArea.title}
            reasonsList={reasonsArea.reasonsList}
          />
        )}
        {history && <History data={history} />}
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  titleimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  history: PropTypes.array,
  reasonsArea: PropTypes.shape({
    adress: PropTypes.string,
    reasonsList: PropTypes.array,
  }),
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const [whiteArrow, setWhiteArrow] = useState(false);
  const currentScrollY = useScrollPos();
  const BreakpointM = useBreakpoint("m");

  useEffect(() => {
    if (BreakpointM && currentScrollY < 100) {
      setWhiteArrow(true);
    } else {
      setWhiteArrow(false);
    }
  }, [currentScrollY, BreakpointM]);

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        titleimage={frontmatter.titleimage}
        history={frontmatter.history}
        reasonsArea={frontmatter.reasonsArea}
      />
      <ScrollArrow color={whiteArrow ? "white" : ""} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        titleimage {
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                width: 2000
                breakpoints: [480, 568, 800, 1024, 1280]
                quality: 100
              )
            }
          }
        }
        history {
          historyimage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 800
                  breakpoints: [568, 1024]
                  quality: 100
                  layout: FULL_WIDTH
                )
              }
            }
          }
          title
          description
        }
        reasonsArea {
          title
          reasonsList {
            description
            reason
          }
        }
      }
    }
  }
`;
