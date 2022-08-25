import React from "react";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Card } from "react-bootstrap";

const DateSquare = (props) => {
  return (
    <Card className="card--square-size">
      <Card.Body className="m-1">
        <Card.Title>
          <Title className="brand fw-boldest text-center">
            11
          </Title>
          
        </Card.Title>
        <Card.Text>
          <Subtitle className="fw-bolder text-center">
            Jul
          </Subtitle>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DateSquare;
