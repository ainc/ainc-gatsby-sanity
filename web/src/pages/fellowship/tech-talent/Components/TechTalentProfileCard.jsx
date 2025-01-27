import * as React from "react";
import * as styles from "./TechTalentProfileCard.module.scss";
import { StaticImage } from "gatsby-plugin-image";

/**
 * TechTalentProfileCard (TTPC = Tech Talent Profile Card)
 * Renders a profile card with a circular profile image
 * and name text whose baseline wraps around the image.
 */
const TechTalentProfileCard = (props) => {
  return (
    <div className={styles.profileCard}>
      {/* Container for image and curved text */}
      <div className={styles.profileName}>
        {/* Circular Profile Image */}
        <StaticImage
          className={styles.profileImage}
          src="../../../../images/tech-talent/kyle raney.png"
          alt="Profile Placeholder"
        />

        {/* 
          SVG to display text along a circular path.
          - We set the viewBox to "0 0 200 200" to align with .profileName dimensions.
          - The path is a circle with center at (100,100) and radius = 55.
          - This positions the text so that it closely wraps the profile image (which has a radius of 50).
        */}
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
              startOffset="10%"
              textAnchor="start"
            >
              Meet {props.name}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Department and Portfolio Link */}
      <div className={styles.departmentName}>{props.department}</div>
      <a href={props.link} className={styles.portfolioButton}>
        Portfolio
      </a>
    </div>
  );
};

export default TechTalentProfileCard;
