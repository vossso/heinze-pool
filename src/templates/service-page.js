import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Stage from '../components/Stage/Stage'
import ServiceOverview from '../components/ServiceOverview/ServiceOverview'
import StepByStep from '../components/StepByStep/StepByStep'
import ServiceTeaser from '../components/ServiceTeaser/ServiceTeaser'
import ProductTeaser from '../components/ProductTeaser/ProductTeaser'

export const ServicePageTemplate = ({ title, image, description, sOverview, steps, laborArea, shop }) => {

  return (
            <div className="ServicePage">
              <div className="ServicePage__stage">
                <Stage title={title} image={image}/>
              </div>
              <div className="ServicePage__content">
                <ServiceOverview services={sOverview} description={description}/>
                <StepByStep steps={steps} />
                <ServiceTeaser content={laborArea}/>
                <ProductTeaser title={shop.title} images={[shop.imageObject]} description={shop.text} link="/about" linkLabel="Vereinbaren Sie einen Termin"/>
              </div>
            </div>
  )
}

ServicePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  sOverview: PropTypes.array,
  steps: PropTypes.array,
  laborArea: PropTypes.object,
  shop: PropTypes.object,
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        sOverview= {frontmatter.sOverview}
        steps={frontmatter.steps}
        laborArea={frontmatter.laborArea}
        shop={frontmatter.shop}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
        }),
      }),
}

export default ServicePage

export const ServicePageQuery = graphql`
query ServicePage {
    markdownRemark(frontmatter: { templateKey: { eq: "service-page" } }) {
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
        sOverview {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          title
        }
        shop {
          text
          title
          imageObject {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        laborArea { 
          title 
          labor {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
        }
        steps {
          text
        }
      }
    }
  }

`
