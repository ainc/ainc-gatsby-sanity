//index.js
import React from "react";
import Layout from "../../../components/Layout/Layout"; // Ensure correct path
import { Container, Col } from "react-bootstrap";
import Title from "../../../components/UI/Title/Title";
import Map from "../../../pages/fellowship/map/map.js"; // Adjust the path if needed

const FellowshipMapPage = () => (
  <Layout>
    <Container className="text-center mt-5">
      <Col xs={{ offset: 1, span: 10 }} md={{ offset: 2, span: 8 }}>
        <Title className="text-uppercase text-black mt-5 mb-4">
          Fellowship Company
        </Title>
      </Col>
      <Col xs={12}>
        <Map />
      </Col>
    </Container>
  </Layout>
);

export default FellowshipMapPage;
