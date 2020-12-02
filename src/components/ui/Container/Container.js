import React from 'react'


import './Container.scss'

const Container = ({ children, variant }) => {

    const className = `Container${variant? ' Container--'+variant : ''}`
    
    return (
        children && 
            <div className={className}>
                {children}
            </div>
    )
}

export default Container
