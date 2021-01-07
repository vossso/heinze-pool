import React from 'react'
import PropTypes from 'prop-types'

import hexa from '../../img/hexa_blue.svg'



import './ServiceOverview.scss'
import Container from '../ui/Container/Container'
import PreviewCompatibleImage from '../ui/Image/PreviewCompatibleImage'

const ServiceOverview =({services}) => {

    return (
        <div className="ServiceOverview">
        <Container variant="half-height">
            <div className="ServiceOverview__intro">
                <div className="ServiceOverview__left">
                    {services && services.map((element, index) => {
                        return (
                            <div className="ServiceOverview__hexa">
                                <img src={hexa} alt="Poool"/>
                                <div className="ServiceOverview__icon"><PreviewCompatibleImage imageInfo={element.image} /></div>
                            </div>)
                    })}
                </div>
                <div className="ServiceOverview__right">
                    <h4>Unser großes Leistungsspektrum</h4>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.</p>
                </div>
            </div>
        </Container>
        <Container variant="full-height">
            <div className="ServiceOverview__content">
                {services && services.map((element, index) => {
                    return <div className="ServiceOverview__element" key={index}>
                            {console.log(element)}
                        </div>
                })}
            </div>
        </Container>
        </div>
    )
  }

ServiceOverview.propTypes = {
  products: PropTypes.array,
}

export default ServiceOverview