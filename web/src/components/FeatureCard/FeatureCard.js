import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./FeatureCard.module.scss";
import styled from "styled-components";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import DateSquare from "../../components/DateSquare/DateSquare";


const FeatureCard = (props) => {
  return (
    
    <Card className="h-100">
      <figure className={`card--gradient-bg position-relative m-0`}>
        <Card.Img src="https://via.placeholder.com/150x150" alt={props.title} className="p-4 card__img--overlay" />
        <a href="#">
          <Card.ImgOverlay className="m-4">
            <div class="card__gradient-bg">
              <Row>
                <div className="position-absolute bottom-0">
                  <Col xs={3} className="position-absolute bottom-0 start-0 mb-5 ms-5">
                    <DateSquare />
                  </Col>
                  <Col xs={8} className="position-absolute bottom-0 end-0 mb-5">
                    <Card.Text className="me-3">
                      <p className="mb-1 text-white">
                        1:00 pm <br />
                        <small>Awesome Inc</small>
                      </p>
                      <Subtitle className="fw-bolder text-white">
                        Week of Code Summer Camps 2022
                      </Subtitle>
                    </Card.Text>
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
