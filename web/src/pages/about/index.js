import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";

import * as styles from "./about.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import TeamMember from "../../components/TeamMember/TeamMember";
import OutlineDiv from "../../components/DivOutline/DivOutline";
import Title from "../../components/UI/Title/Title";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import coreValues from "../../images/about-core-values.png";
import Accomplishments from "../../components/Accomplishments/Accomplishments";

const AboutPage = ({ data }) => {
  const teamMembers = data.allSanityTeamMember.nodes || {};

  const sortedTeamMembers = teamMembers.sort((a, b) => {
    if (a.name === "Brian" && b.name !== "Brian") return -1; // "Brian" comes first
    if (b.name === "Brian" && a.name !== "Brian") return 1;
    return 0;
  });

  return (
    <Layout>
      {/* About header */}
      <section className={`${styles.aboutHeader}`}>
        <Container>
          <Row>
            <Col className="col-9 col-sm-7 mt-3">
              <div className={styles.heading}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <Title className={`mt-5 fw-bold text--big`}>
                    We exist to help people pursue their definition of awesome.
                  </Title>
                  <p className={`fs-6 mt-2 mb-5`}>
                    Awesome Inc was founded on the basis of the "give-first"
                    mentality. Awesome Inc started in 2009 and has grown to be
                    the epicenter for anything related to technology or
                    business. We strive to make Lexington a better place to live
                    and work.
                  </p>
                  <a href="/assets/culture-book.pdf">
                    <BrandButton className={`text-nowrap`}>
                      View Our Culture Book
                    </BrandButton>
                  </a>
                </motion.div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Image
                className={`${styles.headerImg}`}
                src={coreValues}
                alt="core-values"
              />
            </motion.div>
            <Col className="col-sm-8 col-10 d-flex justify-content-center">
              <a href="/assets/core-values.pdf">
                <BrandButton className={`text-nowrap`}>
                  Read About Our Core Values
                </BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Accomplishments */}
      <Accomplishments />

      {/* What We Do */}
      <section className="mt-5">
        <Container className={styles.whatWeDo}>
          <div>
            <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>
              What We Do
            </h2>
          </div>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Accelerator Program"
                content="Our space and network and provide an opportunity for entrepreneurs to get connected to who they need to be successful."
                btnText="Read More"
                to="../fellowship"
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Apax Software"
                content="Creating technology is one of our favorite things to do at Awesome Inc. Our software arm, APAX Software, can build enterprise solutions suited for anyone."
                btnText="Visit Site"
                to="https://apaxsoftware.com/"
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Workspace"
                content="An 18,000 square foot space to get your best work done. Offering private office space, coworking memberships, conference rooms, event space, and many more amenities."
                btnText="Read More"
                to="../workspace"
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Awesome Fund"
                content="A $5 Million pre-seed and seed stage fund that invests in tech startups in and near Kentucky, bringing new capital and resources to the region."
                btnText="Visit Site"
                to="https://www.awesomefund.vc/"
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Coding School"
                content="Awesome Inc U teaches people of all ages and experiences levels how to code through a wide range of programming, courses, and events."
                btnText="Read More"
                to="../learn"
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <OutlineDiv
                subHeading="Corporate Innovation"
                content="Helping Kentucky companies discover, test, and implement innovative ideas through workshops, leadership development, and mentorship."
                btnText="Read More"
                to="https://www.awesomeinc.org/innovation-incubated"
              />
            </Col>
          </Row>
          <Col className="col-12 d-flex justify-content-center">
            <a href="/what-we-do/">
              <BrandButton className={`text-nowrap`}>
                See More Initiatives
              </BrandButton>
            </a>
          </Col>
        </Container>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <Container className="mb-5">
          <Row>
            <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>
              Meet The Team
            </h2>
            <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 2 }}>
              <Row>
                {sortedTeamMembers.map((node, i) => (
                  <Col
                    xs={4}
                    sm={4}
                    md={3}
                    lg={2}
                    className="mb-3 mt-3 mx-md-1 mx-lg-0 mt-lg-3 my-lg-1 mt-md-2 mb-md-2 mt-sm-4 mb-sm-4 mb-xs-3 mt-xs-3 d-flex justify-content-center align-items-center"
                    key={i}
                  >
                    <TeamMember
                      image={node.picture.asset.gatsbyImageData}
                      name={node.name}
                      alt={node.name}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media */}
      <section>
        <div className={styles.inner}>
          <SocialMedia />
        </div>
        {/* Triangle btm of screen before footer  */}
        {/* <div className={styles.socialSectionTriangle}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 51,101 50,0"></polygon> */}
        {/* middle value is 51 because of bleeding on smaller devices */}
        {/* <polygon points="100,100 50,100 50,0"></polygon>
            </svg>
          </div> */}
      </section>
    </Layout>
  );
};

export const query_accomplishments = graphql`
  query {
    allSanityTeamMember(
      filter: { onlyShownOnAchievementsPage: { eq: false } }
      sort: [{ priority: ASC }, { name: ASC }]
    ) {
      nodes {
        name
        picture {
          asset {
            gatsbyImageData(width: 200, fit: FILL)
          }
        }
      }
    }
  }
`;

export default AboutPage;
