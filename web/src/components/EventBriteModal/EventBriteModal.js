import React, {useState} from "react";
import useEventbrite from 'react-eventbrite-popup-checkout';
import { Modal } from 'react-bootstrap';


const EventBriteModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleOrderCompleted = React.useCallback(() => {
        console.log('Order completed successfully.');
    }, []);

    const modalButtonCheckout = useEventbrite({
        eventId: props.id,
        modal: true,
        onOrderComplete: handleOrderCompleted,
    });
    const handleClick = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
  return (
    <div>
      {modalButtonCheckout && (  
        <button id={modalButtonCheckout.id} type="button" style={{background:'none', border:'none'}}>
          {props.children}
        </button>
      )}
    {/* one soluttion - iframe
      <button onClick={handleClick} type="button">button</button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
        {modalButtonCheckout && (
            <iframe 
              src={props.link} 
              title="Eventbrite Checkout" 
              width="100%" 
              height="500px" 
              frameborder="0" 
              allowtransparency="true" 
              scrolling="auto" 
              style={{ border: '1px solid #ddd' }}
              ></iframe>
        )}
          </Modal.Body>
      </Modal>
        */}
    </div>
  );
};

export default EventBriteModal;