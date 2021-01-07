import React from 'react'
import PropTypes, { element } from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductLinks from '../components/ProductLinks/ProductLinks'
import Container from '../components/ui/Container/Container'



export const ProductsPageTemplate = ({
  title, products
}) => {

  return <div className="ProductsPage">
    <Container variant={['full-height', 'no-padding', 'full-width']}>
      <div className="ProductsPage__links">
        <h2>{title}</h2>
        <ProductLinks products={products} />
      </div>
    </Container>
  </div>
}

ProductsPageTemplate.propTypes = {
  title: PropTypes.string,
  productPages: PropTypes.array,
}

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductsPageTemplate
        title={frontmatter.title}
        products={frontmatter.productPages}
      />
    </Layout>
  )
}

ProductsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductsPage

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
`