import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import HexaPattern from '../components/HexaPattern/HexaPattern'
import Container from '../components/share/Container/Container'


export const PortfolioPageTemplate = ({ title, description,imageTeasers }) => {
  return (
          <Container variant={["full-height","starter"]}>
            <div className="PortfolioPage">
              <div className="PortfolioPage__stage">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="PortfolioPage__content">
                <HexaPattern imageList={imageTeasers}/>
              </div>
            </div>
          </Container>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageTeasers: PropTypes.array,
}

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        imageTeasers={frontmatter.imageTeasers}
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
    markdownRemark(frontmatter: { templateKey: { eq: "portfolio-page" } }) {
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
