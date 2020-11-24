import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ProductPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      description={data.description}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
