import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import SEO from '../../components/seo'
import { GatsbyImage } from "gatsby-plugin-image";

import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import * as styles from "./what-we-do.module.scss";

import bellRinging from "../../images/what-we-do/bell-ringing.jpg";
import handShake from "../../images/what-we-do/handshake.jpg";
import computerStare from "../../images/what-we-do/computer-staring-contest.jpg";
import dotDivider from "../../images/what-we-do/dot-divider.png";
import redAsterisk from "../../images/what-we-do/red-asterisk.png";

// Logo imports
// Entrepreneurship
import fiveAcross from "../../images/what-we-do/Logos/5-across.png";
import fellowship from "../../images/what-we-do/Logos/fellowship.png";
import awesomeFund from "../../images/what-we-do/Logos/AwesomeFund.png";
import corporateInnovation from "../../images/what-we-do/Logos/corporate-innovation.png";
import coworking from "../../images/what-we-do/Logos/Coworking.png";
import cherubFund from "../../images/what-we-do/Logos/Cherub-Fund-Logo.png";
import hallOfFame from "../../images/what-we-do/Logos/KEHOF-Logo.png";
// Technology
import apax from "../../images/what-we-do/Logos/Apax-Logo.png";
import codeLogo from "../../images/what-we-do/Logos/C.O.D.E.png";
import codingClub from "../../images/what-we-do/Logos/Coding-Club.png";
import graphicDesign from "../../images/what-we-do/Logos/Intro-to-Graphic-Design.png";
import webDevelopment from "../../images/what-we-do/Logos/Intro-to-Web-Development.png";
import salesforce from "../../images/what-we-do/Logos/Salesforce-Accelerator.png";
import bootcamp from "../../images/what-we-do/Logos/Bootcamp.png";
import weekOfCode from "../../images/what-we-do/Logos/Week-of-Code.png";
// Other Projects
import joyProject from "../../images/what-we-do/Logos/joy-project.png";
import startupLex from "../../images/what-we-do/Logos/StartupLex.png";
import startupWeekend from "../../images/what-we-do/Logos/SW-logotext.png";
import startupSummer from "../../images/what-we-do/Logos/STARTUP-SUMMER-RETREAT.png";
import teamAlpha from "../../images/what-we-do/Logos/Team-Alpha-Logo-Grey.png";
import undrcvr from "../../images/what-we-do/Logos/Undrcvr-Lex-Logo.png";


