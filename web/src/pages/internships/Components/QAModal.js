import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import * as styles from "./QAModal.module.scss";
import "./teaminfo.scss";
const QAModal = (props) => {
  const [QADiv, setQADiv] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleQAOpen = () => setQADiv(true);
  const handleQAClose = () => setQADiv(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = props.img;
    // Cleanup on unmount if needed
    return () => {
      img.onload = null;
    };
  }, [props.img]);

  return (
    <div className="my-3">
      <button
        onClick={handleQAOpen}
        className={`${styles.qabutton} d-flex justify-content-center align-items-center my-2`}
      >
        <Subtitle className="text-white subtitle--small">
          {props.title}
        </Subtitle>
        <p className="ms-auto text-white " style={{ fontSize: "2rem" }}>
          +
        </p>
      </button>
      <Modal
        show={QADiv}
        onHide={handleQAClose}
        centered
        dialogClassName="modal-dialog"
      >
        <Row className="flex-column flex-sm-row flex-md-row">
          <Col
            className="p-0"
            style={{
              backgroundImage: `url(${props.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Col
            style={{
              backgroundColor: "#C12029",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            className=""
          >
            <Title className="text--huge text-white my-3 mx-3">Q.</Title>
            <Subtitle className="text-white mb-5 fw-bold mx-3">
              {props.title}
            </Subtitle>
            <div className="mx-3" style={{ borderBottom: "2px solid white" }} />
            <Title className="text--huge text-white my-3 mx-3">A.</Title>
            <p className="text-white my-4 mx-3">{props.content}</p>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default QAModal;
