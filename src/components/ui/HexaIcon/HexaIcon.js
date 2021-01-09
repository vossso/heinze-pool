import React from 'react'
import hexa from '../../../img/hexa_blue.svg'
import PreviewCompatibleImage from '../Image/PreviewCompatibleImage';


import './HexaIcon.scss'

const HexaIcon = ({ variant, size, icon, number }) => {
    const className = `HexaIcon${variant? ' HexaIcon--'+variant : ''}`

    const setSize = {
        width: size ? size : '6rem',
        height: size ? size : '6rem',
    };
    
    return (
            <div className={className} style={setSize} >
                <img className="HexaIcon__hexa" src={hexa} alt="Poool"/>
                <div className="HexaIcon__image">
                    {icon && <PreviewCompatibleImage imageInfo={icon} />}
                    {!icon && number && <h2>{number}</h2>}
                </div>
            </div>
    )
}

export default HexaIcon
