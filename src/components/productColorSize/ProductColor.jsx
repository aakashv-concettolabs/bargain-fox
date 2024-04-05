import "./productColorSize.scss";
import { Col, Row } from "react-bootstrap";

const ProductColorSize = ({ productcolor }) => {
  return (
    <Row className="mt-3">
      <Col>
        <span className="text-body-tertiary">Color: </span>
        <strong>{productcolor[0].variation_name}</strong>
        <div className="d-flex gap-2">
          {productcolor.map((color) => (
            <div className="colorContainer rounded " key={color.variation_id}>
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

export default ProductColorSize;
