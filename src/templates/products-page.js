import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductLinks from "../components/ProductLinks/ProductLinks";
import Container from "../components/share/Container/Container";
import useBreakpoint from "../hooks/useBreakpoint"

import "./products-page.scss";

export const ProductsPageTemplate = ({ title, products }) => {
const BreakpointM = useBreakpoint('m');
  const cVariant = BreakpointM ? ["full-height", "no-padding", "full-width"] :["full-height", "no-padding", "starter", "full-width"]

  return (
    <div className="ProductsPage">
      <Container
        variant={cVariant}
      >
        <div className="ProductsPage__content">
          <h3>{title}</h3>
          <div className="ProductsPage__links">
            <ProductLinks products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

ProductsPageTemplate.propTypes = {
  title: PropTypes.string,
  productPages: PropTypes.array,
};

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductsPageTemplate
        title={frontmatter.title}
        products={frontmatter.productPages}
      />
    </Layout>
  );
};

ProductsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductsPage;

export const productsPageQuery = graphql`
  query ProductsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "products-page" } }) {
      frontmatter {
        title
        productPages {
          lable
          text
          productPage
        }
      }
    }
  }
`;
