import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import ContactBlock from '../components/ContactBlock/ContactBlock'
import History from '../components/History/History'

export const AboutPageTemplate = ({ title, titleimage, history, contactblock }) => {

  return (
            <div className="AboutPage">
              <div className="AboutPage__stage">
                <h2 className="AboutPage__title">
                  {title}
                </h2>
                <div className="AboutPage__image">
                  <img src={titleimage.image} style={{height: '100%', width: '100%'}} alt={titleimage.alt}/>
                </div>
              </div>
              <div className="AboutPage__content">
                <History data={history} />
                <ContactBlock contactblock={contactblock}/> 
              </div>
            </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  titleimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  history: PropTypes.array,
  contactblock: PropTypes.shape({
    adress: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      street: PropTypes.string,
      city: PropTypes.string
    }),
    numbers: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      phone: PropTypes.string,
      fax: PropTypes.string
    }),
    adrwebadressess: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      mail: PropTypes.string,
      web: PropTypes.string
    }),
    openhours: PropTypes.shape({
      regularhours: PropTypes.string,
      specialinfo: PropTypes.string
    }),
  })
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        titleimage={frontmatter.titleimage}
        history={frontmatter.history}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        titleimage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        history {
          historyimage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          description
        }
        contactblock {
          adress {
            image {
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
            image {
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
            image {
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
            image {
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
