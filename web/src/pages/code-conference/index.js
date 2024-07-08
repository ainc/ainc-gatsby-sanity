import * as React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import * as styles from "./code.module.scss"
import YouthProgramGuide from '../../components/Forms/YouthProgramGuide.js/YouthProgramForm.js';
import BrandButton from '../../components/UI/BrandButton/BrandButton.js';

const CodePage = () => {
    return (
        <Layout>
            <Container className={styles.header}>
                <Row className="h-100">
                    <Col xs={12} sm={12} md={{ span: 7 }} lg={{ span: 6, offset: 1 }} xl={{ span: 5, offset: 1 }} className=''>
                        <section className={styles.topSectionCode}>
                            <div className="image-container d-flex justify-content-center mb-md-5 " style={{ backgroundColor: 'white', borderRadius: '50%', width: '15rem',  }}>
                            <StaticImage placeholder="blurred" alt="CODE" src='https://cdn.sanity.io/images/y716vocf/production/a862ad7a373bd8343fca0a34a638c626db427a61-720x720.png?w=2000&fit=max&auto=format' style={{maxWidth: "275px"}} />
                            </div>
                            <Title className={`mt-4 text-start text--huge text-white pt-5 ${styles.titleText}`}>C.O.D.E.</Title>
                            <Subtitle className='fst-italic text-start text-white '>Community Oriented Developer Education</Subtitle>
                            <p className={` ${styles.courseDescription} `}>Transforming high school education and empowering students for success in the tech-driven world</p>
                        </section>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='my-3'>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Web Development</Card.Title>
                                <p>Difficulty: Beginner/Intermediate</p>
                                <p>Length: 4 semesters, 4 credits</p>
                                <p>School Code: AP CS, CTE</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Artifical Intelligence</Card.Title>
                                <p>Difficulty: Beginner</p>
                                <p>Length: 1 semester, 1 credit</p>
                                <p>School Code: AP CS, CTE</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Cyber Security</Card.Title>
                                <p>Difficulty: Beginner/Intermediate</p>
                                <p>Length: 4 semesters, 4 credits</p>
                                <p>School Code: AP CS, CTE</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Python</Card.Title>
                                <p>Difficulty: Beginner/Intermediate</p>
                                <p>Length: 2 semesters, 2 credits</p>
                                <p>School Code: AP CS, CTE</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Internships</Card.Title>
                                <p>Difficulty: Advanced</p>
                                <p>Length: 2 semesters, 2 credits</p>
                                <p>School Code: AP CS, CTE</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-4' sm={12} md={6} lg={4}>
                        <Card className={` ${styles.card} text-black bg-light-grey p-3 mx-auto`}>
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Custom PD</Card.Title>
                                <p>Difficulty: Beginner-Advanced</p>
                                <p>Length: Varies</p>
                                <p>School Code: AP CS, CTE, Etc.</p>
                                <a href='#call'>
                                    <BrandButton>Learn More</BrandButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <section id='call'>
                <Container fluid='md' className={` ${styles.clubMembership}`}>
                    <Title className='text-center text-uppercase text-white pt-5'>Schedule a call</Title>
                    <p className='mb-5 text-white text-center'>Book a free demo to see how we can help teach your students to code.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <iframe frameborder="0" className={styles.waitlistIframe} style={{height:'750px', marginBottom: '5rem', border:'none', backgroundColor: 'transparent'}} src="https://calendly.com/reece-walter/30min"></iframe>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}

export default CodePage;