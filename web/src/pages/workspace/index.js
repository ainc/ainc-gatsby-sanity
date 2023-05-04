import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
// import { graphql } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import SEO from "../../components/seo";
import * as styles from "./workspace.module.css";
import BorderlessCard from "../../components/BorderlessCard/BorderlessCard";
import Amenities from "../../components/Amenities/Amenities";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import SeeTheSpace from "./Components/SeeTheSpace/SeeTheSpace";
import ModalCustom from "../../components/Modal/ModalCustom";

//Image Links Below
import Mail from "../../images/virtual-member-mail.png";
import Desktop from "../../images/Desk.png";
import Lock from "../../images/lock.png";
import Wifi from "../../images/wifi.png";
import MailAddress from "../../images/mailing-address.png";
import Chair from "../../images/chair.png";
import Events from "../../images/events-hosted.png";
import Printer from "../../images/printer.png";
import PingPong from "../../images/ping-pong.png";
import Bubble from "../../images/thinking-room.png";
import Podcast from "../../images/podcadsting-room.png";
import Mentor from "../../images/mentor.png";
import Lightbulb from "../../images/indoor-outdoor.png";
import Scooter from "../../images/electric-scooter.png";
import ThreeDPrinter from "../../images/3d-printer.png";

const WorkspacePage = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <Layout>
      <SEO/>
      {/* Hero */}
      <section>
        <div className={styles.headerWorkspace}>
          <Container>
            <Row>
              <Col className={` ${styles.lgxHeadingArea} ${styles.lgxHeading} `}>
                <Title className={`${styles.headingTitle} ${styles.extraBold} text-white`}>Workspace</Title>
                <Subtitle className={styles.headingSubtitle}>
                  <i className="text-white">Get your best work done here.</i>
                </Subtitle>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* See The Space */}
      <section className={styles.spotlightAdult}>
        <SeeTheSpace />
      </section>

      {/* Become a member */}
      <section className={styles.member}>
        <Container>
          <Row>
            <Title className={`${styles.headingTitle} ${styles.extraBold} ${styles.lineHeight}`}>
              Become a member
            </Title>
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <BorderlessCard
                imgModal="#"
                imgSrc={Mail}
                header="VIRTUAL MEMBER"
                infoOne="DOWNTOWN MAILING ADDRESS"
                infoTwo="CONFERENCE ROOM ACCESS"
                infoThree="MEMBER EXCLUSIVE EVENTS"
                price="$75/MONTH"
                imgAlt
                id="44"
              />
            </Col>
            <Col md={4} sm={12}>
              <BorderlessCard
                imgModal="#"
                imgSrc={Desktop}
                header="OPEN DESK MEMBER"
                infoOne="24/7 Access to Our Space"
                infoTwo="Conference Room Access"
                infoThree="Member Exclusive Events"
                price="$199/MONTH"
              />
            </Col>
            {/* The lock image is a lot larger than the other images, so an extra prop was needed to even this out, aka classN. */}
            <Col md={4} sm={12}>
              <BorderlessCard
                imgModal="#"
                imgSrc={Lock}
                header="PRIVATE OFFICE"
                infoOne="Private Office Space"
                infoTwo="Conference Room Access"
                infoThree="Member Exclusive Events"
                price="REACH OUT FOR PRICING"
                classN={styles.lockIcon}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Membership amenities */}
      <section className={styles.spotlightAdult}>
        <Container fluid>
          <Row>
            <Title
              className={`${styles.headingTitle} ${styles.extraBold} ${styles.amenities} ${styles.lineHeight}`}
            >
              Membership Amenities
            </Title>
          </Row>
          <Row className={styles.spotlightAdult}>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 9, offset: 2 }}>
              <Row>
                {/* Various Amenities */}
                <Col md={6} sm={12}>
                  <Amenities
                    info="Secure Wi-Fi, Gigabit Internet"
                    imgSrc={Wifi}
                    alt="Wifi Access"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Downtown Mailing Address"
                    imgSrc={MailAddress}
                    alt="Mailing Address"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Conference + Meeting Rooms"
                    imgSrc={Chair}
                    alt="Conference Rooms"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Networking Events" imgSrc={Events} alt="Networking Events" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Print + Copy" imgSrc={Printer} alt="Printing and Copying" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Breakroom + Kitchen"
                    imgSrc={PingPong}
                    alt="Breakroom and Kitchen"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Thinking Room" imgSrc={Bubble} alt="Thinking Room" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Mentorship" imgSrc={Mentor} alt="Mentorship Access" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Podcasting Room" imgSrc={Podcast} alt="Podcast Room" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Indoor/Outdoor space"
                    imgSrc={Lightbulb}
                    alt="Indoor/Outdoor space"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Electric Scooters" imgSrc={Scooter} alt="Electric Scooters" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="3D Printer" imgSrc={ThreeDPrinter} alt="3D Printer" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Container fluid>
            <Row>
              <Col>
                <Button onClick={handleShow} className={styles.btnCustom}>
                  Schedule A Tour
                </Button>
              </Col>

              <ModalCustom 
                lgShow={lgShow} 
                hide={handleClose} 
                title="Schedule a Tour" 
                content={
                  //Pass HTML here
                  <Container>
                    <Row>
                      <Subtitle>this is a test</Subtitle>
                    </Row>
                    <Row>
                      <BrandButton>Hello</BrandButton>
                    </Row>
                  </Container>
                }
                />
            </Row>
          </Container>
        </Container>
      </section>
    </Layout>
  );
};

export default WorkspacePage;
