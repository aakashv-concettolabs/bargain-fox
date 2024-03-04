import {
  Col,
  Container,
  Row,
  Figure,
  Breadcrumb,
  Button,
  ProgressBar,
} from "react-bootstrap";
import "./productDetails.scss";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import forth from "../../assets/forth.png";
import fifth from "../../assets/fifth.png";
import share from "../../assets/share.png";
import mainProductImg from "../../assets/mainProductImg.png";
import deliveryVan from "../../assets/delivery-van.png";
import returnDay from "../../assets/returnDay.png";
import warranty from "../../assets/warranty.png";
import people from "../../assets/people.png";
import tick from "../../assets/tick.png";
import fourstar from "../../assets/4Star.svg";
import star from "../../assets/star.svg";
import brandlist from "../../assets/brandlist.svg";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <Container fluid className="mt-3">
      <Breadcrumb className="small d-none d-lg-flex">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/productList">Product List</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active className="text-black">
          Product List
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row className="justify-content-between">
        <Col
          lg={1}
          xs={3}
          className="d-flex justify-content-around align-items-center flex-column"
        >
          <Figure className="border">
            <Figure.Image
              alt="171x180"
              src="https://concetto-web.bargainfox.com/_next/image?url=https%3A%2F%2Fbargainfox-bucket.s3.eu-west-2.amazonaws.com%2Fproduct_image%2FuVMTsv6unTP4teSbqAfJggF5ZUG95nrKseEfMMEa.png&w=96&q=75"
            />
          </Figure>
          <Figure className="border">
            <Figure.Image
              alt="171x180"
              src="https://concetto-web.bargainfox.com/_next/image?url=https%3A%2F%2Fbargainfox-bucket.s3.eu-west-2.amazonaws.com%2Fproduct_image%2F11C52mfRNCXrkt1Nwp2NwdsBIFT6CCfRydHD2Vwy.png&w=96&q=75"
            />
          </Figure>
          <Figure className="border">
            <Figure.Image
              alt="171x180"
              src="https://concetto-web.bargainfox.com/_next/image?url=https%3A%2F%2Fbargainfox-bucket.s3.eu-west-2.amazonaws.com%2Fproduct_image%2FC5ddWoy4mgp4jnEGL186mmIycFnDHWGsfM1mNv3F.png&w=96&q=75"
            />
          </Figure>
          <Figure className="border">
            <Figure.Image
              alt="171x180"
              src="https://concetto-web.bargainfox.com/_next/image?url=https%3A%2F%2Fbargainfox-bucket.s3.eu-west-2.amazonaws.com%2Fproduct_image%2FzZGNjzHHEVYILier83KaCPL3ZYQvrwH5v4XDqBGq.png&w=96&q=75"
            />
          </Figure>
        </Col>
        <Col
          lg={4}
          xs={9}
          className=" d-flex justify-content-center align-items-center border"
        >
          <Figure>
            <Figure.Image
              alt="171x180"
              src="https://concetto-web.bargainfox.com/_next/image?url=https%3A%2F%2Fbargainfox-bucket.s3.eu-west-2.amazonaws.com%2Fproduct_image%2FuVMTsv6unTP4teSbqAfJggF5ZUG95nrKseEfMMEa.png&w=640&q=75"
            />
          </Figure>
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
                  <span>0</span>
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
              <Row className="mt-3 border-bottom border-top">
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column align-items-center pt-3"
                >
                  <div className="bg-body-secondary p-2 rounded-circle">
                    <img src={deliveryVan} alt="" />
                  </div>
                  <p>
                    Spend £14 for free delivery.{" "}
                    <span className="learn">Learn more </span>
                  </p>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column  align-items-center pt-3"
                >
                  <div className="bg-body-secondary p-2 rounded-circle">
                    <img src={returnDay} alt="" />
                  </div>
                  <p>
                    14-day returns.
                    <span className="learn">Learn more </span>
                  </p>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex flex-column align-items-center pt-3"
                >
                  <div className="bg-body-secondary p-2 rounded-circle">
                    <img src={warranty} alt="" />
                  </div>
                  <p>
                    6 month warranty with the Bargain Fox guarantee.{" "}
                    <span className="learn">Learn more </span>
                  </p>
                </Col>
              </Row>

              <Row className="mt-3 flex-column">
                <Col className="d-flex justify-content-md-end align-items-center">
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
      <Row className="mt-3 px-4 flex-column-reverse flex-md-row">
        <Col xs={12} md={6} className="border-top">
          <p className="fw-bold fs-4 p-3">Customer Ratings & Reviews</p>
          <Row>
            <Col className="border-end d-flex flex-column justify-content-center align-items-center">
              <span className="rateCount">0</span>
              <img src={fourstar} alt="" />
              <span>0 Ratings & Reviews</span>
            </Col>
            <Col className="my-auto">
              <div className="d-flex align-items-center gap-2">
                <span className="d-flex align-items-center gap-1">
                  5 <img src={star} alt="" />
                </span>
                <div className="w-50">
                  <ProgressBar />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="d-flex align-items-center gap-1">
                  4 <img src={star} alt="" />
                </span>
                <div className="w-50">
                  <ProgressBar now={60} />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="d-flex align-items-center gap-1">
                  3 <img src={star} alt="" />
                </span>
                <div className="w-50">
                  <ProgressBar />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="border-top px-3">
          <Row>
            <Col>
              <p className="fw-bold fs-4 px-3 py-1">HighLight</p>
              <span>
                <img src={tick} alt="" height="20px" width="20px" />1 Customers
                bought this item
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="border-top mt-3">
              <p className="fw-bold fs-4 px-3 py-1">Product Description</p>
              <span>
                Damp Meter?Wood/Building Materials Moisture Meter & Temperature
                Detector with LCD Display?8 Calibration Scales(A-H) for
                Different Types of Wood Materials(2*AAA 1.5V Batteries Included)
              </span>
              <p className="d-flex gap-1 mt-2">
                <img src={brandlist} alt="" />
                <strong>Brand:</strong>Beaspire
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={6}
          className="mt-3 border border-start-0 border-end-0 py-4"
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src={fourstar} alt="" className="star" />
            <span className="rateThisProduct">Rate This Product</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
