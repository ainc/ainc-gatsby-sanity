import * as React from 'react'
import { graphql } from "gatsby";
import { Col, Container, Row } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Layout from "../../components/Layout/Layout";
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import Title from "../../components/UI/Title/Title";

import * as styles from "./careers.module.scss";

const CareersPage = ({ data }) => {
  const allCareers = (data.allSanityCareers.nodes || {})

  
  return (
    <Layout>
      <Container fluid>
        <Row>
            <Col className={`${styles.header} text-white text-center`}>
                <Title className="text-uppercase text-white mt-4">Careers</Title>
                <Col md={{ span: 6, offset: 3 }}>
                  <p>We're always looking for passionate, driven people who think they'd be a fit for our company! If you don't see what you're looking for on this page, reach out - we'd love to chat.</p>
                </Col>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 2 }}>
              <Title className='mb-3'>About us</Title>
              <p>We exist to help people pursue their definition of awesome.</p>
              <p>Founded in 2009, Awesome Inc provides training and professional services in entrepreneurship and software development. Our offerings include:</p>
                  <ul>
                    <li><p>Community events and management consulting for high-growth startups in Kentucky</p></li>
                    <li><p>Co-working, private office, and meeting space</p></li>
                    <li><p>Custom software development (web and mobile apps)</p></li>
                    <li><p>Technical training (software development, CRM, youth coding)</p></li>
                    <li><p>Corporate innovation facilitation</p></li>
                  </ul>
            </Col>
        </Row>
        <Row className='text-center my-3'>
          <Title className=''>To see our open positions, click the buttons below:</Title>
        </Row>

        <Row className='d-flex justify-content-center my-3'>
          <Col md="auto" className="d-flex justify-content-center align-items-center flex-column mx-5">
            <Row className='my-3'>
              <Subtitle>Awesome Inc</Subtitle>
            </Row>
            <Row>
              <a href="https://careers.awesomeinc.org/jobs/Careers"
              target="_blank"
              rel="noopener">
                <BrandButton className={`text-uppercase`}>Click Here</BrandButton>
              </a>
            </Row> 
          </Col>
          <Col md="auto" className="d-flex justify-content-center align-items-center flex-column mx-5">
            <Row className='my-3'>
              <Subtitle>APAX Software</Subtitle>
            </Row>
            <Row>
              <a href="https://apaxsoftware.com/careers"
              target="_blank"
              rel="noopener">
                <BrandButton className={`text-uppercase`}>Click Here</BrandButton>
              </a>
            </Row> 
          </Col>
        </Row>

        <Row>
          <Col className={`${styles.footer}`}>
            <Col md={{ span: 6, offset: 3 }}>
              <Subtitle className='text-center fw-bold mt-4 mb-4'>We're always looking for passionate, driven people who think they'd be a fit for our company! If you don't see what you're looking for on this page, reach out - we'd love to chat.</Subtitle>
              <p><a className={'link--brand-dark'} href='mailto: careers@awesomeinc.org'>Email careers@awesomeinc.org</a></p>
              {/* ask about creating link--brand-bright to fix color contrast */}
            </Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const query_careers = graphql`
  query {
    allSanityCareers(
      filter: { active: { eq: true } }
      sort: { careerTitle: DESC }
    ) {
      nodes {
        active
        careerTitle
        manager
        manager_email
        _rawBody
        linkToForm
      }
    }
  }
`;


export default CareersPage