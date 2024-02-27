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
import brandLogo from "../../assets/main-logo.png";
import { Link } from "react-router-dom";
import wishList from "../../assets/heart.png";
import user from "../../assets/user.png";
import cart from "../../assets/shopping-cart.png";
import SearchIcon from "../../assets/search-normal.png";
import "./navbar.scss";

const Header = () => {
  return (
    <header className="header-main mt-2 mt-sm-0">
      <Container fluid>
        <Row className="d-md-flex d-none d-sm-none justify-content-center align-items-center">
          <Col>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Brand href="#home">
              <img src={brandLogo} alt="Bargain-Fox logo" />
            </Navbar.Brand>
          </Col>
          <Col>
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
          <Col>
            <Nav className="d-flex justify-content-end align-items-center">
              <Nav.Link href="#home">
                <div className="position-relative">
                  <img src={wishList} alt="wishlist" />
                  <span className="wishlistCount small rounded-circle text-white d-flex justify-content-center align-items-center position-absolute">
                    0
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link href="#features">
                <div className="position-relative">
                  <img src={cart} alt="" />
                  <span className="cartCounter small text-white rounded-circle d-flex justify-content-center align-items-center position-absolute">
                    3
                  </span>
                </div>
              </Nav.Link>

              <div id="userProfile" className="position-relative">
                <Nav.Link href="">
                  <div className="d-flex gap-2 text-dark">
                    <img className="py-3" src={user} alt="user-icon" />
                    <div className="d-xl-flex d-sm-none small flex-column justify-content-center">
                      <span>Hello there,</span>
                      <span className="fw-bold">SIGN IN / REGISTER</span>
                    </div>
                  </div>

                  <div
                    id="loginHover"
                    className="position-absolute bg-body-tertiary rounded-4 pt-4"
                  >
                    <div className="px-4">
                      <Button className="rounded-5 border-0">
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
                </Nav.Link>
              </div>
            </Nav>
          </Col>
        </Row>

        <Row className="d-sm-flex d-md-none justify-content-sm-between align-items-center">
          <Col className="col-6 col-sm-6">
            <div className="d-flex justify-content-start align-items-center gap-2">
              <img
                src="https://concetto-web.bargainfox.com/images/svg/menu.svg"
                alt=""
                height="24px"
                width="24px"
              />
              <Navbar.Brand href="#home">
                <img
                  className="brand-logo d-flex flex-wrap"
                  src={brandLogo}
                  alt="Bargain-Fox logo"
                />
              </Navbar.Brand>
            </div>
          </Col>
          <Col className=" d-flex flex-wrap justify-content-end col-6 col-sm-6">
            <Nav className="flex-nowrap d-flex justify-content-end align-items-center">
              <Nav.Link className="px-2" href="">
                <div className="position-relative">
                  <img src={wishList} alt="wishlist" />
                  <span className="wishlistCount small text-white rounded-circle d-flex justify-content-center align-items-center position-absolute">
                    0
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link className="px-2" href="">
                <div className="position-relative">
                  <img src={cart} alt="" />
                  <span className="cartCounter small rounded-circle d-flex text-white justify-content-center align-items-center position-absolute">
                    3
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link className="px-2">
                <div className="text-dark">
                  <img src={user} alt="user-icon" />
                </div>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-2 d-sm-flex d-md-none justify-content-sm-between align-items-center">
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
    </header>
  );
};

export default Header;
