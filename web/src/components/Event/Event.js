import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./events.module.scss";
import EventBriteModal from "../EventBriteModal/EventBriteModal";
const Event = (props) => {
  const host = props.host ? `Host: ${props.host}` : "Host: To Be Determined";
  const location = props.location
    ? `Location: ${props.location}`
    : "Location: To Be Determined";

  const isEventBriteEvent = (link) => {
    if (!link) return false;
    return link.toLowerCase().includes("eventbrite.com");
  };

  const eventIsEventBrite = isEventBriteEvent(props.link);

  const eventContent = (
    <div className={styles.box}>
      <div className={styles.eventImage}>
        <GatsbyImage
          image={props.image}
          alt={props.alt || (props.name ?? "Untitled Event")}
        />
      </div>
      <div className={`${styles.textDiv} mx-3`}>
        <h2 className={styles.boldText}>{props.date}</h2>
        <h2 className={styles.smallText}>{host}</h2>
        <h3 className={styles.smallText}>{location}</h3>
        <h3 className={styles.boldText}>{props.name ?? "Untitled Event"}</h3>
      </div>
    </div>
  );

  return eventIsEventBrite ? (
    <EventBriteModal link={props.link}>
      <div
        className={styles.contentWrapper}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
          }
        }}
      >
        {eventContent}
      </div>
    </EventBriteModal>
  ) : (
    <a
      className={styles.contentWrapper}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {eventContent}
    </a>
  );
};

export default Event;
