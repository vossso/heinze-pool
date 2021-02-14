import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./Navbar.scss";

import logo from "../../img/hp-logo_typo.jpg";
import logo2 from "../../img/hp-logo_typo-white.png";
import getVariantClasses from "../../helpers/getVariantClass";
import useBreakpoint from "../../hooks/useBreakpoint";
import useScrollPos from "../../hooks/useScrollPos";
import MobileNav from "../MobileNav/MobileNav";

interface INavbarProps {
  variant: string;
}

const Navbar: React.FC<INavbarProps> = ({ variant }) => {
  const [showDrop, setShowDrop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const BreakpointM = useBreakpoint("m");
  const className = getVariantClasses("Navbar", variant);
  const currentScrollY = useScrollPos();

  const ignorePages = ["/portfolio"];

  useEffect(() => {
    const diff = BreakpointM ? window.innerHeight - 100 : window.innerHeight;
    if (
      currentScrollY >= diff ||
      ignorePages.find((element) => element === window.location.pathname)
    ) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [currentScrollY]);

  return (
    <nav
      className={className + `${showNav ? " Navbar--shown" : ""}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="Navbar__container">
        <div id="navMenu" className={`Navbar__desktop`}>
          <div className="Navbar__left">
            <Link to="/" className="Navbar__start" title="Logo">
              {variant === "transparent" ? (
                <img src={logo2} alt="Heinze-Pool" />
              ) : (
                <img src={logo} alt="Heinze-Pool" />
              )}
            </Link>
          </div>

          {BreakpointM ? (
            <div className="Navbar__mobile">
              <button
                className="Navbar__burger"
                onClick={() => setShowMobileNav(true)}
              >
                <div />
                <div />
                <div />
              </button>
            </div>
          ) : (
            <div className="Navbar__right">
              <Link className="navbar-item" to="/service">
                Leistungen
              </Link>
              <div className="Navbar__ext">
                <button
                  className="Navbar__link"
                  onClick={() => {
                    setShowDrop(!showDrop);
                    setShowNav(true);
                  }}
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
                <div
                  className={`Navbar__dropdown${
                    showDrop ? " Navbar__dropdown--active" : ""
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
          )}
        </div>
      </div>
      <div className="Navbar__mobile-screen">
        <MobileNav show={showMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
