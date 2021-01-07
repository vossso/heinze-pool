import React from 'react'
import PropTypes from 'prop-types'
import ProductOverviewElement from '../ProductOverviewElement/ProductOverviewElement'


import './ProductOverview.scss'
import Container from '../ui/Container/Container'

const ProductOverview =({primeProducts, secondProducts}) => {

    return (
        <Container variant="half-height">
            <div className="ProductOverview">
                    {primeProducts.map((product, index) => {
                        const {title, description} = product
                        return <ProductOverviewElement key={index} title={title} description={description} />
                    })}
                    <ProductOverviewElement title="Sonstige" description="Hier findest du noch weitere Produkte" />
            </div>
        </Container>
    )
  }

ProductOverview.propTypes = {
  products: PropTypes.array,
}

export default ProductOverview