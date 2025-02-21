import * as React from "react";
import { graphql } from "gatsby";
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

import PerkImage1 from "../../images/partnership/5across_june24-31.jpg";
import PerkImage2 from "../../images/partnership/5across_june24-16.jpg";
import PerkImage3 from "../../images/partnership/5across_june24-128.jpg";
import Desktop from "../../images/Rent_Workspace.png";
import Rocket from "../../images/accelerate-your-startup.png"
import HTMLBrackets from "../../images/Learn_To_Code.png"

{/* test data */}
import AincLogo from "../../images/logo.png";



export const query_partnership = graphql`
query PartnersPage {
    allSanityFiveAcrossSponsors {
      nodes {
        suppourtingSponsors {
            image {
                asset {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
        }
      }
    }
    
  }
`;

const PartnershipsPage = ({ data }) => {
    
    const perksImages = [PerkImage1,PerkImage2 ,PerkImage3]
    const perkIcons = [Rocket, HTMLBrackets, Desktop]
    const sponsors = data.allSanityFiveAcrossSponsors.nodes[0].suppourtingSponsors;
    const lengthOfSponsors = sponsors.length;
    const partnershipOppurtunites = ['Fellowshop/HOF Suppor', '5 Across', 'Demo Days', 'Investor 1-1s', 'Newsletters', 'Summer Retreat', 'Lunch and Learn', 'Mentor Sessions']
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
                            <Col style={{fontSize: '75px'}}>
                                <Row>SPONSORS.</Row>
                                <Row>PARTNERS.</Row>
                                <Row>FRIENDS.</Row>
                                <Row className={`${styles.subHeading}`}>
                                    <p>The people and partners who push the bluegrass forward with us.</p>
                                </Row>
                            </Col>
                           
                            {/*sponsoers grid*/}
                            <Col>
                                <Row className={`${styles.sponsorGrid}`}>
                                    {sponsors.map((sponsor, index) => (
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
                                        } p-4`}>
                                            {/*need graphQL Data */}
                                        <GatsbyImage
                                        image={sponsor.image.asset.gatsbyImageData}
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
                            <Title className="text-white">
                                Interested in 
                            </Title>
                            <Title className='text-white'>becoming a partner?</Title>
                            <p className={`${styles.subHeading} mx-auto text-white`}>Fill out the form below and we will be in touch.</p>
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
            <Container className="text-center">
                <Row className="mb-5 ">

                        <Title className={`${styles.values} mx-auto my-5`}>
                            BEING A PARTERN HAS IT'S PERKS
                            <p className={`${styles.subHeading} mx-auto`}>These are just a few of the reasons companies partner with Awesome Inc</p>
                        </Title>
                        <Col >
                            {perksImages.map((image,index) => (
                                <ImageOutline style={{ marginLeft: "5rem" }}>
                                <Container className={`${styles.perksImage}`} style={{backgroundImage:`linear-gradient(
                                    rgba(18, 2, 2, 0.409),
                                    rgba(18, 2, 2, 0.409)
                                    ), url(${image})`}}> 
                                <Image 
                                    style={{ maxWidth: "100px", height: "auto", padding: "7px" }}
                                    src={perkIcons[index]}
                                    alt=''
                                />
                                <p className={`${styles.finalSubText} text-white`}>
                                    Cintrifuse is a non-profit organization and relies on the support of our generous donors to continue fostering innovation, empowering founders, and bulding a thriving startup ecosystem in cincinnati. your support can make a real difference in shaping the furture of entrepreneurship and tech
                                </p>
                                </Container>
                                </ImageOutline>
                            ))}
                           
                        </Col>
                    </Row>
            </Container>
            
            {/*Oppurtunites Section */}
            <Container fluid className={styles.oppurtunitesHeading}>
                <Row className="text-center">
                    <Title className="mx-auto mt-5 text-white">PARTNERHSIP OPPORTUNITES</Title>
                    <p className="text-white">Learn more about partnership options</p>
                </Row>
                <Row className="mt-5">
                    {/*this is bad data sponosors need to be replaced */}
                    {partnershipOppurtunites.map((title) => ( 
                    <Col lg="4">
                    <Row className="my-3 mx-3">
                        <Col sm="12">
                            <div className={styles.headerBorder}>
                            <h4 className={`${styles.headingSubtitle} my-2`}>
                               {title}
                            </h4>
                            <h4 className={`${styles.bodyText} p-5 mb-4`}>Our space and network can provide an opportunity for entrepreneurs to get connected to who they need to be successful</h4>
                            </div>
                        </Col>
                        </Row>
                    </Col>
                    ))} 
                </Row>
            </Container>         
            {/* Testimonial section */}
            <Container className="py-5">
            <Title className={`${styles.greyUnderline} text-center mt-5`} >TESTIMONIALS</Title>
            <Carousel indicators={true} className={`${styles.carouselHeight} my-3`}>
                {sponsors.map((index) => (
                <Carousel.Item key={index}>
                    <Row className="p-1 d-flex justify-content-center">
                    <Image
                        style={{maxWidth: "150px", height: "auto", padding: "15px" }}
                        src={AincLogo}
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
                        <h2 className={`${styles.finalHeading}`}>We'd love to have you as a partner.</h2>
                        <BrandButton className={`${styles.finalButton}, btn--small my-4`}>
                        Learn More
                        </BrandButton>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};



export default PartnershipsPage;