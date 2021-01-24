
import React from 'react'

import './HexaImage.scss'

const HexaImage = ({ imageInfo }) => {

const getImagePath = () => {
        const { alt = '', childImageSharp, image } = imageInfo
        console.log("image: ",image, "childIS: ", childImageSharp);
        if (!!image && !!image.childImageSharp) {
        return (
            // <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
            image.childImageSharp.fluid
        )
        }
    
        if (!!childImageSharp) {
        return (
                // <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
                childImageSharp.fluid
            )
        }
    
        if (!!image && typeof image === 'string')
        return (
            // <img style={imageStyle} src={image} alt={alt} />
            image
        )
    
        return null
    }
    console.log(getImagePath())

    
    return (
            <div className="HexaImage" >
                <div class='r-hex'>
                    <div class='r-hex-inner'>
                    </div>
                </div>
            </div>
    )
}

export default HexaImage
