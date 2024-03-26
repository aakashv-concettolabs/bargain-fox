import { useFormik } from "formik";
import "./newsletter.scss";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { newsletterSchema } from "../../schema";
import axios from "axios";
import { newsletter } from "../../api/Apis";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
};
const Newsletter = () => {
  const newsletterFormik = useFormik({
    initialValues,
    validationSchema: newsletterSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await axios.post(newsletter, values);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <Container className="newsletter-main position-relative">
      <Row className="newsletter mt-5 p-4  p-md-5 position-relative rounded-5 text-white  justify-content-between">
        <Col className="col-12 col-lg-6 col-xl-6">
          <h3 className="text-center text-md-start">
            Subscribe to Our Newsletters
          </h3>
          <p>
            Receive exclusive offers, unique gift ideas, and personalised tips
            for shopping and selling on <strong>eCart</strong>.
          </p>
        </Col>
        <Col className="col-12 col-lg-6 col-xl-5">
          <Form noValidate onSubmit={newsletterFormik.handleSubmit}>
            <InputGroup>
              <Form.Control
                className="border-0 shadow-none rounded-start-5 p-3"
                placeholder="Enter your Email"
                aria-describedby="basic-addon2"
                name="email"
                type="email"
                value={newsletterFormik.values.email}
                onChange={newsletterFormik.handleChange}
              />
              <Button
                type="submit"
                className="rounded-end-5 bg-dark text-white border-0 px-4"
              >
                Subscribe Now
              </Button>
            </InputGroup>
          </Form>
          {newsletterFormik.errors.email ? (
            <p className="text-danger">{newsletterFormik.errors.email}</p>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
