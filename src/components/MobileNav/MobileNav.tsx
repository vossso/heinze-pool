import React, { useState } from "react";
import { Link } from "gatsby";
import bgImage from "../../img/water.jpg";
import logo from "../../img/hp-logo_white.png";
import AnimateHeight from "react-animate-height";

import "./MobileNav.scss";

interface IMobileNavProps {
  show?: boolean;
}

const MobileNav: React.FC<IMobileNavProps> = ({ show }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <AnimateHeight height={show ? "auto" : 0} duration={300}>
    <div className={`MobileNav`}>
      <div className="MobileNav__bg-image">
        <img src={bgImage} alt="Poool" />
      </div>
      <div className="MobileNav__content">
        <img src={logo} alt="Poool" />
        <Link className="navbar-item" to="/service">
          Leistungen
        </Link>
        <div className="MobileNav__ext">
          <button
            className="MobileNav__link"
            onClick={() => setShowDrop(!showDrop)}
          >
            <div
              className={`Navbar__plus${
                showDrop ? " Navbar__plus--active" : ""
              }`}
            >
              +
            </div>
            Produkte
          </button>
          <AnimateHeight height={showDrop ? "auto" : 0} duration={300}>
            <div className={`MobileNav__dropdown`}>
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
          </AnimateHeight>
        </div>
        <Link className="navbar-item" to="/portfolio">
          Projekte
        </Link>
        <Link className="navbar-item" to="/about">
          Über uns
        </Link>
        {/* ToDo #kontaktbereich */}
        <Link className="navbar-item" to="/about#contact">
          Kontakt
        </Link>
        <Link className="navbar-item" to="/faq">
          FAQ
        </Link>
      </div>
    </div>
    </AnimateHeight>
  );
};

export default MobileNav;
