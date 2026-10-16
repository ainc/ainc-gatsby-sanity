import React from "react";
import * as styles from "./FellowshipCompanyCard.module.scss";

const FellowshipCompanyCard = ({ name, url, image }) => {
  const className = styles.company;
  const initial = name ? name.trim().charAt(0).toUpperCase() : "?";
  const content = (
    <>
      <span className={styles.logoPlate}>
        {image ? (
          <img className={styles.logo} src={image} alt="" />
        ) : (
          <span className={styles.monogram} aria-hidden="true">
            {initial}
          </span>
        )}
      </span>
      <span className={styles.name}>{name}</span>
    </>
  );

  if (!url) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export default FellowshipCompanyCard;
