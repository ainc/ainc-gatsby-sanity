import * as React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SEO from "../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import * as styles from "./parking.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import ParkingMap from "../../images/parkingraphicversion3.jpg";
import ParkingIcon from "../../images/parkingicon.png";

const ParkingPage = ({ data }) => {
  return (
    <Layout>
      <div className={styles.parking}></div>

      <Col
        xs={{ span: 20 }}
        lg={{ offset: 5, span: 10 }}
        xl={{ offset: 2, span: 8 }}
      >
        <Image
          placeholder="blurred"
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            width: "80%",
            height: "auto",
          }}
          src={ParkingIcon}
          alt="awesome inc parking lot"
        />
      </Col>

      <Container className="ps-3">
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 0, span: 12 }}
          xl={{ offset: 3, span: 6 }}
        >
          <Title className="text-uppercase text-center text-black mt-5 mb-5">
            We are located at 348 E Main St.
          </Title>
          <p className={`text-black mb-3 ps-3 text-center`}>
            After 5pm, free parking spaces are widely available downtown.
            However, during the day, it helps to be strategic. Here's a map and
            some general guidelines for parking near Awesome Inc.
          </p>
        </Col>
        <Row>
          <Col
            xs={{ offset: 2, span: 8 }}
            md={{ offset: 4, span: 4 }}
            lg={{ offset: 4 }}
            xl={{ offset: 4, span: 5 }}
          ></Col>
        </Row>
        <Col
          xs={{ span: 20 }}
          lg={{ offset: 5, span: 10 }}
          xl={{ offset: 1, span: 10 }}
        >
          <Image
            placeholder="blurred"
            className="mb-4"
            style={{ width: "100%", height: "auto" }}
            src={ParkingMap}
            alt="awesome inc parking lot"
          />
        </Col>
      </Container>

      <section className="mt-5">
        <Container>
          <Row className="g-4" style={{ justifyContent: "center" }}>
            <Col lg={5} md={10}>
              <div className={`${styles.test}`}>
                <Row className="justify-content-center">
                  <Col sm="auto" className="mx-auto text-center">
                    <Title
                      className={`${styles.raiseTitle} text-uppercase px-3`}
                    >
                      Do Park
                    </Title>
                  </Col>
                </Row>
                <ul className={`${styles.Check} ${styles.stableList}`}>
                  <li>
                    Spaces marked for Awesome Inc in the lot East of our
                    building
                  </li>
                  <li>
                    Free full-day spaces on Short Street near Thoroughbred Park
                    and Ransom Ave near Second Presbyterian church
                  </li>
                  <li>Deweese Street (PNC Bank) Parking Garage, ~$4/day</li>
                  <li>
                    Metered spaces on Water Street, Main Street, or Eastern
                    Avenue
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={5} md={10}>
              <div className={`${styles.test}`}>
                <Row className="justify-content-center">
                  <Col sm="auto" className="mx-auto text-center">
                    <Title
                      className={`${styles.raiseTitle} text-uppercase px-3`}
                    >
                      Don't Park
                    </Title>
                  </Col>
                </Row>
                <ul className={`${styles.Xmark} ${styles.stableList}`}>
                  <li>
                    Spaces marked for Carson's Restaurant (East Side of
                    building)
                  </li>
                  <li>
                    Spaces marked for Commerce Lexington, Northwestern Mutual or
                    Awesome Inc Directors (West side of building)
                  </li>
                  <li>
                    Spaces in the Main and Vine retail / residential complex
                  </li>
                  <li>
                    In the "Loading Zone" on Main Street, directly in front of
                    Awesome Inc
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className={styles.parkfoot}></div>
    </Layout>
  );
};
export default ParkingPage;
