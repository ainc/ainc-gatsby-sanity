import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Accordion from 'react-bootstrap/Accordion';

import { StaticImage } from "gatsby-plugin-image"

import ProjectCard from "./Components/ProjectCard";

import WOCLogo from "./images/AINC_WOC_Logo.png";
import ChipGif from "./images/Chip_Laptop.gif";
import Games from "./images/Games_Icon.png";
import Devices from "./images/Devices_Icon.png";
import Microphone from "./images/Microphone.png";
import Oreo from "./images/Oreo_Open.png";

import MaskGroup7 from "./images/Mask_Group_7.png";
import MaskGroup8 from "./images/Mask_Group_8.png";
import MaskGroup9 from "./images/Mask_Group_9.png";
import MaskGroup10 from "./images/Mask_Group_10.png";

import * as styles from './weekofcode.module.css';


const Page = ({ data }) => {
  return(
    <Layout>
    <section id="header" className={`d-flex align-items-center ${styles.headerSection}`}>
      <Container>
        <Col className='justify-conent-center text-center'>
          <Image src={WOCLogo} alt="WOC Logo" className={`${styles.logo}`}/>
          <Subtitle className="text-white fw-bold pb-5">SUMMER CAMP</Subtitle>

          <Title className="text-white">Prepare Your Child for a 21st Century World</Title>

          <BrandButton>Secure Your Spot</BrandButton>
        </Col>
      </Container>
    </section>

    <section id="Experience">
      <Container className="py-5">
        <Col className="text-center justify-content-center">
          <Title>No Experience Required!</Title>
          <p className="px-5">Week of Code Camp is Designed for Children Ages 9-16, at Beginner to Intermediate Levels</p>

          <p className='pt-5 fst-italic' style={{fontSize: '13px'}}>Sign Up For One Of Our 2024 Camp Dates</p>

          <Row className='px-5'>
            <Col md={4} className={`d-flex ${styles.leftButton} pb-3`}>
              <BrandButton className="py-2 px-4">June 10-13</BrandButton>
            </Col>
            <Col md={4} className="pb-3">
              <BrandButton className="py-2 px-4">July 15-18</BrandButton>
            </Col>
            <Col md={4} className={`d-flex ${styles.rightButton} pb-3`}>
              <BrandButton className="py-2 px-4">June 10-13</BrandButton>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>

    <section id="review" className={styles.review}>
        <Row className={`d-flex align-items-center ${styles.reviewContainer}`}> 
          <Col md={4}>
            <Image src={ChipGif} alt="Chip Latop Gif" className={styles.chipImg}/>
          </Col>
          <Col md={8} className={styles.reviewText}>
            <StaticImage src="./images/5_Stars.png" alt="5 Stars" className={styles.stars}/>
            <p className={`fw-bold text-white ${styles.reviewQuote}`}>“The way the classes are structured and the one-on-one attention the kids get from the teachers is amazing. My kids absolutely love these classes.”</p>
            <p className='fst-italic text-white'>Coding Club Parent</p>
          </Col>
        </Row>
    </section>

    <secton id="projects" >
      <Container className={styles.projectSection}>
        <Row> 
          <Col md={4} className={`d-flex justify-content-center ${styles.projectCard}`}>
            <ProjectCard image={Devices} description={"CREATE A VIDEO GAME, WEBSITE, AND A MOBILE APP IN ONE WEEK"}/>
          </Col>
          <Col md={4} className={`d-flex justify-content-center ${styles.projectCard}`}>
            <ProjectCard image={Games} description={"ENJOY UNPLUGGED ACTIVITIES AND MAKE FRIENDS"}/>
          </Col>
          <Col md={4} className={`d-flex justify-content-center ${styles.projectCard} pb-0`}>
            <ProjectCard image={Microphone} description={"PRACTICE YOUR PRESENTATION SKILLS AND SHOW YOUR PROJECT"}/>
          </Col>      
        </Row>
      </Container>
    </secton>

    <section id="moreThan" className={`${styles.moreThanSection}`}>
      <Container>
        <Col className='justify-conent-center text-center'>
          <Image src={Oreo} alt="Open Oreo" className="pb-5"/>

          <Title className="pb-3">More Than Just Coding</Title>

          <p className='pb-3' style={{width: '60%', margin: 'auto', textAlign: 'center'}}>Week of Code boosts creativity, logical thinking skills, and brain power. The camp is kept small to ensure everyone gets focused attention.</p>
          <BrandButton className="py-2 px-4">Join the Fun</BrandButton>
        </Col>
      </Container>

    </section>

    <section id="takeHome" className={`${styles.takeHomeSection}`}>
      <Container className='pb-5'>
        <Col className='justify-conent-center text-center'>
          <Title className="pb-3">Students Take Home</Title>
          <h3>Project Files • Portfolio to Share • Week of Code T-Shirt</h3> 
          <h3 className='pb-5'>Certificate of Completion • Memories with New Friends!</h3>
        
          <p className='fst-italic'>Sign Up For One Of Our 2024 Camp Dates</p>

          <Row className='pb-5 px-5'>
            <Col md={4} className={`d-flex ${styles.leftButton} pb-3`}>
              <BrandButton className="py-2 px-4">June 10-13</BrandButton>
            </Col>
            <Col md={4} className="pb-3">
              <BrandButton className="py-2 px-4">July 15-18</BrandButton>
            </Col>
            <Col md={4} className={`d-flex ${styles.rightButton} pb-3`}>
              <BrandButton className="py-2 px-4">June 10-13</BrandButton>
            </Col>
          </Row>

          <Row className={styles.pictures}>
            <Col style={{width: '60%', height: '100%', paddingRight: '5px'}}>
              <Image src={MaskGroup8} alt={"Group 8"} style={{width: '100%', height: '50%', paddingBottom: '5px'}}/>
              <Image src={MaskGroup9} alt={"Group 9"} style={{width: '100%', height: '50%', paddingTop: '5px'}}/>
            </Col>
            <Col style={{width: '40%', height: '100%', paddingLeft: '5px'}}>
              <Image src={MaskGroup7} alt={"Group 7"} style={{width: '100%', height: '70%', paddingBottom: '5px'}}/>
              <Image src={MaskGroup10} alt={"Group 10"} style={{width: '100%', height: '30%', paddingTop: '5px'}}/>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>

    <section id="FAQs" style={{backgroundColor: '#ED3742'}}>
      <Container className={`${styles.FAQ} text-center p-5`}>
          <Title className="text-white mb-5 ">Have Questions?</Title>
          <Accordion className="mb-5" defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="px-3 py-4">
                  <Accordion.Header>Where is the best place to park at Awesome Inc?</Accordion.Header>
                  <Accordion.Body style={{textAlign: 'left'}}>
                  Free Parking is available for drop-off/pickup. The best location is the parking lot to the east side of our building, in spaces 1-19. See <a href="http://www.awesomeinc.org/parking/">parking map</a> for more details.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="px-3 py-4">
                  <Accordion.Header>Do students need their own computer for this course?</Accordion.Header>
                  <Accordion.Body style={{textAlign: 'left'}}>
                    Yes, each student will need to provide his/her own laptop for the course. Either Microsoft Windows-based PC's, Apple macOS computers, and Chromebooks will work, but iPads will not work for this course. We recommend a laptop made within the past 3-4 years. Computers should be free from viruses/malware. We have a limited number of <a href="https://squareup.com/market/awesome-inc/laptop-rental">rental laptops available for $25/day.</a>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="px-3 py-4">
                  <Accordion.Header>Are scholarships available for this course?</Accordion.Header>
                  <Accordion.Body style={{textAlign: 'left'}}>
                    Yes, thanks we have scholarships available thanks to our sponsor, Verizon. You can <a href="https://goo.gl/forms/sZpc22S1jdeoZ7Fk2">apply here.</a>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
          <p className="fst-italic text-white">Still have questions? Email us at learn@awesomeinc.org</p>
      </Container>
    </section>
  </Layout>
  )
}
export default Page;

