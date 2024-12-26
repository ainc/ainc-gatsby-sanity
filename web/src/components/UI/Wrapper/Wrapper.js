import React from "react";
import PropTypes from "prop-types";
// CSS
import { Container } from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return <div className={Container}>{props.children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element,
  ]),
};

export default Wrapper;
