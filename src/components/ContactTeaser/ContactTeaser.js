import React from 'react'
import PropTypes from 'prop-types'

import './ContactTeaser.scss'

const ContactTeaser = ({ icon, content }) => (
  <div className="ContactTeaser">
    <div className="ContactTeaser__teaser">
        <div className="ContactTeaser__hexa">
            <div
                className="ContactTeaser__image"
            >
                <img src={!!icon.childImageSharp ? icon.childImageSharp.fluid.src : icon} alt="icon"/>
            </div>
        </div>
    </div>
    <div className="ContactTeaser__content">
        {content.length > 0 && content.map((item, index) => 
            ( <div className="ContactTeaser__content-element" key={index}>
                {item[0] && <span>{item[0]}</span>}
                <p>{item[1]}</p>
            </div>)
        )}
    </div>
  </div>
)

ContactTeaser.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string.isRequired,
        })
    ),
    getAsset: PropTypes.func,
}

export default ContactTeaser
