import React from 'react'
import PropTypes from 'prop-types'
import ArrowLink from '../share/ArrowLink/ArrowLink'
import './ProductLink.scss'
import TextBox from '../share/TextBox/TextBox'
import useBreakpoint from '../../hooks/useBreakpoint'

const ProductLink = ({ label, text, path }) => {
const BreakpointM = useBreakpoint('m')
  const size = BreakpointM ? "4rem" : "6rem"

   return   <a className="ProductLink" href={`/product/${path}`}>  
                <TextBox title={label} text={text} variant="auto-height"/>
                <div className="ProductLink__button">
                    <ArrowLink size={size}/>
                </div>
            </a> 
}

  ProductLink.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
  }
  

export default ProductLink