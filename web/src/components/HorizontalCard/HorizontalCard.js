import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./HorizontalCard.module.scss";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";

const HorizontalCard = (props) => {

  const { data, error } = props;
  
  const dateFormatted = data.date;

  return (
    <Card>
      <Row>
        <Col xs={4}>
          <Card.Img src="https://via.placeholder.com/150x150" alt={props.title} className="m-3" />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <p className="text--brand fw-bold">
              1:00 pm <br />
              <small className="fw-normal text--grey">Awesome Inc</small> 
            </p>
            <Subtitle className="fw-bold">
              Event title
            </Subtitle>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
