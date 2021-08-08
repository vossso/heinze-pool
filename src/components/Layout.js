import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "./Navbar/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import "./Layout.scss";
import useBreakpoint from "../hooks/useBreakpoint";
import { TransitionState } from "gatsby-plugin-transition-link";
import PageTransition from "../components/share/PageTransition/PageTransition";
import CookieNotice from "./share/CookieNotice/CookieNotice";
import { VisibilityContextProvider } from "../contexts/VisibilityContext";

const TemplateWrapper = ({ hasFooter = true, children, isIndex = false }) => {
  // if ( window.location.hash ) scroll(0,0);
  const { title, description } = useSiteMetadata();
  const BreakpointM = useBreakpoint("l");

  return (
    <div>
      <Helmet>
        <html lang="en" data-react-helmet="lang" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/hp_favicon_32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/hp_favicon_32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/hp_favicon_32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/hp_favicon_16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/hp_favicon_32x32.png`}
          color="#1e3769"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <VisibilityContextProvider>
        <CookieNotice />
      </VisibilityContextProvider>
      {isIndex ? (
        <>
          <div>{children}</div>
          <div className="Layout__footer">
            <a href="/meta/impressum">Impressum & Datenschutz</a>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div>{children}</div>
          {hasFooter ? (
            <Footer />
          ) : (
            !BreakpointM && (
              <div className="Layout__footer">
                <a href="/meta/impressum">Impressum & Datenschutz</a>
              </div>
            )
          )}
          <TransitionState>
            {({ transitionStatus }) => {
              return <PageTransition transitionStatus={transitionStatus} />;
            }}
          </TransitionState>
        </>
      )}
    </div>
  );
};

export default TemplateWrapper;
