import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { updateProfile } from "../../api/Apis";
import { toast } from "react-toastify";
import AuthContext from "../../context/authContext/AuthContext";
import DeleteUserWarnModal from "../../components/DeleteUserWarnModal/DeleteUserWarnModal";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const { userDetails, setUserDetails } = useContext(AuthContext);

  const [initialValues, setInitialFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    setInitialFormValues(userDetails);
    if (userDetails.name !== "") {
      setPageLoading(false);
    }
  }, [userDetails]);

  const updateProfileCall = async () => {
    setPageLoading(true);
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
          setUserDetails((prev) => ({
            ...prev,
            name: initialValues.name,
          }));
          setPageLoading(false);
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
                />
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
