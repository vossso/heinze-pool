import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import FaqBox from "../FaqBox/FaqBox";

import "./FaqRoll.scss";

class FaqRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="FaqRoll">
        {posts.map(({ node: post }, index) => {
          const { title, description } = post.frontmatter;
          return <FaqBox key={index} title={title} description={description} />;
        })}
      </div>
    );
  }
}

FaqRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FaqRollQuery {
        allMarkdownRemark(
          sort: {order: ASC, fields: frontmatter___date}
          filter: { frontmatter: { templateKey: { eq: "faq-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FaqRoll data={data} count={count} />}
  />
);
