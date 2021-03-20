import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import ScrollArrow from "../components/share/ScrollArrow/ScrollArrow";
import useScrollPos from "../hooks/useScrollPos";
import ProductPageTemp from "./ProductPageTemp/ProductPageTemp";
import useWindowLocation from "../hooks/useWindowLocation";
import useBreakpoint from "../hooks/useBreakpoint";

export const ProductPageTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const [product, setProduct] = useState(null);
  const location = useWindowLocation();
  const pathname = decodeURI(location.pathname);

  const products = {
    pools: edges
      ? edges.find((page) => page.node.fields.slug.includes("/product/pools/"))
      : null,
    überdachung: edges
      ? edges.find((page) =>
          page.node.fields.slug.includes("/product/überdachung/")
        )
      : null,
    wasserpflege: edges
      ? edges.find((page) =>
          page.node.fields.slug.includes("/product/wasserpflege/")
        )
      : null,
    zubehör: edges
      ? edges.find((page) =>
          page.node.fields.slug.includes("/product/zubehör/")
        )
      : null,
  };

  useEffect(() => {
    var sliced = pathname.split("/");
    if (sliced[sliced.length - 1] === "") sliced.pop();
    setProduct(products[sliced[sliced.length - 1]]);
  }, [pathname, products]);

  return (
    <div>
      <ProductPageTemp product={product} />
    </div>
  );
};

ProductPageTemplate.propTypes = {
  data: PropTypes.object,
};

const ProductPage = ({ data }) => {
  const [whiteArrow, setWhiteArrow] = useState(false);
  const currentScrollY = useScrollPos();
  const BreakpointM = useBreakpoint("m");

  useEffect(() => {
    if (
      BreakpointM
        ? currentScrollY < 100
        : currentScrollY >= window.innerHeight &&
          currentScrollY < window.innerHeight * 4
    ) {
      setWhiteArrow(true);
    } else {
      setWhiteArrow(false);
    }
  }, [currentScrollY]);

  return (
    <Layout>
      <ProductPageTemplate data={data} />
      <ScrollArrow color={whiteArrow ? "white" : ""} />
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
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            productElement {
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              single
              introtext
              description
              images {
                image {
                  childImageSharp {
                    fluid(maxWidth: 1300) {
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
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              link
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
