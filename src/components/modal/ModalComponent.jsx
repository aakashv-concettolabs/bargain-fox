import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import OtpVerification from "../optVerification/OtpVerification";
import Login from "../login/Login";
import SignUP from "../signup/SignUP";
const ModalComponent = ({ show, handleClose }) => {
  const [loginBody, setLoginBody] = useState(true);
  const [codeBody, setCodeBody] = useState(false);
  const [registerBody, setRegisterBody] = useState(false);

  const handleContinue = () => {
    setLoginBody(false);
    setCodeBody(true);
  };

  const handleVerifyNew = () => {
    setCodeBody(false);
    setRegisterBody(true);
  };

  const handleVerifyOld = () => {
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="login-modal-main"
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Title className="text-center">
        {loginBody && "Sign/Register"}
        {codeBody && "Code Verification"}
        {registerBody && " Looks like you are new here"}
      </Modal.Title>
      {loginBody && <Login handleContinue={handleContinue} />}
      {codeBody && (
        <OtpVerification
          handleVerifyNew={handleVerifyNew}
          handleVerifyOld={handleVerifyOld}
        />
      )}
      {registerBody && <SignUP handleClose={handleClose} />}
    </Modal>
  );
};

export default ModalComponent;
