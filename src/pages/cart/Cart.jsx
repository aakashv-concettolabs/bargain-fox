import "./cart.scss";
import wishlistIcon from "../../assets/heart.svg";
import { Col, Container, Row, Image } from "react-bootstrap";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { myCartApi, removeFromCartApi } from "../../api/Apis";
import emptyCartImg from "../../assets/empty-cart.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItem, setCartItem] = useState();

  const myCart = async () => {
    try {
      const myCartResponse = await axios.post(
        myCartApi,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (myCartResponse.status === 200) {
        setCartItem(myCartResponse.data.result);
      }
    } catch (error) {
      console.log("my cart error", error);
    }
  };

  const handleDelete = (Id) => {
    const removeFromCart = async () => {
      try {
        const RemoveFromCartResponse = await axios.post(
          removeFromCartApi,
          { cart_product_id: [Id] },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (RemoveFromCartResponse.status === 200) {
          toast.success(RemoveFromCartResponse.data.message);
        }
      } catch (error) {
        console.log("Remove from cart error", error);
      }
    };

    removeFromCart();
  };
  useEffect(() => {
    myCart();
  }, [handleDelete]);

  return (
    <Container fluid>
      {cartItem?.user_cart == 0 ? (
        <Row>
          <Col className="text-center">
            <div>
              <Image src={emptyCartImg} />
            </div>
            <h2 className="mt-4">Your cart is empty</h2>
            <p className="my-3">
              Looks like you have not added something to you cart. <br /> Go
              ahead & explore top categories.
            </p>
            <Link className="btn btn-primary rounded-5 px-3 py-2" to={"/"}>
              Return to Shop
            </Link>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-around mt-3">
          <Col xs={12} md={8} lg={8}>
            <Row className="align-items-center">
              <Col className="d-flex flex-column flex-sm-row align-items-sm-center gap-sm-2">
                <h4>Shopping Cart</h4>
                <span className="text-body-tertiary">
                  {`(${cartItem?.user_cart?.length} items)`}
                </span>
              </Col>
              <Col className="d-flex gap-1 gap-md-2 justify-content-end align-items-center text-body-tertiary">
                <img src={wishlistIcon} alt="wishlistIcon" />
                <span>Go to Wishlist</span>
              </Col>
            </Row>
            {cartItem?.user_cart.map((cartProductDetail) => (
              <div
                key={cartProductDetail.id}
                style={{ borderTop: "1px solid #f5f5fc" }}
                className="mt-3"
              >
                <CartCard
                  eachCart={cartProductDetail}
                  handleDelete={handleDelete}
                  myCart={myCart}
                />
              </div>
            ))}
          </Col>
          <Col xs={12} md={4} lg={3}>
            <PaymentSummary cartItem={cartItem} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
