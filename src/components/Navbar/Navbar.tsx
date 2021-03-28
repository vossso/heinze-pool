import React, { useState, useEffect } from "react";
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import "./Navbar.scss";

import logo from "../../img/Logo-line_color.png";
import logo2 from "../../img/hp-logo_drop.png";
import pin from "../../img/icons/icon_Loc-blue.png";
import pin2 from "../../img/icons/icon_Loc-white.png";
import getVariantClasses from "../../helpers/getVariantClass";
import useBreakpoint from "../../hooks/useBreakpoint";
import useScrollPos from "../../hooks/useScrollPos";
import MobileNav from "../MobileNav/MobileNav";
import useWindowLocation from "../../hooks/useWindowLocation";

interface INavbarProps {
  variant: string;
  offset: number;
}

const Navbar: React.FC<INavbarProps> = ({ variant, offset }) => {
  const [showDrop, setShowDrop] = useState(false);
  const [showDefaultNav, setShowDefaultNav] = useState(false);
  const location = useWindowLocation().pathname;

  const BreakpointXL = useBreakpoint("xl");
  const className = getVariantClasses("Navbar", variant);
  const currentScrollY = useScrollPos();

  const ignorePages = ["/portfolio", "/meta/impressum", "/products"];

  if (location == "/faq") {
    offset = 450;
  }

  useEffect(() => {
    const diff = offset ? offset : window.innerHeight / 2;
    if (
      currentScrollY >= diff ||
      ignorePages.find((element) => location.includes(element))
    ) {
      setShowDefaultNav(true);
    } else {
      setShowDefaultNav(false);
    }
  }, [currentScrollY, location]);

  const getLink = (to, label) => {
    return (
      <TransitionLink
        className={`Navbar__link${
          location && location.includes(to) ? " Navbar__link--active" : ""
        }`}
        to={to}
        exit={{ length: 0.5 }}
        entry={{ delay: 0.5 }}
      >
        {label}
      </TransitionLink>
    );
  };

  return (
    <nav
      className={
        variant
          ? className
          : "Navbar" + `${showDefaultNav ? "" : " Navbar--transparent"}`
      }
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="Navbar__container">
        <div id="navMenu" className={`Navbar__desktop`}>
          <div className="Navbar__left">
            <TransitionLink
              to="/"
              className="Navbar__start"
              title="Logo"
              exit={{ length: 0.5 }}
              entry={{length: 0.8, delay: 0.5 }}
            >
              {variant === "transparent" || !showDefaultNav ? (
                <img src={logo2} alt="Heinze-Pool" />
              ) : (
                <img src={logo} alt="Heinze-Pool" />
              )}
            </TransitionLink>
          </div>

          {BreakpointXL ? (
            <MobileNav variant={!showDefaultNav && "white"} />
          ) : (
            <div className="Navbar__right">
              {getLink("/service", "Leistungen")}
              <div className="Navbar__ext">
                <div
                  className={`Navbar__link${
                    showDrop ? " Navbar__link--active" : ""
                  }`}
                  onClick={() => {
                    setShowDrop(!showDrop);
                  }}
                >
                  {/* <span
                    className={`Navbar__plus${
                      showDrop ? " Navbar__plus--active" : ""
                    }`}
                  >
                    +
                  </span> */}
                  Produkte
                </div>
                <div
                  className={`Navbar__dropdown${
                    showDrop ? " Navbar__dropdown--active" : ""
                  }`}
                >
                  {getLink("/products", "Übersicht")}
                  {getLink("/product/pools", "Pools")}
                  {getLink("/product/überdachung", "Abdeckung")}
                  {getLink("/product/wasserpflege", "Wasserpflege")}
                  {getLink("/product/zubehör", "Zubehör")}
                </div>
              </div>
              {getLink("/about", "Über uns")}
              {getLink("/faq", "FAQ")}
              <TransitionLink to="/about#contact">
                {variant === "transparent" || !showDefaultNav ? (
                  <img src={pin2} alt="location" />
                ) : (
                  <img src={pin} alt="location" />
                )}
              </TransitionLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
