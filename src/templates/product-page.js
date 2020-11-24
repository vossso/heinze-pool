import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Stage from '../components/Stage/Stage'



export const ProductPageTemplate = ({
  image,
  title,
  description
}) => (
  <div className="ProductPage">
    <div className="ProductPage__stage">
      <Stage image={image} title={title} description={description}/>
    </div>
    <div className="ProductPage__content">

    </div>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
