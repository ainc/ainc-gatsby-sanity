import React from "react";
import Moment from "moment";
import { Col, Row, Card } from "react-bootstrap";

import DateSquare from "../../components/DateSquare/DateSquare";
import Subtitle from "../../components/UI/Subtitle/Subtitle";

import * as styles from "./FeatureCard.module.scss";
import EventBriteModal from "../EventBriteModal/EventBriteModal";

const FeatureCard = (props) => {
  const time = Moment(props.date).format("h:mm a");
  const date = Moment(props.date).format("MMMM DD, YYYY");

  return (
    <Card className={`${styles.halfSizeCard}`}>
      {" "}
      <figure className={`card--gradient-bg position-relative`}>
        <Card.Img
          src={
            props.image?.images?.fallback.src ||
            "../../images/ainc-logo-horizontal-white-text.png"
          }
          alt={props.title ?? "Untitled Event"}
          className={`p-1 card__img--overlay object-fit-cover ${styles.smallCardImage}`}
        />
        <EventBriteModal link={props.link}>
          <Card.ImgOverlay className="m-1">
            {" "}
            <div className="card__gradient-bg">
              <Row className="row row-cols-small">
                <div className="position-absolute d-flex bottom-0">
                  <Col
                    xs={2}
                    md={{ span: 3, offset: 1 }}
                    className="bottom-0 mx-3 position-absolute px-1 d-none d-md-block ms-md-3 mb-3"
                  >
                    <DateSquare
                      className={`${styles.smallDate}`}
                      date={props.date}
                    />
                  </Col>
                  <Col
                    md={{ span: 8, offset: 4 }}
                    lg={{ span: 7, offset: 5 }}
                    xl={8}
                    className="end-0 bottom-0 mb-md-3"
                  >
                    <div className={`me-md-2 mx-2 ${styles.cardText}`}>
                      {" "}
                      <div
                        className="mb-1 text-white "
                        style={{ fontSize: "0.8rem" }}
                      >
                        {" "}
                        <div className="d-md-none d-md-block">{date}</div>{" "}
                        {time} <br />
                        <small>{props.location}</small>
                      </div>
                      <Subtitle
                        className={`fw-bold text-white ${styles.smallCardSubtitle}`}
                      >
                        {props.title ?? "Untitled Event"}
                      </Subtitle>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Card.ImgOverlay>
        </EventBriteModal>
      </figure>
    </Card>
  );
};

export default FeatureCard;
