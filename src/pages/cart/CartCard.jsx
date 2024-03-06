import React from "react";
import { Row, Col, Button, Image, FormCheck } from "react-bootstrap";
import CartJewelry from "../../assets/cartjewelry.png";

const CartCard = ({ productheading, imgUrl }) => {
  return (
    <Row className="mt-3">
      <Col xs={12} xl={8} className="d-flex align-items-center gap-2">
        <FormCheck />
        <Image src={imgUrl} className="productImg" />
        <div>
          <Row className="flex-column ms-1 gap-1">
            <Col className="">
              <p className="productHeading">{productheading}</p>
            </Col>
            <Col>
              <div className="d-flex gap-2 align-items-center">
                <span className="fw-bold lead">
                  <sup>$</sup>8.25
                </span>
                <span className="text-muted small">
                  <strike>$16.50</strike>
                </span>
                <span className="text-primary small">-65%</span>
              </div>
            </Col>
            <Col className="d-none d-sm-flex gap-2 mt-3">
              <div className="d-flex align-items-center gap-2">
                <span className="text-body-tertiary">Quantity:</span>
                <span className="d-flex gap-1 align-items-center border">
                  <button className="btn-outline-secondary btn border-0 border-end rounded-0">
                    -
                  </button>
                  <span className="px-2">0</span>
                  <button className="btn-outline-secondary btn border-0 border-start rounded-0">
                    +
                  </button>
                </span>
              </div>
              <div className="d-flex gap-2 align-items-center text-body-tertiary text-opacity-25">
                <Button className="border-0 text-black bg-transparent fw-bold">
                  Delete
                </Button>
                |
                <Button className="border-0 text-black bg-transparent fw-bold">
                  Share
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="d-flex d-sm-none mt-2">
        <div>
          <p className="text-body-tertiary d-flex align-items-center gap-1 m-0">
            Quantity:
            <span className="d-flex align-items-center border">
              <button className="btn-outline-secondary btn border-0 border-end rounded-0 px-2">
                -
              </button>
              <span className="px-2">0</span>
              <button className="btn-outline-secondary btn border-0 border-start rounded-0 px-2">
                +
              </button>
            </span>
          </p>
        </div>
        <div className="d-flex gap-1 align-items-center text-body-tertiary text-opacity-25">
          <Button className="border-0 text-black bg-transparent fw-medium pe-0">
            Delete
          </Button>
          |
          <Button className="border-0 text-black bg-transparent fw-medium pe-0">
            Share
          </Button>
        </div>
      </Col>

      <Col
        xs={12}
        xl={4}
        className="d-flex flex-column flex-sm-row flex-xl-column align-items-xl-end gap-0 gap-sm-3 gap-xl-0 small mt-2 mt-xl-0"
      >
        <div className="d-flex gap-1">
          <p className="text-body-tertiary">
            Condition:
            <span className="text-black">Brand New</span>
          </p>
        </div>
        <div className="d-flex gap-1">
          <p className="text-body-tertiary">
            Sold, by <span className="text-black">BargainFox Vendor, </span>
            <span className="leftItem">82 left</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default CartCard;
