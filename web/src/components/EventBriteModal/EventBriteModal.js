import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';


const EventBriteModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500); // Change the breakpoint according to your needs
    };

    handleResize(); // Call it once to set the initial value

    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []); // Empty dependency array ensures this effect only runs once after initial render

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