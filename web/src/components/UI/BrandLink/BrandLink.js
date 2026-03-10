import * as React from "react";
import PropTypes from "prop-types";

import "./BrandLink.scss";

const BrandLink = (props) => {
  return (
    <a {...props} href={props.href} className={`button ${props.className}`}>
      {props.children}
    </a>
  );
};

BrandLink.propTypes = {
  childen: PropTypes.oneOfType([PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string]),
};

export default BrandLink;
