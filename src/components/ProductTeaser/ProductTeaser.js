import React from 'react'
import PropTypes from 'prop-types'


import './ProductTeaser.scss'
import ImageGallery from '../share/ImageGallery/ImageGallery'
import Container from '../share/Container/Container'
import TextBox from '../share/TextBox/TextBox'

const ProductTeaser =({title, description, images, link, linkLabel}) => {

    return (
      <Container variant={["full-height", "starter"]} id={title}>
        <div className="ProductTeaser">
          {images && <div className="ProductTeaser__gallery">
            <ImageGallery images={images} />
          </div>}
          <div className="ProductTeaser__description">
            <TextBox title={title} text={description} link={link} label={linkLabel} />
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