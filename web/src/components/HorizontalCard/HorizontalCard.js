import React from "react";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Moment from 'moment';

const HorizontalCard = (props) => {

  const { data, error } = props;
  
  const time = Moment(props.date).format('h:mm a')

  return (
    <Card className={props.className}>
      <Row>
        <Col xs={4}>
          <Card.Img src={props.image.images.fallback.src} alt={props.title} className="m-3" />
        </Col>
        <Col xs={8}>
          <Card.Body className="ps-0 ms-0">
            <p className="text--brand fw-bold">
              {time} <br />
              <small className="fw-normal text--grey">{props.location}</small> 
            </p>
            <Subtitle className="fw-bold">
              {props.title}
            </Subtitle>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
