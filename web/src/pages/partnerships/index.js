import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout.js";
import BackgroundCard from "../../components/BackgroundCard/BackgroundCard";
import { motion } from "framer-motion";
import Title from "../../components/UI/Title/Title";
import * as styles from "./partnership.module.scss";
import BrandButton from "../../components/UI/BrandButton/BrandButton";




const PartnershipsPage = ({ data }) => {
    
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
                        <Col>
                            <h1>SPONSORS.</h1>
                            <h1>PARTNERS.</h1>
                            <h1>FRIENDS.</h1>
                        </Col>
                        <Row className={`${styles.subHeading}`}>
                            <p>The people and partners who push the bluegrass forward with us.</p>
                        </Row>
                    </Title>
                    
                    
                </Row>
                

            </Container>

            <tr id="targetRow">
                <td>found me</td>
            </tr>
            
        </Layout>
    );
};

export default PartnershipsPage;