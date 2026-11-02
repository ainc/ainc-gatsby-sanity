import React from "react";

import Layout from "../components/Layout/Layout";
import Title from "../components/UI/Title/Title";
import BackgroundCard from "../components/BackgroundCard/BackgroundCard";
import { Container, Col, Row } from "react-bootstrap";
import LearnToCodeIcon from "../images/Learn_To_Code.png";
import RentWorkspaceIcon from "../images/Rent_Workspace.png";
import AccelerateStartupIcon from "../images/accelerate-your-startup.png";
import SoftwareDevelopmentIcon from "../images/software-development.png";

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Title className="text-center my-5 text-uppercase">
        Need some direction?
      </Title>
      <Row className="mb-5 d-flex justify-content-center">
        <Row
          className={` row row-cols-5 justify-content-center my-3 px-0 gx-2`}
        >
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              alt="brackets"
              title="Learn to Code"
              text="Everybody can and should learn to code, start today."
              backgroundImage="/images/student-learn-to-code-shirt.jpg"
              imgSrc={LearnToCodeIcon}
              link="/learn/"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              alt="desk and chair"
              title="Rent Workspace"
              text="Rent a desk or space for events, meetings, and more."
              backgroundImage="/images/awesome-inc-space-banner.jpg"
              imgSrc={RentWorkspaceIcon}
              link="/workspace/"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              alt="brackets"
              title="Accelerate your startup"
              text="We will help grow your business with a mentor-driven, accelerator program."
              backgroundImage="/images/startup-panel-min.jpg"
              imgSrc={AccelerateStartupIcon}
              link="/fellowship/"
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
            <BackgroundCard
              alt="brackets"
              title="Software Development"
              text="Let us create custom software for your business."
              backgroundImage="/images/software-panel.jpg"
              imgSrc={SoftwareDevelopmentIcon}
              link="https://apaxsoftware.com/"
            />
          </Col>
        </Row>
      </Row>
      {/* <h1>NOT FOUND</h1> */}
      {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </Container>
  </Layout>
);

export default NotFoundPage;
