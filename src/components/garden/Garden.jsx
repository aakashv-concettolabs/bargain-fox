import "./garden.scss";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import garden1 from "../../assets/garden-1.png";
import garden2 from "../../assets/garden-2.png";
import garden3 from "../../assets/garden-3.png";
import garden4 from "../../assets/garden-4.png";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import offerSticker from "../../assets/offerSticker.svg";
import SectionHeading from "../sectionheading/SectionHeading";
import { settings } from "../sliderSetting/SliderSetting";
import OfferStickerComponent from "../offerStickerComponent/OfferStickerComponent";

const Garden = () => {
  return (
    <Container className="garden-main mt-5">
      <SectionHeading sectionHeadingTitle="Garden & DIY" />
      <Row className="mt-4">
        <Col className="col-12  ">
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
                    <OfferStickerComponent />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="newsletter mt-5 p-4  p-md-5 position-relative rounded-5 text-white  justify-content-between">
        <Col className="col-12 col-lg-6 col-xl-6">
          <h3 className="text-center text-md-start">
            Subscribe to Our Newsletters
          </h3>
          <p>
            Receive exclusive offers, unique gift ideas, and personalised tips
            for shopping and selling on <strong>BargainFox</strong>.
          </p>
        </Col>
        <Col className="col-12 col-lg-6 col-xl-5 d-flex align-items-center">
          <InputGroup>
            <Form.Control
              className="border-0 shadow-none rounded-start-5 p-3"
              placeholder="Enter your Email"
              aria-describedby="basic-addon2"
            />
            <Button className="rounded-end-5 bg-dark text-white border-0 px-4 ">
              Subscribe Now
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Garden;
