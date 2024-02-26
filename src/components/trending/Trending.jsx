import { Container, Row, Col, Nav, Figure } from "react-bootstrap";
import rightArrow from "../../assets/rightArrow.svg";
import electronis from "../../assets/electronis.png";
import kitchen from "../../assets/kitchen.png";
import home from "../../assets/home.png";
import Toytrending from "../../assets/Toy-trending.png";
import sports from "../../assets/sports.png";
import jobLot from "../../assets/jobLot.png";
import pet from "../../assets/pet.png";
import weeklyDeal from "../../assets/WeeklyDeal.png";
import clearanceWeekly from "../../assets/clearanceWeekly.png";
import trendingWeekly from "../../assets/trendingweekly.png";
import "./trending.scss";
import Circle from "../circle/Circle";
import { Link } from "react-router-dom";

const Trending = () => {
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
              <div className="d-flex justify-content-between">
                <div>
                  <Circle
                    imgUrl={electronis}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Electronics"
                    offerText="Upto 50% off"
                  />
                </div>
                <div>
                  <Circle
                    imgUrl={kitchen}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Kitchen"
                    offerText="Upto 50% off"
                  />
                </div>
                <div>
                  <Circle
                    imgUrl={home}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Home"
                    offerText="From £50"
                  />
                </div>
                <div className="d-none d-sm-block">
                  <Circle
                    imgUrl={Toytrending}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Toys & Crafts"
                    offerText="From £100"
                  />
                </div>
                <div className="d-none d-md-block">
                  <Circle
                    imgUrl={sports}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Sports & Leisure"
                    offerText="Upto 50% off"
                  />
                </div>
                <div className="d-none d-lg-block">
                  <Circle
                    imgUrl={jobLot}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Job Lots"
                    offerText="Upto 15% off"
                  />
                </div>
                <div className="d-none d-xl-block">
                  <Circle
                    imgUrl={pet}
                    imgStyle="bg-body-secondary rounded-circle p-1"
                    categoryText="Pets"
                    offerText="Upto 10% off"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="col-12 col-md-10 offset-md-1">
          <Row>
            <Col className=" d-flex justify-content-center align-items-center col-12 col-sm-4">
              <Figure>
                <Figure.Image
                  width={320}
                  height={320}
                  alt="Deals of the week"
                  src={weeklyDeal}
                />
                <Figure.Caption className="text-center d-flex flex-column">
                  <span className="fw-bolder text-black weeklyTitle">
                    Deals of the Week
                  </span>
                  <span>
                    <Link className="text-decoration-none productList" to="/">
                      View all products
                    </Link>
                  </span>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col className=" d-flex justify-content-center align-items-center col-12 col-sm-4">
              <Figure>
                <Figure.Image
                  width={320}
                  height={320}
                  alt="trendings"
                  src={trendingWeekly}
                />
                <Figure.Caption className="text-center d-flex flex-column">
                  <span className="fw-bolder text-black weeklyTitle">
                    Trendings
                  </span>
                  <span>
                    <Link className="text-decoration-none productList" to="/">
                      View all products
                    </Link>
                  </span>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col className=" d-flex justify-content-center align-items-center col-12 col-sm-4">
              <Figure>
                <Figure.Image
                  width={320}
                  height={320}
                  alt="Clearenace"
                  src={clearanceWeekly}
                />
                <Figure.Caption className="text-center d-flex flex-column">
                  <span className="fw-bolder text-black weeklyTitle">
                    Clearance
                  </span>
                  <span>
                    <Link className="text-decoration-none productList" to="/">
                      View all products
                    </Link>
                  </span>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
