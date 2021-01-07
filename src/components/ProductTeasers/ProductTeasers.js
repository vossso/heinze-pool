import React from 'react'
import PropTypes from 'prop-types'
import ProductTeaser from '../ProductTeaser/ProductTeaser'
import GroupTeaser from '../GroupTeaser/GroupTeaser'
import ProductOverview from '../ProductOverview/ProductOverview'


// import './ProductTeaser.scss'

const ProductTeasers =({products}) => {

  const productTeasers = products.filter(element => element.single)
  const groupTeasers = products.filter(element => !element.single)

    return (
      <div className="ProductTeasers">
            <ProductOverview primeProducts={productTeasers} secondProducts={groupTeasers} />
            {productTeasers.map((product, index) => {
                const {title, description, images} = product
                return <ProductTeaser key={index} title={title} description={description} images={images}/>
            })}
                <GroupTeaser products={groupTeasers} />
      </div>
    )
  }

ProductTeasers.propTypes = {
  products: PropTypes.array,
}

export default ProductTeasers