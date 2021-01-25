import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './FaqBox.scss'
import ArrowLink from '../share/ArrowLink/ArrowLink'
import AnimateHeight from 'react-animate-height';

const FaqBox = ({ description, title }) => {
    const [isActive, setIsActive] = useState(false);



    return (
        <button className={`FaqBox${isActive?' FaqBox--active':''}`} onClick={() => {
            setIsActive(!isActive)
        }}>
            <h4 className="FaqBox__question">
                {title}
            </h4>
            <AnimateHeight height={isActive? 'auto' : 0} duration={300}>
                <p className="FaqBox__answer">
                    {description}
                </p>
            </AnimateHeight>
            <div className="FaqBox__button" >
                <ArrowLink variant={`${isActive? 'down':''}`}/>
            </div>
    </button>
    )
}

  FaqBox.propTypes = {
        description: PropTypes.string,
        title: PropTypes.string
  }
  

export default FaqBox