import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Title from "../../components/UI/Title/Title";
import BackgroundCard from "../../components/BackgroundCard/BackgroundCard";
import { Container, Col, Row } from "react-bootstrap";

const ThanksPage = () => (
  <Layout>
    <Container>
      <Title className="text-center my-5 text-uppercase">Thank you</Title>
      <Row className="mb-5 d-flex justify-content-center">
        <Row
          className={` row row-cols-5 justify-content-center my-3 px-1 gx-2`}
        >
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              title="Learn to Code"
              text="Everybody can and should learn to code, start today."
              backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
              imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
              link="/learn"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              title="Rent Workspace"
              text="Rent a desk or space for events, meetings, and more."
              backgroundImage="https://www.awesomeinc.org/images/awesome-inc-space-panel.jpg"
              imgSrc="https://d33wubrfki0l68.cloudfront.net/13acb6f3560e894a9e0eecc194c96f778fba858f/f6fb2/images/icons/rent-workspace.png"
              link="/workspace"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              title="Accelerate your startup"
              text="We will help grow your business with a mentor-driven, accelerator program."
              backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
              imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
              link="/learn"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              title="Software Development"
              text="Let us create custom software for your business."
              backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
              imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
              link="/learn"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  </Layout>
);

export default ThanksPage;
