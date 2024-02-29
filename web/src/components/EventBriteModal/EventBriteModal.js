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

  const isSmallScreen = window.innerWidth < 500; // Show the modal on large screens and link to an external site on small

  return (
    <>
      {isSmallScreen ? (
        <a href={props.link} target='_blank' className='link--brand'><div style={{textAlign: 'left'}}>{props.children}</div></a>
      ) : (
      <button onClick={handleClick} type="button"  className='' style={{background: 'none', border: 'none', padding: '0', margin: '0'}}><div style={{textAlign: 'left'}}>{props.children}</div></button>
      )}
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