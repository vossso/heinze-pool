import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import './index-page.scss'

import Layout from '../components/Layout'
import Quote from '../components/Quote/Quote'

export const IndexPageTemplate = ({
  image,
  title,
  quote
}) => (
  <div className="IndexPage">
    <div className="IndexPage__header">
      <div
      className="IndexPage__header-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
      >

      </div>
      <div className="IndexPage__content">
        <Quote quote={quote}/>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  quote: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        quote={frontmatter.quote}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote {
          text
          author
        }
      }
    }
  }
`
