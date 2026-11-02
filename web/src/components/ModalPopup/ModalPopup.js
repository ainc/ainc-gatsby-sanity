import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

import Title from "..//UI/Title/Title";

import * as styles from "./Modal.module.css";

const ModalPopup = (props) => {
  return (
    <div>
      <Modal
        size="lg"
        show="true"
        aria-labelledby="example-modal-sizes-title-lg"
        backdropClassName={styles.modal}
        contentClassName={styles.modal}
        scrollable
        centered
        style={{ paddingTop: "100px" }}
      >
        <Modal.Header className={styles.modal}>
          <Modal.Title>
            <Title className="fs-3 text-white">{props.title}</Title>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className={
            props.bgDark === true ? `` : `bg-white ${styles.modalContainer}`
          }
          style={{ color: "black" }}
        >
          {props.content}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalPopup;
