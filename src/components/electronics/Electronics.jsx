import { Container, Row, Col, Nav } from "react-bootstrap";
import "./electronics.scss";
import Slider from "react-slick";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import offerSticker from "../../assets/offerSticker.svg";
import ProductCard from "../productCard/ProductCard";
import rightArrow from "../../assets/rightArrow.svg";
import electronic1 from "../../assets/electronic1.png";
import electronic2 from "../../assets/electronic2.png";
import electronic3 from "../../assets/electronic3.png";
import electronic4 from "../../assets/electronic4.png";
import SectionHeading from "../sectionheading/SectionHeading";

const Electronics = () => {
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
    <Container className="electronics-main mt-5">
      <SectionHeading sectionHeadingTitle="Electronics" />

      <Row className="mt-4">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <ProductCard
                      imgUrl={electronic1}
                      detail="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP"
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
                      imgUrl={electronic2}
                      detail="Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle..."
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
                      imgUrl={electronic3}
                      detail="LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic"
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
                      imgUrl={electronic4}
                      detail="LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic"
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
    </Container>
  );
};

export default Electronics;
