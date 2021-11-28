import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MotionCurtain } from "./styles";
import { curtainVariants } from "./variants";
import "./PageTransition.scss";
import logo from "../../../img/hp-logo_drop.png";

const PageTransition = ({ transitionStatus }) => {
  useEffect(() => {
    if (transitionStatus === "exited") {
      document.getElementById("PageContent").style.filter = "blur(2px)";
    } else {
      document.getElementById("PageContent").style.filter = "blur(0px)";
    }
  }, [transitionStatus]);

  return (
    <div className="PageTransition">
      <MotionCurtain
        initial="exited"
        animate={transitionStatus}
        variants={curtainVariants}
        color={"#eee"}
      >
        <div className="PageTransition__logo">
          <img src={logo} alt="Heinze-Pool" />
        </div>
      </MotionCurtain>
    </div>
  );
};

PageTransition.propTypes = {
  transitionStatus: PropTypes.string.isRequired,
};

export default PageTransition;
