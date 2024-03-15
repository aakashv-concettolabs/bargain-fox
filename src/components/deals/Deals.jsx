import Slider from "react-slick";
import { Col, Container, Card, Row, Image } from "react-bootstrap";
import "./deals.scss";
// import DealCard from "../dealCard/DealCard";
import { Link } from "react-router-dom";
import SectionHeading from "../sectionheading/SectionHeading";
import { dealsettings, dealofthedays } from "../sliderSetting/SliderSetting.js";

const Deals = () => {
  return (
    <Container className="my-5 deal-main">
      <SectionHeading sectionHeadingTitle="Deals Of The Day" />

      <Row className="mt-5">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...dealsettings}>
                  {dealofthedays.map((dealoftheday) => (
                    <div key={dealoftheday.id}>
                      <Link
                        className="text-decoration-none"
                        to={"/productList"}
                      >
                        <Card>
                          <div>
                            <Image
                              src={dealoftheday.imgUrl}
                              className="w-100"
                            />
                          </div>
                          <div className="px-3 mt-2 pb-4">
                            <p className="offertext">{dealoftheday.offer}</p>
                            <p className="fw-medium dealtitle">
                              {dealoftheday.title}
                            </p>
                          </div>
                        </Card>
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
