import { useFormik } from "formik";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const otpInitialValues = {
  email: "",
};

const OtpVerification = ({ showOtp, handleCloseOtp }) => {
  const handleOtpSubmit = () => {
    console.log("otp Submit");
  };

  const otpFormik = useFormik({
    initialValues: otpInitialValues,
    onSubmit: handleOtpSubmit,
  });

  return (
    <Modal
      show={showOtp}
      onHide={handleCloseOtp}
      backdrop="static"
      keyboard={false}
      className="login-modal-main"
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Title className="text-center">Verification Code</Modal.Title>
      <Modal.Body className="pt-1">
        <span className="text-secondary small d-flex justify-content-center mb-3">
          A verification code is sent to stephenparker@gmail.com
        </span>

        <Form noValidate onSubmit={otpFormik.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Verification Code</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="shadow-none rounded-5"
              name="email"
              value={otpFormik.values.email}
              onChange={otpFormik.handleChange}
              onBlur={otpFormik.handleBlur}
            />
          </Form.Group>

          <Button type="submit" className="w-100 rounded-5">
            Continue
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OtpVerification;
