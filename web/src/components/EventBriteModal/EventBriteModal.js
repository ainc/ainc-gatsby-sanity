import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const EventBriteModal = props => {
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
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="link--brand">
          <div style={{ textAlign: "left" }}>{props.children}</div>
        </a>
      ) : (
        <button
          onClick={handleClick}
          type="button"
          className=""
          style={{ background: "none", border: "none", width: "100%", padding: "0", margin: "0" }}
          aria-label={`Open details for ${props.children.props.name}`}
        >
          <div style={{ textAlign: "left" }}>{props.children}</div>
        </button>
      )}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        dialogClassName={isSmallScreen ? "modal-90w" : "modal-80w"}
        aria-labelledby="eventbrite-modal-title"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="eventbrite-modal-title">
            {props.children.props.name} - {props.children.props.date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={props.link}
            title="Eventbrite Checkout"
            width="100%"
            style={{ height: "80vh", border: "none" }}
            allowTransparency="true"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventBriteModal;
