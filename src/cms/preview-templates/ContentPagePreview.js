import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS()


    if(data) {
        return (
            <ContentPageTemplate
            title={data.title}
            subheading={data.subheading}
            /> )
    } else {
        return <div>Loading...</div>
    }
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview
