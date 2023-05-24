import React from "react";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import "../../styles/main.scss"
import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion';
import "./salesforce.scss";

const SalesforcePage = ({ data }) => {
    
    return (
        <Layout>
            <SEO />
            {/* Header section */}
            <section id="header">
                <Container fluid>
                    <Row className="header-section">
                        <Col className="header-text">
                            <Title className="text-uppercase">Salesforce career accelerator</Title>
                            <BrandButton className="my-3">Start your application</BrandButton>
                            <p>Get started now in 30 seconds or less</p>
                        </Col>
                    </Row>
                <Col xs={{ span: 5, offset: 3 }} className="text-center fw-bold fs-5 lh-lg mb-5">
                    This part time course will put you on the path towards a
                    promising career in the Salesforce ecosystem. Work
                    together with our team and peers to earn your first
                    Salesforce Certification and learn key tech career skills.
                </Col>  
                </Container>
            </section>

            {/* Upcoming Program Dates Section*/}
            <section id="upcoming-program-dates">
                <Container fluid className="background--grey pt-4">
                    <Row>
                        <h1 className="title">UPCOMING PROGRAM DATES</h1>
                    </Row>
                    <Row className="dates">
                        <Col className="winter-dates">
                            <h4 className="fw-bold">WINTER 2023</h4>
                            <h4 className="fw-bold">2.15.23</h4>
                            <h4>TO</h4>
                            <h4 className="fw-bold">05.15.23</h4>
                        </Col>
                        <Col className="spring-dates">
                            <h4 className="fw-bold">SPRING 2023</h4>
                            <h4 className="fw-bold">03.15.23</h4>
                            <h4>TO</h4>
                            <h4 className="fw-bold">06.15.23</h4>
                        </Col>
                        <div className="button">
                            <BrandButton>Let's chat</BrandButton>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Why Salesforce Section*/}
            <section id="why-salesforce">
                <Container>
                    <Row>
                        <Col sm={{span: 8, offset: 2}} xs={12} className="title">                   
                            <Title className="text-uppercase">Why learn salesforce?</Title>
                            <div className="paragraph">
                                <p>
                                    Career opportunities in the Salesforce ecosystem are growing rapidly, and offer a low hurdle to entry-level tech jobs. Salesforce is the world's leading customer relationship management solution, used by organizations from Fortune 500 companies to government agencies and local non-profits. The role of Salesforce Administrator is a great starting point for a career in the ecosystem, and our Accelerator is a great place to learn the skills you need to get started.
                                </p> 
                            </div>
                        </Col>
                        <Col sm={{span: 8, offset: 2}} xs={12} className="d-flex justify-content-end">
                            <StaticImage quality='100' className="arrow-container me-3" src="./images/arrow-down-left.png" alt="Arrow Image"/>
                            <div>
                                <BrandButton>What is Salesforce?</BrandButton>                            
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* What Salesforce Section*/}
            <section id="what-salesforce" className="mb-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                            <a href="https://www.youtube.com/embed/xx2sK-QiBjw?rel=0&controls=0">
                                <StaticImage qualtiy='100' className="laptop-image" src="./images/laptop-video-salesforce.png" alt="Laptop Image" />
                            </a>
                            </div>
                        </Col>
                    </Row>
                    <Title className="text-center text-light text-uppercase">What makes it awesome?</Title>
                    <Col xs={11} className="mx-auto text-light text-center">
                        <p>
                            At Awesome Inc, everything we do starts with our Core Values. We care about people, and making a difference in our community. That's why we want to help everyone we can to learn the life changing skills they need to pursue their definition of “awesome.” And while doing that, we've seen that the best way to learn a new skill is to join a community, and get the right help on your journey. It's so easy to waste time trying to learn something by yourself, constantly running into problems with no one to talk to, but we're here to help! With coaching from experienced guides, classmates working alongside you, and a curriculum built by Salesforce themselves, we're ready to meet you where you're at, and help you succeed.
                        </p>
                    </Col>
                    <Col xs={11} className="mx-auto text-light text-center">
                        <p>
                            The best learning happens not when you're just taught information, but when you connect with others who are learning alongside you. Our Salesforce Career Accelerator program is designed to both teach you key technical skills, and to foster real-world connections to the material. It does this while offering flexibility as a part-time course with both live and self-paced components. Plus, with guided curriculum, and a wealth of expert-led sessions, you'll never be lost or left behind.
                        </p>
                    </Col>
                    <Col xs={11} className="mx-auto text-light text-center">
                        <p>
                            Prior Awesome Inc students have come from a variety of backgrounds, including manufacturing, retail, design, food service, law, healthcare, and more. Whatever your background, this course is made for you.
                        </p>
                    </Col>
                </Container>
            </section>

            {/* Curriculum Section*/}
            <section id="curriculum">
                <Container>
                    <Title className="text-uppercase">Curriculum</Title>
                    <p className="fw-light fst-italic">If reading this list makes your eyes glaze over... we get it. Maybe we can talk on the phone to explain the details.</p>
                    <Row className="my-5">
                        <Col>
                            <ol>
                                <li>Basics of Customer Relationship Management (CRM)</li>
                                <li>Study skills and test prep for the Salesforce Administrator certification</li>
                                <li>Hands-on experience working with a team and a real client's Salesforce org</li>
                                <li>Online collaboration tools to thrive in remote or hybrid work environments</li>
                                <li>Career coaching to connect with employers and stand out in the job application process</li>
                            </ol>
                        <BrandButton>Let's chat</BrandButton>
                        </Col>
                        <Col>
                            <StaticImage qualtiy='100' src="./images/salesforce-logo.png" alt="Salesforce Image" />
                        </Col>
                    </Row> 
                </Container>
            </section>

            {/* Course Outcomes Section*/}
            <section id="course-outcomes">
                <Container>
                    <Row>
                        <Col>
                            <StaticImage qualtiy='100' className="laptop-image" src="./images/salesforce-projects.png" alt="Laptop Image" />
                        </Col>
                        <Col>
                            <Title className="my-5 text-uppercase">Course outcomes</Title>
                            <ul>
                                <li>Earn your first Salesforce certification</li>
                                <li>Gain project experience working in a real Salesforce org </li>
                                <li>Build a standout LinkedIn profile</li>
                                <li>Interview with employer partners</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Tuition Scholarship Section*/}
            <section id="tuition-scholarship">
                <Container fluid className="background--grey py-5 text-center text-white">
                    <StaticImage quality='100' className="cost-img" src="./images/cost.png" alt="Cost Image" />
                    <Title className="my-4 text-white text-uppercase">Tuition and scholarship</Title>
                    <Col xs={9} className="mx-auto text-light">
                    <p>
                        Tuition for this program is $3499. For residents of Lexington-Fayette County, Kentucky, a special $2500 scholarship is available. If this applies to you, fill out this scholarship application. Up to 20 scholarships are available for the July 2022 - June 2023 period.
                    </p>
                    </Col>
                    <p className="fst-italic">
                        This program is being supported, in whole or in part, by federal award numbers SLFRP0292/SLFRP3418 awarded to Lexington-Fayette
                    </p>
                </Container>
                <div className="my-5 d-flex justify-content-center">
                    <BrandButton>Apply now</BrandButton>
                </div>
            </section>

            {/* FAQs Section*/}
            <section id="FAQs">
                <Container>
                    <Title className="text-center my-5">FAQs</Title>
                    <Accordion className="mb-5" defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="px-3 py-4 mb-1">
                        <Accordion.Header>Do I need my own computer?</Accordion.Header>
                        <Accordion.Body>
                        <Col>
                            Yes. Each trainee will need to provide his/her own laptop for the course. Microsoft Windows-based PC's or Apple macOS computers will work. We recommend a laptop made within the past 3-4 years. Computers should be free from viruses/malware. You will also need a webcam and broadband internet connection for video calls and remote learning.
                        </Col>
                        <Col className="my-3">
                            A smartphone or tablet is not sufficient for use in this program.
                        </Col>
                        <Col>
                            If this presents a barrier to your participation, please contact us to discuss possible assistance.
                        </Col>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="px-3 py-4 mb-1">
                        <Accordion.Header>Do I need to have prior technical experience?</Accordion.Header>
                        <Accordion.Body>
                        No prior programming experience is required, but trainees should be comfortable typing, navigating a file / folder structure, and using a web browser.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="px-3 py-4 mb-1">
                        <Accordion.Header>How many trainees will there be in my class?</Accordion.Header>
                        <Accordion.Body>
                        This course is capped at 16 trainees.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="px-3 py-4 mb-1">
                        <Accordion.Header>Are there any age limits for trainees in the Salesforce course?</Accordion.Header>
                        <Accordion.Body>
                        The Salesforce Career Accelerator is designed for adult learners, age 21+.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="px-3 py-4 mb-1">
                        <Accordion.Header>Where do I park?</Accordion.Header>
                        <Accordion.Body>
                        See <a className="text-danger" href="/parking">map for parking options.</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Container>
            </section>

            {/* Apply Now Button at the Bottom*/}
            <section id="apply-now-button">
                <Container>
                    <Row> 
                        <div className="d-flex align-items-center my-5 justify-content-center">
                        <BrandButton className="button bg-dark">Apply now</BrandButton>
                        </div>    
                    </Row>
                </Container>
            </section>
            
            
            {/* Questions */}
            <section id="questions">
                <Container fluid>
                <Row>
                    <Col className="text-center mt-5">
                    <Row className="text-center mt-5">
                        <Title className="text-center text-white pt-5 mt-5">Still have questions?</Title>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                        <BrandButton>Contact us</BrandButton>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </Container>
            </section>

        </Layout>

    ); 
};

export default SalesforcePage;