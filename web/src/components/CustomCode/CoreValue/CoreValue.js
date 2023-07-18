import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import '../../../styles/main.scss'
import { useState } from 'react';
import "./CoreValue.scss";
import ModalCustom from "../../Modal/ModalCustom";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";

const CoreValue = () => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
  return (
        <div className="video-icon">
          <div className="d-flex justify-content-center align-items-center">
            <Col sm="6">
              <Row>
                <Col sm="4">
              {/* <a id="video-btn" href="#" data-bs-toggle="modal" data-target="#lgx-modal"> */}
                  {/* <a id="video-btn" href="https://youtu.be/3dylpY4W_xA" data-bs-toggle="modal" data-target="#lgx-modal"> */}
                      <div onClick={handleShow}>
                        <StaticImage quality='100' src='./video-button.png' alt="Core values video" />
                      </div>
                      <ModalCustom
                      lgShow={lgShow} 
                      hide={handleClose}
                      content={
                        <iframe
                        justify-content="center"
                        src="https://www.youtube.com/embed/3dylpY4W_xA" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        ></iframe>
                  
                      } />
                      
                      {/* </a>  */}
                </Col>
                <Col sm="4">
                  <a id="culture-book-btn" href="https://www.awesomeinc.org/assets/culture-book.pdf" target="_blank" rel="noopener">
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
