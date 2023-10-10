import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql } from "gatsby";
import * as styles from "./careers.module.scss";
import BlockContent from '@sanity/block-content-to-react';

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
              <Title className='mb-3'>Open Roles</Title>
              {allCareers.map((node) => (
                  <ul>
                    <li className={styles.openRoleLinks}>
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
                    <Title className={`${styles.careerTitle} mt-4`}>{node.careerTitle}</Title>
                    <BlockContent className={styles.careerBody} blocks={node._rawBody} />
                    <a className={`${styles.managerEmail} link--brand `} href={`mailto:${node.manager_email}`}>Questions? Email {node.manager} {node.manager_email}</a>
                    <div>
                      <a className={`${styles.brandButton}`} href={node.linkToForm}>
                      <BrandButton>Apply here
                      </BrandButton>
                      </a>
                    </div>
                </section>  
              ))}
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