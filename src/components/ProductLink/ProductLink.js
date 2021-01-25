import React from 'react'
import PropTypes from 'prop-types'
import ArrowLink from '../share/ArrowLink/ArrowLink'
import './ProductLink.scss'
import TextBox from '../share/TextBox/TextBox'

const ProductLink = ({ label, text, path }) => {

   return   <a className="ProductLink" href={`/product/${path}`}>  
                <TextBox title={label} text={text} variant="auto-height"/>
                <div className="ProductLink__button">
                    <ArrowLink />
                </div>
            </a> 
}

  ProductLink.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
  }
  

export default ProductLink