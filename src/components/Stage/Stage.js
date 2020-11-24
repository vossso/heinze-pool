import React from 'react'
import PropTypes from 'prop-types'
import './Stage.sass'
import Markdown from 'markdown-to-jsx'

const Stage = ({ image, title, description }) => (
    <div className="Stage"> 
        <div className="Stage__image">
            <img src={image} style={{height: '100%', width: '100%'}}/>
        </div> 
        <h2>{title}</h2>
        <Markdown>{description}</Markdown>
    </div> 
  )

  Stage.propTypes = {
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
        title: PropTypes.string,
        description: PropTypes.string
  }
  

export default Stage