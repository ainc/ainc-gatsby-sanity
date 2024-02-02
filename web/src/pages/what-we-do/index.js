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
            <section className={styles.aboutHeader}>
            <Container>
                <Row> 
                <Col xs={12} md={9} lg={7} className="mt-3">
                    <div className={styles.heading}>
                    <Title className={` ${styles.headingTitle} text-uppercase text-white mt-5`}>
                        Why awesome inc exists
                    </Title>
                    <Subtitle className={` ${styles.headingSubtitle} text-white mt-4 mb-4`}>
                        Awesome Inc exists to help people pursue their definition of 
                        Awesome. We do this by creating community around
                        entrepreneurship and technology.
                    </Subtitle>
                    <a href='/about'>
                        <BrandButton className={`text-nowrap`}>Learn More</BrandButton>
                    </a>
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
                            <Title className={`${styles.programs} mb-5 text-danger text-center text-uppercase`}>Our programs</Title>
                            <p className={`${styles.programsSubheader} text-center mt-3`}>
                                Awesome Inc was founded on the basis of the "give-first" mentality.
                                Awesome Inc started in 2009 and has grown to be the epicenter for
                                anything related to technology or business. We strive to make Lexington
                                a better place to live and work through the following programs.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                            <Col className={`align-items-md mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} lg={4} sm={12}>
                                <Image className={`${styles.headerImg} mx-auto`} src={computerStare} alt="Computer Stare" />
                            </Col>
                            <Col className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} lg={4} md={12}>
                                <Image className={`${styles.headerImg} mx-auto`} src={bellRinging} alt="Success Bell Ringing"/>
                            </Col>
                            <Col className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center`} lg={4} md={12}>
                                <Image className={`${styles.headerImg} mx-auto`} src={handShake} alt="Handshake"/>
                            </Col>
                    </Row>
                </Container>
            </section>

            {/*To do: Make images align with each other and paragraphs align with each other */}

            {/* Entrepreneurship */}
            <section className="mt-5">
            <Container className={styles.entrepreneurship}>
                {/* Header */}
                <Row className={`${styles.logoHeader}`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Entrepreneurship
                    </h2>
                    <Image className={`${styles.dotDivider}`} src={dotDivider} alt="Dot Divider" />
                </Row>
                {/* Row 1 Logos */}
                <Row className={`d-flex justify-content-center mb-5`}>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center">
                        <div className={styles.logoContainer}>
                            <Image className={` mb-3`} src={fiveAcross} alt="Five across logo" />
                        </div>
                        <p className={`${styles.logoDescription}  mt-auto mb-5`}>
                            A pitch competition for kentucky entrepreneurs.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center">
                        <div className={styles.logoContainer}>
                            <Image className={` mb-3`} src={fellowship} alt="Fellowship logo" />
                        </div>
                        <p className={`${styles.logoDescription} mt-auto mb-5`}>
                            A mentor-driven program designed to accelerate Kentucky's high tech startups.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center ">
                        <div className={styles.logoContainer}>
                            <Image className={`mb-5`} src={awesomeFund} alt="Awesome fund" />
                        </div>
                        <p className={`${styles.logoDescription} mt-auto mb-5`}>
                            A pre-seed and seed stage fund that will invest in tech startups primarily in and near Kentucky.
                        </p>
                    </Col>
                </Row>
                {/* Row 2 Logos */}
                <Row className={`d-flex justify-content-center mb-5`}>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center ">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid `} src={corporateInnovation} alt="Corporate Innovation" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            Helping KY companies discover, test, and implement innovative ideas.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center ">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={coworking} alt="Coworking" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            Awesome Inc's coworking space hosts anyone needing a place to work. Open coworking,
                            private offices, conference rooms, it is a place for any remote worker or corporate
                            team to work from and collaborate with one another.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center ">
                        <div className={styles.logoContainer}>
                        <Image className={`${styles.logo} img-fluid`} src={cherubFund} alt="Cherub Fund" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            The Cherub Fund is a baby angel fund that was launched in 2013. The Cherub Fund makes
                            small investments (less than $10,000) into early stage startups.
                        </p>
                    </Col>
                </Row>
                {/* Row 3 Logos */}
                <Row className={`d-flex mb-5`}>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-left align-items-center text-center ">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} mx-auto`} src={hallOfFame} alt="Hall of Fame" />
                        </div>
                        <p className={`mt-3 mb-5 text-center`}>
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
                <Row className={`${styles.logoHeader}`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Technology
                    </h2>
                    <Image className={`${styles.dotDivider}`} src={dotDivider} alt="Dot Divider" />
                </Row>
                <Row className={`d-flex justify-content-center mb-5 mt-5`}>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid `} src={apax} alt="Apax Logo" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            APAX is your partner in creating customized software solutions that help organizations grow and thrive.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={codeLogo} alt="C.O.D.E Logo" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            Students learn to code by working through curriculum and building projects on teams.
                            Our curriculum comes with live support from our team throughout the year and 
                            professional development to equip teachers to educate students and prepare them for the future.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex justify-content-center text-center flex-column align-items-center mb-5"> 
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={codingClub} alt="Coding Club" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            The coding club offers students an opportunity to learn to code from professional
                            software developers, all while surrounded by a community of peers in a convenient
                            weekday evening format.
                        </p>
                    </Col>
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Col lg={4} md={12} className="mt-3 d-flex text-center flex-column align-items-center mb-5"> 
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={graphicDesign} alt="Intro to graphic design" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            The Intro to Design course is created to focus on helping professionals in the marketing
                            and events workspace. No prior design knowledge or experience is required, but basic computer skills.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="mt-3 d-flex text-center flex-column align-items-center mb-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid `} src={webDevelopment} alt="Intro to web development" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            Curious about coding, but not quite ready to take the plunge with our Web Developer Bootcamp?
                            The Intro to Web provides a smooth entry into the world of software development,
                            even for absolute beginners.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="mt-3 d-flex text-center flex-column align-items-center mb-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={salesforce} alt="Salesforce Accelerator" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5`}>
                            The best way to launch a career in the rapdily growing Salesforce ecosystem is through becoming
                            a certified Administrator for the world's most popular CRM platform. Thsi part time accelerator
                            will prepare you for your new career.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Image className={`mb-5`} src={dotDivider} alt="Dot Divider" />
                    <Row className={`${styles.twoLogos} d-flex flex-row align-items-center`}>
                    <Col lg={4} md={12} className={`mt-3 d-flex align-items-center flex-column`}>
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} mx-auto`} src={bootcamp} alt="Web Developer Bootcamp" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            The Web Developer Bootcamp is an intenstive, hands-on program teachign web and
                            software development, with a focus on job-ready skills. In just 16 weeks, we'll help
                            you achieve your goals and land your dream job as a developer.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className={`mt-3 d-flex align-items-center flex-column`}>
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} mx-auto`} src={weekOfCode} alt="Week of Code" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            The Week of Code Summer Camp provides a fun and engaging introduction to coding,
                            with a focus on building important skills for the future. By the end of the week,
                            your child will build a website, mobile app, and video game.
                        </p>
                    </Col>
                    </Row>
                </Row>
            </Container>
            </section>

            {/* Other Programs */}
            <section className="mt-5">
            <Container className={styles.whatWeDo}>
                <Row className={`${styles.logoHeader} mb-5`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Other Programs
                    </h2>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                </Row>
                <Row className={`align-items-center justify-content-center mb-5`}>
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid `} src={joyProject} alt="Joy Project" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            The Joy Project is a charity foundation that was founded to better the lives of people in the Lexington Community.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={startupLex} alt="Startup Lexington" />
                            <Image className={`${styles.asterisk}`} src={redAsterisk} alt="Red asterisk"/>
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            Startup Lex is an entrepreneur focused community made for encouraging growth, education, and giving first.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center"> 
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={startupWeekend} alt="Lexington Startup Weekend"/>
                            <Image className={`${styles.asterisk}`} src={redAsterisk} alt="Red asterisk"/>
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            Startup Weekend is a three-day program where aspiring entrepreneurs can build a company and experience startup life.
                        </p>
                    </Col>
                </Row>
                <Row className={`align-items-center justify-content-center`}>
                    <Image className={``} src={dotDivider} alt="Dot Divider" />
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center mt-5"> 
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={startupSummer} alt="Startup Summer Retreat" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            Join other founders, entrepreneurs, mentors, and startup community members for a multi-day retreat, focused on growth. All while having fun.
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center mt-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid `} src={teamAlpha} alt="Team Alpha" />
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            Team Alpha is our internship program with a goal to equip each intern with skill sets while gaining real-world experience by working on one of four teams. 
                        </p>
                    </Col>
                    <Col lg={4} md={12} className="d-flex text-center flex-column align-items-center mt-5">
                        <div className={styles.logoContainer}>
                            <Image className={`${styles.logo} img-fluid`} src={undrcvr} alt="UndrCvr Lex" />
                            <Image className={`${styles.asterisk}`} src={redAsterisk} alt="Red asterisk"/>
                        </div>
                        <p className={`${styles.logoDescription} mt-3 mb-5 text-center`}>
                            UndrCvr Lex is a partnership between Awesome Inc, BaseHere, and the Lexington Chamber of Commerce
                            that provides opportunity to introudce the community and college student talent to all of the tech organizations in Lexington.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center mb-5">
                    <Col xs="auto" className="d-inline-flex align-items-center">
                        <Image className={`${styles.asterisk} mt-5`} src={redAsterisk} alt="Red asterisk"/>
                        <p className="text-center mb-0 ml-2 mt-5">Awesome Inc is a contributor of this program, not an owner</p>
                    </Col>
                </Row>
            </Container>
            </section>

        </Layout>
    )
}

export default WhatWeDoPage;