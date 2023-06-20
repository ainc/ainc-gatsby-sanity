import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql } from "gatsby";
import * as styles from "./careers.scss";
import BlockContent from '@sanity/block-content-to-react';

const CareersPage = ({ data }) => {
  const allCareers = (data.allSanityCareers.nodes || {})

  
  return (
    <Layout>
      <SEO />
      <Container fluid>
        <Row>
            <Col className="header text-white text-center">
                <Title className="text-uppercase text-white mt-4">Careers</Title>
                <Col md={{ span: 6, offset: 3 }}>
                  <p>We're always looking for passionate, driven people who think they'd be a fit for our company! If you don't see what you're looking for on this page, reach out - we'd love to chat.</p>
                </Col>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 2 }}>
              <h1>Open Roles</h1>
              {allCareers.map((node) => (
                  <ul>
                    <li className="open-role-links">
                        <a className={'link--brand'} href={`#${node.careerTitle}`}>{node.careerTitle}</a>
                    </li>
                  </ul>
              ))}
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
              {allCareers.map((node) => (
                <section id={node.careerTitle} key={node.id}>
                    <Title className="careerTitle mt-4">{node.careerTitle}</Title>
                    <BlockContent className="careerBody" blocks={node._rawBody} />
                    <a className={'link--brand manager_email'} href={`mailto:${node.manager_email}`}>Questions? Email {node.manager} {node.manager_email}</a>
                    <div>
                      <a className="brand-button" href={node.linkToForm}>
                      <BrandButton>Apply here
                      </BrandButton>
                      </a>
                    </div>
                </section>  
              ))}
            </Col>
        </Row>
        <Row>
          <Col className="footer">
            <Col md={{ span: 6, offset: 3 }}>
              <h2>We're always looking for passionate, driven people who think they'd be a fit for our company! If you don't see what you're looking for on this page, reach out - we'd love to chat.</h2>
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
      sort: { fields: careerTitle, order: DESC }
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