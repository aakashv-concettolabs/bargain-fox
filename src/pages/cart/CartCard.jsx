import React, { useState } from "react";
import { Row, Col, Button, Image, FormCheck } from "react-bootstrap";
import Counter from "../../components/counter/Counter";
import { addToCartApi } from "../../api/Apis";
import { toast } from "react-toastify";
import axios from "axios";

const CartCard = ({ handleDelete, eachCart, myCart }) => {
  const { product_info } = eachCart;

  const [productCounter, setProductCounter] = useState(eachCart.quantity);

  const addToCartCall = async (Id, variationId, productIncrease) => {
    const apiData = {
      product_id: Id,
      quantity: productIncrease ? productCounter + 1 : productCounter - 1,
      product_variation_id: variationId,
    };

    try {
      const addToCartResponse = await axios.post(addToCartApi, apiData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (addToCartResponse.status === 200) {
        productIncrease
          ? toast.success(addToCartResponse.data.message)
          : toast.error("product remove successfully");
      }
    } catch (error) {
      console.log("add to cart error", error);
    }
  };

  const handlePlus = (Id, variationId) => {
    if (productCounter >= 40) {
      toast.error(`We have ${product_info.stock} items left only`);
    } else {
      const productIncrease = true;
      myCart();
      setProductCounter(productCounter + 1);
      addToCartCall(Id, variationId, productIncrease);
    }
  };

  const handleMinus = (Id, variationId) => {
    if (productCounter > 1) {
      myCart();
      setProductCounter(productCounter - 1);
      addToCartCall(Id, variationId);
    }
  };
  return (
    <Row className="mt-3">
      <Col xs={12} xl={8} className="d-flex align-items-center gap-2">
        {/* <FormCheck  /> */}
        <Image
          src={product_info?.product_images[0]?.product_image_url}
          className="productImg"
        />
        <div>
          <Row className="flex-column ms-1 gap-1">
            <Col className="">
              <p className="productHeading">{product_info?.name}</p>
            </Col>
            <Col>
              <div className="d-flex gap-2 align-items-center">
                <span className="fw-bold lead">
                  <sup>$</sup>
                  {product_info?.sale_price}
                </span>
                <span className="text-muted small">
                  <strike>{product_info?.main_rrp}</strike>
                </span>
                <span className="text-primary small">
                  {Math.floor(
                    product_info?.percentage_discount != 0
                      ? product_info?.percentage_discount
                      : product_info?.discount_percentage
                  )}
                  %
                </span>
              </div>
            </Col>
            <Col className="d-none d-sm-flex gap-2 mt-3">
              <Counter
                productCounter={productCounter}
                handlePlus={() =>
                  handlePlus(product_info.id, eachCart.product_variation_id)
                }
                handleMinus={() =>
                  handleMinus(product_info.id, eachCart.product_variation_id)
                }
              />
              <div className="d-flex  align-items-center text-body-tertiary text-opacity-25">
                <Button
                  className="border-0 text-black bg-transparent fw-bold"
                  onClick={() => handleDelete(eachCart.id)}
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
          handlePlus={() =>
            handlePlus(product_info.id, eachCart.product_variation_id)
          }
          handleMinus={() =>
            handleMinus(product_info.id, eachCart.product_variation_id)
          }
        />
        <div className="d-flex gap-1 align-items-center text-body-tertiary text-opacity-25">
          <Button
            className="border-0 text-black bg-transparent fw-medium pe-0"
            onClick={() => handleDelete(eachCart.id)}
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
              {product_info?.product_condition?.title}
            </span>
          </p>
        </div>
        <div className="d-flex gap-1">
          <p className="text-body-tertiary">
            Sold, by{" "}
            <span className="text-black">
              {product_info?.vendor_info?.trading_name},{" "}
            </span>
            <span className="leftItem">{product_info?.stock} left</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default CartCard;
