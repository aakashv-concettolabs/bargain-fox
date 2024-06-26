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
      const response = await axios.post(productlist, {
        sub_category_id: "garden-diy",
      });
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
      <SectionHeading
        sectionHeadingTitle="Garden & DIY"
        sectionlinktarget="/sports-leisure/garden-diy"
      />
      <Row className="mt-4">
        <Col className="col-12  ">
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  {responseResult.map((gardenData) => (
                    <ProductCard key={gardenData.id} productData={gardenData} />
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
