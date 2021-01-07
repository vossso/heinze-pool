import React from 'react'
import PropTypes from 'prop-types'


import './ProductTeaser.scss'
import ImageGallery from '../ui/ImageGallery/ImageGallery'
import Container from '../ui/Container/Container'

const ProductTeaser =({title, description, images}) => {

    return (
      <Container variant="full-height" id={title}>
        <div className="ProductTeaser">
          {images && <div className="ProductTeaser__gallery">
            <ImageGallery images={images} />
          </div>}
          <div className="ProductTeaser__description">
            <div className="ProductTeaser__text">
              <h3 className="ProductTeaser__title">{title}</h3>
              <p className="ProductTeaser__desc">{description}</p>
            </div>
          </div>
        </div>
      </Container>
    )
  }

ProductTeaser.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array
}

export default ProductTeaser