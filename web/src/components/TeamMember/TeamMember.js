import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as styles from "./TeamMember.module.scss";
import styled from "styled-components";



const TeamMember = (props) => {
  return (
    <div className={styles.teamMember}>
      <figure className={styles.figure}>
          <GatsbyImage
            imgStyle={{borderRadius: "50%"}}
            objectFit="scale-down"
            image={props.image}
            alt={props.alt}
          />
        <figcaption className={styles.figcaption}>
          <div className={styles.nameHover}>
            <h6 className={styles.lgxVertical}>{props.name}</h6>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeamMember;
