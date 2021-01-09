import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ServicePageTemplate
      image={getAsset(data.image)}
      title={data.title}
      description={data.description}
      sOverview= {data.sOverview}
        steps={data.steps}
        laborArea={data.laborArea}
        shop={data.shop}
    />
  )
}

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicePagePreview
