import * as React from 'react';
import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col, } from 'react-bootstrap';
import SEO from '../../../components/seo'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Page = ({ data }) => {

  return (
    <Layout>
        <Container>
        <Row className="my-3">
            <Col md={{ span: 6, offset: 2 }}>
                <h1>Bootcamp Application Received</h1>
            </Col>
        </Row>
        <Row className="my-3">
            <Col md={{ span: 9, offset: 2 }}>
                <p>Thanks for your interest in Awesome Inc's Web Developer Bootcamp.</p>
                <p className='mt-5 fw-bold'>One of the next steps in your learn-to-code journey is to schedule an interview with our team. You can schedule one below or look for an email from us.</p>
            </Col>
        </Row>
        <div class="calendly-inline-widget" data-url="https://calendly.com/ainc/bootcamp-interview?hide_gdpr_banner=1" style={{position: 'relative', minWidth:'320px', height:'1000px'}} data-processed="true">
            <div class="calendly-spinner">
                <div class="calendly-bounce1" />
                <div class="calendly-bounce2" />
                <div class="calendly-bounce3" />
            </div>
            <iframe src="https://calendly.com/ainc/bootcamp-interview?embed_domain=www.awesomeinc.org&amp;embed_type=Inline&amp;hide_gdpr_banner=1" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
        </div>
        <Col className="mb-5" md={{ span: 9, offset: 2 }}>
          <p><a className="text--red link--bright-red" href="../../bootcamp">&lt;&lt;Back to Bootcamp</a></p>
        </Col>
        </Container>
    </Layout>

  )
}
export default Page;
