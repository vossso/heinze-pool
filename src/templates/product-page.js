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
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 1000
                  breakpoints: [480,568,800,1024,1280]
                  quality: 100
                )
              }
            }
            productElement {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    width: 100
                    quality: 100
                  )
                }
              }
              title
              single
              introtext
              description
              images {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                      width: 2000
                      breakpoints: [480,568,800,1024,1280]
                      quality: 100
                    )
                  }
                }
                alt
              }
            }
            brands {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    width: 600
                    quality: 100
                  )
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
