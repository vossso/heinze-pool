import React from 'react'
import PropTypes from 'prop-types'

import './ServiceTeaser.scss'
import Container from '../ui/Container/Container'
import ServiceTeaserElement from '../ServiceTeaserElement/ServiceTeaserElement'

const ServiceTeaser =({content}) => {
    const {title, labor} = content;

    return (
      content ? 
        <Container variant="full-height">
          <div className="ServiceTeaser">
            <h3>{title}</h3>
            <div className="ServiceTeaser__boxes">
            {labor && labor.map((element, index) => {
                const {title, text, image, alt} = element;
                return <ServiceTeaserElement title={title} text={text} image={image} alt={alt} key={index}/>
            })}
            </div>
        </div>
      </Container> : null
    )
  }

ServiceTeaser.propTypes = {
    content: PropTypes.object,
}

export default ServiceTeaser