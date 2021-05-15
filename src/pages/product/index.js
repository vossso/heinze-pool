import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'


class ProductIndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
        <>
        <h1>Hier sind wir auf der product/index</h1>
      </>
    )
  }
}

// HIER NUR Vorschau ??

ProductIndexPage.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }


export default () => (
    <StaticQuery
      query={graphql`
        query ProductQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {frontmatter: {templateKey: {eq: "product-page"}}}
          ) {
              edges {
                  node {
                    frontmatter {
                      title
                      image {
                        childImageSharp {
                          gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                            width: 1000
                            breakpoints: [480,568,800,1024,1280]
                            quality: 100
                          )
                        }
                      }
                      description
                      productElement {
                        title
                        single
                        description
                        images {
                          image {
                            childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                                width: 1000
                                breakpoints: [480,568,800,1024,1280]
                                quality: 100
                              )
                            }
                          }
                          alt
                        }
                      }
                      brands {
                        image {
                          childImageSharp {
                            gatsbyImageData(
                              placeholder: BLURRED
                              formats: [AUTO, WEBP]
                              width: 1000
                              breakpoints: [480,568,800,1024,1280]
                              quality: 100
                            )
                          }
                        }
                        name
                      }
                    }
                  }
                }
            }
        }
      `}
      render={(data, count) => <ProductIndexPage data={data} count={count} />}
    />
  )