import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as styles from "./BackgroundCard.module.scss";
import styled from "styled-components";
import { Card, Row, Col, Container } from 'react-bootstrap'


const BackgroundCard = (props) => {
  return (
    <a href={props.link}>
      <Card className={`${styles.cardBackgroundFilter} col-xs-12`} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <Card.Body className="card-body--background-card p-1">
          <Card.Img variant="top" src={props.imgSrc} className="d-block mx-auto mt-3 w-50" />
          <Card.Title className={`text-uppercase text-white text-center fw-bold mt-3 ${styles.cardTitle}`}>{props.title}</Card.Title>
          <Card.Text className={`text-white text-center mb-5 ${styles.cardText}`}>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default BackgroundCard;
