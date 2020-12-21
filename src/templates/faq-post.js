import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const FaqPostTemplate = ({
    title,
  description,
  date,
}) => {

  return (
    <div>
        FAQ
        {title}
        {description}
        {date}
    </div>
  )
}

FaqPostTemplate.propTypes = {
    title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
}

const FaqPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FaqPostTemplate
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

FaqPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FaqPost

export const pageQuery = graphql`
query FaqPostById {
    markdownRemark(frontmatter: {templateKey: {eq: "faq-post"}}) {
      frontmatter {
        title
        date(locale: "de", formatString: "DD.MM.YYYY hh:mm")
        description
      }
      id
    }
  }
`
