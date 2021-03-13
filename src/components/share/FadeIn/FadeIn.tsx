import React from "react";
import "./FadeIn.scss";

const FadeIn = ({ duration = 500, delay = 300, children, ...delegated }) => {
  return (
    <div
      className="FadeIn"
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </div>
  );
};
export default FadeIn;
