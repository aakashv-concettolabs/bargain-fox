import "./signup.scss";
import { useFormik, validateYupSchema } from "formik";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { logInSchema, signUpSchema } from "../../schema";
import google from "../../assets/google.png";
import ios from "../../assets/iOS.png";
import { useState } from "react";

const initialValueSignUp = {
  name: "",
  number: "",
  email: "",
};

const initialValueLogin = {
  email: "",
};

const SignUP = ({ show, handleClose }) => {
  const [isLogin, setisLogin] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValueSignUp,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        handleClose();
      },
    });

  const loginFormik = useFormik({
    initialValues: initialValueLogin,
    validationSchema: logInSchema,
    onSubmit: (values, action) => {
      console.log("login", values);
      action.resetForm();
      handleClose();
    },
  });

  return (
    <>
      {!isLogin && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="modal-main"
        >
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="text-center">
              Looks like you are new here
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-1">
            <span className="text-secondary small d-flex justify-content-center mb-3">
              Please fill your information below.
            </span>

            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-danger">{errors.name}</p>
                ) : null}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number ? (
                  <p className="text-danger">{errors.number}</p>
                ) : null}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
              </Form.Group>
              <Button type="submit" className="w-100 rounded-4">
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
      {isLogin && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="modal-main"
        >
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="text-center">Sign/Register</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-1">
            <span className="text-secondary small d-flex justify-content-center mb-3">
              Please enter your phone number or email below.
            </span>

            <Form noValidate onSubmit={loginFormik.handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                {loginFormik.errors.both && loginFormik.touched.both ? (
                  <p className="text-danger">{loginFormik.errors.both}</p>
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
      )}
    </>
  );
};

export default SignUP;
