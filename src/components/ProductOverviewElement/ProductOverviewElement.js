import React from 'react'
import PropTypes from 'prop-types'

import './ProductOverviewElement.scss'
import ArrowLink from '../ui/ArrowLink/ArrowLink'

const ProductOverviewElement =({title, description}) => {

    return (
      <div className="ProductOverviewElement">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="ProductOverviewElement__button" >
                <ArrowLink link={`#${title}`}/>
            </div>
      </div>
    )
  }

ProductOverviewElement.propTypes = {
  products: PropTypes.array,
}

export default ProductOverviewElement