import React from 'react'
import PropTypes from 'prop-types'

import './Step.scss'
import hexa from '../../img/hexa_blue.svg'

const Step =({title}) => {

    return (
        <div className="Step">
                <div className="Step__content">
                <div className="Step__hexa"><img src={hexa} alt="Poool"/></div>
                <h4>{title}</h4>
                </div>
        </div>
    )
  }

Step.propTypes = {
    title: PropTypes.string,
}

export default Step