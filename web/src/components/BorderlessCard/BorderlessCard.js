import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import ModalCustom from "../Modal/ModalCustom";

import * as styles from "./BorderlessCard.module.css";

const MemberOption = (props) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

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
    </div>
  );
};

export default MemberOption;
