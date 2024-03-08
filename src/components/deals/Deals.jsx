import Slider from "react-slick";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./deals.scss";
import DealCard from "../dealCard/DealCard";
import { Link } from "react-router-dom";
import SectionHeading from "../sectionheading/SectionHeading";
import { settings, dealofthedays } from "../sliderSetting/SliderSetting.js";

const Deals = () => {
  return (
    <Container className="my-5 deal-main">
      <SectionHeading sectionHeadingTitle="Deals Of The Day" />

      <Row className="mt-5">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {dealofthedays.map((dealoftheday) => (
                    <div key={dealoftheday.id}>
                      <Link
                        className="text-decoration-none"
                        to={"/productList"}
                      >
                        <DealCard
                          imgUrl={dealoftheday.imgUrl}
                          offer={dealoftheday.offer}
                          title={dealoftheday.title}
                        />
                      </Link>
                    </div>
                  ))}
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
