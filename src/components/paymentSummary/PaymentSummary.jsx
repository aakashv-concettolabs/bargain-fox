import { Link } from "react-router-dom";
import "./paymentSummary.scss";
import { Button, Card } from "react-bootstrap";

const PaymentSummary = () => {
  return (
    <Card className="rounded-4" id="paymentSummary-main">
      <Card.Body>
        <Card.Title className="customborder pb-2">Order Summary</Card.Title>
        <div>
          <div className="customborder text-secondary-emphasis">
            <p className="d-flex justify-content-between">
              <span>Item(s) Total:</span> <span>$45</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Item(s) DisCount:</span>
              <span className="text-primary">-$15</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <span>$30</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Delivery:</span> <span className="text-success">Free</span>
            </p>
          </div>
          <p className="d-flex justify-content-between fw-medium pt-3">
            <span>Total (3 Items):</span> <span>$30</span>
          </p>
        </div>
        <Button
          className="w-100 rounded-5 text-white"
          as={Link}
          to={"/cart/checkout"}
        >
          Proceed to Checkout
        </Button>
        <div>
          <p className="small text-secondary-emphasis mt-3">
            Order within <span className="deliveryTag">2h 25m</span> and choose{" "}
            <span className="deliveryTag">Express Shipping</span> to get it by{" "}
            <span className="deliveryTag">Tuesday 25/7/2023</span>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PaymentSummary;
