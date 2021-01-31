import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Stage from "../components/Stage/Stage";
import ProductTeasers from "../components/ProductTeasers/ProductTeasers";
import Brands from "../components/Brands/Brands";

export const ProductPageTemplate = ({title, image, productElement, brands}) => {

  return (
    <div className="ProductPage">
      <Stage title={title} image={image} />
      <div className="ProductPage__overview"></div>
      <div className="ProductPage__content">
        <ProductTeasers products={productElement} />

        <Brands brands={brands} />
      </div>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  productElement: PropTypes.array,
  brands: PropTypes.array,
};

const ProductPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const product = edges.find((page) =>
    page.node.fields.slug.includes(window.location.pathname)
  );
  console.log(product)

  const { title, image, productElement, brands } = product.node.frontmatter;

  return (
    <Layout>
      <ProductPageTemplate
        title={title}
        image={image}
        productElement={productElement}
        brands={brands}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const ProductPageQuery = graphql`
  query ProductPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            productElement {
              title
              single
              introtext
              description
              images {
                image {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
            brands {
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
