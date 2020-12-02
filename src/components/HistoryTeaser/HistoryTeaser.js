import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'

import './HistoryTeaser.scss'

const HistoryTeaser = ({ data }) => {
const {title, description, historyimage} = data


  return (<div className="HistoryTeaser">
            <div className="HistoryTeaser__content">
                {title && <p className="HistoryTeaser__title">
                    {title}
                </p>}
                {description && <p className="HistoryTeaser__text">
                       <Markdown>{description}</Markdown> 
                </p>}
            </div>
           {historyimage && <div className="HistoryTeaser__image">
                {console.log(historyimage.image)}
                <img src={!!historyimage.image.childImageSharp ? historyimage.image.childImageSharp.fluid.src : historyimage.image} style={{height: '100%', width: '100%'}} alt="oldpic"/>
            </div> }
        </div>)
}

HistoryTeaser.propTypes = {
    data: PropTypes.shape({
            historyimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
    }).isRequired,
}

export default HistoryTeaser
