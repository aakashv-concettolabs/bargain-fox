import { Container, Row, Col, Nav } from "react-bootstrap";
import rightArrow from "../../assets/rightArrow.svg";
import electronis from "../../assets/electronis.png";
import kitchen from "../../assets/kitchen.png";
import home from "../../assets/home.png";
import Toytrending from "../../assets/Toy-trending.png";
import sports from "../../assets/sports.png";
import jobLot from "../../assets/jobLot.png";
import pet from "../../assets/pet.png";
import DealCard from "../dealCard/DealCard";

import "./trending.scss";
import Slider from "react-slick";

const Trending = () => {
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
    ],
  };
  return (
    <Container className="trending-main">
      <Row>
        <Col className="col-12 p-0 col-md-10 offset-md-1">
          <Row>
            <Col className="col-8 d-flex gap-2">
              <div className="d-flex align-items-center">
                <span className="trending-title fw-bolder">
                  Trending on BargainFox
                </span>
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
        <Col className="col-12 col-md-10 offset-md-1">
          <Row>
            <Col>
              <div className="d-flex">
                <div>
                  <DealCard
                    imgUrl={electronis}
                    offer="Upto 10% off"
                    title="Electronics"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={kitchen}
                    offer="Upto 50% off"
                    title="Kitchen"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={home}
                    offer="From £50"
                    title="Home"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={Toytrending}
                    offer="From £100"
                    title="Toys & Crafts"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 "
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={sports}
                    offer="Upto 50% off"
                    title="Sports & Leisure"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={jobLot}
                    offer="Upto 15% off"
                    title="Job Lots"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
                <div>
                  <DealCard
                    imgUrl={pet}
                    offer="Upto 10% off"
                    title="Pets"
                    offerStyle="bg-warning p-1 py-1 text-white rounded-3 d-flex justify-content-center"
                    imgStyle=" bg-body-secondary rounded-circle p-3 h-75 w-75"
                    titleStyle="text-center"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
