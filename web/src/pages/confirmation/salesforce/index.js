import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col, } from 'react-bootstrap';
import SEO from '../../../components/seo'
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Page = ({ data }) => {

  return (
    <Layout>
        <SEO />
        <Container>
        <Row className="my-3">
            <Col md={{ span: 8, offset: 2 }}><h1>Salesforce Career Accelerator Application Received</h1></Col>
        </Row>
        <Row className="my-3">
            <Col md={{ span: 9, offset: 2 }}><p>Thanks for your interest in Awesome Inc's Salesforce Career Accelerator. You have completed Step 1 of our four-step application process:</p></Col>
        </Row>
        <Row className="my-3">
            <Col md={{ span: 9, offset: 2 }}><BrandButton>Schedule your info call</BrandButton></Col>
        </Row>
        <Row>
            <Col md={{ span: 9, offset: 2 }}>
                <div className="ms-5 my-5">
                    <img src="../../../assets/svg/Online-Application.svg" style={{width: "180px"}} />
                    <StaticImage className="mt-5 mx-5" quality='100' src="./images/arrow-steps.png"/>
                    <img src="../../../assets/svg/Schedule-a-Call.svg" style={{width: "180px"}} />
                    <StaticImage className="mt-5 mx-5" quality='100' src="./images/arrow-steps.png"/>
                    <img src="../../../assets/svg/FIO-Challenge.svg" style={{width: "180px"}} />
                    <StaticImage className="mt-5 mx-5" quality='100' src="./images/arrow-steps.png"/>
                    
                </div>
            </Col>
        </Row>
        <Row className="my-4 fw-bold">
            <Col md={{ span: 9, offset: 2 }}><p>A member of our team will be in touch shortly with the next steps in your journey to tech career.</p></Col>
        </Row>
        <Col className="mb-5" md={{ span: 9, offset: 2 }}>
          <p><a className="text--red link--bright-red" href="../../salesforce">&lt;&lt;Back to Salesforce</a></p>
        </Col>
        </Container>
    </Layout>

  )
}
export default Page;
