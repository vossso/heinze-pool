import React from "react";

import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Container from "../components/share/Container/Container";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";

import "./meta-text.scss";

export const MetaPageTemplate = ({ title, text }) => {
  return (
    <div className="MetaPage">
      <Container>
        {title && <h3>{title}</h3>}
        {text && <Markdown>{text}</Markdown>}
      </Container>
    </div>
  );
};

MetaPageTemplate.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const MetaPage = ({ data }) => {
  const { frontmatter } = data && data.markdownRemark;

  return (
    <Layout>
      <MetaPageTemplate title={frontmatter.title} text={frontmatter.text} />
    </Layout>
  );
};

MetaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MetaPage;

export const pageQuery = graphql`
  query MetaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "meta-text" } }) {
      frontmatter {
        title
        text
      }
    }
  }
`;
