import rightArrow from "../../assets/rightArrow.svg";
import womenWestern from "../../assets/western.png";
import menWestern from "../../assets/men.png";
import casualShoes from "../../assets/casualShoe.png";
import runningShoes from "../../assets/running.png";
import sunglasses from "../../assets/sunglasses.png";
import jwellery from "../../assets/jwellery.png";

import { Col, Container, Nav, Row } from "react-bootstrap";
import "./deals.scss";
import DealCard from "../dealCard/DealCard";

const Deals = () => {
  return (
    <Container className="my-5 deal-main">
      <Row>
        <Col className="col-12 p-0 col-md-10 offset-md-1">
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

      <Row>
        <Col className="col-12 p-0 col-md-10 offset-md-1">
          <Row className="d-flex">
            <Col>
              <DealCard
                imgUrl={womenWestern}
                offer="Upto 40% off"
                title="Women's Western Clothing"
              />
            </Col>
            <Col>
              <DealCard
                imgUrl={menWestern}
                offer="Upto 40% off"
                title="Women's Western Clothing"
              />
            </Col>
            <Col>
              <DealCard
                imgUrl={casualShoes}
                offer="Upto 50% off"
                title="Casual Shoes"
              />
            </Col>
            <Col>
              <DealCard
                imgUrl={runningShoes}
                offer="Upto 50% off"
                title="Men's Running shoes"
              />
            </Col>
            <Col>
              <DealCard
                imgUrl={jwellery}
                offer="Upto 20% off"
                title="Statement Fashion Jewellery"
              />
            </Col>
            <Col>
              <DealCard
                imgUrl={sunglasses}
                offer="Upto 10% off"
                title="Sunglasses"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Deals;
