import React from "react";
import PropTypes from "prop-types";

import "./ServiceOverview.scss";
import Container from "../share/Container/Container";
import ServiceOverviewElement from "../ServiceOverviewElement/ServiceOverviewElement";
import ServiceOverviewIntro from "../ServiceOverviewIntro/ServiceOverviewIntro";

const ServiceOverview = ({ services, description }) => {
  return services ? (
    <div className="ServiceOverview">
      <ServiceOverviewIntro services={services} description={description} />
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
