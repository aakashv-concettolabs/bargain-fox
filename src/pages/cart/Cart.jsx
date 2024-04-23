import "./cart.scss";
import wishlistIcon from "../../assets/heart.svg";
import { Col, Container, Row, Image, Spinner } from "react-bootstrap";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { myCartApi, removeFromCartApi } from "../../api/Apis";
import emptyCartImg from "../../assets/empty-cart.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../reducers/cartSlice";

const Cart = () => {
  const [cartItem, setCartItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

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
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("my cart error", error);
    }
  };

  const handleDelete = (Id) => {
    setIsLoading(true);
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
          dispatch(updateCartCount(cartCount - 1));
          toast.success(RemoveFromCartResponse.data.message);
          setIsLoading(false);
          myCart();
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Remove from cart error", error);
      }
    };

    removeFromCart();
  };

  useEffect(() => {
    myCart();
  }, []);

  return (
    <Container fluid>
      {cartItem?.user_cart == 0 ? (
        <Row className="my-5">
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
                {cartItem?.user_cart.length > 0 && (
                  <span className="text-body-tertiary">
                    {`(${cartItem?.user_cart?.length} items)`}
                  </span>
                )}
              </Col>
              <Col className="text-end">
                <Link
                  className="d-inline-flex gap-1 gap-md-2 justify-content-end align-items-center text-body-tertiary text-decoration-none"
                  to={"/wishlist"}
                >
                  <img src={wishlistIcon} alt="wishlistIcon" />
                  <span>Go to Wishlist</span>
                </Link>
              </Col>
            </Row>
            {!isLoading ? (
              <>
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
              </>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "30vh" }}
              >
                <Spinner />
              </div>
            )}
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
