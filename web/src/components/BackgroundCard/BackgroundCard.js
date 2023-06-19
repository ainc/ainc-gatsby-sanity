import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as styles from "./BackgroundCard.module.scss";
import styled from "styled-components";
import { Card } from 'react-bootstrap'


const BackgroundCard = (props) => {
  return (
    <a href={props.link}>
      <Card className={`${styles.cardBackgroundFilter} h-100`} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <Card.Body className="card-body--background-card">
          <Card.Img variant="top" src={props.imgSrc} className="d-block mx-auto mt-3" alt={props.alt} style={{ width: `50%` }}/>
          <Card.Title className="text-uppercase text-white text-center fw-bold fs-6 mt-3 ">{props.title}</Card.Title>
          <Card.Text className="text-white text-center mb-5 fs-6">{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default BackgroundCard;
