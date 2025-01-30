import * as React from "react";
import * as styles from "./TechTalentProfileCard.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import BrandAnchor from "../../../../components/UI/BrandAnchor/BrandAnchor";

const TechTalentProfileCard = (props) => {
  let profileImage;
  try {
    // Dynamically require the image
    profileImage = require(
      `../../../../images/tech-talent/${props.imageName}.png`,
    ).default;
  } catch (error) {
    console.error("Error loading image:", props.imageName, error);
  }

  return (
    <div
      id={props.department.replace(/\s+/g, "-").toLowerCase()}
      className={styles.profileCard}
    >
      {/* Container for image and curved text */}
      <div className={styles.profileName}>
        {/* Circular Profile Image */}
        <img
          className={styles.profileImage}
          src={profileImage}
          alt={`Profile image of ${props.name}`}
        />
        <svg
          className={styles.nameCircle}
          viewBox="0 0 1200 1200"
          width="400"
          height="400"
        >
          <defs>
            <path
              id="circlePathId"
              d="
        M 600,600
        m -500,0
        a 500,500 0 1,1 1000,0
        a 500,500 0 1,1 -1000,0
      "
            />
          </defs>
          <text fontSize="80" fontWeight="bold" letterSpacing="5">
            <textPath
              className={styles.nameText}
              xlinkHref="#circlePathId"
              startOffset="8%"
              textAnchor="start"
            >
              Meet {props.name}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Department and Portfolio Link */}
      <div className={styles.lowerCard}>
        <div className={styles.departmentName}>{props.department}</div>
        <BrandAnchor
          href={props.link}
          className={`${styles.portfolioButton}, btn--small`}
        >
          Portfolio
        </BrandAnchor>
      </div>
    </div>
  );
};

export default TechTalentProfileCard;
