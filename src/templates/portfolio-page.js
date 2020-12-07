import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const PortfolioPageTemplate = ({ title, image, description }) => {


  return (
            <div className="PortfolioPage">
              <div className="PortfolioPage__stage">
              </div>
              <div className="PortfolioPage__content">
              </div>
            </div>
  )
}

PortfolioPageTemplate.propTypes = {
    imageTeasers: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string
}

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
        }),
      }),
}

export default PortfolioPage

export const PortfolioPageQuery = graphql`
query PortfolioPage {
    markdownRemark(frontmatter: { templateKey: { eq: "service-page" } }) {
      frontmatter {
        title
        description
        imageTeasers {
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        description
      }
    }
  }

`
