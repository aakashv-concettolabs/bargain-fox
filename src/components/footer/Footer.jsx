import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";

const Footer = () => {
  return (
    <Container fluid className="footer-main mt-5 p-lg-5 p-2">
      <Container>
        <Row>
          <Col className="col-12 col-md-10 offset-md-1 text-white">
            <Row>
              <Col>
                <div>
                  <h5>Help</h5>
                  <ul className="list-inline">
                    <li>
                      <Link to="/" className="text-decoration-none">
                        Delivery
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Help Center
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div>
                  <h5>About Us</h5>
                  <ul className="list-inline">
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Our Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="d-flex justify-content-end">
                <div>
                  <h5>Your Account</h5>
                  <ul className="list-inline">
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Your Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        Download the App
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-decoration-none ">
                        BargainFox Subscription
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="divider">
          <Col className="col-12 col-md-10 offset-md-1 text-white mt-3">
            <Row>
              <Col className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="d-flex gap-2">
                  <div className="rounded-circle p-2 socialIcons d-flex justify-content-center align-items-center">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="rounded-circle p-2 socialIcons d-flex justify-content-center align-items-center">
                    <img src={instagram} alt="" />
                  </div>
                  <div className="rounded-circle p-2 socialIcons d-flex justify-content-center align-items-center">
                    <img src={twitter} alt="" />
                  </div>
                  <div className="rounded-circle p-2 socialIcons d-flex justify-content-center align-items-center">
                    <img src={pinterest} alt="" />
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <div>
                  <p>All rights reserved © 2023 BargainFox.com</p>
                </div>
              </Col>
              <Col className="col-12 col-lg-4 d-flex  justify-content-center justify-content-lg-end align-items-center">
                <div>
                  <p>Terms of Service | Privacy Policy</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
