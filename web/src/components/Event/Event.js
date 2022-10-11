import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
import * as styles from "./events.module.scss";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image } from "react-bootstrap";

const Event = (props) => {
  const host = (props.host != null) ? `Host: ${props.host}` : "Host: To Be Determined"
  const location = (props.location != null) ? `Location: ${props.location}` : "Location: To Be Determined"

  return (
      <a href={props.link}>
        <div className={styles.box}>
            <div className={`${styles.eventImage}`}>
              <GatsbyImage
                className={``}
                image={props.image}
                alt={props.alt}
              />
            </div>
                <div className="mx-3">
                  <a href={props.link} className={`${styles.boldText} ${styles.redText} ${styles.linkHover}`}>{props.date}</a>
                  <h4 className={styles.smallText}>{host}</h4>
                  <h6 className={styles.smallText}>{location}</h6>
                  <h6><a href={props.link} className={`${styles.boldText} ${styles.linkHover}`}>{props.name}</a></h6>
                </div>
          </div>
        </a>
  );
};

export default Event;
