import React from 'react'
import PropTypes from 'prop-types'
import './Stage.scss'
import Markdown from 'markdown-to-jsx'
import Container from '../share/Container/Container'

const Stage = ({ image, title, description }) => (
    <Container variant={["half-height","full-width", "no-padding","starter"]}>
        <div className="Stage"> 
            {image && 
                <div className="Stage__image">
                    <img src={
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                        } alt="Poool"/>
                </div> 
            }

            <div className="Stage__content">
                <Container>
                    {title && <h2>{title}</h2>}
                    {description && <Markdown>{description}</Markdown>}
                </Container>
            </div>
        </div> 
    </Container>

  )

  Stage.propTypes = {
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
        title: PropTypes.string,
        description: PropTypes.string
  }
  

export default Stage