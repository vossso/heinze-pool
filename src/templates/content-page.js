import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export const ContentPageTemplate = ({title, titleimage, subheading, contactblock, history}) => (
    <div className="ContentPage">
        <div className="ContentPage__header">
            <h2>{title && title}</h2>
            <p>{subheading && subheading}</p> 
            <div
                className="ContentPage__header-image"
                style={{
                    backgroundImage: `url(${
                    !!titleimage.childImageSharp ? titleimage.childImageSharp.fluid.src : titleimage
                    })`,
                }}
            >
            </div>
        </div>
        <div className="ContentPage__content">
        </div>
    </div>
)

ContentPageTemplate.propTypes={
    title: PropTypes.string,
    titleimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    subheading: PropTypes.string,
}

const ContentPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ContentPageTemplate
          title={frontmatter.title}
          titleimage={frontmatter.titleimage}
          subheading={frontmatter.subheading}
          contactblock={frontmatter.contactblock}
          history={frontmatter.history}
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
      }
    }
  }
`