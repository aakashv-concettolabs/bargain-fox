import { Link } from "react-router-dom";
import "./paymentSummary.scss";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

const PaymentSummary = ({ cartItem, paymentpage }) => {
  return (
    <Card className="rounded-4" id="paymentSummary-main">
      <Card.Body>
        <Card.Title className="customborder pb-2">Order Summary</Card.Title>
        <div>
          {paymentpage && (
            <Form noValidate className="py-3 mb-3 customborder">
              <InputGroup>
                <Form.Control
                  className="border-1 shadow-none rounded-start-5 py-2"
                  placeholder="Discount Code"
                  aria-describedby="basic-addon2"
                  type="text"
                />
                <Button className="rounded-end-5 bg-dark text-white border-0 px-4">
                  Apply
                </Button>
              </InputGroup>
            </Form>
          )}
          <div className="customborder text-secondary-emphasis">
            <p className="d-flex justify-content-between">
              <span>Item(s) Total:</span> <span>{cartItem?.cart_total}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Item(s) DisCount:</span>
              <span className="text-primary">
                {cartItem?.product_discount_total}
              </span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <span>{cartItem?.cart_sub_total}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Delivery:</span>
              {cartItem?.delivery_charge > 0 ? (
                cartItem?.delivery_charge
              ) : (
                <span className="text-success">Free</span>
              )}
            </p>
            {paymentpage && (
              <p className="d-flex justify-content-between">
                <span>Sales Tax:</span>
                {cartItem?.sale_tax_amount}
              </p>
            )}
          </div>
          <p className="d-flex justify-content-between fw-medium pt-3">
            <span>Total ({cartItem?.user_cart.length} Items):</span>
            <span>{cartItem?.grand_total}</span>
          </p>
        </div>
        {paymentpage ? (
          <Button className="w-100 rounded-5 text-white" as={Link} to={""}>
            Pay Now
          </Button>
        ) : (
          <Button
            className="w-100 rounded-5 text-white"
            as={Link}
            to={"/checkout/address"}
          >
            Proceed to Checkout
          </Button>
        )}
        {!paymentpage && (
          <div>
            <p className="small text-secondary-emphasis mt-3">
              Order within <span className="deliveryTag">2h 25m</span> and
              choose <span className="deliveryTag">Express Shipping</span> to
              get it by <span className="deliveryTag">Tuesday 25/7/2023</span>
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PaymentSummary;
