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
      const response = await axios.post(productlist);
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
      <SectionHeading sectionHeadingTitle="Electronics" />

      <Row className="mt-4">
        <Col className="col-12">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {responseResult.map((electronicData) => (
                    <ProductCard
                      imgUrl={
                        electronicData.product_images[0].product_image_url
                      }
                      detail={electronicData.name}
                      key={electronicData.id}
                      price={electronicData.main_rrp}
                      offerPrice={electronicData.my_sale_price}
                      discountPercent={electronicData.percentage_discount}
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
