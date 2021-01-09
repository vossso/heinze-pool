import React from 'react'
import PropTypes from 'prop-types'

import './ServiceOverviewElement.scss'
import HexaIcon from '../ui/HexaIcon/HexaIcon'

const ServiceOverviewElement =({icon, title, description}) => {

    return (
      <div className="ServiceOverviewElement">
            <div className="ServiceOverviewElement__content">
            <HexaIcon icon={icon} size='6rem'/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
      </div>
    )
  }

ServiceOverviewElement.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string, 
  description: PropTypes.string
}

export default ServiceOverviewElement