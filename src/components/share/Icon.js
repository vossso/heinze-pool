import React from "react";

const Icon = ({
  type,
  className = "Icon",
  size,
  color,
}) => {
  try {
    require("../../img/icons/" + type + ".svg");
  } catch (e) {
    console.log("error");
  }

  const sizeStyle = size
    ? typeof size === "string"
      ? { width: size, height: size }
      : { width: size.width, height: size.height }
    : {};

  return (
    <svg
      className={className + (color ? " h-color-" + color : "")}
      style={sizeStyle}
    >
      <use xlinkHref={"#" + type} />
    </svg>
  );
};

export default Icon;
