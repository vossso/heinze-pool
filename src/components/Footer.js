import React from 'react'
import './Footer.scss'
import Container from './ui/Container/Container'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <Container variant='no-top'>
          <p>Impressum</p><p>Datenschutz</p>
        </Container>
      </footer>
    )
  }
}

export default Footer
