import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import '../../../styles/main.scss'
import "./CoreValue.scss";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";

const CoreValue = (props) => {
  return (
        <div className="video-icon">
          <div className="d-flex justify-content-center align-items-center">
            <Col sm="6">
              <Row>
                <Col sm="4">
                  <a id="video-btn" href="#" data-toggle="modal" data-target="#lgx-modal">
                      <StaticImage quality='100' src='./video-button.png' alt="Core values video" />
                  </a>
                </Col>
                <Col sm="4">
                  <a id="culture-book-btn" href="#" target="_blank" rel="noopener">
                      <StaticImage quality='100' src='./culture-book-button.png' alt="Core values video" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm="6" className="">
                <StaticImage quality='100' src='../../../images/about-core-values.png' alt="Core values video" />
            </Col>
          </div>
        </div>
      
  );
};

export default CoreValue;
