import * as React from "react";
import Layout from "../../../components/Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import * as styles from "./tech-talent.module.scss";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import TechTalentProfileGrid from "./Components/TechTalentProfileGrid";
import { StaticImage } from "gatsby-plugin-image";

const gridItems = [
  {
    name: "Kyle",
    imageName: "kyle",
    department: "Web Development",
    link: "/kyle-portfolio",
  },
  {
    name: "Jacqueline",
    imageName: "jacqueline",
    department: "Graphic Design",
    link: "/jacqueline-portfolio",
  },
  {
    name: "Liam",
    imageName: "liam",
    department: "Videography",
    link: "/liam-portfolio",
  },
  {
    name: "Hannah",
    imageName: "hannah",
    department: "Photography",
    link: "/hannah-portfolio",
  },
  {
    name: "Camden",
    imageName: "camden",
    department: "Marketing",
    link: "/camden-portfolio",
  },
  {
    isRedBox: true,
    redBoxText: "Looking for financial or legal services?",
    redBoxSubtext: "Email g@awesomeinc.org for more information.",
  },
];

const departmentLinks = {};
gridItems.forEach(({ department }) => {
  if (department) {
    departmentLinks[department] =
      `#${department.replace(/\s+/g, "-").toLowerCase()}`;
  }
});

const categories = [
  { label: "WEB DEV", href: departmentLinks["Web Development"] || "#" },
  { label: "DESIGN", href: departmentLinks["Graphic Design"] || "#" },
  { label: "VIDEO", href: departmentLinks["Videography"] || "#" },
  { label: "PHOTO", href: departmentLinks["Photography"] || "#" },
  { label: "MARKETING", href: departmentLinks["Marketing"] || "#" },
];

const TechTalentPage = () => {
  return (
    <Layout>
      {/* Top Section */}
      <Container fluid className={styles.mainHeading}>
        <Container>
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
                <BrandButton className="btn--small">INQUIRE NOW</BrandButton>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className={styles.spacer}></div>
      {/* Services Section */}
      <Container className={styles.whatWeDo}>
        <h2 className={styles.servicesHeading}>SERVICES</h2>
        <p className={`${styles.servicesSubheader}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Container>

      {/* Horizontal Button Group */}
      <div className={styles.horizontalButtonGroup}>
        <Container className="text-center">
          <Row className="d-flex justify-content-center">
            {categories.map(({ label, href }, idx) => (
              <Col key={idx} xs="auto">
                <a href={href} className={styles.horizontalButton}>
                  {label}
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Background Image */}
      <StaticImage src="../../../images/tech-talent/Group 130.png" alt="" />

      {/* Profile Grid */}
      <TechTalentProfileGrid items={gridItems} />

      {/* Final Section */}
      <Container fluid className={styles.finalSection}>
        <Row>
          <Col>
            <h2 className={styles.finalHeading}>PROJECT REQUEST FORM</h2>
            <p className={styles.finalSubtext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <BrandButton className={`${styles.finalButton}, btn--small`}>
              INQUIRE NOW
            </BrandButton>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TechTalentPage;
