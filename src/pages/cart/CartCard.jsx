import React, { useState } from "react";
import { Row, Col, Button, Image, FormCheck } from "react-bootstrap";
import Counter from "../../components/counter/Counter";
import { toast } from "react-toastify";
import { removeFromCartApi } from "../../api/Apis";
import axios from "axios";

const CartCard = ({ productInfo, quantity, id, myCart }) => {
  const [productCounter, setProductCounter] = useState(quantity);

  const removeFromCart = async () => {
    try {
      const RemoveFromCartResponse = await axios.post(
        removeFromCartApi,
        { cart_product_id: [id] },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (RemoveFromCartResponse.status === 200) {
        toast.success(RemoveFromCartResponse.data.message);
      }
    } catch (error) {
      console.log("Remove from cart error", error.response.data);
    }
  };

  const handleDelete = () => {
    removeFromCart();
    myCart();
  };

  const handlePlus = () => {
    if (productCounter >= productInfo.stock) {
      toast.error(`We have ${productInfo.stock} items left only`);
    } else {
      setProductCounter(productCounter + 1);
    }
  };

  const handleMinus = () => {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  };
  return (
    <Row className="mt-3">
      <Col xs={12} xl={8} className="d-flex align-items-center gap-2">
        <FormCheck />
        <Image
          src={productInfo.product_images[0].product_image_url}
          className="productImg"
        />
        <div>
          <Row className="flex-column ms-1 gap-1">
            <Col className="">
              <p className="productHeading">{productInfo.name}</p>
            </Col>
            <Col>
              <div className="d-flex gap-2 align-items-center">
                <span className="fw-bold lead">
                  <sup>$</sup>
                  {productInfo.sale_price}
                </span>
                <span className="text-muted small">
                  <strike>{productInfo.main_rrp}</strike>
                </span>
                <span className="text-primary small">
                  {Math.floor(
                    productInfo?.percentage_discount != 0
                      ? productInfo?.percentage_discount
                      : productInfo?.discount_percentage
                  )}
                  %
                </span>
              </div>
            </Col>
            <Col className="d-none d-sm-flex gap-2 mt-3">
              <Counter
                productCounter={productCounter}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
              />
              <div className="d-flex  align-items-center text-body-tertiary text-opacity-25">
                <Button
                  className="border-0 text-black bg-transparent fw-bold"
                  onClick={handleDelete}
                >
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
        <Counter
          productCounter={productCounter}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
        <div className="d-flex gap-1 align-items-center text-body-tertiary text-opacity-25">
          <Button
            className="border-0 text-black bg-transparent fw-medium pe-0"
            onClick={handleDelete}
          >
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
            Condition:{" "}
            <span className="text-black">
              {productInfo?.product_condition?.title}
            </span>
          </p>
        </div>
        <div className="d-flex gap-1">
          <p className="text-body-tertiary">
            Sold, by{" "}
            <span className="text-black">
              {productInfo?.vendor_info?.trading_name},{" "}
            </span>
            <span className="leftItem">{productInfo?.stock} left</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default CartCard;
