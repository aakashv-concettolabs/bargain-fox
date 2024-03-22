import "./garden.scss";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import SectionHeading from "../sectionheading/SectionHeading";
import { settings } from "../sliderSetting/SliderSetting";
import { useEffect, useState } from "react";
import axios from "axios";
import { productlist } from "../../api/Apis";

const Garden = () => {
  const [responseResult, setresponseResult] = useState([]);

  const productListApiCall = async () => {
    try {
      const response = await axios.post(productlist);
      setresponseResult(response.data.result.data);
    } catch (error) {
      console.log("productlist error", error);
    }
  };
  useEffect(() => {
    productListApiCall();
  }, []);

  return (
    <Container className="garden-main mt-5">
      <SectionHeading sectionHeadingTitle="Garden & DIY" />
      <Row className="mt-4">
        <Col className="col-12  ">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {responseResult.map((gardenData) => (
                    <ProductCard
                      imgUrl={gardenData.product_images[0].product_image_url}
                      detail={gardenData.name}
                      key={gardenData.id}
                      price={gardenData.main_rrp}
                      offerPrice={gardenData.my_sale_price}
                      discountPercent={gardenData.percentage_discount}
                    />
                  ))}
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
