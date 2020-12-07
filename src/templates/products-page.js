import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Stage from '../components/Stage/Stage'



export const ProductsPageTemplate = ({
  image,
  title,
  description
}) => (
  <div className="ProductsPage">
    <div className="ProductsPage__stage">
      <Stage image={image} title={title} description={description}/>
    </div>
    <div className="ProductsPage__content">

    </div>
  </div>
)

ProductsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string
}

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
