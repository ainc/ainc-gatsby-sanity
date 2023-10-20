import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./FeatureCard.module.scss";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import DateSquare from "../../components/DateSquare/DateSquare";
import Moment from 'moment';


const FeatureCard = (props) => {

  const time = Moment(props.date).format('h:mm a')

  return (
    <Card className=''>
      <figure className={`card--gradient-bg position-relative`}>
      <Card.Img src={props.image?.images?.fallback.src || '../../images/ainc-logo-horizontal-white-text.png'} alt={props.title} className={`p-2 card__img--overlay object-fit-cover ${styles.cardImage}`} />
        <a href="#">
          <Card.ImgOverlay className="m-2">
            <div className="card__gradient-bg">
              <Row className='row row-cols-small'>
                <div className="position-absolute bottom-0">
                  <Col xs={2} md={{span: 4, offset: 1}}  className="bottom-0 mb-5 position-absolute px-1 ">
                    <DateSquare className={` ${styles.square}`}
                      date={props.date}
                    />
                  </Col>
                  <Col xs={{span: 8, offset: 6 }} md={{span: 7, offset: 4}} lg={{span: 7, offset: 5}} xl={8} className="ps-1 end-0 bottom-0 mb-5">
                    <div className={`me-3 ${styles.cardText}`}>
                      <div className="mb-1 text-white ">
                        {time} <br />
                        <small>{props.location}</small>
                      </div>
                      <Subtitle className={`fw-bolder text-white ${styles.cardSubtitle}`}>
                        {props.title}
                      </Subtitle>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Card.ImgOverlay>  
        </a>
      </figure>
    </Card>
    
  );
};

export default FeatureCard;
