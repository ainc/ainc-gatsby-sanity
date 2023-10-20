import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import '../../../styles/main.scss'
import "./CoreValue.scss";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";
import ModalCustom from "../../Modal/ModalCustom";
import { useState } from "react";
import {Button} from "react-bootstrap";


const CoreValue = (props) => {
  const [lgShow, setLgShow] = useState(false)
  const handleShow = () => setLgShow(true)
  const handleClose = () => setLgShow(false)
  return (
        <div className="">
          <div className="d-flex justify-content-center align-items-center">
            <Col sm="6">
              <Row>
                <Col sm="4">
                  <a onClick={handleShow}  id="video-btn" href='#!'>
                      <StaticImage quality='100' src='./video-button.png' alt="Core values video" />
                  </a>
                  
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

        <ModalCustom 
        lgShow = {lgShow} 
        hide = {handleClose}
        bgDark = {false} 
        centered
        content = {
          <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/3dylpY4W_xA?si=ZwjkbPyAZe0E8eFx" 
          title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        }/>
        

        
        
  
          
          
      


        </div>


        
         
      
      
  );
};

export default CoreValue;