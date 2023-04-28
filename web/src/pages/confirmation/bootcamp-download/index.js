import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../../../components/seo'
import { useStaticQuery, graphql } from "gatsby"

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <Container>
        <Row className="my-3">
          <Col md={{ span: 9, offset: 2 }}>
            <h1>Bootcamp Program Guide Download Sent</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 9, offset: 2 }}>
            <p>Thanks for your interest in Awesome Inc's Web Developer Bootcamp. Here's a <a className="text--red link--bright-red" href={data.allFile.edges[0].node.publicURL} target="_blank" rel="noopener noreferrer">link to download</a> the guide or check your email for the Bootcamp Program Guide.</p>
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