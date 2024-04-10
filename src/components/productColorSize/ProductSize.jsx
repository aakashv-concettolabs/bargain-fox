import "./productColorSize.scss";
import { Col, Row } from "react-bootstrap";

// const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const ProductSize = ({ productsize, handleSizeClick, selectedSize }) => {
  return (
    <Row className="mt-3">
      <Col>
        <div className="d-flex gap-2">
          <span className="text-body-tertiary">Size:</span>{" "}
          <div className="d-flex gap-2">
            {productsize.map((size) => (
              <div
                key={size.variation_id}
                className={`sizeContainer rounded-4 px-md-3 px-2 small ${
                  size.variation_id === selectedSize ? "sizeSelected" : ""
                }`}
                onClick={() => handleSizeClick(size.variation_id)}
              >
                <div>{size.variation_name}</div>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductSize;
