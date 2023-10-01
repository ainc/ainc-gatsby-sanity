import React, { useState } from "react";
import * as styles from "../../workspace.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import ModalCustom from "../../../../components/Modal/ModalCustom";
import TourBtn from "../../../../images/schedule-a-tour-button-white.png";
import Space from "../../../../images/awesome-inc-space-banner.jpeg";
import Arrow from "../../../../images/arrow.png";

const SeeTheSpace = (props) => {
  const videoLinkSrc = "https://www.youtube.com/watch?v=0YgGYadr7rk";

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={4} md={4}>
          <h3 className={styles.seeTheSpace}>See The Space</h3>
        </Col>
        {/* Video */}
        <Col xs={8} md={8} className={styles.spaceSection}>
          <div className={styles.lgxVideoArea}>
            <div className={styles.videoThumbnail}>
              <img className={styles.videoArrow} src={Arrow} alt="'see the space' section arrow"/>
              {/* Youtube Link */}
              <a href={videoLinkSrc} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.videoFilter}
                  src={Space}
                  alt="Awesome Inc video link img"
                />
                <i className={styles.playIcon}>
                  <FaPlay />
                </i>
              </a>
              {/* Tour Btn. Provide link to tour modal */}
              <a href = "https://calendly.com/awesometour/30min?" target="_blank" rel="noopener" role="button" className={styles.tourBtn}>
                <Image className={styles.tourIcon} src={TourBtn} alt="schedule a tour"/>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <ModalCustom lgShow={lgShow} hide={handleClose}>


          </ModalCustom>
        </Col>
      </Row>
    </Container>
  );
};

export default SeeTheSpace;
