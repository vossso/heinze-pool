import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, getAsset }) => (
    <ContentPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      subheading={entry.getIn(['data', 'subheading'])}
    />
  )

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview
