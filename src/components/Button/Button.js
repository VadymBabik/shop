import React from "react";
import PropTypes from "prop-types";

export const Button = ({ click, size, color, icon, text }) => {
  return (
    <button onClick={click} className={`${size} ${color} waves-effect btn`}>
      {icon}
      {text}
    </button>
  );
};
Button.propTypes = {
  click: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
};
Button.defaultProps = {
  color: "#ff9100",
  icon: null,
};
