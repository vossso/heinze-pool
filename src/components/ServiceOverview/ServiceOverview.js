import React from "react";
import PropTypes from "prop-types";

import "./ServiceOverview.scss";
import Container from "../share/Container/Container";
import ServiceOverviewElement from "../ServiceOverviewElement/ServiceOverviewElement";
import test from '../../img/service.jpg'


const ServiceOverview = ({ services, description }) => {
  return services ? (
    <div className="ServiceOverview">
      <Container variant="half-height">
        <div className="ServiceOverview__intro">
            {/* ToDo Image mit Elementen */}
          <div className="ServiceOverview__left">
            {/* {services &&
              services.map((element, index) => {
                return <HexaIcon icon={element} key={index} />;
              })} */}
              <img className="HexaIcon__hexa" src={test} alt="Poool"/>
          </div>
          <div className="ServiceOverview__right">
              {/* ToDo Pflegbar machen */}
            <h4>Unsere Leistungen im Überblick</h4>
            <p>
             {description}
            </p>
          </div>
        </div>
      </Container>
      <Container variant={["full-height", "starter"]}>
        <div className="ServiceOverview__content">
          {services &&
            services.map((element, index) => {
              return (
                <div className="ServiceOverview__element" key={index}>
                  <ServiceOverviewElement
                    icon={element}
                    title={element.title}
                    description={element.text}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  ) : null;
};

ServiceOverview.propTypes = {
  services: PropTypes.array,
  description: PropTypes.string,
};

export default ServiceOverview;
