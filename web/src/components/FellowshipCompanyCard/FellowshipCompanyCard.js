import React from "react";
import * as styles from "./FellowshipCompanyCard.module.scss";

const FellowshipCompanyCard = ({ name, url, image }) => {
  const content = (
    <>
      {image ? <img className={styles.logo} src={image} alt="" /> : null}
      <span className={styles.name}>{name}</span>
    </>
  );

  if (!url) {
    return <div className={styles.company}>{content}</div>;
  }

  return (
    <a
      className={styles.company}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export default FellowshipCompanyCard;
