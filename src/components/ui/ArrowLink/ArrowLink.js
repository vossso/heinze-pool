import React from 'react'
import hexa from '../../../img/hexa_blue.svg'


import './ArrowLink.scss'

const ArrowLink = ({ variant }) => {

    const className = `ArrowLink${variant? ' ArrowLink--'+variant : ''}`
    
    return (
            <div className={className}>
                <img src={hexa} alt="Poool"/>
            </div>
    )
}

export default ArrowLink
