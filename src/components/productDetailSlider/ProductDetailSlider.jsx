import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./productDetailSlider.scss";
import {
  productDetailSliderAsettings,
  productDetailSliderBsettings,
} from "../sliderSetting/SliderSetting.js";

const ProductDetailSlider = ({ productImages }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      <Row id="productDetailSliderMain">
        <Col lg={3} xs={3}>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            focusOnSelect={true}
            {...productDetailSliderAsettings}
          >
            {productImages &&
              productImages.map((productImg) => (
                <div key={productImg.id} className="sideSliderImgDiv">
                  <Image
                    alt="171x180"
                    src={productImg.product_image_url}
                    className="border rounded-4 h-100 w-100"
                  />
                </div>
              ))}
          </Slider>
        </Col>
        <Col lg={9} xs={9}>
          <Slider
            {...productDetailSliderBsettings}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
          >
            {productImages &&
              productImages.map((productImg) => (
                <div
                  className="border d-flex justify-content-center bg-body-secondary"
                  key={productImg.id}
                >
                  <Image
                    src={productImg.product_image_url}
                    alt=""
                    height="100%"
                    width="90%"
                  />
                </div>
              ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailSlider;
