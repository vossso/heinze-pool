import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPageTemplate } from '../../templates/portfolio-page'

const PortfolioPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <PortfolioPageTemplate
        title={data.title}
        description={data.description}
        imageTeasers={data.imageTeasers}
    />
  )
}

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PortfolioPagePreview
