import * as React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import BrandButton from "../../../components/UI/BrandButton/BrandButton"
import * as styles from "./youth.module.scss"
import ModalCustom from '../../../components/Modal/ModalCustom';
import YouthProgramGuide from '../../../components/Forms/YouthProgramGuide.js/YouthProgramForm.js';

const YouthPage = () => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <Layout>
            <main>
                <Container className={` ${styles.youth}`}>
                    <Row className="h-100">
                        <Col xs={12} sm={12} md={{ span: 7 }} lg={{ span: 6, offset: 1 }} xl={{ span: 5, offset: 1 }} className=''>
                            <section className={styles.topSectionCode}>
                              <div className="image-container d-flex justify-content-center" style={{ backgroundColor: 'white', borderRadius: '50%', width: '15rem'  }}>
                                <StaticImage placeholder="blurred" alt="CODE" src='https://cdn.sanity.io/images/y716vocf/production/a862ad7a373bd8343fca0a34a638c626db427a61-720x720.png?w=2000&fit=max&auto=format' style={{maxWidth: "275px"}} />
                              </div>
                                <Title className={`mt-3 text-start text--huge text-white pt-lg-5 ${styles.titleText}`}>C.O.D.E.</Title>
                                <Subtitle className='fst-italic text-start text-white w-sm-75'>Community Oriented Developer Education</Subtitle>
                                <p className={` ${styles.courseDescription} `}>Transforming high school education and empowering students for success in the tech-driven world</p>
                            </section>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col sm={{ span: 4 }} md={{ offset: 0, span: 4 }} lg={{ span: 5, offset: 1 }} xl={{ offset: 1, span: 4 }} >
                            <StaticImage placeholder="blurred" className={styles.phone} src='../../../images/learn/header-phone.png' alt='phone'></StaticImage>
                        </Col>
                        <Col sm={12} md={8} lg={6} xl={6} className='mt-5'>
                            <Title className='text-uppercase'>Why is coding important?</Title>
                            <p className='text-start'>Technology is all around us. Whether you are an app developer or an English professor, you will utilize technology in your daily work.
                                Awesome Inc exists to take student's screen time and turn it into career-skill time. Our courses increase communication, public speaking, organization,
                                and social skills in a fun learning environment.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className={styles.fun} md={{ offset: 1, span: 6 }} lg={{ offset: 2, span: 5 }} xl={{ offset: 2, span: 5 }}>
                            <Title className='mt-5 text-uppercase text-start'>Teach Code with confidence</Title>
                            <p className='text-start'>Our program aligns with CTE and AP CS Standards while making sure your students are engaged and fully understand the content.</p>
                            <a href='#call'>
                                <BrandButton className='mb-3 text-uppercase'>Book a call</BrandButton>
                            </a>
                        </Col>
                        <Col md={4} lg={4} xl={3} className={styles.logo}>
                            <StaticImage placeholder="blurred" alt="CODE" src='https://cdn.sanity.io/images/y716vocf/production/a862ad7a373bd8343fca0a34a638c626db427a61-720x720.png?w=2000&fit=max&auto=format' style={{maxWidth: "275px"}} />
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.engaged}>
                    <Row>
                        <Col sm={{ offset: 2, span: 8 }} md={{ offset: 1, span: 4 }} lg={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }}>
                            <StaticImage placeholder="blurred" src='../../../images/learn/laptop.png' alt='laptop'></StaticImage>
                        </Col>
                        <Col sm={{ offset: 2, span: 8 }} md={{ span: 5 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }}>
                            <Title className={` ${styles.engagedTitle} mt-5 text-uppercase ml-4 text-white`}>Engage Students</Title>
                            <p className='text-start'>Your students will have the support of our instructors - professional coders just a step, or a click away!</p>
                            <Container>
                                <ModalCustom 
                                    lgShow={lgShow}
                                    hide={handleClose}
                                    title="Coding Club Program Guide"
                                    bgDark={true}
                                    content={
                                        <Container>
                                            <Form>
                                                <Container className={styles.modal}>
                                                    <Row className=''>
                                                        <Form.Group className='pt-3 ' constrolId='formFirstName'>
                                                            <Form.Control type='text' placeholder="First Name" required/>
                                                        </Form.Group>
                                                        <Col>
                                                            <Form.Group className='pt-3 mb-3' constrolId='formLastName'>
                                                                <Form.Control className='mb-3' type='text' placeholder="Last Name" required/>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Form.Group className='mb-3' constrolId='formPhoneNumber'>
                                                        <Form.Control className='mb-3' type='text' placeholder="Phone Number" required/>
                                                    </Form.Group>
                                                    <Form.Group className='mb-3' constrolId='formInputEmail'>
                                                        <Form.Control className='mb-3' type='email' placeholder="Email Address" required/>
                                                    </Form.Group>
                                                    <BrandButton className='mb-3 text-uppercase'>Download</BrandButton>
                                                </Container>
                                            </Form>
                                        </Container>
                                    }
                                />
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.creative}>
                    <Row>
                        <Col md={{ offset: 1, span: 6 }} lg={{ offset: 1, span: 5 }} xl={{ offset: 2, span: 4 }}>
                            <Title className='mt-5 text-uppercase text-start'>coders are creative</Title>
                            <p className='text-start'>
                                Coding is like a choose-your-own-adventure for students who love technology! They'll have a blast
                                developing their skills as they move through the specially designed pathways our team has created.
                            </p>
                        </Col>
                        <Col md={4} lg={4} xl={3}>
                            <StaticImage placeholder="blurred" className='mt-5' src='../../../images/learn/creative.png' alt='creative'></StaticImage>
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
                <Container className={styles.questions}>
                    <Title className='text-white text-center mt-5 pt-5 pb-4'>Still have questions?</Title>
                    <Col xs={{ offset: 3, span: 6 }} sm={{ offset: 3, span: 6 }} md={{ offset: 4, span: 4 }} lg={{ offset: 3, span: 6 }}>
                        <a className='d-flex justify-content-center' href='https://www.awesomeinc.org/contact'><BrandButton className='text-uppercase px-3 mb-5 fw-bold'>contact us</BrandButton></a>
                    </Col>
                </Container>
            </main>
        </Layout>
    )
}

export default YouthPage;