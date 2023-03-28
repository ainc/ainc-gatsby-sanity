import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import BrandButton from '../../../components/UI/BrandButton/BrandButton'
import Form from 'react-bootstrap/Form'
import * as styles from './form.module.scss'
import Card from 'react-bootstrap/Card'


const YouthProgramGuide = ( props ) => {
    return (
        <Card className={`${styles.formCard} me-5`}>
<Form>
    <Container>
        <Card.Header className={styles.cardHeader}>Download our program guide for more info
</Card.Header>
    </Container>
    <Container className={styles.formContainer}>
    <Row>
        <Col>
    <Form.Group className='pt-3 mb-3' constrolId='formFirstName'>
        <Form.Control className={styles.formText} type='text' placeholder="First Name"/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className='pt-3 mb-3' constrolId='formLastName'>
        <Form.Control className={styles.formText} type='text' placeholder="Last Name"/>
    </Form.Group>
    </Col>
    </Row>
    <Form.Group className='mb-3' constrolId='formPhoneNumber'>
        <Form.Control className={styles.formText} type='text' placeholder="Phone Number"/>
    </Form.Group>
    <Form.Group className='mb-3' constrolId='formInputEmail'>
        <Form.Control className={styles.formText} type='email' placeholder="Email Address"/>
    </Form.Group>
    <BrandButton className='mb-3 text-uppercase'>Download</BrandButton>
    </Container>
</Form>
</Card>
    )
};

export default YouthProgramGuide;

