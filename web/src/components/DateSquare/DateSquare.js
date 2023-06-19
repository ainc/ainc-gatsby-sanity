import React from "react";
// import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Card } from "react-bootstrap";
import Moment from 'moment';

const DateSquare = (props) => {

  const month = Moment(props.date).format('MMM')
  const day = Moment(props.date).format('D')

  return (
    <Card className="card--square-size bg-white">
      <Card.Body className="m-1">
        <Card.Title>
          <Title className="brand fw-boldest text-center">
            {day}
          </Title>
          
        </Card.Title>
        <Card.Text>
          <Subtitle className="fw-bolder text-center">
            {month}
          </Subtitle>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DateSquare;
