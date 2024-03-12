import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Button,
  Image,
} from "react-bootstrap";
import "./productDetails.scss";
import ProductImgs from "./productImgs.js";
import share from "../../assets/share.png";
import mainProductImg from "../../assets/mainProductImg.png";
import people from "../../assets/people.png";
import fourstar from "../../assets/4Star.svg";
import { Link } from "react-router-dom";
import ProductColor from "../../components/productColorSize/ProductColor";
import ProductSize from "../../components/productColorSize/ProductSize";
import ReturnPolicy from "../../components/returnPolicy/ReturnPolicy";
import CustomerReview from "../../components/cusomerReview/CustomerReview";
import { useState } from "react";

const ProductDetails = () => {
  const [thumnailImg, setThumnailImg] = useState(mainProductImg);

  const handleProductImg = (productImg) => {
    setThumnailImg(productImg);
  };
  return (
    <Container fluid className="mt-3">
      <Breadcrumb className="small d-none d-lg-flex">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/productList">Product List</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active className="text-black">
          Product Detail
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="justify-content-around">
        <Col lg={1} xs={3} className="d-flex flex-column gap-3">
          {ProductImgs.map((productImg) => (
            <Image
              alt="171x180"
              src={productImg.imgUrl}
              className="border rounded-4"
              key={productImg.id}
              onClick={() => handleProductImg(productImg.imgUrl)}
            />
          ))}
        </Col>
        <Col lg={4} xs={9} className="">
          <div className="border d-flex justify-content-center bg-body-secondary">
            <Image src={thumnailImg} alt="" height="100%" width="90%" />
          </div>
        </Col>
        <Col lg={6} xs={12} className="mt-4 mt-lg-0">
          <Row className="justify-content-between">
            <Col lg={9} xs={10}>
              <span className="fw-medium productTitle lh-1">
                Damp Meter?Wood/Building Materials Moisture Meter & Temperature
                Detector with LCD Display?8 Calibration Scales(A-H) for
                Different Types of Wood Materials(2*AAA 1.5V Batteries Included)
              </span>
            </Col>
            <Col
              lg={2}
              xs={2}
              className="d-flex justify-content-lg-center justify-content-end align-items-center"
            >
              <div className="position-relative share">
                <img src={share} alt="share" />

                <div className="position-absolute shareHover pt-4 pt-sm-3">
                  <ul className="text-decoration-none list-unstyled  border shadow-sm rounded-3 bg-body-tertiary">
                    <li className="px-3 pt-2">
                      <Link className="text-decoration-none">Email</Link>
                    </li>
                    <hr className=" my-1" />
                    <li className="px-3 py-1">
                      <Link className="text-decoration-none ">Twitter</Link>
                    </li>
                    <hr className=" my-1" />
                    <li className="px-3 py-1">
                      <Link className="text-decoration-none ">Pinterest</Link>
                    </li>
                    <hr className=" my-1" />
                    <li className="px-3 py-1">
                      <Link className="text-decoration-none ">Facebook</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Row>
                <Col xs={12} sm={6} className="d-flex gap-2 align-items-center">
                  <img src={fourstar} alt="rating" />
                  <span>152</span>
                </Col>
                <Col xs={12} sm={6} className="d-flex justify-content-sm-end">
                  <span className="text-muted vendor">
                    Sold, by{" "}
                    <strong className="text-black">BargainFox Vendor</strong>
                  </span>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex align-items-center gap-3">
                  <div>
                    <span className="fw-bold price">
                      <sup>£</sup>10.69
                    </span>
                  </div>
                  <div>
                    <span className="priceOffer">
                      <strike>£21.99</strike>
                    </span>
                  </div>
                  <div>
                    <span className="discount bg-primary rounded-5 text-white px-3 py-1">
                      51%
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <span className="text-body-tertiary">Color: </span>
                  <strong>Orange</strong>
                  <ProductColor />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="d-flex gap-2">
                    <span className="text-body-tertiary">Size:</span>{" "}
                    <ProductSize />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <span className="text-body-tertiary">Condition:</span>{" "}
                  <strong>Brand New</strong>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex align-items-center gap-1">
                  <span className="text-body-tertiary">Quantity:</span>
                  <span className="d-flex gap-1 align-items-center border">
                    <button className="btn-outline-secondary btn border-0 border-end rounded-0">
                      -
                    </button>
                    <span className="px-2">0</span>
                    <button className="btn-outline-secondary btn border-0 border-start rounded-0">
                      +
                    </button>
                  </span>
                </Col>
              </Row>
              <Row className="mt-3 flex-column-reverse flex-md-column">
                <Col className="d-sm-flex gap-3 border-bottom border-top align-items-center pt-3">
                  <ReturnPolicy />
                </Col>
                <Col className="d-flex justify-content-md-end align-items-center mt-2">
                  <span className="bg-body-secondary rounded-5 px-2 py-1">
                    <img src={people} alt="" /> 2
                  </span>
                  People looking at this product
                </Col>
                <Col className="mt-3">
                  <Row>
                    <Col>
                      <Button className="w-100 rounded-5 cart">
                        Add to Cart
                      </Button>
                    </Col>
                    <Col>
                      <Button className="w-100 rounded-5 buyNow">
                        Buy Now
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="mt-3">
                  <p>
                    Order within <span className="text-success">2h 25m</span>{" "}
                    and choose <span className="learn">Express Shipping</span>{" "}
                    to get it by <strong>Tuesday 25/7/2023</strong>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <CustomerReview />
    </Container>
  );
};

export default ProductDetails;
