import React from 'react'
import PropTypes from 'prop-types'

import './ServiceTeaserElement.scss'
import PreviewCompatibleImage from '../share/Image/PreviewCompatibleImage'

const ServiceTeaserElement =({title, text, image, alt}) => {

    return (
        <div className="ServiceTeaserElement">
                <div className="ServiceTeaserElement__content">
                    <div className="ServiceTeaserElement__icon">
                        <PreviewCompatibleImage imageInfo={{image, alt}} />
                    </div>   
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
        </div>
    )
  }

ServiceTeaserElement.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    alt: PropTypes.string,
}

export default ServiceTeaserElement