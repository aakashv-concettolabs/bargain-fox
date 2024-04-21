import { Col, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { addressSchema } from "../../schema";
import { useEffect, useState } from "react";

const initialValueAddress = {
  country: "India",
  fullName: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  number: "",
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

const BillingAddressForm = ({ handleBillingForm, formData }) => {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValueAddress,
      validationSchema: addressSchema,
      onSubmit: (values) => {
        handleBillingForm(values);
      },
    });


  return (
    <Row>
      <Col lg={8} className="offset-lg-1 paymentCardForm-Main mt-3 p-4">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Country/Region<span className="text-primary">*</span>
                </Form.Label>
                <Form.Select
                  className="rounded-5 shadow-none"
                  name="country"
                  value={formData.country}
                  onChange={(e)=>{handleBillingForm(e)}}
                >
                  {countryNames.map((countryName) => (
                    <option
                      key={countryName.id}
                      value={countryName.countryname}
                    >
                      {countryName.countryname}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
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
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.fullName && touched.fullName ? (
                  <p className="text-danger small m-1">{errors.fullName}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Address<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="address"
                  value={formData.address}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address ? (
                  <p className="text-danger small m-1">{errors.address}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Appartment,Suit,etc<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="address2"
                  value={formData.address2}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.address2 && touched.address2 ? (
                  <p className="text-danger small m-1">{errors.address2}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
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
                  value={formData.city}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.city && touched.city ? (
                  <p className="text-danger small m-1">{errors.city}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
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
                  value={formData.state}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.state && touched.state ? (
                  <p className="text-danger small m-1">{errors.state}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
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
                  value={formData.postcode}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.postcode && touched.postcode ? (
                  <p className="text-danger small m-1">{errors.postcode}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
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
                  value={formData.number}
                  onChange={(e)=>{handleBillingForm(e)}}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number ? (
                  <p className="text-danger small m-1 ">{errors.number}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default BillingAddressForm;
