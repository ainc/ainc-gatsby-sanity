import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';

const ContactPage = ({ data }) => {

  return (
    <Layout pageTitle="Contact Us | Awesome Inc">
    <Container>
        <Title className="text-center my-5">CONTACT US</Title>
        <div style={{marginTop: "100px"}} className="d-flex justify-content-center mb-5">
            <iframe src="https://forms.zohopublic.com/virtualoffice9155/form/ContactUs/formperma/IeqkRsD8Ln0iv4eefk7Oy91FbZ-TlWCtSJO3Yc6n0aA?gclid=undefined" width="800" height="600" ></iframe>
        </div>

    </Container>
    </Layout>

  )
}
export default ContactPage;

