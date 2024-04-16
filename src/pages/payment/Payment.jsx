import { Col, Container, FormCheck, Image, Row } from "react-bootstrap";
import "./payment.scss";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import { Link } from "react-router-dom";
import ProductPriceTag from "../../components/productPriceTag/ProductPriceTag";
import ElectricImg from "../../assets/electronic1.png";
import american from "../../assets/american.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";

const Payment = () => {
  const paymentpage = true;
  return (
    <div className="px-sm-4 py-4 py-lg-0">
      <Container fluid className="paymentMain">
        <Row>
          <Col sm={12} md={8} className="bg-body-secondary">
            <Row>
              <h2 className="paymentHeading pb-2">Payment</h2>
              <Col xl={6}>
                <h5>Delivery Address</h5>
                <div className="address">
                  <h6>Akash</h6>
                  <p className="my-1">
                    405 Shefali Center, paldi cross road, Ahmedabad, Gujarat,
                    380016
                  </p>
                  <p className="mb-1">
                    <strong>Phone Number: </strong>
                    9797979797
                  </p>
                </div>
                <Link
                  className="text-decoration-none my-3 d-flex justify-content-end"
                  to={"/checkout/address"}
                >
                  Change Address
                </Link>
              </Col>
              <Col xl={6} className="customborderleft">
                <h5>Delivery Method</h5>
                <div>
                  <div className="d-flex gap-2 mb-3">
                    <FormCheck type="radio" />
                    <label className="d-flex flex-column">
                      <strong>Standard</strong>
                      <span>Expected Delivery : Friday 19/04/2024</span>
                    </label>
                  </div>
                  <div className="d-flex gap-2">
                    <FormCheck type="radio" />
                    <label className="d-flex flex-column">
                      <strong>Express</strong>
                      <span>Expected Delivery : Friday 19/04/2024</span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <h5 className="paymentHeading pb-2">Item Details</h5>
              <Col>
                <div className="paymentImgDiv mb-3 object-fit-cover border rounded-4">
                  <Image src={ElectricImg} className="w-100 h-100" />
                </div>
                <ProductPriceTag />
                <p className="d-flex gap-1">
                  <span className="fw-semibold text-body-tertiary">
                    Quantity:
                  </span>
                  <span className="fw-semibold">3</span>
                </p>
              </Col>
              <Col>
                <div className="paymentImgDiv">
                  <Image src={ElectricImg} className="w-100 h-100" />
                </div>
                <ProductPriceTag />
              </Col>
              <Col>
                <div className="paymentImgDiv">
                  <Image src={ElectricImg} className="w-100 h-100" />
                </div>
                <ProductPriceTag />
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="paymentHeading pb-2 mt-5">Payment Method</h2>
                <div className="d-flex gap-2 align-items-center">
                  <FormCheck type="radio" />
                  <label className="d-flex gap-2 align-items-center">
                    Debit/Credit Card
                    <div className="d-flex gap-2">
                      <span className="cardImgDiv">
                        <Image src={visa} className="w-100 h-100" />
                      </span>
                      <span className="cardImgDiv">
                        <Image src={mastercard} className="w-100 h-100" />
                      </span>
                      <span className="cardImgDiv">
                        <Image src={american} className="w-100 h-100" />
                      </span>
                    </div>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="paymentHeading pb-2 mt-5">Billing Address</h2>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck type="radio" />
                    <label>Same as Delivery Address</label>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck type="radio" />
                    <label>Use Different Address</label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={12} md={4} className="bg-info-subtle mt-4 mt-md-0">
            <PaymentSummary paymentpage={paymentpage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
