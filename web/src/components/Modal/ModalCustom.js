import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

import Title from "..//UI/Title/Title"

import * as styles from "./Modal.module.css";



/*In order to use the ModalCustom Component (it was renamed to ModalCustom because Modal is a saved component name for react-bootstrap), state must be imported to whatever component it is used in:

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

MUST HAVE: Add an onClick event to where you want the Modal to render which you will use the handleShow function. On the actual ModalCustom component, add the props lgShow and hide. Set lgShow={lgShow} and hide={handleClose}.


*/

const ModalCustom = (props) => {
  return (
    <div>
        <Modal
          size="lg"
          show={props.lgShow}
          onHide={props.hide}
          aria-labelledby="example-modal-sizes-title-lg"
          backdropClassName={styles.modal}
          contentClassName={styles.modal}
          scrollable
          centered
          style={{ paddingTop: "70px" }}
        >
          {/* <Modal.Title>Test titlee</Modal.Title> */}
          {/* <div class="modal" tabindex="-1" role="dialog"> */}
          {/* <div class="modal-dialog" role="document"> */}
          {/* <Mod> */}
          <Modal.Header className={styles.modal}>
            <Modal.Title>
                <Title className="fs-3 text-white">{props.title}</Title>
            </Modal.Title>
            <CloseButton variant="white" className={styles.closeBtn} onClick={props.hide} />
          </Modal.Header>

          <Modal.Body className={ props.bgDark === true  ? `` : `bg-white`} style={{color:'black'}}>
            {props.content}
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default ModalCustom;