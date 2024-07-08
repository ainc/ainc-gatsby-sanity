import * as React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title.js';
import Subtitle from '../../components/UI/Subtitle/Subtitle.js';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../../components/Layout/Layout.js";
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#webDev' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#artInt' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#cyber' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#python' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#intern' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
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
                                <Row className='d-flex flex-row justify-content-around'>
                                    <a href='#custom' className='my-3'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Learn More</BrandButton>
                                    </a>
                                    <a href='#call'>
                                        <BrandButton style={{backgroundColor: '#ed3145', width: '60%'}}>Book a Call</BrandButton>
                                    </a>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <section id='webDev' className='my-4'>
                <Container>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Web Development</Title>
                    <Row>
                        <Col sm={12} md={8} lg={6} xl={6}>
                            <h3>Course Information</h3>
                            <ul>
                                <li>Dictionary Detective (Code-a-long)
                                    <ul>
                                        <li>Use Javascript to finish the features of a text guessing game similar to Hangman.</li>
                                        <li>Intro to JS and programming. Learn Data Structures and Control Flow</li>
                                    </ul>
                                </li>
                                <li>APIs (Level II)
                                    <ul>
                                        <li>Learn how applications share data across the web.</li>
                                        <li>Build an application that consumes (uses) data from a public API.</li>
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={{ span: 4 }} md={{ offset: 0, span: 4 }} lg={{ span: 5, offset: 1 }} xl={{ offset: 1, span: 4 }}>
                            <StaticImage placeholder="blurred" className={`${styles.phone} mx-auto`} src='../../images/learn/header-phone.png' alt='phone'></StaticImage>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='artInt' className='my-4'>
                <Container className='my-4'>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Artificial Intelligence</Title>
                    <h3>Course Information</h3>
                    <p>Dive into machine learning by building and training a “machine”. 
                        This machine has no circuits and doesn't need electricity. Students will actively train the machine to play a game in this interactive classroom activity.</p>
                    <h3>(Multi Day, One or More Classes)</h3>
                    <ul style={{listStyleType: 'none'}}>
                        <li>
                            Choice of two games depending on time and participants
                        </li>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Full - Tic Tac Toe (Multiple Classes and Multiple Days)</li>
                            <li>Mini - Hexapawn (Single Class)</li>
                        </ul>
                    </ul>
                </Container>
            </section>
            <section id='cyber' className='my-4'>
                <Container className='my-4'>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Cyber Security</Title>
                    <h3>Course Information</h3>
                    <p>Explore the world of Cybersecurity by stepping into the role of the an elite team of experts who use their 
                        skills as digital detectives to discover and stop cyber-crime.</p>
                    <p>Explore large databases on Microsoft's Azure Cloud using KQL to query data. 
                        Solve the mystery while getting practical experience in data analytics and cybersecurity principles</p>
                </Container>
            </section>
            <section id='python' className='my-4'>
                <Container>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Python</Title>
                    <h3>Course Information</h3>
                    <ul>
                        <li>Beginner Python Projects
                            <ul>
                                <li>Intro to Python Basics
                                    <ul>
                                        <li>Data Structures</li>
                                        <li>Control Flow</li>
                                        <li>Input and Output</li>
                                    </ul>
                                </li>
                                <li>Mad-Libs Command Line Game</li>
                                <li>Paper, Rock, Scissors</li>
                            </ul>
                        </li>
                        <li>Intermediate Projects
                            <ul>
                                <li>Tic Tac Toe</li>
                                <li>Sudoku Solver</li>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </section>
            <section id='intern' className='my-4'>
                <Container>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Internships</Title>
                    <h3>Course Information</h3>
                    <ul>
                        <li>
                            Tech Internships
                            <ul>
                                <li>Finding an internship in the tech industry is challenging. We can help provide and place qualified students in internships to help them achieve their goals. Whether it is to meet CTE requirements or to stand out on their College Applications.</li>
                                <li>Through Awesome Inc U's vast network and experience supporting hundreds of interns, over the past 15 years, we have created a replicable process that allows students to engage and thrive</li>
                                <li>Training for potential internship sites is critical for both the student and the site in order to create a safe educational environment that produces Awesome results</li>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </section>
            <section id='custom' className='my-4'>
                <Container>
                    <Title style={{color: '#ed3145', borderBottom: '1px solid #2cdbdb'}} className='text-center text-uppercase mt-5 pb-3'>Custom PD</Title>
                    <h3>CODE Supports:</h3>
                    <ul>
                        <li>Workshops</li>
                        <li>Professional Development</li>
                        <li>Student Modules</li>
                        <li>Project and Industry Support</li>
                        <li>Project Based Cirriculum</li>
                        <li>Career and Technical Eudcation Pathway Support</li>
                    </ul>
                </Container>
            </section>
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
        </Layout>
    );
}

export default CodePage;