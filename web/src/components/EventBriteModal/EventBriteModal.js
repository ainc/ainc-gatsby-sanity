import React, { useState } from "react";
import { Modal } from 'react-bootstrap';


const EventBriteModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <button onClick={handleClick} type="button"  style={{background: 'none', border: 'none', padding: '0', margin: '0'}}>{props.children}</button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <iframe
          src={props.link} 
          title="Eventbrite Checkout" 
          width="100%" 
          height="750px" 
          allowtransparency="true" 
        />
      </Modal>
    </>
  )}

export default EventBriteModal;