import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Stage from '../components/Stage/Stage'
import ProductTeasers from '../components/ProductTeasers/ProductTeasers'
import Brands from '../components/Brands/Brands'


export const ProductPageTemplate = ({title, image, productElement, brands}) => {

    return <div className="ProductPage">
                <Stage title={title} image={image} />
                <div className="ProductPage__overview">
                </div>
                <div className="ProductPage__content">
                    <ProductTeasers products={productElement}/>
                    
                    <Brands brands={brands} />
                </div>
            </div>
}

ProductPageTemplate.propTypes={
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    productElement: PropTypes.array,
    brands: PropTypes.array,
}

const ProductPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ProductPageTemplate
          title={frontmatter.title}
          image={frontmatter.image}
          productElement={frontmatter.productElement}
          brands={frontmatter.brands}
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

export const ProductPageQuery = graphql`
  query ProductPage {
    markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
      html
      frontmatter {
        title
        image {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productElement {
            title
            single
            description
            images {
                image {
                    childImageSharp {
                        fluid(maxWidth: 800) {
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
    }
  }
`