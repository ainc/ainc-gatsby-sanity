import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import SEO from '../../components/seo'
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import * as styles from "./about.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import TeamMember from "../../components/TeamMember/TeamMember";
import OutlineDiv from "../../components/DivOutline/DivOutline";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

import coreValues from "../../images/about-core-values.png";

const AboutPage = ({ data }) => {

  const teamMembers = (data.allSanityTeamMember.nodes || {})
  const accomplishments = (data.allSanityAccomplishments.nodes[1] || {})

  return (
    <Layout>
        {/* About header */}
        <section className={`${styles.aboutHeader}`}>
          <Container>
            <Row>
              <Col className="col-9 col-sm-7 mt-3">
                <div className={styles.heading}>
                 <motion.div initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ delay: 0.5, duration: 1 }}>
                  <Title className={`mt-5 fw-bold text--big`}>
                    We exist to help people pursue their definition of awesome.
                  </Title>
                  <p className={`fs-6 mt-2 mb-5`}>
                    Awesome Inc was founded on the basis of the "give-first" mentality. Awesome Inc
                    started in 2009 and has grown to be the epicenter for anything related to
                    technology or business. We strive to make Lexington a better place to live and
                    work.
                  </p>
                  <a href="/assets/culture-book.pdf">
                    <BrandButton className={`text-nowrap`}>View Our Culture Book</BrandButton>
                  </a>
                  
                  </motion.div>
                  </div>
              </Col>
            </Row>
            <Row>
              <motion.div initial={{ opacity: 0, y: 50}}
                      animate={{ opacity: 1, y: 0}}
                      transition={{ delay: 0.5, duration: 1 }}>
              <Image className={`${styles.headerImg}`} src={coreValues} alt="core-values" />
              </motion.div>
              <Col className="col-sm-8 col-10">
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
        <section className={styles.accomplishment}>
          <Container>
            <Row>
              <Title className={`text-white text-center my-5`}>
                {accomplishments.header}
              </Title>
              <Col lg={{ span: 8, offset: 2 }}>
                <Row>
                  <Col
                    className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                    md={4}
                    sm={12}
                  >
                    <a href="../workspace" role="button">
                      <motion.div initial={{ opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{ delay: 0.5, duration: 1 }}>
                      <GatsbyImage
                        objectFit="scale-down"
                        className={styles.imageLinks}
                        image={
                          accomplishments.accomplishment1.asset.gatsbyImageData
                        }
                        alt="Accomplishment 1"
                      />
                      </motion.div>
                    </a>
                  </Col>
                  <Col
                    className={`align-items-md-end mb-sm-4 d-flex justify-content-md-center justify-content-sm-center ${styles.imageLinks}`}
                    md={4}
                    sm={12}
                  >
                    <a href="../fellowship" role="button">
                      <motion.div initial={{ opacity: 0, y: -50}}
                                  whileInView={{ opacity: 1, y: 0}}
                                  transition={{ delay: 0.5, duration: 1 }}>
                      <GatsbyImage
                        objectFit="scale-down"
                        className={styles.imageLinks}
                        image={
                          accomplishments.accomplishment2.asset.gatsbyImageData
                        }
                        alt="Accomplishment 2"
                      />
                      </motion.div>
                    </a>
                  </Col>
                  <Col
                    className={`align-items-md-start mb-sm-2 d-flex justify-content-md-top justify-content-sm-center ${styles.imageLinks}`}
                    md={4}
                    sm={12}
                  >
                    <a href="../learn" role="button">
                      <motion.div initial={{ opacity: 0, y: 50}}
                                  whileInView={{ opacity: 1, y: 0}}
                                  transition={{ delay: 0.5, duration: 1 }}>
                      <GatsbyImage
                        objectFit="scale-down"
                        image={
                          accomplishments.accomplishment3.asset.gatsbyImageData
                        }
                        className={styles.imageLinks}
                        alt="Accomplishment 3"
                      />
                      </motion.div>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* What We Do */}
        <section className="mt-5">
          <Container className={styles.whatWeDo}>
            <div>
              <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>
                Learn More About What We Do
              </h2>
            </div>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Coding School"
                  content="Awesome Inc U is our coding school. It is for both adults and children. We have taught over 1500 people to code with us."
                  btnText="Read More"
                  to="../learn"
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Entrepreneurial Hub"
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
                  content="We have a space for you to do your best work at. You can also host events at our space."
                  btnText="Read More"
                  to="../workspace"
                 
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Innovation Incubated"
                  content="Helping KY companies discover, test, and implement innovative ideas."
                  btnText="Read More"
                  to="https://www.awesomeinc.org/innovation-incubated"
                 
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <OutlineDiv
                  subHeading="Culture"
                  content="Culture is so important to us. We want to share it with the community and invite everyone in on it."
                  btnText="Culture Book"
                  to="https://www.awesomeinc.org/assets/culture-book.pdf"
                
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <Container className="mb-5">
            <Row>
              <h2 className={`text-uppercase text-center ${styles.headingTitle}`}>Meet The Team</h2>
              <Col xs={{ span: 7, offset: 3}} sm={{ span: 6, offset: 3}} md={{ span: 10, offset: 2}} lg={{ span: 8, offset: 2}} >
                <Row>
                  {teamMembers.map((node, i) => (
                    <Col
                      xs={5}
                      sm={6}
                      md={3}
                      lg={2}
                      className="mb-3 mt-3 mx-md-1 mx-lg-0 mt-lg-3 my-lg-1 mt-md-2 mb-md-2 mt-sm-4 mb-sm-4 mb-xs-3 mt-xs-3 d-flex justify-content-center"
                      key={i}
                    >
                      <TeamMember
                        image={
                          node.picture.asset.gatsbyImageData
                        }
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
    allSanityAccomplishments {
      nodes {
        header
        accomplishment1 {
          asset {
            gatsbyImageData
          }
        }
        accomplishment2 {
          asset {
            gatsbyImageData
          }
        }
        accomplishment3 {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityTeamMember(sort: {_updatedAt: DESC}){
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
