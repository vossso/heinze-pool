import React from 'react'
import './Footer.scss'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'

import Container from './share/Container/Container'
import logo from '../img/hp-logo_white.png'

class Footer extends React.Component {
  render() {
    const { data } = this.props
    const {adress, numbers, openinghours, webadress} = data.markdownRemark.frontmatter.contactblock

    return (
      <footer className="Footer">
        <Container variant={['no-top','half-height', 'padding-s']}>
          <h3>Kontakt</h3>
          <div className="Footer__content">
            <div className="Footer__col">
              <h5>Öffnungszeiten</h5>
              <div className="Footer__hours-block">
                {openinghours.map((element, index) => {
                  return (
                    <div className="Footer__hours" key={index}>
                      <h5>{element.daysbegin} - {element.daysend}</h5>
                      <p>{element.timebegin} - {element.timeend}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="Footer__col">
              <h5>E-Mail</h5>
              <p>{webadress.mail}</p>
              <h5>Telefon</h5>
              <p>{numbers.phone}</p>
            </div>
            <div className="Footer__col">
              <h5>Adresse</h5>
              <p>Henze Pool GmbH<br/>
              {adress.street}<br/>
              {adress.city}</p>
            </div>
            <div className="Footer__col">
              <img src={logo} alt="Heinze Pool Logo"/>
            </div>
          </div>
          <div className="Footer__subline">
            <p>Impressum</p><p>Datenschutz</p>
          </div>
        </Container>
      </footer>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.object,
}


export default () => (
  <StaticQuery
    query={graphql`
    query FooterQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
        frontmatter {
          contactblock {
            adress {
              city
              street
            }
            numbers {
              fax
              phone
            }
            openinghours {
              daysbegin
              daysend
              timebegin
              timeend
            }
            webadress {
              mail
              web
            }
          }
        }
      }
    }
    `}
    render={(data ) => <Footer data={data}/>}
  />
)
