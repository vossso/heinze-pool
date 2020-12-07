import React from 'react'
import PropTypes from 'prop-types'
import { FaqPostTemplate } from '../../templates/faq-post'

const FaqPostPreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS()
    console.log(data)
  return (
    <FaqPostTemplate
        title={data.title}
      description={data.description}
      date={data.date}
    />
  )
}

FaqPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FaqPostPreview
