import React from "react";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

import * as styles from "./Amenities.module.css";

const Amenities = (props) => {
  return (
    <div className={styles.center}>
      <div className={styles.inlineBlock}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Image
            className={`${styles.amenity} ${styles.imgResponsive}`}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
          <p className={`${styles.inlineBlock} ${styles.info}`}>
            {props.info}
            <span
              className={`${styles.underline} ${styles.inlineBlock}`}
            ></span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Amenities;
