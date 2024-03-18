import "./login.scss";
import { useFormik } from "formik";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { logInSchema } from "../../schema";
import google from "../../assets/google.png";
import ios from "../../assets/iOS.png";
import { useAuth } from "../../context/authContext/AuthContext";
import { useState } from "react";
import OtpVerification from "../optVerification/OtpVerification";

const initialValueLogin = {
  email: "",
};

const Login = ({ show, handleClose }) => {
  const [showOtp, setShowOtp] = useState(false);

  const handleCloseOtp = () => {
    setShowOtp(false);
  };

  const auth = useAuth();

  const loginFormik = useFormik({
    initialValues: initialValueLogin,
    validationSchema: logInSchema,
    onSubmit: (values, action) => {
      auth.loginAction(values);
      action.resetForm();
      setShowOtp(true);
      handleClose();
    },
  });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="login-modal-main"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-center">Sign/Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <span className="text-secondary small d-flex justify-content-center mb-3">
            Please enter your phone number or email below.
          </span>

          <Form noValidate onSubmit={loginFormik.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your phone number or Email</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="shadow-none rounded-5"
                name="email"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
              />
              {loginFormik.errors.email && loginFormik.touched.email ? (
                <p className="text-danger">{loginFormik.errors.email}</p>
              ) : null}
            </Form.Group>

            <Button type="submit" className="w-100 rounded-5">
              Continue
            </Button>
          </Form>

          <div className="mt-4 small">
            <span className="d-flex justify-content-center">
              Or Continue with
            </span>
            <Row className=" justify-content-around gap-2 gap-sm-0 my-3">
              <Col
                sm={5}
                className="border-secondary-subtle border rounded-5 d-flex justify-content-center align-items-center py-1"
              >
                <Button className="bg-transparent border-0 w-100 justify-content-center text-black d-flex gap-2 fs-6 fw-light text-muted">
                  <img src={google} alt="google" />
                  <span>Google</span>
                </Button>
              </Col>
              <Col
                sm={5}
                className="border-secondary-subtle border rounded-5 d-flex justify-content-center py-1"
              >
                <Button className="bg-transparent border-0 w-100 justify-content-center text-black d-flex gap-2 fs-6 fw-light text-muted">
                  <img src={ios} alt="ios" />
                  <span>Apple</span>
                </Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center pt-0">
          <span className="opacity-75">
            By continuing, you agree to our Terms of Use and Privacy & Cookie
            Policy.
          </span>
        </Modal.Footer>
      </Modal>
      {showOtp && (
        <OtpVerification showOtp={true} handleCloseOtp={handleCloseOtp} />
      )}
      {console.log("first", showOtp)}
    </>
  );
};

export default Login;
