import React from 'react';
import Title from "../../components/UI/Title/Title";
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col, } from 'react-bootstrap';

import SEO from '../../components/seo';


const Calendar = () => {
  return (
    <Layout>
        <SEO description="Awesome Inc Calendar" />
        <Row>
            <Col className='text-center my-5'>
                <Title>Calendar</Title>
                <Col xs={{ span:10, offset: 1 }} sm={{ span:8, offset: 2 }} className="my-5">
                    <iframe src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=admin%40awesomeinc.org&amp;color=%23875509&amp;ctz=America%2FNew_York" width="100%" height="600" frameborder="0"/>
                </Col>
                {/* <p>Calendar page</p> */}
            </Col>
        </Row>
    </Layout>
  )
}

export default Calendar;
