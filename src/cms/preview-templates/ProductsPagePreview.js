import React from 'react'
import PropTypes from 'prop-types'
import { ProductsPageTemplate } from '../../templates/products-page'

const ProductsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ProductsPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      description={data.description}
    />
  )
}

ProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductsPagePreview
