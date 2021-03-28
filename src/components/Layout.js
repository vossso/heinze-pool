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

const TemplateWrapper = ({ hasFooter = true, children }) => {
  // if ( window.location.hash ) scroll(0,0);
  const { title, description } = useSiteMetadata();
  const BreakpointM = useBreakpoint("l");

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/hp-favico.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/hp-favico.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
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
    </div>
  );
};

export default TemplateWrapper;
