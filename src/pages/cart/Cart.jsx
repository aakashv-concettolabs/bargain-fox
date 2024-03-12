import "./cart.scss";
import wishlistIcon from "../../assets/heart.svg";
import { Col, Container, Row } from "react-bootstrap";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import CartCard from "./CartCard";
import CartJewelry from "../../assets/cartjewelry.png";
import cartImgTwo from "../../assets/cartImg2.png";

const cartProductDetails = [
  {
    id: 1,
    productheading:
      "Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's Clothing",
    imgUrl: CartJewelry,
  },
  {
    id: 2,
    productheading:
      "Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's Clothing",
    imgUrl: cartImgTwo,
  },
  {
    id: 3,
    productheading:
      "Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's Clothing",
    imgUrl: cartImgTwo,
  },
];

const Cart = () => {
  return (
    <Container fluid>
      <Row className="justify-content-around mt-3">
        <Col xs={12} md={8} lg={8}>
          <Row className="align-items-center">
            <Col className="d-flex flex-column flex-sm-row align-items-sm-center gap-sm-2">
              <h4>Shopping Cart</h4>
              <span className="text-body-tertiary">(3 Items)</span>
            </Col>
            <Col className="d-flex gap-1 gap-md-2 justify-content-end align-items-center text-body-tertiary">
              <img src={wishlistIcon} alt="wishlistIcon" />
              <span>Go to Wishlist</span>
            </Col>
          </Row>
          {cartProductDetails.map((cartProductDetail) => (
            <div
              key={cartProductDetail.id}
              style={{ borderTop: "1px solid #f5f5fc" }}
              className="mt-3"
            >
              <CartCard
                productheading={cartProductDetail.productheading}
                imgUrl={cartProductDetail.imgUrl}
              />
            </div>
          ))}
        </Col>
        <Col xs={12} md={4} lg={3}>
          <PaymentSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
