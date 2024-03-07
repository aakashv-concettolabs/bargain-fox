import "./newAddress.scss";
import { useFormik } from "formik";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addressSchema } from "../../schema";

const initialValueAddress = {
  fullName: "",
  number: "",
  address: "",
  appartment: "",
  city: "",
  postcode: "",
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

const NewAddress = ({ show, handleClose }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValueAddress,
      validationSchema: addressSchema,
      onSubmit: (values, action) => {
        console.log(values);
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
              Country/Region<span className="text-warning">*</span>
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
              Full Name<span className="text-warning">*</span>
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
              Address<span className="text-warning">*</span>
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
            <Form.Label>Appartment,Suit,etc</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="shadow-none rounded-5"
              name="appartment"
              value={values.appartment}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              {errors.city && touched.city ? (
                <p className="text-danger">{errors.city}</p>
              ) : null}
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  PostCode<span className="text-warning">*</span>
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
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className="shadow-none rounded-5"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Row>
            <Col className="small">
              <Form.Check label="Save this information for next time" />
            </Col>
            <Row className="small">
              <Col>
                <Form.Check label="Text me with news and offers" />
              </Col>
              <Col className="d-flex justify-content-end">
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
