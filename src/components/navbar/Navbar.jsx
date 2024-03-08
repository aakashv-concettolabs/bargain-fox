import {
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import { useState } from "react";
import brandLogo from "../../assets/eCartlogo.svg";
import { Link } from "react-router-dom";
import wishList from "../../assets/heart.png";
import user from "../../assets/user.png";
import cart from "../../assets/shopping-cart.png";
import SearchIcon from "../../assets/search-normal.png";
import humburger from "../../assets/list.svg";
import "./navbar.scss";
import SignUP from "../../pages/signup/SignUP";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <header className="header-main mt-0">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} md={4} className="ps-md-5">
            <div className="d-flex justify-content-start align-items-center gap-2">
              <img
                src={humburger}
                alt=""
                height="24px"
                width="24px"
                className="d-sm-flex d-md-none"
              />
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
            <InputGroup className="rounded-3">
              <Form.Control
                className="border-0 shadow-none"
                placeholder="Search Product"
                aria-describedby="basic-addon2"
              />
              <Button id="button-addon2">
                <img src={SearchIcon} alt="" />
              </Button>
            </InputGroup>
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
              <Nav.Link className="p-0" as={Link} to="/cart">
                <div className="position-relative ">
                  <img src={cart} alt="" className="cartimg" />
                  <span className="cartCounter small text-white rounded-circle d-flex justify-content-center align-items-center position-absolute">
                    3
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
                      <span>Hello there,</span>
                      <span className="fw-bold">SIGN IN / REGISTER</span>
                    </div>
                  </div>

                  <div
                    id="loginHover"
                    className="position-absolute bg-body-tertiary rounded-4 pt-4 z-3"
                  >
                    <div className="px-4">
                      <Button
                        className="border-0 rounded-5 signupBtn"
                        onClick={() => setShow(true)}
                      >
                        Login/Register
                      </Button>
                    </div>
                    <hr className="mb-1" />
                    <div>
                      <ul className="list-inline">
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            Your Profile
                          </Link>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            BargainFox Subscription
                          </Link>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            Your Orders
                          </Link>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            Addresses
                          </Link>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            Notifications
                          </Link>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <Link
                            className="text-decoration-none text-black ps-2"
                            to="/"
                          >
                            Wishlists
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-2 d-flex d-md-none justify-content-sm-between align-items-center">
          <Col>
            <InputGroup className="inputGroup rounded-3">
              <Form.Control
                className="border-0 shadow-none"
                placeholder="Search Product"
                aria-describedby="basic-addon2"
              />
              <Button>
                <img src={SearchIcon} alt="search-icon" className="h-75 w-75" />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      {show && <SignUP show={show} handleClose={handleClose} />}
    </header>
  );
};

export default Header;
