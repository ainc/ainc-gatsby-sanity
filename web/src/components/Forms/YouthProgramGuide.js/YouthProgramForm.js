import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

import BrandButton from '../../../components/UI/BrandButton/BrandButton'

import * as styles from './form.module.scss'

const YouthProgramGuide = ( props ) => {
    return (
        <Card className={`${styles.formCard} me-5 background--gray p-0`}>
            <Form>
                <Container fluid className="g-0 p-0">
                    <Card.Header className={styles.cardHeader}>Download our program guide for more info</Card.Header>
                </Container>
                <Container className={styles.formContainer}>
                    <Row>
                        <Col>
                            <Form.Group className='pt-3 mb-4' constrolId='formFirstName'>
                                <Form.Control size="lg"className={styles.formText} type='text' placeholder="First Name" required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className='pt-3 mb-4' constrolId='formLastName'>
                                <Form.Control size="lg"className={styles.formText} type='text' placeholder="Last Name" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className='mb-4' constrolId='formPhoneNumber'>
                        <Form.Control size="lg"className={styles.formText} type='text' placeholder="Phone Number" required/>
                    </Form.Group>
                    <Form.Group className='mb-4' constrolId='formInputEmail'>
                        <Form.Control size="lg" className={styles.formText} type='email' placeholder="Email Address" required/>
                    </Form.Group>
                    <BrandButton className='mb-3 text-uppercase'>Download</BrandButton>
                </Container>
            </Form>
        </Card>
    )
};

export default YouthProgramGuide;

