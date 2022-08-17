import React from "react";
import { GatsbyImage} from "gatsby-plugin-image";
import * as styles from "./events.module.css";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image } from "react-bootstrap";

const Event = (props) => {
  return (
      <a href={props.link}>
        <div className={styles.box}>
              <GatsbyImage
                className={styles.eventImage}
                image={props.image}
                alt={props.alt}
              />
                <div className={styles.textContainer}>
                  <a href={props.link} className={`${styles.boldText} ${styles.redText} ${styles.linkHover}`}>{props.date}</a>
                  <h4 className={styles.hostText}>{props.host}</h4>
                  <h6 className={styles.locationText}>{props.location}</h6>
                  <h6><a href={props.link} className={`${styles.boldText} ${styles.linkHover}`}>{props.name}</a></h6>
                </div>
          </div>
        </a>
  );
};

export default Event;