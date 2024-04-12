import { Nav, Container, Row, Col, Navbar } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import brandLogo from "../../assets/eCartlogo.svg";
import { Link } from "react-router-dom";
import wishList from "../../assets/heart.png";
import user from "../../assets/user.png";
import cart from "../../assets/shopping-cart.png";
import "./navbar.scss";
import MobileMenubar from "../mobileMenubar/MobileMenubar";
import SignRegisterHovermMenu from "../signRegisterHoverMenu/SignRegisterHovermMenu";
import ModalComponent from "../modal/ModalComponent";
import AuthContext from "../../context/authContext/AuthContext";
import Searchbar from "../searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { cartItemCountApi } from "../../api/Apis";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProductCount } from "../../reducers/cartSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { userDetails } = useContext(AuthContext);
  const userName = userDetails.name;
  const noOfProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(
    noOfProduct > 0 ? noOfProduct.productCount : 0
  );

  const handleClose = () => {
    setShow(false);
  };

  const cartItemCount = async () => {
    if (userName) {
      try {
        const itemCountResponse = await axios.get(cartItemCountApi, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (itemCountResponse.status === 200) {
          setCartCount(itemCountResponse.data.result.cart_item_count);
          dispatch(
            addProductCount(itemCountResponse.data.result.cart_item_count)
          );
        }
      } catch (error) {
        console.log("item count error", error);
      }
    }
  };

  useEffect(() => {
    cartItemCount();
  }, [userName, noOfProduct]);

  const handleCartClick = () => {
    if (userName) {
      navigate("/cart");
    } else {
      setShow(true);
    }
  };

  return (
    <header className="header-main mt-0">
      {show && <ModalComponent show={show} handleClose={handleClose} />}

      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={4} className="ps-md-5">
            <div className="d-flex justify-content-start align-items-center gap-2">
              <MobileMenubar />
              <Navbar.Brand as={Link} to={"/"}>
                <img
                  src={brandLogo}
                  alt="Bargain-Fox logo"
                  className="brandlogo"
                />
              </Navbar.Brand>
            </div>
          </Col>
          <Col md={4} className="d-md-flex d-none">
            <Searchbar />
          </Col>
          <Col xs={6} md={4} className="pe-md-5">
            <Nav className="d-flex gap-2 gap-sm-3 justify-content-end align-items-center">
              <Nav.Link as={Link} to={"/wishlist"} className="p-0">
                <div className="position-relative ">
                  <img src={wishList} alt="wishlist" className="wishlist" />
                  <span className="wishlistCount small rounded-circle text-white d-flex justify-content-center align-items-center position-absolute">
                    0
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link className="p-0" onClick={handleCartClick}>
                <div className="position-relative ">
                  <img src={cart} alt="" className="cartimg" />
                  <span className="cartCounter small text-white rounded-circle d-flex justify-content-center align-items-center position-absolute">
                    {cartCount}
                  </span>
                </div>
              </Nav.Link>

              <div id="userProfile" className="position-relative">
                <div>
                  <img
                    className="user py-3 d-flex d-xl-none"
                    src={user}
                    alt="user-icon"
                    onClick={() => setShow(true)}
                  />
                  <div className="d-none d-xl-flex gap-2 text-dark">
                    <img className="py-3 user" src={user} alt="user-icon" />
                    <div className="d-flex small flex-column justify-content-center">
                      <span>{userName ? "welcome" : "Hello there,"}</span>
                      <span className="fw-bold text-capitalize">
                        {userName ? userName : "SIGN IN / REGISTER"}
                      </span>
                    </div>
                  </div>

                  <div
                    id="loginHover"
                    className="position-absolute bg-body-tertiary rounded-4 pt-4 z-3 px-1 w-auto"
                  >
                    <SignRegisterHovermMenu />
                  </div>
                </div>
              </div>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-2 d-flex d-md-none justify-content-sm-between align-items-center">
          <Col>
            <Searchbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
