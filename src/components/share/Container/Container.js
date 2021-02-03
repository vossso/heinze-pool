import React from 'react'
import getVariantClasses from '../../../helpers/getVariantClass'


import './Container.scss'

const Container = ({ children, variant, id = '' }) => {

    const className = getVariantClasses("Container", variant);
    
    return (
        children && 
            <div className={className} id={id}>
                {children}
            </div>
    )
}

export default Container
