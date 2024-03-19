import "./signup.scss";
import { useFormik } from "formik";
import { Button, Modal, Form } from "react-bootstrap";
import { signUpSchema } from "../../schema";

import { useAuth } from "../../context/authContext/AuthContext";

const initialValueSignUp = {
  name: "",
  mobile: "",
  email: "",
};

const SignUP = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValueSignUp,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        const response = await fetch(
          "https://bargainfox-dev.concettoprojects.com/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const data = await response.json();
        console.log("login", data);
        console.log("login", values);
        action.resetForm();
        handleClose();
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
          <Button type="submit" className="w-100 rounded-4">
            Register
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default SignUP;
