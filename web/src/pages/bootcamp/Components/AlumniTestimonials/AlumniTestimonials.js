import  React , { useState } from 'react';
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../../../components/UI/Title/Title";
import Subtitle from "../../../../components/UI/Subtitle/Subtitle";
import BrandButton from '../../../../components/UI/BrandButton/BrandButton';
import { FaCircle, FaRegCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import * as styles from "./AlumniTestimonials.module.scss";

import tackle from "./Images/tackle.png";
import mel from "./Images/mel.jpeg";
import mills from "./Images/andrew-mills.jpg"
import estus from "./Images/estus-zach.jpg"
import jockey from "./Images/jockey-club.png"
import apax from "./Images/apax.png"
export default function AlumniTestimonialsComponent (){
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClickRight = () => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    };
  
    const handleClickLeft = () => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    const testimonials = [
        {
            name: "Melanie Stoeckle",
            companyLogo: tackle,
            testimony: "'With a graphic design background, I swiftly transitioned into a developer role just a week after Bootcamp graduation. This milestone was just the beginning. Earning the freedom to work remotely, I now travel the world, making any place with a WiFi connection my office. Can’t thank Awesome Inc enough!'",
            position: "Software Developer",
            portrait: mel
        },
        {
          name: "Andrew Mills",
          companyLogo: apax,
          testimony: "'After being laid off in the sales world, the Awesome Inc Bootcamp was the perfect next step for me. I learned new skills in an ever-expanding tech world that challenge me every day in ways my prior career never could. I found an AWESOME community in the process, and I am able to support my family better than I was ever able to before.'",
          position: "Software Developer",
          portrait: mills
        },
        {
          name: "Zach Estus",
          companyLogo: jockey,
          testimony: "'Yes, Mr. Frodo, It’s over now.' I am pleased and excited to announce I am soon to be a Software Engineer with The Jockey Club. Looking forward to working in the data heavy horse racing industry. Apparently thank you emails work. Thank you Awesome Inc for starting me on this career path.",
          position: "Software Engineer",
          portrait: estus
      },
    ]

    return (
        <Container className="mt-5">
          <Row>
            <Title className={`text-center mb-4`}>Join 175+ graduates that have changed careers with Awesome Inc</Title>
          </Row>
          <Col className="d-flex justify-content-center mx-auto" style={{maxWidth: '70%'}}>
          {testimonials.map((node, index) => (
            <div key={index} className={`testimonial-div ${index === currentIndex ? 'd-flex' : 'd-none'}`}>
              <Col className="d-flex flex-column justify-content-center align-items-center pb-5">
                <Row className="">
                    <Col md={12} lg={4} className="d-flex flex-column justify-content-center align-items-center">
                        <Image src={node.portrait} className={`${styles.portrait} m-4`}/> 
                    </Col>
                    <Col md={12} lg={8} className="d-flex flex-column justify-content-center align-items-center">
                        <p className={styles.testimony}>{node.testimony}</p>
                        
                        <p className="fw-bold text-center">{node.name}, {node.position}</p>
                        <Image src={node.companyLogo} style={{maxWidth: '100px', maxHeight: '100%'}} />
                    </Col>
                </Row>
                <Row>
                  <div className="pt-4 d-flex flex-row justify-content-center align-items-center">
                    <Button style={{background: 'red', border: 'white', color: 'white', padding: '0.3rem'}} onClick={handleClickLeft}>
                        <FaArrowLeft className="" />
                    </Button>
                    
                    <Button style={{background: 'red', border: 'white', color: 'white', padding: '0.3rem', paddingRight: '0.3rem', marginLeft: '1rem'}} onClick={handleClickRight}>
                        <FaArrowRight className="" />
                    </Button>
                  </div>
                </Row>
                </Col>
                
            </div>
          ))}
          </Col>
        </Container>
    )

}