import * as React from "react";
import PropTypes from "prop-types";

import "./BrandAnchor.scss";

const BrandAnchor = (props) => {
  return (
    <a {...props} href={props.href} className={`button ${props.className}`}>
      {props.children}
    </a>
  );
};

BrandAnchor.propTypes = {
  childen: PropTypes.oneOfType([PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string]),
};

export default BrandAnchor;
