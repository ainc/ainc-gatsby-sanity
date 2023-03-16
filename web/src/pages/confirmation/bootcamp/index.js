import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col, } from 'react-bootstrap';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Page = ({ data }) => {

  return (
    <Layout pageTitle="Confirmation | Awesome Inc">
        <Container>
        <Row className="my-3">
            <Col md={{ span: 6, offset: 2 }}>
                <h1>Bootcamp Application Received</h1>
            </Col>
        </Row>
        <Row className="my-3">
            <Col md={{ span: 9, offset: 2 }}>
                <p>Thanks for your interest in Awesome Inc's Web Developer Bootcamp. You have completed Step 1 of our four-step application process: </p>
            </Col>
        </Row>
        <Row className="my-3">
            <Col md={{ span: 9, offset: 2 }}>
                <StaticImage quality='100' src="./images/bootcamp-application-process.png"/>
            </Col>
        </Row>
        <Row className="my-4 fw-bold">
            <Col md={{ span: 9, offset: 2 }}>
                <p>A member of our team will be in touch shortly with the next steps in your learn-to-code journey.</p>
            </Col>
        </Row>
        <Col className="mb-5" md={{ span: 9, offset: 2 }}>
          <p><a className="text--red link--bright-red" href="../../bootcamp">&lt;&lt;Back to Bootcamp</a></p>
        </Col>
        </Container>
    </Layout>

  )
}
export default Page;
