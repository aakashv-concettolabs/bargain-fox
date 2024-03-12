import { Container, Row, Col } from "react-bootstrap";
import "./electronics.scss";
import Slider from "react-slick";
import ProductCard from "../productCard/ProductCard";
import { electronicDatas, settings } from "../sliderSetting/SliderSetting";
import SectionHeading from "../sectionheading/SectionHeading";

const Electronics = () => {
  return (
    <Container className="electronics-main mt-5">
      <SectionHeading sectionHeadingTitle="Electronics" />

      <Row className="mt-4">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {electronicDatas.map((electronicData) => (
                    <ProductCard
                      imgUrl={electronicData.imgUrl}
                      detail={electronicData.detail}
                      offerPrice={electronicData.offerPrice}
                      price={electronicData.price}
                      key={electronicData.id}
                    />
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

export default Electronics;
