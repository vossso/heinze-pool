import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ProductPageTemplate
        title={data.title}
        description={data.description}
        productElement={data.productElement}
        brands={data.brands}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProductPagePreview
