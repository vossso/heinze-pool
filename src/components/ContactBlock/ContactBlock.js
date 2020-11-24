import React from 'react'
import PropTypes from 'prop-types'

import ContactTeaser from '../ContactTeaser/ContactTeaser'
import './ContactBlock.sass'

const ContactBlock = ({ contactblock }) => {
    
    const adress = contactblock.adress
    const numbers = contactblock.numbers
    const webadress = contactblock.webadress
    const openhours = contactblock.openhours



    return (
        <div className="ContactBlock">
            <div className="ContactBlock__teaser">
                <ContactTeaser icon={adress.image} content={[["Adresse", `${adress.street}\n${adress.city}`]]}></ContactTeaser>
                <ContactTeaser icon={numbers.image} content={[["Telefon", numbers.phone],["Fax", numbers.fax]]}></ContactTeaser>
                <ContactTeaser icon={webadress.image} content={[["E-Mail", webadress.web]]}></ContactTeaser>
            </div>
            <div className="ContactBlock__map">
                <div className="ContactBlock__map-text">
                    <h4>Öffnungszeiten</h4>
                    <p>{openhours.regularhours}</p>
                    <span>{openhours.specialinfo}</span>
                </div>
                <div className="ContactBlock__map-google"></div>
            </div>
        </div>
)}

ContactBlock.propTypes = {
    contactblock: PropTypes.shape({
        adress: PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            street: PropTypes.string,
            city: PropTypes.string
        }),
        numbers: PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            phone: PropTypes.string,
            fax: PropTypes.string,
        }),
        webadress: PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            mail: PropTypes.string,
            web: PropTypes.string,
        }),
        openhours: PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            regularhours: PropTypes.string,
            specialinfo: PropTypes.string
        })
    }).isRequired,
    getAsset: PropTypes.func,
}

export default ContactBlock
