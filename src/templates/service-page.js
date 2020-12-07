import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Stage from '../components/Stage/Stage'

export const ServicePageTemplate = ({ title, image, description }) => {


  return (
            <div className="ServicePage">
              <div className="ServicePage__stage">
                <Stage title={title} image={image}/>
              </div>
            </div>
  )
}

ServicePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
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
      }
    }
  }

`
