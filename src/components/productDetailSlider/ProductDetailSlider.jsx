import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import mainProductImg from "../../assets/mainProductImg.png";
import ProductImgs from "../../pages/productDetails/productImgs.js";
import Slider from "react-slick";
import "./productDetailSlider.scss";
import {
  productDetailSliderAsettings,
  productDetailSliderBsettings,
} from "../sliderSetting/SliderSetting.js";

const ProductDetailSlider = ({ productImages }) => {
  const [thumnailImg, setThumnailImg] = useState(mainProductImg);

  const handleProductImg = (productImg) => {
    setThumnailImg(productImg);
  };
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
            {...productDetailSliderAsettings}
          >
            {ProductImgs.map((productImg) => (
              <Image
                alt="171x180"
                src={productImg.imgUrl}
                className="border rounded-4 h-full"
                key={productImg.id}
                onClick={() => handleProductImg(productImg.imgUrl)}
              />
            ))}
          </Slider>
        </Col>
        <Col lg={9} xs={9}>
          <Slider
            {...productDetailSliderBsettings}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            focusOnSelect={true}
          >
            <div className="border d-flex justify-content-center bg-body-secondary">
              <Image src={thumnailImg} alt="" height="100%" width="90%" />
            </div>
          </Slider>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailSlider;
