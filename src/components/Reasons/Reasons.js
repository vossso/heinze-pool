import React from 'react'
import PropTypes from 'prop-types'


import './Reasons.scss'
import Container from '../share/Container/Container'
import HexaIcon from '../share/HexaIcon/HexaIcon'
import TextBox from '../share/TextBox/TextBox'

const Reasons =({title, reasonsList}) => {

    return (
      <Container variant={["full-height", "starter"]}>
        <div className="Reasons">
          <h3>{title}</h3>
          <div className="Reasons__content">
            {reasonsList.map((element, index) => {
                const {reason, description} = element;
                return <div className="Reasons__reason" key={index}>
                        <HexaIcon size="5rem" number={index+1}/>
                        <TextBox title={reason} text={description} />
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