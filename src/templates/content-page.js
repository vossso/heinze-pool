import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import ContactBlock from '../components/ContactBlock/ContactBlock'


export const ContentPageTemplate = ({title, image, subheading, contactblock}) => (
    <div className="ContentPage">
        <div className="ContentPage__header">
            <h2>{title && title}</h2>
            <p>{subheading && subheading}</p> 
            <div
                className="ContentPage__header-image"
                style={{
                    backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                }}
            >
            </div>
        </div>
        <div className="ContentPage__content">
            <ContactBlock contactblock={contactblock}/>
        </div>
    </div>
)

ContentPageTemplate.propTypes={
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    subheading: PropTypes.string,
    contactblock: PropTypes.shape({
        adress: PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            street: PropTypes.string,
            city: PropTypes.string
        }),
        numbers: PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            phone: PropTypes.string,
            fax: PropTypes.string,
        }),
        webadress: PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            mail: PropTypes.string,
            web: PropTypes.string,
        }),
        openhours: PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            regularhours: PropTypes.string,
            specialinfo: PropTypes.string
        })
    })
}

const ContentPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <ContentPageTemplate
          title={frontmatter.title}
          image={frontmatter.image}
          subheading={frontmatter.subheading}
          contactblock={frontmatter.contactblock}
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
        contactblock {
            adress {
                icon {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                street
                city
            }
            numbers {
                icon {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                phone
                fax
            }
            webadress {
                icon {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                mail
                web
            }
            openhours {
                icon {
                    childImageSharp {
                      fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                regularhours
                specialinfo
            }
        }
      }
    }
  }
`