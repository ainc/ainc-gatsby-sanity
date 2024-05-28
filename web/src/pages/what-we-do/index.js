import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";

import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import WhatWeDoBox from "../../components/WhatWeDo/WhatWeDo";

import * as styles from "./what-we-do.module.scss";

import bellRinging from "../../images/what-we-do/bell-ringing.jpg";
import handShake from "../../images/what-we-do/handshake.jpg";
import computerStare from "../../images/what-we-do/computer-staring-contest.jpg";
import dotDivider from "../../images/what-we-do/dot-divider.png";
import redAsterisk from "../../images/what-we-do/red-asterisk.png";

const WhatWeDoPage = ({ data }) => {
    const nodes = data.allSanityWhatWeDo.nodes;
    const entrepreneurship = nodes.filter(node => node.category === "entrepreneurship")
    const technology = nodes.filter(node => node.category === "technology")
    const otherPrograms = nodes.filter(node => node.category === "other")

    return (
        <Layout>
            {/* What We Do header */}
            <section className={styles.aboutHeader}>
            <Container>
                <Row className=''> 
                <Col  md={9} lg={7} className="mt-3 ">
                    <div className={`{${styles.heading} pt-5 mt-lg-5`}>
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
                        <Col className="mx-auto mb-5" xs={12} sm={{ offset: 1, span: 10}} lg={6}>
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

            {/* Entrepreneurship */}
            <section className="mt-5">
            <Container className={styles.entrepreneurship}>
                {/* Header */}
                <Row className={`${styles.logoHeader}`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Entrepreneurship
                    </h2>
                    <hr style={{ color: "black", backgroundColor: "black", height: 6 }} className={`d-flex justify-content-center`}/>
                </Row>

                <Row className={`d-flex justify-content-left`}>
                {entrepreneurship.map((node, index) => {
                    return(
                        <React.Fragment key={index}>
                                {index % 3 === 0 && index !== 0 && (
                                    <Image className={`${styles.dotDivider} d-flex justify-content-center`} src={dotDivider} alt="Dot Divider" />
                                )}
                                <Col lg={4} md={12}>
                                    <WhatWeDoBox item={node}/>
                                </Col>
                        </React.Fragment>
                    );
                })}
                </Row>
            </Container>
            </section>

            {/* Technology */}
            <section>
            <Container>
                <Row className={`${styles.logoHeader}`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Technology
                    </h2>
                    <hr style={{ color: "black", backgroundColor: "black", height: 6 }} className={`d-flex justify-content-center`}/>
                </Row>
                <Row className={`d-flex flex-row justify-content-left`}>
                {technology.map((node, index) => {
                    return(
                        <React.Fragment key={index}>
                                {index % 3 === 0 && index !== 0 && (
                                    <Image className={`${styles.dotDivider} d-flex justify-content-center`} src={dotDivider} alt="Dot Divider" />
                                )}
                                <Col lg={4} md={12} className="">
                                    <WhatWeDoBox item={node}/>
                                </Col>
                        </React.Fragment>
                    );
                })}
                </Row>
            </Container>
            </section>

            {/* Other Programs */}
            <section className="mt-5">
            <Container className={``}>
                <Row className={`${styles.logoHeader}`}>
                    <h2 className={`text-uppercase text-danger text-center ${styles.headingTitle}`}>
                        Other Programs
                    </h2>
                    <hr style={{ color: "black", backgroundColor: "black", height: 6 }} className={`d-flex justify-content-center`}/>
                </Row>

                <Row className={`d-flex flex-row justify-content-left`}>
                {otherPrograms.map((node, index) => {
                    return(
                        <React.Fragment key={index}>
                                {index % 3 === 0 && index !== 0 && (
                                    <Image className={`${styles.dotDivider} d-flex justify-content-center`} src={dotDivider} alt="Dot Divider" />
                                )}
                                <Col lg={4} md={12}>
                                    <WhatWeDoBox item={node}/>
                                </Col>
                        </React.Fragment>
                    );
                })}
                
                </Row>
                <Row className="align-items-center justify-content-center mb-5">
                    <Col xs="auto" className="d-inline-flex align-items-center mb-5 mt-3 pt-4">
                        <Image className={`${styles.asterisk} mt-5`} src={redAsterisk} alt="Red asterisk"/>
                        <p className="text-center mb-0 ml-2 mt-5">Awesome Inc is a contributor of this program, not an owner</p>
                    </Col>
                </Row>
            </Container>
            </section>

        </Layout>
    )
}

export const query = graphql `{
    allSanityWhatWeDo {
      nodes {
        title
        description
        category
        logo {
          asset {
            url
          }
        }
        linkToPage
      }
    }
  }`

export default WhatWeDoPage;