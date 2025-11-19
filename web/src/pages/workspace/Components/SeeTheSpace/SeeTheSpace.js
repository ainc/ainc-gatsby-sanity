import React, { useState } from "react";
import * as styles from "../../workspace.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import SEO from "../../../../components/seo";
import ModalCustom from "../../../../components/Modal/ModalCustom";
import TourBtn from "../../../../images/schedule-a-tour-button-white.png";
import Thumbnail from "../../../../images/private-office-thumbnail.png";
import Arrow from "../../../../images/arrow.png";
import BrandButton from "../../../../components/UI/BrandButton/BrandButton";

const SeeTheSpace = (props) => {
    const getEmbedUrl = (url) => {
    if (!url) return "";

    // Already embed → append params
    if (url.includes("/embed/")) {
      return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&rel=0`;
    }

    // watch?v=ID
    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
    }

    // youtu.be/ID
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
    }

    // fallback
    return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&rel=0`;
  };

  // Your link (could be any format)
  const rawVideoLink =
    "https://www.youtube.com/embed/QItnXb9IBd8?si=G_JyJeX3rcacXemU";

  // Clean autoplay embed
  const videoLinkSrc = getEmbedUrl(rawVideoLink);

  const [videoShow, setVideoShow] = useState(false);
  const handleVideoShow = () => setVideoShow(true);
  const handleVideoClose = () => setVideoShow(false);

  return (
    <>
      <SEO
        title="See The Space"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
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
                <a onClick={handleVideoShow} className={styles.thumbnailLink}>
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
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
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
    </>
  );
};

export default SeeTheSpace;
