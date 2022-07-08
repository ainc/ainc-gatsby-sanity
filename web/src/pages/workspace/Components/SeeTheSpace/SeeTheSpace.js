import React, { useState } from "react";
import * as styles from "../../workspace.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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
              <img className={styles.videoArrow} src={Arrow} alt="'see the space' section arrow" />
              {/* Youtube Link */}
              <a href={videoLinkSrc}>
                <Image
                  className={styles.videoFilter}
                  src={Space}
                  alt="Awesome Inc video link img"
                />
                <i className={styles.playIcon}>
                  <FontAwesomeIcon icon={faPlay} />
                </i>
              </a>
              {/* Tour Btn. Provide link to tour modal */}
              <a role="button" onClick={handleShow} className={styles.tourBtn}>
                <Image className={styles.tourIcon} src={TourBtn} />
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
