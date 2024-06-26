import React from "react";
import "./productColorSize.scss";
import { Col, Row } from "react-bootstrap";

const ProductColor = ({
  productcolor,
  handleColorChange,
  selectedVariationId,
  selectedColor,
}) => {
  return (
    <Row className="mt-3">
      <Col>
        <span className="text-body-tertiary">Color: </span>
        <strong>{selectedColor}</strong>
        <div className="d-flex gap-2">
          {productcolor &&
            productcolor.map((color) => (
              <div
                className={`colorContainer rounded ${
                  color.variation_id === selectedVariationId ? "selected" : ""
                }`}
                key={color.variation_id}
                onClick={() => handleColorChange(color.variation_id)}
              >
                <div
                  className="color rounded"
                  style={{ backgroundColor: `${color.variation_name}` }}
                ></div>
              </div>
            ))}
        </div>
      </Col>
    </Row>
  );
};

export default ProductColor;
