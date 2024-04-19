import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteUserWarnModal = ({ show, handleClose }) => {
  const handleDelete = () => {};

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0" />
      <Modal.Body className="px-5">
        <h4 className="text-center">Delete Account</h4>
        <p>
          Are you sure you want to delete? You won't be able to revert this!
        </p>
        <div className="d-flex justify-content-center gap-5">
          <Button onClick={handleClose} className="rounded-4 px-4">
            Cancel
          </Button>
          <Button
            variant="warning"
            onClick={handleDelete}
            className="rounded-4 px-4"
          >
            Yes, Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteUserWarnModal;
