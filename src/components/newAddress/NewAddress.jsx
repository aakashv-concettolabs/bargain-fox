import "./newAddress.scss";
import { useFormik } from "formik";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addressSchema } from "../../schema";
import axios from "axios";
import { newAddress } from "../../api/Apis";
import { toast } from "react-toastify";

const initialValueAddress = {
  fullName: "",
  number: "",
  address: "",
  address2: "",
  city: "",
  postcode: "",
  state: "",
};

const countryNames = [
  {
    id: 1,
    countryname: "India",
  },
  {
    id: 2,
    countryname: "Indonesia",
  },
  {
    id: 3,
    countryname: "China",
  },
];

const NewAddress = ({ show, handleClose, addressList }) => {
  const addNewAddressCall = async () => {
    try {
      const addNewAddressResponse = await axios.post(
        newAddress,
        {
          country: "India",
          full_name: values.fullName,
          address: values.address,
          address2: values.address2,
          city: values.city,
          state: values.state,
          postcode: values.postcode,
          phone: values.number,
          state: values.state,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (addNewAddressResponse.status == 200) {
        toast.success(addNewAddressResponse.data.message);
        console.log("add new address response", addNewAddressResponse);
      }
    } catch (error) {
      console.log("add new address error", error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValueAddress,
      validationSchema: addressSchema,
      onSubmit: (values, action) => {
        addNewAddressCall();
        addressList();
        action.resetForm();
        handleClose();
      },
    });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="modal-main"
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Body className="pt-1">
        <Modal.Title className="text-center">Add Delivery Address</Modal.Title>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Country/Region<span className="text-primary">*</span>
            </Form.Label>
            <Form.Select className="rounded-5 shadow-none">
              {countryNames.map((countryName) => (
                <option key={countryName.id} value={countryName.countryname}>
                  {countryName.countryname}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Full Name<span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="shadow-none rounded-5"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullName && touched.fullName ? (
              <p className="text-danger">{errors.fullName}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Address<span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              // as="textarea"
              className="shadow-none rounded-5"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <p className="text-danger">{errors.address}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Appartment,Suit,etc<span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="shadow-none rounded-5"
              name="address2"
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address2 && touched.address2 ? (
              <p className="text-danger">{errors.address2}</p>
            ) : null}
          </Form.Group>

          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  City<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.city && touched.city ? (
                  <p className="text-danger">{errors.city}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  State<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.state && touched.state ? (
                  <p className="text-danger">{errors.state}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  PostCode<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="postcode"
                  value={values.postcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.postcode && touched.postcode ? (
                  <p className="text-danger">{errors.postcode}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Phone<span className="text-primary">*</span>
                </Form.Label>
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
                  <p className="text-danger small m-1 ">{errors.number}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="small">
              <Form.Check label="Save this information for next time" />
            </Col>
            <Row className="small">
              <Col xs={12} sm={6}>
                <Form.Check label="Text me with news and offers" />
              </Col>
              <Col xs={12} sm={6} className="d-flex justify-content-sm-end">
                <Form.Check
                  type="switch"
                  label="Make Default"
                  className="text-body-tertiary"
                />
              </Col>
            </Row>
          </Row>
          <Button type="submit" className="w-100 rounded-4 mt-2">
            Save Address
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewAddress;
