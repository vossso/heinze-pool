import React from "react";
import "./Footer.scss";
import PropTypes from "prop-types";
import GoogleMap from "./share/GoogleMap/GoogleMap";
import useWindowLocation from "../hooks/useWindowLocation";

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

  const hasMap = location === "/about";
  const variant = hasMap
    ? ["no-top", "full-height", "padding-s"]
    : ["no-top", "half-height--bottom", "padding-s"];

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
        {hasMap && (
          <div className="Footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.9117750436635!2d9.83388421594464!3d52.42639625091423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00df8991b0f5f%3A0x73828ef50bcf9bd2!2sHeinze%20Pool%20GmbH!5e0!3m2!1sde!2sde!4v1614376945520!5m2!1sde!2sde"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        )}
        <div className="Footer__subline">
          <a href="./meta/impressum">Impressum</a>
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
