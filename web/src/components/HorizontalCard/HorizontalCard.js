import React from "react";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Moment from 'moment';

const HorizontalCard = (props) => {

  const { data, error } = props;
  
  const time = Moment(props.date).format('MMMM DD, YYYY')

  return (
    <Card className={` mt-3 p-0 ms-1 ${props.className}`}>
      <Row className='row row-cols-6'>
        <Col xs={1} md={4} lg={5} xl={4}>
          <Card.Img src={props.image.images.fallback.src} alt={props.title} className="m-3 card--square-size" />
        </Col>
        <Col xs={{span: 12, offset: 0}} md={{span: 5, offset: 0}} lg={7} xl={8}>
          <Card.Body className="ps-1 pe-0 me-0 ms-2">
            <p className="text--brand fs-6 fw-bold m-0 p-0">
              {time} <br />
              <small className="fw-normal text-black">{props.location}</small> 
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
