import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./Navbar.scss";

import logo from "../img/hp-logo_typo.jpg";
import logo2 from "../img/hp-logo_typo-white.png";
import getVariantClasses from "../helpers/getVariantClass";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      dropActiveClass: " Navbar__dropdown--active",
      showDrop: false,
    };
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
              navBarActiveClass: "Navbar--is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    const { variant } = this.props;
    const className = getVariantClasses("Navbar", variant);
    return (
      <nav className={className} role="navigation" aria-label="main-navigation">
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
            <div className="Navbar__left">
              <Link to="/" className="Navbar__start" title="Logo">
                {variant === "transparent" ? (
                  <img src={logo2} alt="Heinze-Pool" />
                ) : (
                  <img src={logo} alt="Heinze-Pool" />
                )}
              </Link>
            </div>
            <div className="Navbar__right">
              <Link className="navbar-item" to="/service">
                Leistungen
              </Link>
              <div className="Navbar__ext">
                <button
                  className="Navbar__link"
                  onClick={() =>
                    this.setState({
                      showDrop: !this.state.showDrop,
                    })
                  }
                >
                  <div
                    className={`Navbar__plus${
                      this.state.showDrop ? " Navbar__plus--active" : ""
                    }`}
                  >
                    +
                  </div>
                  Produkte
                </button>
                <div
                  className={`Navbar__dropdown${
                    this.state.showDrop ? " Navbar__dropdown--active" : ""
                  }`}
                >
                  <Link className="navbar-item" to="/products">
                    Übersicht
                  </Link>
                  <Link className="navbar-item" to="/product/pools">
                    Pools
                  </Link>
                  <Link className="navbar-item" to="/product/überdachung">
                    Überdachung
                  </Link>
                  <Link className="navbar-item" to="/product/wasserpflege">
                    Wasserpflege
                  </Link>
                  <Link className="navbar-item" to="/product/zubehör">
                    Zubehör
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/about">
                Über uns
              </Link>
              <Link className="navbar-item" to="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

Navbar.propTypes = {
  data: PropTypes.object,
};

export default Navbar;
