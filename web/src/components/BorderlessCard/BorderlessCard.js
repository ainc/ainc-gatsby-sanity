import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import ModalCustom from "../Modal/ModalCustom";

import * as styles from "./BorderlessCard.module.css";

const MemberOption = (props) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);

  return (
    <div>
      <Container className={styles.container} fluid>
        <Row>
          <Col xs={12}>
            <a
              href={props.imgModal}
              data={props.modalDialog}
              aria-label="Read more about this membership"
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Image
                  onClick={handleShowModal1}
                  className={` ${styles.icon} ${props.classN}`}
                  src={props.imgSrc}
                  alt={props.imgAlt}
                />
              </motion.div>
            </a>
          </Col>
          <Col className={styles.header} xs={12}>
            {props.header}
          </Col>
          <Col className={styles.info} xs={12}>
            {props.infoOne}
          </Col>
          <Col className={styles.info} xs={12}>
            {props.infoTwo}
          </Col>
          <Col className={styles.info} xs={12}>
            {props.infoThree}
          </Col>
          <Col>
            <a href={props.priceModal}>
              <Button onClick={handleShowModal2} className={styles.price}>
                {props.price}
              </Button>
            </a>
          </Col>
        </Row>
      </Container>

      <ModalCustom
        lgShow={showModal1}
        hide={handleCloseModal1}
        content={
          <Container>
            <Row>
              <Image src={props.imgModal} alt={props.ImgAlt} />
              {props.data}
            </Row>
          </Container>
        }
      />

      <ModalCustom
        lgShow={showModal2}
        hide={handleCloseModal2}
        content={
          //Pass HTML here
          <Container>
            <Row>
              <div className="modalDiv">
                <iframe
                  className="applicationContent"
                  src="https://forms.zohopublic.com/virtualoffice9155/form/BasicSignup/formperma/jheJ3kZTxSJkztL3SEy-4jweu_3XvBNxr7KoJJXJbsc"
                ></iframe>
              </div>
            </Row>
          </Container>
        }
      />

      {/* adding parking space embeded code, need to link to parking map button */}
      <ModalCustom
        lgShow={showModal3}
        hide={handleCloseModal3}
        content={
          <Row>
            <div>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1tuKBp8oRRCexyub92RobT_smUMI"
                width="100%"
                height="400"
              ></iframe>
              <p></p>
              <a
                href="https://www.google.com/maps/d/u/0/viewer?ll=38.04159812410385%2C-84.49238033250617&hl=en&f=q&hq=parking%20near%20awesome%20inc&source=s_q&spn=0.003333%2C0.004823&t=h&geocode&msa=0&z=18&ie=UTF8&hnear&mid=1tuKBp8oRRCexyub92RobT_smUMI"
                target="_blank"
              >
                Click Here to View in Google
              </a>
            </div>
          </Row>
        }
      />
    </div>
  );
};

export default MemberOption;
