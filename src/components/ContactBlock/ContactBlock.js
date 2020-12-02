import React from 'react'
import PropTypes from 'prop-types'

import ContactTeaser from '../ContactTeaser/ContactTeaser'
import './ContactBlock.scss'

import Container from '../ui/Container/Container'

const ContactBlock = ({ contactblock }) => {

    const {adress, numbers, webadress, openhours} = contactblock;

    console.log(contactblock)


    return (
        contactblock ? 
        <div className="ContactBlock">
            <Container>
                <h4>Kontakt</h4>
                <div className="ContactBlock__teaser">
                    {numbers && <ContactTeaser icon={numbers.image} content={[["Telefon", numbers.phone],["Fax", numbers.fax]]}></ContactTeaser>}
                    {webadress && <ContactTeaser icon={webadress.image} content={[["E-Mail", webadress.web]]}></ContactTeaser>}
                    {adress && <ContactTeaser icon={adress.image} content={[["Adresse", `${adress.street}\n${adress.city}`]]}></ContactTeaser>}
                </div>
            </Container>
            <div className="ContactBlock__map">
                <Container>
                    <div className="ContactBlock__map-text">
                        <h4>Öffnungszeiten</h4>
                        {openhours && <>
                            <p>{openhours.regularhours}</p>
                            <span>{openhours.specialinfo}</span>
                        </>}
                    </div>
                    <div className="ContactBlock__map-google"></div>
                </Container>
            </div>
        </div> : null
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
