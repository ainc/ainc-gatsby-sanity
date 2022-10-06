import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Banner from "../../components/Banner/Banner";
import QuestionCircleIcon from '/src/images/bootcamp/QuestionCircle.svg';
import MoneyCircleIcon from '/src/images/bootcamp/MoneyCircle.svg';
import "../../styles/main.scss"
import * as styles from './bootcamp.module.scss'
import * as footerStyles from '../../components/Footer/Footer.module.scss'

const BootcampPage = ({ data }) => {0.251

  return (
    <Layout pageTitle="Bootcamp">
      
      {/* Header section */}
      <Container className={styles.header}>
        <Row className={styles.row}>
          <Col className="">
            <Title className="text-left fs-3 mt-3"><b>A 16 week, Full-time, Job-Guaranteed Program designed for individuals looking to make a career change.</b></Title>
            <Subtitle className="fst-italic fw-lighter fs-4">Start your application in less than 30 seconds</Subtitle>
            <BrandButton className="my-3">Get Started</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Two Buttons Section */}
      <Container fluid className="background--grey">
        <Row className={styles.twoButtonsRow}>
          <Col>
            <faQuestionCircle />
            <Title className="text-center text-white fs-4 mt-4">Have a few questions?</Title>
            <BrandButton className="d-flex justify-content-center">Download Program Guide</BrandButton>
          </Col>
          <Col className="justify-content-center">
            <faMoneyCircle />
            <Title className="text-center text-white fs-4 mt-4">Pay nothing until you land a job!</Title>
            <BrandButton className="d-flex justify-content-center">See How Here</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Answer Honestly */}
      <Container className={styles.answerHonestly}>
        <Row>
          <Col>
            <Title className="text-center brand fs-3">Answer honestly...</Title>
            <Subtitle className="text-center brand fst-italic fw-lighter fs-6">(your answer is safe with us, we promise.)</Subtitle>
          </Col>
        </Row>
        <Row className={styles.shieldRow}>
          <Col>
            <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
          </Col>
          <Col>
            <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
          </Col>
          <Col>
            <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
          </Col>
          <Col>
            <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>   
          </Col>
          <Col>
            <StaticImage src="../../images/bootcamp/shield.png" alt="shield" className={styles.img}/>
          </Col>
        </Row>
        <Row className={styles.yesRow}>
          <Subtitle className="text-center brand fs-3">yes!</Subtitle>
          <br />
          <br />
          <Subtitle className="text-center fs-6"><b>If you answered yes to any of these, our Web Developer Bootcamp could be your next move.</b></Subtitle>
          <br />
          <br />
          <Subtitle className="text-center fs-6">The Web Developer Bootcamp is a 16-week, intensive training program for aspiriing software developers.</Subtitle>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <BrandButton>Download Program Guide</BrandButton>
          </Col>
        </Row>
      </Container>

      {/* Alumni Testimonials */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Motivational Quote */}
      <Container className={styles.motivationalQuote}>
        <Row>
          <Col>
            <Title className="text-center brand fs-5">"You don't have to feel trapped. Earn your freedom, work when & where you want. Earn a living in just 40 hours a week."</Title>
          </Col>
        </Row>
      </Container>

      {/* Why Awesome Inc Header */}
      <Container fluid className={styles.whyAwesomeIncHeader}>
        <Row>
          <StaticImage src='../../images/bootcamp/awesome-inc-bg.jpg' alt='why awesome inc header' className="center-block img"/>
        </Row>
      </Container>

      {/* Why Awesome Inc */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Job Guarantee */}
      <Container fluid className={styles.job}>
        <Row className={styles.jobRow}>
          <Col className="d-flex justify-content-center">
            <StaticImage src='../../images/bootcamp/job-guaranteed.png' alt='job guaranteed' className=""></StaticImage>
          </Col>
        </Row>
        <Row className={styles.textRow}>
          <Col className="justify-content-center">
          <Subtitle className="text-white text-center fs-6">We only succeed when you succeed. We quarantee that all students who complete the 16-week Bootcamp program and uphold the job search requirements will receive a job offer within six months of their graduation date, or we'll refund your tuition. See our Student Agreement for details.</Subtitle>
          </Col>
        </Row>
      </Container>

      {/* Stats */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Employers */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Languages */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Apply */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Timeline */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Cost */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Still Unsure */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

      {/* Questions */}
      <Container>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>

    </Layout>
  );
};

export default BootcampPage;
