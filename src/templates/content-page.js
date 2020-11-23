import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export const ContentPageTemplate = ({title, image, subheading}) => (
  <div className="ContentPage">
    Ich bin eine Content Seite: {title && title} 
    <p>{subheading && subheading}</p> 
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
></div></div>)

ContentPageTemplate.propTypes={
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    subheading: PropTypes.string
}

const ContentPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ContentPageTemplate
          title={frontmatter.title}
          image={frontmatter.image}
          subheading={frontmatter.subheading}
        />
      </Layout>
    )
  }


  ContentPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

export default ContentPage

export const contentPageQuery = graphql`
  query ContentPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`