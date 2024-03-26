import "./garden.scss";
import { Container, Row, Col } from "react-bootstrap";
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
    </Container>
  );
};

export default Garden;
