import React from "react";
import { Row, Container } from "react-bootstrap";

import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import ModalCustom from "../../../components/Modal/ModalCustom";
import "./ApplyNowModal.css";

/*In order to use the ModalCustom Component (it was renamed to ModalCustom because Modal is a saved component name for react-bootstrap), state must be imported to whatever component it is used in:

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

MUST HAVE: Add an onClick event to where you want the Modal to render which you will use the handleShow function. On the actual ModalCustom component, add the props lgShow and hide. Set lgShow={lgShow} and hide={handleClose}.


*/

const ApplyNowModal = (props) => {
  const [lgShow, setLgShow] = React.useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  return (
    <>
      <BrandButton
        className={props.secondary ? "secondary" : ""}
        onClick={handleShow}
      >
        {props.title}
      </BrandButton>

      <ModalCustom
        lgShow={lgShow}
        hide={handleClose}
        content={
          //Pass HTML here
          <Container>
            <Row>
              <div className="modalDiv">
                <iframe
                  className="applicationContent"
                  src={props.link}
                ></iframe>
              </div>
            </Row>
          </Container>
        }
      />
    </>
  );
};

export default ApplyNowModal;
