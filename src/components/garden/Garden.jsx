import "./garden.scss";
import {
  Container,
  Row,
  Col,
  Nav,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import rightArrow from "../../assets/rightArrow.svg";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import garden1 from "../../assets/garden-1.png";
import garden2 from "../../assets/garden-2.png";
import garden3 from "../../assets/garden-3.png";
import garden4 from "../../assets/garden-4.png";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import offerSticker from "../../assets/offerSticker.svg";

const Garden = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="garden-main mt-5">
      <Row>
        <Col className="col-12 p-0 col-md-10 offset-md-1">
          <Row>
            <Col className="col-8 d-flex gap-2">
              <div className="d-flex align-items-center">
                <span className="garden-title fw-bolder">Garden & DIY</span>
              </div>
            </Col>
            <Col className="col-4 p-0">
              <Nav className="d-flex justify-content-end">
                <Nav.Link href="#home">
                  <div className="d-flex gap-2">
                    <span>View All</span>
                    <img src={rightArrow} alt="wishlist" />
                  </div>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="col-12  col-md-10 offset-md-1">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <ProductCard
                      imgUrl={garden1}
                      detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                      ratedStar={starColor}
                      unratedStar={star}
                      offerPrice="44"
                      price="50"
                      offerSticker={offerSticker}
                      discount="-10%"
                    />
                  </div>
                  <div>
                    <ProductCard
                      imgUrl={garden2}
                      detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                      ratedStar={starColor}
                      unratedStar={star}
                      offerPrice="44"
                      price="50"
                      offerSticker={offerSticker}
                      discount="-10%"
                    />
                  </div>
                  <div>
                    <ProductCard
                      imgUrl={garden3}
                      detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                      ratedStar={starColor}
                      unratedStar={star}
                      offerPrice="44"
                      price="50"
                      offerSticker={offerSticker}
                      discount="-10%"
                    />
                  </div>
                  <div>
                    <ProductCard
                      imgUrl={garden4}
                      detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                      ratedStar={starColor}
                      unratedStar={star}
                      offerPrice="44"
                      price="50"
                      offerSticker={offerSticker}
                      discount="-10%"
                    />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="col-12 col-md-10 offset-md-1">
          <Row className="newsletter p-2  p-md-4 position-relative rounded-5 text-white mx-2 justify-content-between">
            <Col className="col-12 col-lg-6 col-xl-6">
              <h3 className="text-center text-md-start">
                Subscribe to Our Newsletters
              </h3>
              <p>
                Receive exclusive offers, unique gift ideas, and personalised
                tips for shopping and selling on <strong>BargainFox</strong>.
              </p>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex align-items-center">
              <InputGroup>
                <Form.Control
                  className="border-0 shadow-none rounded-start-5 p-2"
                  placeholder="Enter your Email"
                  aria-describedby="basic-addon2"
                />
                <Button className="rounded-end-5 bg-dark text-white border-0 p-2">
                  Subscribe Now
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Garden;
