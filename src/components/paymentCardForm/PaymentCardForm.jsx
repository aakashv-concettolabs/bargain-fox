import "./paymentCardForm.scss";
import { useFormik } from "formik";
import { cardFormSchema } from "../../schema";
import { Col, Form, Row } from "react-bootstrap";

const PaymentCardForm = () => {
  const initialValueAddress = {
    nameOnCard: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    terms: false,
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValueAddress,
    validationSchema: cardFormSchema,
    onSubmit: (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });

  return (
    <Row>
      <Col lg={8} className="offset-lg-1 paymentCardForm-Main mt-3 p-4">
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Name on Card<span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className="shadow-none rounded-5"
              name="nameOnCard"
              value={values.nameOnCard}
              onChange={handleChange}
            />
            {errors.nameOnCard && touched.nameOnCard ? (
              <p className="text-danger small m-1">{errors.nameOnCard}</p>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Number on Card<span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className="shadow-none rounded-5"
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && touched.cardNumber ? (
              <p className="text-danger small m-1 ">{errors.cardNumber}</p>
            ) : null}
          </Form.Group>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Month<span className="text-primary">*</span>
                </Form.Label>
                <Form.Select
                  className="rounded-5 shadow-none"
                  name="month"
                  value={values.month}
                  onChange={handleChange}
                >
                  <option value="">Select Month</option>
                  {[...Array(12).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Form.Select>
                {errors.month && touched.month ? (
                  <p className="text-danger small m-1 ">{errors.month}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Year<span className="text-primary">*</span>
                </Form.Label>
                <Form.Select
                  className="rounded-5 shadow-none"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={new Date().getFullYear() + i}>
                      {new Date().getFullYear() + i}
                    </option>
                  ))}
                </Form.Select>
                {errors.year && touched.year ? (
                  <p className="text-danger small m-1 ">{errors.year}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  CVV<span className="text-primary">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="shadow-none rounded-5"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleChange}
                />
                {errors.cvv && touched.cvv ? (
                  <p className="text-danger small m-1">{errors.cvv}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Form.Check
            label="Save card for future payments"
            name="terms"
            checked={values.terms}
            value={values.terms}
            onChange={handleChange}
          />
        </Form>
      </Col>
    </Row>
  );
};

export default PaymentCardForm;
