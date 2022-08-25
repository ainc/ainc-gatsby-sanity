import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./HorizontalCard.module.scss";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import { Container, Col, Row, Image, Card } from "react-bootstrap";

const HorizontalCard = (props) => {
  return (
    <Card className="h-100">
      <Row>
        <Col xs={4}>
          <Card.Img src="https://via.placeholder.com/150x150" alt={props.title} />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>
              Card title  
            </Card.Title>
            <Card.Text>
              Card Text
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
