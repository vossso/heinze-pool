import React from 'react'
import PropTypes from 'prop-types'
import { ProductsPageTemplate } from '../../templates/products-page'

const ProductsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ProductsPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      products={data.productPages}
    />
  )
}

ProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProductsPagePreview
