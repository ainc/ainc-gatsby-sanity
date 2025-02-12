import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import * as styles from "../../components/BorderlessCard/BorderlessCard.module.css";
import { useState } from "react";
import ModalCustom from "../../components/Modal/ModalCustom";

const ParkingPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Container className="ps-3">
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 0, span: 12 }}
          xl={{ offset: 3, span: 6 }}
        >
          <Title className="text-uppercase text-center text-black mt-5 mb-5">
            Parking
          </Title>
          <p className={`text-black mb-3 ps-3`}>
            After 5pm, free parking spaces are widely available downtown.
            However, during the day, it helps to be strategic. Here's a map and
            some general guidelines for parking near Awesome Inc.
          </p>
        </Col>

        {/* Testing 3d aerial view */}
        <Row className="justify-content-center align-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95.37611917871982!2d-84.4907540147311!3d38.042268335807414!2m3!1f251.8204488777985!2f55.021187590739!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x884244e842d5acf7%3A0x92c7783d2b2a2d15!2sAwesome%20Inc!5e1!3m2!1sen!2sus!4v1738872425388!5m2!1sen!2sus"
            width="600"
            height="450"
            //style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>

        <Row className="justify-content-center align-items-center">
          {/* Parking map Button  with alignment*/}
          <Col
            xs={{ offset: 0, span: 8 }}
            md={{ offset: 0, span: 4 }}
            lg={{ offset: 0, span: 4 }}
            xl={{ offset: 0, span: 5 }}
          >
            {/* <a
              target="_blank"
              href="https://www.google.com/maps/d/u/0/viewer?ll=38.041576999999975%2C-84.49243799999999&hl=en&f=q&hq=parking%20near%20awesome%20inc&source=s_q&spn=0.003333%2C0.004823&t=h&geocode&msa=0&z=18&ie=UTF8&hnear&mid=1tuKBp8oRRCexyub92RobT_smUMI"
            >
              <BrandButton className={`mb-4 mt-5 ${styles.button} `}>
                Parking map
                <FaMapMarkerAlt className="mb-1 ms-2"></FaMapMarkerAlt>
              </BrandButton>
            </a>  */}

            {/* aerial view test is complete, in RC's google docs */}
            <Col className="d-flex justify-content-center">
              <BrandButton
                className={`mb-4 mt-5 ${styles.button} `}
                onClick={openModal}
              >
                Parking Map
                <FaMapMarkerAlt className="mb-1 ms-2"></FaMapMarkerAlt>
              </BrandButton>
            </Col>
          </Col>
        </Row>
        <Col
          xs={{ span: 12 }}
          lg={{ offset: 3, span: 6 }}
          xl={{ offset: 3, span: 6 }}
        >
          <StaticImage
            placeholder="blurred"
            className="mb-4"
            src="../../images/parking-lot.png"
            alt="awesome inc parking lot"
          ></StaticImage>
        </Col>
      </Container>
      <Container className="ps-3 align: center">
        <Col
          // xs={{ span: 12 }}
          // lg={{ offset: 2, span: 8 }}
          // xl={{ offset: 2, span: 6 }}
          xs={{ offset: 3, span: 12 }}
          md={{ offset: 3, span: 4 }}
          lg={{ offset: 3, span: 4 }}
          xl={{ offset: 3, span: 6 }}
        >
          <Subtitle className={` ${styles.park}`}>Do Park</Subtitle>
          <ul>
            <li className={` ps-3 ${styles.list}`}>
              Spaces marked for Awesome Inc in the lot East of our building
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Free 2-hour parking spaces along East Vine Street
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Free full-day spaces on Short Street near Thoroughbred Park and
              Ransom Ave near Second Presbyterian church
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Deweese Street (PNC Bank) Parking Garage, ~$4/day
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Metered spaces on Water Street, Main Street, or Eastern Avenue
            </li>
          </ul>
        </Col>

        <Col
          // xs={{ span: 12 }}
          // lg={{ offset: 2, span: 8 }}
          // xl={{ offset: 2, span: 6 }}
          xs={{ offset: 3, span: 12 }}
          md={{ offset: 3, span: 8 }}
          lg={{ offset: 3, span: 8 }}
          xl={{ offset: 3, span: 6 }}
          className="pb-3"
        >
          <Subtitle className={` pt-2 ${styles.park}`}>Do Not Park</Subtitle>
          <ul>
            <li className={` ps-3 ${styles.list}`}>
              Spaces marked for Carson's Restaurant or PPG Paints (East side of
              building)
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Spaces marked for Commerce Lexington, Northwestern Mutual,
              Tate/Hill/Jacobs Architects, or Awesome Inc Directors (West side
              of building)
            </li>
            <li className={` ps-3 ${styles.list}`}>
              Spaces in the Main and Vine retail / residential complex
            </li>
            <li className={` ps-3 ${styles.list}`}>
              In the "Loading Zone" on Main Street, directly in front of Awesome
              Inc
            </li>
          </ul>
        </Col>
      </Container>

      {/* Modal for Parking Map */}
      <ModalCustom
        lgShow={isModalOpen}
        hide={closeModal}
        title="Parking Map"
        content={
          <Container>
            <Row>
              <Col className="text-center">
                <Subtitle>Here’s the parking map for Awesome Inc</Subtitle>
              </Col>
            </Row>
            <Row>
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1tuKBp8oRRCexyub92RobT_smUMI"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                {/* Link to the full Google Maps page */}
                <a
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1tuKBp8oRRCexyub92RobT_smUMI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <BrandButton>
                    Open Full Parking Map in Google Maps
                  </BrandButton>
                </a>
              </Col>
            </Row>
            <Row className="mt-3">
              <BrandButton onClick={closeModal}>Close</BrandButton>
            </Row>
          </Container>
        }
      />
    </Layout>
  );
};
export default ParkingPage;
