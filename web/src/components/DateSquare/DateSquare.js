import React from "react";
// import styled from "styled-components";
import { Card } from "react-bootstrap";
import Moment from 'moment';

const DateSquare = (props) => {

  const month = Moment(props.date).format('MMM')
  const day = Moment(props.date).format('D')

  return (
    <Card className="card--square-size">
      <Card.Body className="m-1">
        <Card.Title className="text--red fw-bold text-center">         
            {day}          
        </Card.Title>
        <Card.Text
          className="text-secondary fw-bolder my-0 text-center">
            {month}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DateSquare;
