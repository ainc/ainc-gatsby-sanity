import * as React from "react";

import { ribbon, ribbonContent } from "./Ribbon.module.css";

const Ribbon = ({ position }) => {
  return (
    <div className={ribbon}>
      <div className={`${ribbonContent} `}>{position}</div>
    </div>
  );
};

export default Ribbon;
