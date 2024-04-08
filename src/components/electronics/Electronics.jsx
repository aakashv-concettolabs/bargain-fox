import { Container, Row, Col } from "react-bootstrap";
import "./electronics.scss";
import Slider from "react-slick";
import ProductCard from "../productCard/ProductCard";
import { settings } from "../sliderSetting/SliderSetting";
import SectionHeading from "../sectionheading/SectionHeading";
import { productlist } from "../../api/Apis";
import { useEffect, useState } from "react";
import axios from "axios";

const Electronics = () => {
  const [responseResult, setresponseResult] = useState([]);

  const productListApiCall = async () => {
    try {
      const response = await axios.post(productlist, {
        category_id: "electronics",
      });
      setresponseResult(response.data.result.data);
    } catch (error) {
      console.log("productlist electronics error", error);
    }
  };

  useEffect(() => {
    productListApiCall();
  }, []);
  return (
    <Container className="electronics-main mt-5">
      <SectionHeading
        sectionHeadingTitle="Electronics"
        sectionlinktarget="/electronics"
      />

      <Row className="mt-4">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {responseResult.map((electronicData) => (
                    <ProductCard
                      key={electronicData.id}
                      productData={electronicData}
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
