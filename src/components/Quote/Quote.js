import React from 'react'
import PropTypes from 'prop-types'
import './Quote.scss'

const Quote = ({ quote }) => (
    quote.text ? 
    <div className="Quote">  
        <p className="Quote__text">{quote.text}</p>
        {quote.author && <p className="Quote__author">{quote.author}</p>}
    </div> : null
  )

  Quote.propTypes = {
      quote: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
      })
  }
  

export default Quote