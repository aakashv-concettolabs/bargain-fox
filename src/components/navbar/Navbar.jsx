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
import "./navbar.scss";
import SignUP from "../../pages/signup/SignUP";
import MobileMenubar from "../mobileMenubar/MobileMenubar";
import SignRegisterHovermMenu from "../signRegisterHoverMenu/SignRegisterHovermMenu";

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
            <InputGroup className="rounded-3">
              <Form.Control
                className="border-0 shadow-none"
                placeholder="Search Product"
                aria-describedby="basic-addon2"
              />
              <Button id="button-addon2" className="border">
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
