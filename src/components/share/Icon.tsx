import React from "react";

interface IconProps {
  type: string;
  className?: string;
  size?: string | { width: string; height: string };
  color?: string;
}

export default ({ type, className = "Icon", size, color }: IconProps) => {
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
      // className={className + (color ? " h-color-" + color : "")}
      style={sizeStyle}
    >
      <use xlinkHref={"#" + type} />
    </svg>
  );
};
