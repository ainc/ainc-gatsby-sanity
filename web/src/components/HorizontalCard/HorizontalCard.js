import React from "react";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Moment from 'moment';

const HorizontalCard = (props) => {

  const { data, error } = props;
  
  const time = Moment(props.date).format('MMMM DD, YYYY')

  return (
    <Card className={`w-100 mt-3 p-0 ms-3  ${props.className}`}>
      <Row className='row row-cols-small'>
        <Col xs={2} md={4} lg={5}>
          <Card.Img src={props.image.images.fallback.src} alt={props.title} className="m-3 card--square-size" />
        </Col>
        <Col xs={{span: 7, offset: 3}} md={{span: 5, offset: 0}} lg={7}>
          <Card.Body className="ps-1 ms-1">
            <p className="text--brand fw-bold m-0">
              {time} <br />
              <small className="fw-normal text--grey">{props.location}</small> 
            </p>
            <p className="fw-bold">
              {props.title}
            </p>
          </Card.Body>
        </Col>
        </Row>
    </Card>
  );
};

export default HorizontalCard;
