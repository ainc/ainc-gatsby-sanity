import * as React from "react";
import Layout from "../../../components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import * as styles from "./tech-talent.module.scss";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import Title from "../../../components/UI/Title/Title";
import TechTalentProfileGrid from "./Components/TechTalentProfileGrid";

/**
 * TechTalentPage
 * Dynamically passes profile "items" into the TechTalentProfileGrid component as a prop (property).
 */

const TechTalentPage = () => {
  // Example array of items to pass to the grid.
  // The last one is a special red box item (isRedBox = true).
  const gridItems = [
    {
      name: "Kyle",
      image: "images/tech-talent/kyle.png",
      department: "Web Development",
      link: "/kyle-portfolio",
    },
    {
      name: "Jacqueline",
      image: "images/tech-talent/jacqueline.png",
      department: "Graphic Design",
      link: "/jacqueline-portfolio",
    },
    {
      name: "Liam",
      image: "images/tech-talent/liam.png",
      department: "Videography",
      link: "/liam-portfolio",
    },
    {
      name: "Hannah",
      image: "images/tech-talent/hannah.png",
      department: "Photography",
      link: "/hannah-portfolio",
    },
    {
      name: "Camden",
      image: "images/tech-talent/camden.png",
      department: "Marketing",
      link: "/camden-portfolio",
    },
    {
      isRedBox: true,
      redBoxText: "Looking for financial services?",
      redBoxSubtext: "Email g@awesomeinc.org",
    },
  ];

  return (
    <Layout>
      {/* Top Black Section */}
      <Container fluid className={styles.mainHeading}>
        <Row>
          <Col xs={12} sm={8} md={6}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className={`${styles.headingTitle} text-white`}>
                FELLOWSHIP
                <br />
                TECH&nbsp;TALENT
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <BrandButton className={styles.inquireButton}>
                INQUIRE NOW
              </BrandButton>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className={styles.whatWeDo}>
        <Row>
          <Col
            xs={12}
            sm={{ offset: 1, span: 10 }}
            lg={{ offset: 3, span: 6 }}
            className="mx-auto"
          >
            <h2 className={styles.servicesHeading}>SERVICES</h2>
            <p className={`${styles.servicesSubheader} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Horizontal Button Group */}
      <Container className="text-center my-4">
        <Row className="d-flex justify-content-center">
          {["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"].map(
            (btnText, idx) => (
              <Col key={idx} xs="auto">
                <button className={styles.horizontalButton}>{btnText}</button>
              </Col>
            ),
          )}
        </Row>
      </Container>

      {/* Profile Grid (dynamic items passed as a prop) */}
      <TechTalentProfileGrid items={gridItems} />

      {/* Final Black Section (70% viewport height) */}
      <Container fluid className={styles.finalBlackSection}>
        <Row>
          <Col>
            <h2 className={styles.finalBlackHeading}>
              Join Our Tech Fellowship
            </h2>
            <p className={styles.finalBlackSubtext}>
              We have a place for you. Become part of our creative and
              tech-driven team.
            </p>
            <button className={styles.finalBlackButton}>Learn More</button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TechTalentPage;
