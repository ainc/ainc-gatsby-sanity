import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import BrandButton from "../../components/UI/BrandButton/BrandButton";

import * as styles from "./FiveAcrossWinnersCard.module.scss";

const FiveAcrossWinnersCard = (props) => {
  const founderList = React.useMemo(() => {
    const founderNames = props.founders?.trim();

    if (!founderNames) {
      return [];
    }

    return founderNames
      .split(",")
      .map((nameChunk) => nameChunk.trim())
      .filter(Boolean)
      .flatMap((nameChunk) =>
        nameChunk
          .split(/\s*&\s*|\s+and\s+/i)
          .map((namePart) => namePart.trim())
          .filter(Boolean),
      );
  }, [props.founders]);

  //if no video is set by sanity, then default link to 5Across playlist
  let setDefaultVideo = props.founderVideo
    ? props.founderVideo
    : "https://www.youtube.com/playlist?list=PL_YvoQ-KM3YHl7D29MzJClPvRqp_PL7me";

  return (
    <article
      className={`${styles.card} ${props.className || ""} ${props.isActive ? styles.activeCard : ""} ${props.dense ? styles.denseCard : ""}`}
    >
      <h3 className={styles.companyTitle}>{props.companyTitle}</h3>
      <div className={styles.foundersBlock}>
        <p className={styles.foundersLabel}>Founders:</p>
        {founderList.length ? (
          <ul className={styles.foundersList}>
            {founderList.map((founder) => (
              <li
                key={`${props.companyTitle}-${founder}`}
                className={styles.foundersText}
              >
                {founder}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.foundersText}>Founder info coming soon</p>
        )}
      </div>

      {props.winnerImage ? (
        <div className={styles.imageWrap}>
          <GatsbyImage image={props.winnerImage} alt={props.companyTitle} />
        </div>
      ) : null}

      <a href={setDefaultVideo} target="_blank" rel="noopener noreferrer">
        <BrandButton className={styles.watchButton}>Watch Video</BrandButton>
      </a>
    </article>
  );
};

export default FiveAcrossWinnersCard;
