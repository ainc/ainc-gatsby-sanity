import React, { useState } from "react";
import * as styles from "../../workspace.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion";
import ModalCustom from "../../../../components/Modal/ModalCustom";
import TourBtn from "../../../../images/schedule-a-tour-button-white.png";
import Space from "../../../../images/awesome-inc-space-banner.jpg";
import Arrow from "../../../../images/arrow.png";

const SeeTheSpace = (props) => {
  const videoLinkSrc = "https://www.youtube.com/watch?v=300C7ovyL0Y";

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col xs={4} md={4}>
          <motion.div initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ delay: 0.5, duration: 1 }}>
          <h3 className={styles.seeTheSpace}>See The Space</h3>
          </motion.div>
        </Col>
        {/* Video */}
        <Col xs={8} md={8} className={styles.spaceSection}>
          <div className={styles.lgxVideoArea}>
            <div className={styles.videoThumbnail}>
              <motion.div initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ delay: 0.5, duration: 1 }}>
              <img className={styles.videoArrow} src={Arrow} alt="'see the space' section arrow"/>
              </motion.div>
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

              <a role='button' href='https://calendly.com/awesometour/30min?' target='_blank' className={styles.tourBtn}>
                <motion.div initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ delay: 0.5, duration: 1 }}>
                <Image className={styles.tourIcon} src={TourBtn} alt="schedule a tour"/>
                </motion.div>
              </a>
              </div>
          </div>
        </Col>
              {/* Tour Btn. Provide link to tour modal - if we want to use later
              <a role="button" onClick={handleShow} className={styles.tourBtn}>
                <Image className={styles.tourIcon} src={TourBtn} alt="schedule a tour"/>
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <ModalCustom lgShow={lgShow} hide={handleClose}>


          </ModalCustom>
        </Col> */}
      </Row>
    </Container>
  );
};

export default SeeTheSpace;
