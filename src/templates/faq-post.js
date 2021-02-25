import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TextBox from "../components/share/TextBox/TextBox";
import Container from "../components/share/Container/Container";

export const FaqPostTemplate = ({ title, description }) => {
  return (
    <Container>
      <TextBox title={title} text={description} />
    </Container>
  );
};

FaqPostTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const FaqPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FaqPostTemplate
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

FaqPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default FaqPost;

export const pageQuery = graphql`
  query FaqPostById {
    markdownRemark(frontmatter: { templateKey: { eq: "faq-post" } }) {
      frontmatter {
        title
        description
      }
      id
    }
  }
`;
