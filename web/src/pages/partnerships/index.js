import * as React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SEO from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout.js";
import BackgroundCard from "../../components/BackgroundCard/BackgroundCard";
import { motion } from "framer-motion";
import Title from "../../components/UI/Title/Title";
import * as styles from "./partnership.module.scss";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ProgramForm from "../../components/Forms/YouthProgramGuide.js/partnershipsForm.js"

import aincLogo from "../../images/logo.png";

const PartnershipsPage = ({ data }) => {
    
    const sponsors = [aincLogo, aincLogo, aincLogo, aincLogo, aincLogo, aincLogo];
    const lengthOfSponsors = sponsors.length

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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0, duration: 0.4 }}
                        >
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/*experementing*/}
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
                    <Row className="w-100 justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center">
                            <ProgramForm />
                        </Col>
                    </Row>

                </Col>
            </Container>


            <tr id="targetRow">
                <td>found me</td>
            </tr>
            
        </Layout>
    );
};

export default PartnershipsPage;