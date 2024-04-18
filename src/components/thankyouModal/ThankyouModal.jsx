import React from "react";
import { Button, Modal } from "react-bootstrap";

const ThankyouModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <h2>Thank You for Your Purchase!</h2>
        <p>Your order has been successfully placed.</p>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" onClick={handleClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThankyouModal;
