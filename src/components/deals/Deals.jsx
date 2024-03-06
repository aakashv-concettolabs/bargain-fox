import rightArrow from "../../assets/rightArrow.svg";
import womenWestern from "../../assets/western.png";
import menWestern from "../../assets/men.png";
import casualShoes from "../../assets/casualShoe.png";
import runningShoes from "../../assets/running.png";
import sunglasses from "../../assets/sunglasses.png";
import jwellery from "../../assets/jwellery.png";
import Slider from "react-slick";

import { Col, Container, Nav, Row } from "react-bootstrap";
import "./deals.scss";
import DealCard from "../dealCard/DealCard";
import { Link } from "react-router-dom";

const Deals = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container className="my-5 deal-main">
      <Row>
        <Col className="col-12 p-0">
          <Row>
            <Col className="col-8 d-flex gap-2">
              <div className="d-flex align-items-center">
                <span className="deal fw-bolder">Deals Of The Day</span>
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

      <Row className="mt-5">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <Link className="text-decoration-none" to={"/productList"}>
                      <DealCard
                        imgUrl={womenWestern}
                        offer="Upto 40% off"
                        title="Women's Western Clothing"
                      />
                    </Link>
                  </div>
                  <div>
                    <DealCard
                      imgUrl={menWestern}
                      offer="Upto 40% off"
                      title="Men's Western Clothing"
                    />
                  </div>
                  <div>
                    <DealCard
                      imgUrl={casualShoes}
                      offer="Upto 50% off"
                      title="Casual Shoes"
                    />
                  </div>
                  <div>
                    <DealCard
                      imgUrl={runningShoes}
                      offer="Upto 50% off"
                      title="Running Shoes"
                    />
                  </div>
                  <div>
                    <DealCard
                      imgUrl={jwellery}
                      offer="Upto 20% off"
                      title="Statement Fashion Jewellery"
                    />
                  </div>
                  <div>
                    <DealCard
                      imgUrl={sunglasses}
                      offer="Upto 10% off"
                      title="Sunglasses"
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

export default Deals;
