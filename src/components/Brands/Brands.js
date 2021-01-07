import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../ui/Image/PreviewCompatibleImage'

import './Brands.scss'
import Container from '../ui/Container/Container'

const Brands =({brands}) => {

    return (
        brands && <Container variant="half-height">
            <div className="Brands">
                {brands.map((brand, index) => {
                    return <div className="Brands__element" key={index}>
                            <PreviewCompatibleImage imageInfo={brand} />
                        </div>
                })}
            </div>
        </Container>
    )
}

Brands.propTypes = {
    products: PropTypes.array,
  }
  
  export default Brands