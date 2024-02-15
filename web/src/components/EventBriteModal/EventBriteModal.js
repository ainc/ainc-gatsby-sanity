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
        modal: false,
        onOrderComplete: handleOrderCompleted,
        iFrameHeight: 500, // optional
        iFrameAutoAdapt: 100, // optional - The widget's viewport percentage (between 75-100)    
    });
    const handleClick = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
  return (
    <>
    <button onClick={handleClick} style={{background: 'none', border: 'none'}}>{props.children}</button>
            <Modal show={showModal} onHide={handleCloseModal}>
            {modalButtonCheckout && (
                <div id={modalButtonCheckout.id} />
            )}
            </Modal>
    </>
  );
};

export default EventBriteModal;