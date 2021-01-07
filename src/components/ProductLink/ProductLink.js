import React from 'react'
import PropTypes from 'prop-types'
import ArrowLink from '../ui/ArrowLink/ArrowLink'
import './ProductLink.scss'

const ProductLink = ({ lable, text, path }) => {

   return   <a className="ProductLink" href={`/product/${path}`}>  
                <h3 className="ProductLink__lable">{lable}</h3>
                <p className="ProductLink__description">{text}</p>
                <div className="ProductLink__button">
                    <ArrowLink/>
                </div>
            </a> 
}

  ProductLink.propTypes = {
    lable: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
  }
  

export default ProductLink