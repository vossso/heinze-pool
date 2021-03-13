import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import History from "../components/History/History";
import Stage from "../components/Stage/Stage";
import Reasons from "../components/Reasons/Reasons";
import ScrollArrow from "../components/share/ScrollArrow/ScrollArrow";

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
          // description="Seit über 50 Jahren haben wir als Familie das große Glück unsere Leidenschaft für die Schwimmbadtechnik leben zu können. Dabei stehen wir seither für höchste Qualität, Kundenzufriedenheit und Service. Erschaffen Sie sich Ihr eigenes Bild und entdecken unsere Geschichte:"
        />
      </div>
      <div className="AboutPage__content">
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

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        titleimage={frontmatter.titleimage}
        history={frontmatter.history}
        reasonsArea={frontmatter.reasonsArea}
      />
      <ScrollArrow />
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
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        history {
          historyimage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
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
