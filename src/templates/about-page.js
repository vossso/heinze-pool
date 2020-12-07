import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import ContactBlock from '../components/ContactBlock/ContactBlock'
import History from '../components/History/History'
import Stage from '../components/Stage/Stage'

export const AboutPageTemplate = ({ title, titleimage, history, contactblock }) => {


  return (
            <div className="AboutPage">
              <div className="AboutPage__stage">
                <Stage title={title} image={titleimage.image} alt={titleimage.alt} />
              </div>
              <div className="AboutPage__content">
                {history && <History data={history} />}
                {contactblock && <ContactBlock contactblock={contactblock}/> }
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
  console.log(frontmatter)

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        titleimage={frontmatter.titleimage}
        history={frontmatter.history}
        contactblock={frontmatter.contactblock}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark( frontmatter: { templateKey: { eq: "about-page" } }) {
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
