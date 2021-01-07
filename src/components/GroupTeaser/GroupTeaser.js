import React from 'react'
import PropTypes from 'prop-types'


import './GroupTeaser.scss'
import PreviewCompatibleImage from '../ui/Image/PreviewCompatibleImage'
import Container from '../ui/Container/Container'

const GroupTeaser =({products}) => {

    return (
      <Container variant="full-height" id="Sonstige">
        <div className="GroupTeaser">
        { products.map( (product, index) => {
          const {title, description, images} = product;
          return (
              <div className="GroupTeaser__content" key={index}>
                  <div className="GroupTeaser__image">
                      <PreviewCompatibleImage imageInfo={images[0]} />
                  </div>
                  <div className="GroupTeaser__text">
                      <h3 className="GroupTeaser__title">{title}</h3>
                      <p className="GroupTeaser__desc">{description}</p>
                  </div>
              </div>
              )
          })}
        </div>
      </Container>
    )
  }

GroupTeaser.propTypes = {
  products: PropTypes.array
}

export default GroupTeaser