import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";

import Layout from '../../components/Layout/Layout';
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from '../../components/UI/Title/Title';

const IdeaPage = ({ data }) => {

  return (
    <Layout>
        <Container>
            <Title className="mt-5 text-center text-uppercase">Have an idea?</Title>
            <Row className="justify-content-center" style={{marginTop: "150px", marginBottom: "40px"}}>
                <Col className='text-center' md={{ span: 4 }}>
                    <a aria-label='Visit our 5 Across page here for more information' href='/events/5across'>
                    <StaticImage placeholder="blurred" className="mb-3" quality='100' style={{ maxWidth: "80%" }} src="./images/5-across-logo-black-text.png" />
                    </a>
                    <p className='mt-3'>A Pitch Competition for Kentucky Entrepreneurs</p>
                </Col>
                <Col className="text-center mt-4" md={{ span: 5 }}>
                    <a href='https://www.swlex.org' className='link--brand' target='_blank'>
                        <Subtitle className="mb-4 text-uppercase" style={{ fontWeight: 800 }}>Startup weekend</Subtitle>
                    </a>
                    <p className='mt-5'>Do you have an idea you'd like to pursue or a problem you'd like to solve but don't know where to start or who to start with?</p>
                </Col>
            </Row>
            {/* still need to find a solution for form accessibility */}
            <Subtitle className="mb-1 text-uppercase text-center" style={{ fontWeight: 800 }}>Pitch us your idea</Subtitle>
            <iframe src="https://forms.zohopublic.com/virtualoffice9155/form/Ihaveanidea/formperma/30hj1gQf-u3TTxMYOytfjzUJhtBJgqYeim-yn04e1Tw?gclid=undefined" title="I have an idea form" width="100%" height="1000px"></iframe>
        </Container>
    </Layout>

  )
}
export default IdeaPage;