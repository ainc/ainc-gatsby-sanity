import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./AlumniAvatarCard.module.scss";

export default function AlumniAvatarCard({
  alumniImage,
  name,
  jobTitle,
  companyLogo,
}) {
  return (
    <Card
      className={styles.card}
      style={{ width: "fit-content", backgroundColor: "#e6e7e8" }}
    >
      <div>
        <GatsbyImage
          className={styles.alumniImage}
          image={alumniImage}
          alt={name}
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.job}>{jobTitle}</p>
      </div>
      <div>
        <GatsbyImage
          className={styles.companyLogo}
          image={companyLogo}
          alt={jobTitle}
        />
      </div>
    </Card>
  );
}
