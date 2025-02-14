import * as React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SEO from "../../components/seo";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout.js";
import BackgroundCard from "../../components/BackgroundCard/BackgroundCard";
import { motion } from "framer-motion";
import Title from "../../components/UI/Title/Title";
import * as styles from "./partnership.module.scss";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ProgramForm from "../../components/Forms/YouthProgramGuide.js/partnershipsForm.js"
import ImageOutline from "../../components/ImageOutline/ImageOutline";
import FiveAcrossWinnersCard from "../../components/FiveAcrossWinnersCard/FiveAcrossWinnersCard";
import { Carousel } from "react-bootstrap";
import Subtitle from "../../components/UI/Subtitle/Subtitle";

import aincLogo from "../../images/logo.png";

const PartnershipsPage = ({ data }) => {
    
    const sponsors = [aincLogo, aincLogo, aincLogo, aincLogo, aincLogo, aincLogo];
    const lengthOfSponsors = sponsors.length;
    function scrollToRow() {
        document.getElementById("targetRow").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Layout>
            <Container fluid className={`${styles.mainHeading}`}>
                <Row>
                    <Col className="offset-sm-2" style={{ marginTop: "30%" }}>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                        <Row className="">
                        </Row>
                        <Row>
                            <Col md="8" className="">
                            <Title className={`text-white mb-5`}>
                                Meet Our Awesome Partners 
                                <p>Dedicated to curating Lexington's finest startups</p>
                            </Title>
                            </Col>
                            
                            <Row>
                                <a
                                    href="#"
                                    onClick={scrollToRow}
                                >
                                    <BrandButton className={`partnership`}>
                                        LEARN MORE
                                    </BrandButton>
                                </a>
                            </Row>
                        </Row>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/*Partners*/}
            <Container>
                <Row className="py-5">
                    <Title className={`${styles.values}`}>
                        <Row>
                            <Col>
                                <h1>SPONSORS.</h1>
                                <h1>PARTNERS.</h1>
                                <h1>FRIENDS.</h1>
                                <Row className={`${styles.subHeading}`}>
                                    <p>The people and partners who push the bluegrass forward with us.</p>
                                </Row>
                            </Col>
                           
                            {/*sponsoers grid*/}
                            <Col>
                                <Row className={`${styles.sponsorGrid}`}>
                                    {sponsors.map((image, index) => (
                                    <Col key={index} className={`${
                                        index % 3 === 0 && index >= lengthOfSponsors - 4 ? styles.gridItemBottomLeft :
                                        index % 3 === 1 && index >= lengthOfSponsors - 3 ? styles.gridItemMiddleBottom :
                                        index % 3 === 2 && index >= lengthOfSponsors - 3 ? styles.gridItemBottomRight :
                                        index === 0 ? styles.gridItemTopLeft :
                                        index === 1 ? styles.gridItemMiddleTop :
                                        index === 2 ? styles.gridItemTopRight:
                                        index%3 === 0 ? styles.gridItemMiddleLeft :
                                        index%3 === 2 ? styles.gridItemMiddleRight :
                                        styles.gridItemMiddle
                                        }`}>
                                            {/*need graphQL Data */}
                                        <Image
                                        style={{ maxWidth: "150px", height: "auto", padding: "7px" }}
                                        src={image}
                                        alt={`Sponsor ${index + 1}`}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>   
                    </Title>         
                </Row>
            </Container>
            
            {/*Interst Form Section */}
            <Container fluid className={`${styles.formHeading} py-5`}>
               <Col md={6} className="mx-auto py-5 text-center partnership-form-container">
                    <Row >
                        <div className="partnership-form-card">
                            <Title className="text-white mb-5">
                                Interested in becoming a partner?
                                <p>Fill out the form below and we will be in touch.</p>
                            </Title>
                        </div>
                        
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center">
                            <ProgramForm />
                        </Col>
                    </Row>
                </Col>
            </Container>
            
            <tr id="targetRow">
            </tr>
            
            {/* Perks section*/}
            <Container>
                <Col className="text-center">
                    <Title className={`${styles.values} mx-auto`}>
                        BEING A PARTERN HAS IT'S PERKS
                        <p className={`${styles.subHeading} mx-auto`}>These are just a few of the reasons companies partner with Awesome Inc</p>
                    </Title>
                    <Row className="mb-5">
                        <Col  >
                            <ImageOutline style={{ marginLeft: "1rem" }}>
                            <StaticImage
                                src="../../images/partnership/5across_june24-31.jpg"
                                width={250}
                                height={350}
                                objectFit="cover"
                                className="position-relative"
                                alt="people brainstorming"
                            />
                           
                            </ImageOutline>
                        </Col>
                        <Col >
                            <ImageOutline style={{ marginLeft: "1rem" }}>
                            <StaticImage
                                src="../../images/partnership/5across_june24-16.jpg"
                                width={250}
                                height={350}
                                objectFit="cover"
                                className="position-relative"
                                alt="people brainstorming"
                            />
                            </ImageOutline>
                        </Col>
                        <Col >
                            <ImageOutline style={{ marginLeft: "1rem" }}>
                            <StaticImage
                                src="../../images/partnership/5across_june24-128.jpg"
                                width={250}
                                height={350}
                                objectFit=""
                                className="position-relative"
                                alt="people brainstorming"
                            />
                            </ImageOutline>
                        </Col>
                    </Row>
                </Col>
            </Container>
            
            {/*Oppurtunites Section */}
            <Container fluid className={styles.oppurtunitesHeading}>
                <Row className="text-center">
                    <Title className="mx-auto mt-5 text-white">PARTNERHSIP OPPURTUNITES</Title>
                    <p className="text-white">Learn more about partnership options</p>
                </Row>
                <Row className="mt-5">
                    {/*this is bad data sponosors need to be replaced */}
                    {sponsors.map((event) => ( 
                    <Col lg="4">
                    <Row className="my-5">
                        <Col sm="12">
                            <div className={styles.headerBorder}>
                            <h4 className={`${styles.headingSubtitle} p-2`}>
                                <span>TITLE</span>
                            </h4>
                            <h4 className={`${styles.bodyText} p-2 mb-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                            </div>
                        </Col>
                        </Row>
                    </Col>
                    ))} 
                </Row>
            </Container>         
            {/* Testimonial section */}
            <Container>
            <Carousel indicators={true} className={`${styles.carouselHeight} my-3`}>
                {sponsors.map((index) => (
                <Carousel.Item key={index}>
                    <Row className="p-1 d-flex justify-content-center">
                    <Image
                        style={{maxWidth: "150px", height: "auto", padding: "15px" }}
                        src={aincLogo}
                        alt={`Sponsor ${index + 1}`}
                    />
                    <Row md={2} className="text-center">
                        <p className="mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Row>
                    <Col className="p-3 d-flex flex-column align-items-center align-items-md-start">
                        <Subtitle className="mx-auto" style={{ color: "#C12029" }}>company name</Subtitle>
                    </Col>
                    </Row>
                </Carousel.Item>
                ))}
            </Carousel>
            </Container>

            {/* Foot Section */}
            <Container fluid className={styles.finalSection}>
                <Row>
                    <Col>
                        <h2 className={styles.finalHeading}>We'd love to have you as a partner.</h2>
                        <BrandButton className={`${styles.finalButton}, btn--small`}>
                        Learn More
                        </BrandButton>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default PartnershipsPage;