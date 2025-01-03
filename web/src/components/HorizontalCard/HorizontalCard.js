import React from "react";

import { Col, Row, Card } from "react-bootstrap";
import Moment from "moment";
import EventBriteModal from "../EventBriteModal/EventBriteModal";
const HorizontalCard = (props) => {
  const { data, error } = props;

  const time = Moment(props.date).format("MMMM DD, YYYY");

  return (
    <Card className={` mt-3 p-0 ms-1 ${props.className}`}>
      <EventBriteModal link={props.link}>
        <Row className="row row-cols-6">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs={12}
            md={4}
            lg={5}
            xl={4}
          >
            <Card.Img
              src={
                props.image?.images?.fallback.src ||
                "../../images/ainc-logo-horizontal-white-text.png"
              }
              alt={props.title ?? "Untitled Event"}
              className={`p-2 card__img--overlay object-fit-cover`}
            />
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            md={{ span: 5, offset: 0 }}
            lg={7}
            xl={8}
          >
            <Card.Body className="ps-1 pe-0 me-0 ms-2">
              <p className="text--brand fs-6 fw-bold m-0 p-0">
                {time} <br />
                <small className="fw-normal text-black">{props.location}</small>
              </p>
              <p className="fw-bold">{props.title}</p>
            </Card.Body>
          </Col>
        </Row>
      </EventBriteModal>
    </Card>
  );
};

export default HorizontalCard;
