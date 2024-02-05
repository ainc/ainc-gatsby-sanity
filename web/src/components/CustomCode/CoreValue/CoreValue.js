import React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
 
import ModalCustom from "../../Modal/ModalCustom";

import '../../../styles/main.scss'
import "./CoreValue.scss";

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
                    <motion.div
                      initial={{ opacity: 0.5, y: 50 }}
                      whileInView={{ opacity: 1 , y: 0}}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}>
                    <StaticImage quality='100' src='./video-button.png' alt="Core values video" />
                    </motion.div>
                  </a>
                  
                </Col>
                <Col sm="4">
                  <a id="culture-book-btn" href="/assets/culture-book.pdf" target="_blank" rel="noopener">
                    <motion.div
                      initial={{ opacity: 0.5, y: -50 }}
                      whileInView={{ opacity: 1 , y: 0}}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}>
                    <StaticImage quality='100' src='./culture-book-button.png' alt="Core values video" />
                    </motion.div>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm="6" className="">
              <a href='/assets/core-values.pdf' target="_blank">
                <StaticImage quality='100' src='../../../images/about-core-values.png' alt="Core values video" />
              </a>
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