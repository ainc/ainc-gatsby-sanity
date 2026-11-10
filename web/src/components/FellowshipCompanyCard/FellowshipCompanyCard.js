import React from "react";
import * as styles from "./FellowshipCompanyCard.module.scss";

const STATUS_LABELS = {
  acquired: "Acquired",
  closed: "Closed",
};

const FellowshipCompanyCard = ({ name, url, image, status }) => {
  const className = styles.company;
  const initial = name ? name.trim().charAt(0).toUpperCase() : "?";
  const statusLabel = STATUS_LABELS[status];
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
      <span className={styles.copy}>
        <span className={styles.name}>{name}</span>
        {statusLabel ? (
          <span
            className={
              status === "acquired"
                ? styles.statusAcquired
                : styles.statusClosed
            }
          >
            {statusLabel}
          </span>
        ) : null}
      </span>
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
