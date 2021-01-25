import React from 'react'
import PropTypes from 'prop-types'


import './HexaPattern.scss'

import HexaImage from '../share/HexaImage/HexaImage'

const HexaPattern =({imageList}) => {

    return (
        imageList &&
            <div className="HexaPattern">
                <div className="HexaPattern__content">

                    {imageList.map((element, index) => {
                        return <button><HexaImage imageInfo={element.image} key={index}/></button>
                    })}
                </div>
            </div>
    )
  }

HexaPattern.propTypes = {
  imageList: PropTypes.array
}

export default HexaPattern