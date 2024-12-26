import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { InlineWidget } from "react-calendly";

import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import Layout from "../../../components/Layout/Layout";

const Page = ({ data }) => {
  const [showWidget, setShowWidget] = useState(false);

  const handleShow = () => setShowWidget(true);
  const handleClose = () => setShowWidget(false);

  return (
    <Layout>
      <Container>
        <Col md={{ span: 12 }}>
          <Row>
            <h1 className="mt-3">Bootcamp Application Received</h1>
            <Col md={{ span: 6 }} className="text-center">
              <p className="mt-5 fw-bold">
                The next step in your learn-to-code journey is to schedule an
                admissions interview with our team. You can schedule one below
                or look for an email from us.
              </p>
              <BrandButton onClick={handleShow}>Schedule Now</BrandButton>
              <Modal show={showWidget} onHide={handleClose} centered>
                <InlineWidget url="https://calendly.com/ainc/bootcamp-interview" />
              </Modal>
            </Col>
            <Col md={{ span: 6 }}>
              <p className="mt-5">
                Thanks for your interest in Awesome Inc's Web Developer
                Bootcamp. Your application is submitted! To get a sense of
                what's next, check out this video from our admissions team!
              </p>
              <iframe
                width="80%"
                height="315"
                src="https://www.youtube.com/embed/o12a29ivKTY?si=6TIWojVv8_lf3e-y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
              ></iframe>
            </Col>
          </Row>
        </Col>
        <Col className="mb-5">
          <p>
            <a className="text--red link--bright-red" href="../../bootcamp">
              &lt;&lt;Back to Bootcamp
            </a>
          </p>
        </Col>
      </Container>
    </Layout>
  );
};
export default Page;
