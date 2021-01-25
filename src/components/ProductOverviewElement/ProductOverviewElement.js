import React from 'react'
import PropTypes from 'prop-types'

import './ProductOverviewElement.scss'
import ArrowLink from '../share/ArrowLink/ArrowLink'
import TextBox from '../share/TextBox/TextBox'

const ProductOverviewElement =({title, description}) => {

    return (
      <div className="ProductOverviewElement">
            <TextBox title={title} text={description} />
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