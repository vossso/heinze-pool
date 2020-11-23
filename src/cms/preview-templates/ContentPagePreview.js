import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

   const adress = data.contactblock.adress
   const numbers = data.contactblock.numbers
   const webadress = data.contactblock.webadress
   const openhours = data.contactblock.openhours

    if(data) {
        return (
            <ContentPageTemplate
            title={data.title}
            image={getAsset(data.image)}
            subheading={data.subheading}
            contactblock={data.contactblock ? {
                adress: {
                    icon: getAsset(adress.icon),
                    street: adress.street,
                    city: adress.city
                },
                numbers: {
                    icon: getAsset(numbers.icon),
                    phone: numbers.phone,
                    fax: numbers.fax,
                },
                webadress: {
                    icon: getAsset(webadress.icon),
                    mail: webadress.mail,
                    web: webadress.web,
                },
                openhours: {
                    icon: getAsset(openhours.icon),
                    regularhours: openhours.regularhours,
                    specialinfo: openhours.specialinfo
                }
            }:{}}
            /> )
    } else {
        return <div>Loading...</div>
    }
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview
