import * as React from "react";
import PropTypes from "prop-types";

import "./BrandButton.scss";

const BrandButton = (props) => {
  return (
    <button {...props} className={`button ${props.className}`}>
      {props.children}
    </button>
  );
};

BrandButton.propTypes = {
  childen: PropTypes.oneOfType([PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string]),
};

export default BrandButton;
