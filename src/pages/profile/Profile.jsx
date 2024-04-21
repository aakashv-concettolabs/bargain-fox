import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { deleteUser, updateProfile } from "../../api/Apis";
import { toast } from "react-toastify";
import AuthContext from "../../context/authContext/AuthContext";
import DeleteUserWarnModal from "../../components/DeleteUserWarnModal/DeleteUserWarnModal";
import { useNavigate } from "react-router-dom";

// const ProfileSchema = Yup.object({
//   name: Yup.string().min(1).max(25).required("Please enter your name"),
// });

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  const [initialValues, setInitialFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // const initialValues = {
  //   name: localStorage.getItem("name"),
  //   mobile: localStorage.getItem("mobile"),
  //   email: localStorage.getItem("email"),
  // };

  useEffect(() => {
    setInitialFormValues(userDetails);
    if (userDetails.name !== "") {
      setPageLoading(false);
    }
  }, [userDetails]);

  // console.log("test123", initialValues);
  const updateProfileCall = async () => {
    setPageLoading(true)
    if (token) {
      try {
        const response = await axios.post(
          updateProfile,
          {
            name: initialValues.name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status == 200) {
          localStorage.setItem("name", response.data.result.name);
          setUserDetails((prev) => ({
            ...prev,
            name: initialValues.name,
          }));
          setPageLoading(false)
          toast.success(response.data.message);
          setLoading(false);
        }
      } catch (error) {
        console.log("update profile error", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialValues.name !== "") {
      updateProfileCall();
    } else {
      toast.warn("Please enter valid name");
    }
  };

  const deleteUserCall = async () => {
    if (token) {
      try {
        const deleteResponse = await axios.get(deleteUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (deleteResponse.status == 200) {
          console.log("delete user response", deleteResponse);
        }
      } catch (error) {
        console.log("delete user error", error);
      }
    }
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleDeleteUser = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    setInitialFormValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  // const { values, errors, touched, handleBlur, handleSubmit } = useFormik({
  //   // initialValues,
  //   validationSchema: ProfileSchema,
  //   onSubmit: (values, action) => {
  //     setLoading(true);
  //     updateProfileCall();
  //   },
  // });

  return (
    <Container>
      {show && <DeleteUserWarnModal show={show} handleClose={handleClose} />}
      <Row>
        <h2 className="text-center border-bottom pb-4 mb-5">Your Profile</h2>
        <Col md={6} className="offset-md-3">
          {!pageLoading ? (
            <Form
              noValidate
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Full Name<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="name"
                  value={initialValues.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  // onBlur={handleBlur}
                />
                {/* {errors.name && touched.name ? (
                  <p className="text-danger">{errors.name}</p>
                ) : null} */}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="mobile"
                  value={initialValues.mobile}
                  readOnly
                />
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
                  value={initialValues.email}
                  readOnly
                />
              </Form.Group>
              <Row>
                <Col>
                  <Button type="submit" className="w-100 rounded-4">
                    {loading ? "Please wait..." : "Update & Save"}
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="w-100 rounded-4"
                    onClick={handleDeleteUser}
                  >
                    Delete Account
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <>Loading...</>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
