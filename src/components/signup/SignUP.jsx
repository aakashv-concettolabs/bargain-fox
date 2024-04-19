import "./signup.scss";
import { useFormik } from "formik";
import { Button, Modal, Form } from "react-bootstrap";
import { signUpSchema } from "../../schema";
import axios from "axios";
import { registerUser } from "../../api/Apis";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";

const SignUP = ({ handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userEmail = useSelector((state) => state.userLogin.email);
  const { setUserDetails } = useContext(AuthContext);
  const isNumber = /^\d+$/.test(userEmail);

  const initialValueSignUp = {
    name: "",
    mobile: isNumber ? userEmail : "",
    email: !isNumber ? userEmail : "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValueSignUp,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const response = await axios.post(registerUser, values);
          const data = await response.data.result;
          console.log("first", data);
          setUserDetails(data);
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          localStorage.setItem("mobile", data.mobile);
          localStorage.setItem("token", data.token);
          action.resetForm();
          handleClose();
        } catch (error) {
          const errorMessage = await error.response.data.message;
          console.log("first", error);
          setError(errorMessage);
          setLoading(false);
        }
      },
    });

  return (
    <>
      <Modal.Body className="pt-1">
        <span className="text-secondary small d-flex justify-content-center mb-3">
          Please fill your information below.
        </span>

        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className="shadow-none rounded-5"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? (
              <p className="text-danger">{errors.mobile}</p>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          {error && <p className="text-danger">{error}</p>}
          <Button type="submit" className="w-100 rounded-4">
            {loading ? "Please wait..." : "Register"}
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default SignUP;
