import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import * as styles from "./BorderlessCard.module.css";
import ModalCustom from "../Modal/ModalCustom";

const MemberOption = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <div>
      <Container className={styles.container} fluid>
        <Row>
          <Col xs={12}>
            <a href={props.imgModal} aria-label="Read more about this membership">
              <Image
                onClick={handleShow}
                className={` ${styles.icon} ${props.classN}`}
                src={props.imgSrc}
                alt={props.imgAlt}
              />
            </a>
          </Col>
          <Col className={styles.header} xs={12}>
            {props.header}
            <Col className={styles.info} xs={12}></Col>
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
              <Button className={styles.price}>{props.price}</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <ModalCustom lgShow={lgShow} hide={handleClose}>
        <Image src={props.ModalImg} alt={props.ModalImgAlt} />
        <span>{props.ModalDialog}</span>
      </ModalCustom>
    </div>
  );
};

export default MemberOption;
