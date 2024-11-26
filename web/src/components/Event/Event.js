import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./events.module.scss";
import EventBriteModal from "../EventBriteModal/EventBriteModal";
const Event = props => {
  const host = props.host != null ? `Host: ${props.host}` : "Host: To Be Determined";
  const location =
    props.location != null ? `Location: ${props.location}` : "Location: To Be Determined";

  return (
    <EventBriteModal link={props.link}>
      <div className={styles.box}>
        <div className={`${styles.eventImage}`}>
          <GatsbyImage image={props.image} alt={props.alt} />
        </div>
        <div className={`${styles.textDiv} mx-3`}>
          <h2>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.boldText} ${styles.redText} ${styles.linkHover}`}
            >
              {props.date}
            </a>
          </h2>
          <h2 className={styles.smallText}>{host}</h2>
          <h3 className={styles.smallText}>{location}</h3>
          <h3>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.boldText} ${styles.linkHover}`}
            >
              {props.name}
            </a>
          </h3>
        </div>
      </div>
    </EventBriteModal>
  );
};

export default Event;