const WhatWeDoPage = ({ data }) => {
    return (
        <Layout>
            {/* What We Do header */}
            {/* To do: fix scaling */}
            <section className={styles.aboutHeader}>
            <Container>
                <Row> 
                <Col xs={12} md={9} lg={7} className="mt-3">
                    <div className={styles.heading}>
                    <Title className={`text-uppercase text-white mt-5`}>
                        Why awesome inc exists
                    </Title>
                    <Subtitle className={`text-white fs-6 mt-5 mb-5`}>
                        Awesome Inc exists to help people pursue their definition of 
                        Awesome. We do this by creatign community around
                        entrepreneurship and technology.
                    </Subtitle>
                    <BrandButton className={`text-nowrap`}>Learn More</BrandButton>
                    </div>
                </Col>
                </Row>
            </Container>
            </section>


            {/* Our Progams */}
            <section className={styles.workHeader}>
                <Container className={styles.whatWeDo}>
                    <Row>
                        <Col className="mx-auto my-5" xs={12} sm={{ offset: 1, span: 10}} lg={6}>
                            <Title className="text-danger text-center text-uppercase">Our programs</Title>
                            <p className='text-center mt-3'>
                                Awesome Inc was founded on the basis of the "give-first" mentality.
                                Awesome Inc started in 2009 and has grown to be the epicenter for
                                anything related to technology or business. We strive to make Lexington
                                a better place to live and work through the following programs.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                            <Col className={`align-items-md mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} md={4} sm={12}>
                                <Image className={`${styles.headerImg}`} src={computerStare} alt="Computer Stare" />
                            </Col>
                            <Col className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} md={4} sm={12}>
                                <Image className={`${styles.headerImg}`} src={bellRinging} alt="Success Bell Ringing"/>
                            </Col>
                            <Col className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} md={4} sm={12}>
                                <Image className={`${styles.headerImg}`} src={handShake} alt="Handshake"/>
                            </Col>
                    </Row>
                </Container>
            </section>

            {/* Entrepreneurship */}
            <section className="mt-5">
            <Container className={styles.entrepreneurship}>
                {/* Header */}
                <Row>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Entrepreneurship
                    </h2>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                </Row>
                {/* Row 1 Logos */}
                <Row className={`align-items-center justify-content-center`}>
                    <Col className="text-center flex-column align-items-center">
                    <Image className={`${styles.logo} img-fluid `} src={fiveAcross} alt="Five across logo" />
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                    <Image className={`${styles.logo} img-fluid`} src={fellowship} alt="Fellowship logo" />
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                    <Image className={`${styles.logo} img-fluid`} src={awesomeFund} alt="Awesome fund" />
                    </Col>
                </Row>
                {/* Row 1 Descriptions */}
                <Row>                    
                    <Col className="text-center flex-column align-items-center">    
                        <p className={`mt-3 mb-5`}>
                            A pitch competition for kentucky entrepreneurs.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        
                        <p className={`mt-3 mb-5`}>
                            A mentor-driven program designed to accelerate Kentucky's high tech startups.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center"> 
                        
                        <p className={`mt-3 mb-5`}>
                            A pre-seed and seed stage fund that will invest in tech startups primarily in and near Kentucky.
                        </p>
                    </Col>
                </Row>
                {/* Row 2 Logos */}
                <Row>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid `} src={corporateInnovation} alt="Corporate Innovation" />
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={coworking} alt="Coworking" />
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={cherubFund} alt="Cherub Fund" />
                    </Col>
                </Row>
                {/* Row 2 Descriptions */}
                <Row>
                    <Col className="text-center flex-column align-items-center">
                        <p className={`mt-3 mb-5`}>
                            Helping KY companies discover, test, and implement innovative ideas.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <p className={`mt-3 mb-5`}>
                            Awesome Inc's coworking space hosts anyone needing a place to work. Open coworking,
                            private offices, conference rooms, it is a place for any remote worker or corporate
                            team to work from and collaborate with one another.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center"> 
                        <p className={`mt-3 mb-5`}>
                            The Cherub Fund is a baby angel fund that was launched in 2013. The Cherub Fund makes
                            small investments (less than $10,000) into early stage startups.
                        </p>
                    </Col>
                </Row>
                {/* Row 3 Logos */}
                <Row>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col>
                        <Image className={`${styles.logo} img-fluid`} src={hallOfFame} alt="Hall of Fame" />
                    </Col>
                </Row>
                <Row>
                    <Col className={``}> 
                        <p className={`mt-3 mb-5`}>
                            The Kentucky Entrepreneur Hall of Fame is a physical and virtual destination that
                            shares and celebrates the stories of Kentucky's most successful entrepreneurs.
                        </p>
                    </Col>
                </Row>
            </Container>
            </section>

            {/* Technology */}
            <section className="mt-5">
            <Container className={styles.whatWeDo}>
                <Row>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Technology
                    </h2>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid `} src={apax} alt="Apax Logo" />
                        <p className={`mt-3 mb-5`}>
                            APAX is your partner in creating customized software solutions that help organizations grow and thrive.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={codeLogo} alt="C.O.D.E Logo" />
                        <p className={`mt-3 mb-5`}>
                            Students learn to code by working through curriculum and building projects on teams.
                            Our curriculum comes with live support from our team throughout the year and 
                            professional development to equip teachers to educate students and prepare them for the future.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center"> 
                        <Image className={`${styles.logo} img-fluid`} src={codingClub} alt="Coding Club" />
                        <p className={`mt-3 mb-5`}>
                            The coding club offers students an opportunity to learn to code from professional
                            software developers, all while surrounded by a community of peers in a convenient
                            weekday evening format.
                        </p>
                    </Col>
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                    <Col className="text-center flex-column align-items-center"> 
                        <Image className={`${styles.logo} img-fluid`} src={graphicDesign} alt="Intro to graphic design" />
                        <p className={`mt-3 mb-5`}>
                            The Intro to Design course is created to focus on helping professionals in the marketing
                            and events workspace. No prior design knowledge or experience is required, but basic computer skills.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid `} src={webDevelopment} alt="Intro to web development" />
                        <p className={`mt-3 mb-5`}>
                            Curious about coding, but not quite ready to take the plunge with our Web Developer Bootcamp?
                            The Intro to Web provides a smooth entry into the world of software development,
                            even for absolute beginners.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={salesforce} alt="Salesforce Accelerator" />
                        <p className={`mt-3 mb-5`}>
                            The best way to launch a career in the rapdily growing Salesforce ecosystem is through becoming
                            a certified Administrator for the world's most popular CRM platform. Thsi part time accelerator
                            will prepare you for your new career.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col className={``}>
                        <Image className={`${styles.logo} img-fluid`} src={bootcamp} alt="Web Developer Bootcamp" />
                        <p className={`mt-3 mb-5`}>
                            The Web Developer Bootcamp is an intenstive, hands-on program teachign web and
                            software development, with a focus on job-ready skills. In just 16 weeks, we'll help
                            you achieve your goals and land your dream job as a developer.
                        </p>
                    </Col>
                    <Col className={``}>
                        <Image className={`${styles.logo} img-fluid`} src={weekOfCode} alt="Week of Code" />
                        <p className={`mt-3 mb-5`}>
                            The Week of Code Summer Camp provides a fun and engaging introduction to coding,
                            with a focus on building important skills for the future. By the end of the week,
                            your child will build a website, mobile app, and video game.
                        </p>
                    </Col>
                </Row>
            </Container>
            </section>

            {/* Other Programs */}
            <section className="mt-5">
            <Container className={styles.whatWeDo}>
                <Row>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Technology
                    </h2>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid `} src={joyProject} alt="Joy Project" />
                        <p className={`mt-3 mb-5`}>
                            The Joy Project is a charity foundation that was founded to better the lives of people in the Lexington Community.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={startupLex} alt="Startup Lexington" />
                        <p className={`mt-3 mb-5`}>
                            Startup Lex is an entrepreneur focused community made for encouraging growth, education, and giving first.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center"> 
                        <Image className={`${styles.logo} img-fluid`} src={startupWeekend} alt="Lexington Startup Weekend" />
                        <p className={`mt-3 mb-5`}>
                            Startup Weekend is a three-day program where aspiring entrepreneurs can build a company and experience startup life.
                        </p>
                    </Col>
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                    <Col className="text-center flex-column align-items-center"> 
                        <Image className={`${styles.logo} img-fluid`} src={startupSummer} alt="Startup Summer Retreat" />
                        <p className={`mt-3 mb-5`}>
                            Join other founders, entrepreneurs, mentors, and startup community members for a multi-day retreat, focused on growth. All while having fun.
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid `} src={teamAlpha} alt="Team Alpha" />
                        <p className={`mt-3 mb-5`}>
                            Team Alpha is our internship program with a goal to equip each intern with skill sets while gaining real-world experience by working on one of four teams. 
                        </p>
                    </Col>
                    <Col className="text-center flex-column align-items-center">
                        <Image className={`${styles.logo} img-fluid`} src={undrcvr} alt="UndrCvr Lex" />
                        <p className={`mt-3 mb-5`}>
                            UndrCvr Lex is a partnership between Awesome Inc, BaseHere, and the Lexington Chamber of Commerce
                            that provides opportunity to introudce the community and college student talent to all of the tech organizations in Lexington.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col xs="auto" className="d-inline-flex align-items-center">
                        <Image className={`${styles.asterisk}`} src={redAsterisk} alt="Red asterisk"/>
                        <p className="text-center mb-0 ml-2">Awesome Inc is a contributor of this program, not an owner</p>
                    </Col>
                </Row>
            </Container>
            </section>

        </Layout>
    )
}

export default WhatWeDoPage;