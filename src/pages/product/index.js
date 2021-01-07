import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'


class ProductIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log(data);
    console.log(posts)
    return (
        <>
        <h1>Hier sind wir auf der product/index</h1>
      </>
    )
  }
}

//HIER NUR VORschAU ??

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
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                          }
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
                              fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                        }
                      }
                      brands {
                        image {
                          childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
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