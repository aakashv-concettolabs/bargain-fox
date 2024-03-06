import { Container, Row, Col, NavLink } from "react-bootstrap";
import "./footer.scss";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";

const FooterDetail = [
  {
    id: 1,
    title: "Help",
    menuList: ["Delivery", "Returns", "Help Centre"],
  },
  {
    id: 2,
    title: "About Us",
    menuList: ["About Us", "Our Blogs", "Contact Us"],
  },
  {
    id: 3,
    title: "Your Account",
    menuList: [
      "Your Orders",
      "Checkout",
      "Download the App",
      "FastFox Subscription",
    ],
  },
];

const SocialConnection = [
  {
    id: 1,
    imgUrl: facebook,
    name: "facebook",
  },
  {
    id: 2,
    imgUrl: instagram,
    name: "instagram",
  },
  {
    id: 3,
    imgUrl: twitter,
    name: "twitter",
  },
  {
    id: 4,
    imgUrl: pinterest,
    name: "pinterest",
  },
];

const Footer = () => {
  return (
    <Container fluid className="footer-main mt-5 p-lg-5 p-2">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-between text-white">
            {FooterDetail.map((detail) => (
              <FooterMenu
                title={detail.title}
                list={detail.menuList}
                key={detail.id}
              />
            ))}
          </Col>
        </Row>

        <Row className="divider">
          <Col className="col-12 text-white mt-3">
            <Row>
              <Col className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="d-flex gap-2">
                  {SocialConnection.map((social) => (
                    <Link key={social.id}>
                      <div className="rounded-circle p-2 socialIcons d-flex justify-content-center align-items-center">
                        <img src={social.imgUrl} alt={social.name} />
                      </div>
                    </Link>
                  ))}
                </div>
              </Col>
              <Col className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                  <p>All rights reserved © 2023 BargainFox.com</p>
                </div>
              </Col>
              <Col className="col-12 col-lg-4 d-flex  justify-content-center justify-content-lg-end align-items-center">
                <div className="d-flex align-items-center">
                  <p>
                    <span>Terms of Service </span>|<span> Privacy Policy</span>
                  </p>
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
