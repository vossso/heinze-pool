import React from 'react'
import PropTypes from 'prop-types'


import './Reasons.scss'
import Container from '../ui/Container/Container'
import HexaIcon from '../ui/HexaIcon/HexaIcon'

const Reasons =({title, reasonsList}) => {

    return (
      <Container variant="full-height">
        <div className="Reasons">
          <h3>{title}</h3>
          <div className="Reasons__content">
            {reasonsList.map((element, index) => {
                const {reason, description} = element;
                return <div className="Reasons__reason" key={index}>
                        <HexaIcon size="5rem" number={index+1}/>
                        <h4>{reason}</h4>
                        <p>{description}</p>
                    </div>
            })}
          </div>
        </div>
      </Container>
    )
  }

Reasons.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  reasonsList: PropTypes.array
}

export default Reasons