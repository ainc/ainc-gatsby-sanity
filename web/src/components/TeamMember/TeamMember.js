import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./TeamMember.module.scss";

const TeamMember = (props) => {
  return (
    <div className={styles.teamMember} tabIndex={0}>
      <div className={styles.flipInner}>
        <div className={styles.flipFront}>
          <GatsbyImage
            imgStyle={{ borderRadius: "50%" }}
            objectFit="scale-down"
            image={props.image}
            alt={props.alt}
          />
        </div>
        <div className={styles.flipBack}>
          <h3 className={styles.name}>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
