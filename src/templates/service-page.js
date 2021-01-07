import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Stage from '../components/Stage/Stage'
import ServiceOverview from '../components/ServiceOverview/ServiceOverview'

export const ServicePageTemplate = ({ title, image, description, sOverview, steps, labor, shop }) => {


  return (
            <div className="ServicePage">
              <div className="ServicePage__stage">
                <Stage title={title} image={image} description={description}/>
              </div>
              <div className="ServicePage__content">
                <ServiceOverview services={sOverview} />
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
  labor: PropTypes.array,
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
        labor={frontmatter.labor}
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
        steps {
          text
        }
      }
    }
  }

`
