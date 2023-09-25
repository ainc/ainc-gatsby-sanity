import React from "react";
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import Subtitle from "../../components/UI/Subtitle/Subtitle"
import * as styles from "./DivOutline.module.scss";

const WhatWeDo = (props) => {
  return (
    <div className={`text-center ${styles.border}`}>
      <Subtitle className={`text-center align-items-end text-uppercase fw-bold fs-5 ${styles.subHeading}`}>{props.subHeading}</Subtitle>
      <p className={`${styles.content}`}>{props.content}</p>
      <div className="d-flex justify-content-center">
        <div className={styles.absolute}>
          
          <BrandButton className={`d-flex justify-content-center`}>{props.btnText}</BrandButton>
         
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
