import React from "react";
import "./Footer.scss";
import PropTypes from "prop-types";
import GoogleMap from "./share/GoogleMap/GoogleMap";
import useWindowLocation from "../hooks/useWindowLocation"

import { graphql, StaticQuery } from "gatsby";

import Container from "./share/Container/Container";

interface IFooterProps {
  data: any;
}

const Footer: React.FC<IFooterProps> = ({ data }) => {
  const {
    adress,
    numbers,
    openinghours,
    webadress,
  } = data.markdownRemark.frontmatter.contactblock;

  const location = useWindowLocation().pathname;

  const hasMap = location === '/about';
  const variant = hasMap ? ["no-top", "full-height", "padding-s", "starter"] : ["no-top", "half-height", "padding-s"]

  return (
    <footer className="Footer">
      <Container variant={variant} id="contact">
        <h3>Kontakt</h3>
        <div className="Footer__content">
          <div className="Footer__col">
            <h5>Öffnungszeiten</h5>
            <div className="Footer__hours-block">
              {openinghours.map((element, index) => {
                const { daysbegin, daysend, timebegin, timeend } = element;
                return (
                  <div className="Footer__hours" key={index}>
                    <h5>
                      {daysbegin === daysend
                        ? daysbegin
                        : `${daysbegin} - ${daysend}`}
                    </h5>
                    <p>
                      {timebegin} - {timeend}
                    </p>
                  </div>
                );
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
            <p>
              Henze Pool GmbH
              <br />
              {adress.street}
              <br />
              {adress.city}
            </p>
          </div>
        </div>
        {hasMap && <div className="Footer__map">
          <GoogleMap
            address={{
              location: "Heinze Pool GmbH",
              street: "Daimlerstraße 9",
              plz: "30916",
            }}
          />
        </div>}
        <div className="Footer__subline">
          <a href='./meta/impressum'>Impressum</a>
          <p>Datenschutz</p>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.object,
};

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
    render={(data) => <Footer data={data} />}
  />
);
