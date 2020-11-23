import React from 'react'
import PropTypes from 'prop-types'

import './ContactTeaser.sass'

const ContactTeaser = ({ icon, content }) => (
  <div className="ContactTeaser">
    <div className="ContactTeaser__teaser">
        <div className="ContactTeaser__hexa">
            <div
                className="ContactTeaser__image"
                style={{
                    backgroundImage: `url(${
                    !!icon.childImageSharp ? icon.childImageSharp.fluid.src : icon
                    })`,
                }}
            >
            </div>
        </div>
    </div>
    <div className="ContactTeaser__content">
        {content.length > 0 && content.map(item => 
            ( <div className="ContactTeaser__content-element">
                <span>{item[0]}</span>
                <p>{item[1]}</p>
            </div>)
        )}
    </div>
  </div>
)

ContactTeaser.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    content: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string,
        })
    ),
    getAsset: PropTypes.func,
}

export default ContactTeaser
