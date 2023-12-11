import React from "react";
import { Image } from "react-bootstrap";

import * as styles from "./Amenities.module.css";

const Amenities = (props) => {
  return (
    <div className={styles.center}>
      <div className={styles.inlineBlock}>
        <Image
          className={`${styles.amenity} ${styles.imgResponsive}`}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
        <p className={`${styles.inlineBlock} ${styles.info}`}>
          {props.info}
          <span className={`${styles.underline} ${styles.inlineBlock}`}></span>
        </p>
      </div>
    </div>
  );
};

export default Amenities;
