import React from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'

import logo from '../img/hp-logo_typo.jpg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'Navbar--is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="Navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="Navbar__container">
          <div className="Navbar__mobile">
            {/* Hamburger menu */}
            {/* <div
              className={`Navbar__hamburger${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div> */}
          </div>
          <div
            id="navMenu"
            className={`Navbar__desktop${this.state.navBarActiveClass}`}
          >
            <div className="Navbar__links">
              <Link to="/" className="Navbar__start" title="Logo">
              <img src={logo} alt="Heinze-Pool"/>
            </Link>
            </div>
            <div className="Navbar__rechts">
              {/* <Link className="navbar-item">
                Leistungen
              </Link> */}
              <Link className="navbar-item" to="/products">
                Produkte
              </Link>
              <Link className="navbar-item" to="/about">
                Über uns
              </Link>
              {/* <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
