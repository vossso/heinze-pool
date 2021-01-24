import React from 'react'
import hexa from '../../../img/hexa_blue-arrow.svg'


import './ArrowLink.scss'

const ArrowLink = ({ variant, link }) => {

    const className = `ArrowLink${variant? ' ArrowLink--'+variant : ''}`
    
    return (
            <a className={className} href={link}>
                <img src={hexa} alt="Poool"/>
            </a>
    )
}

export default ArrowLink
