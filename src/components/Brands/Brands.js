import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../share/Image/PreviewCompatibleImage'

import './Brands.scss'
import Container from '../share/Container/Container'

const Brands =({brands}) => {

    return (
        brands ? <Container variant={["half-height--top", "starter"]}>
            <div className="Brands">
                {brands.map((brand, index) => {
                    return <a className="Brands__element" key={index} href={brand.link}>
                            {brand && <PreviewCompatibleImage imageInfo={brand} />}
                        </a>
                })}
            </div>
        </Container> : null
    )
}

Brands.propTypes = {
    products: PropTypes.array,
  }
  
  export default Brands