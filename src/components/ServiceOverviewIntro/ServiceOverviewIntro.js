import React from "react";
import PropTypes from "prop-types";

import "./ServiceOverviewIntro.scss";
import Container from "../share/Container/Container";
import test from '../../img/service.jpg'


const ServiceOverviewIntro = ({ services, description }) => {
  return services ? (
    <div className="ServiceOverviewIntro">
      <Container variant="half-height">
        <div className="ServiceOverviewIntro__intro">
            {/* ToDo Image mit Elementen */}
          <div className="ServiceOverviewIntro__left">
            {/* {services &&
              services.map((element, index) => {
                return <HexaIcon icon={element} key={index} />;
              })} */}
              <img className="HexaIcon__hexa" src={test} alt="Poool"/>
          </div>
          <div className="ServiceOverviewIntro__right">
              {/* ToDo Pflegbar machen */}
            <h4>Unsere Leistungen im Überblick</h4>
            <p>
             {description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
};

ServiceOverviewIntro.propTypes = {
  services: PropTypes.array,
  description: PropTypes.string,
};

export default ServiceOverviewIntro;
