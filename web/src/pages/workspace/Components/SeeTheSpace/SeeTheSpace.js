import React, { useState } from "react";
import * as styles from "../../workspace.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import ModalCustom from "../../../../components/Modal/ModalCustom";
import TourBtn from "../../../../images/schedule-a-tour-button-white.png";
import Thumbnail from "../../../../images/private-office-thumbnail.png";
import Arrow from "../../../../images/arrow.png";
import BrandButton from "../../../../components/UI/BrandButton/BrandButton";

const SeeTheSpace = (props) => {
  const videoLinkSrc =
    "https://www.youtube.com/embed/QItnXb9IBd8?si=G_JyJeX3rcacXemU";

  const [videoShow, setVideoShow] = useState(false);
  const handleVideoShow = () => setVideoShow(true);
  const handleVideoClose = () => setVideoShow(false);
  return (
    <Container fluid className={`mt-5`}>
      <Row className="align-items-center">
        {/* Title and Arrow */}
        <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className={styles.videoTitle}>
              Learn more about what we offer
            </h3>
            <img
              className={`${styles.videoArrow} d-none d-md-block`}
              src={Arrow}
              alt="'what to expect' section arrow"
            />
          </motion.div>
        </Col>
        {/* Video */}
        {/* For small screens, display external link */}
        <Col xs={12} className="text-center d-md-none">
          <div className={styles.videoThumbnail}>
            <a href={videoLinkSrc} target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.videoFilter}
                src={Thumbnail}
                alt="Awesome Inc video link img"
              />
              <i className={styles.playIcon}>
                <FaPlay />
              </i>
            </a>
          </div>
        </Col>
        {/* For large screens, display modal */}
        <Col
          md={6}
          className="text-center justify-content-center d-none d-md-flex"
        >
          <div className={styles.videoThumbnail}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Youtube Link */}
              <a
                onClick={handleVideoShow}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.videoFilter}
                  src={Thumbnail}
                  alt="Awesome Inc video link img"
                />
                <i className={styles.playIcon}>
                  <FaPlay />
                </i>
              </a>
            </motion.div>
          </div>
        </Col>
        <ModalCustom
          lgShow={videoShow}
          hide={handleVideoClose}
          bgDark={false}
          centered
          content={
            <iframe
              width="100%"
              height="500"
              src={videoLinkSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          }
        />
        <Col md={3} className="d-none d-md-block"></Col>
      </Row>
      <Row className="my-5">
        <Col>
          <a href="https://calendly.com/awesometour/30min?" target="_blank">
            <BrandButton>Schedule A Tour</BrandButton>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SeeTheSpace;
