import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
console.log(data.contactblock)

  return data ? (
        <AboutPageTemplate
            title={data.title}
            titleimage={{
              image: getAsset(data.titleimage.image),
              alt: data.titleimage.alt,
            }}
            history={data.history}
            contactblock={data.contactblock}
        />
      ) : <div>Loading ...</div>
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
