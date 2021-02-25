import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../share/Image/PreviewCompatibleImage'

import './Brands.scss'
import Container from '../share/Container/Container'

const Brands =({brands}) => {

    return (
        brands && <Container variant={["half-height", "starter"]}>
            <div className="Brands">
                {brands.map((brand, index) => {
                    return <div className="Brands__element" key={index}>
                            {brand && <PreviewCompatibleImage imageInfo={brand} />}
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