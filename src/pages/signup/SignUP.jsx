import "./signup.scss";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const SignUP = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow((prev) => !prev);

  return (
    <div className="signUp-main">
      <Button className="border-0 rounded-5 signupBtn" onClick={handleClose}>
        Login/Register
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-center">
            Looks like you are new here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <span className="text-secondary small d-flex justify-content-center">
            Please fill your information below.
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignUP;
