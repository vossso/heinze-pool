import React from 'react'
import PropTypes from 'prop-types'

import './ServiceOverview.scss'
import Container from '../share/Container/Container'
import HexaIcon from '../share/HexaIcon/HexaIcon'
import ServiceOverviewElement from '../ServiceOverviewElement/ServiceOverviewElement'

const ServiceOverview =({services}) => {

    return (
        services ? <div className="ServiceOverview">
        <Container variant="half-height">
            <div className="ServiceOverview__intro">
                <div className="ServiceOverview__left">
                    {services && services.map((element, index) => {
                        return (
                            <HexaIcon icon={element} key={index} />
                    )})}
                </div>
                <div className="ServiceOverview__right">
                    <h4>Unser großes Leistungsspektrum</h4>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum.</p>
                </div>
            </div>
        </Container>
        <Container variant={["full-height","starter"]}>
            <div className="ServiceOverview__content">
                {services && services.map((element, index) => {
                    return <div className="ServiceOverview__element" key={index}>
                            <ServiceOverviewElement icon={element} title={element.title} description={element.text} />
                        </div>
                })}
            </div>
        </Container>
        </div> : null
    )
  }

ServiceOverview.propTypes = {
    services: PropTypes.array,
}

export default ServiceOverview