import axios from "axios";
import "./orderList.scss";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { orderlist } from "../../api/Apis";
import cancelIcon from "../../assets/cancel-icon.svg";
import star from "../../assets/star.svg";
import noProduct from "../../assets/noorder.svg";
import { Link } from "react-router-dom";
import moment from "moment";

const rateTheProductData = [star, star, star, star, star];

const OrderList = () => {
  const token = localStorage.getItem("token");
  const [orderlistData, setOrderlistData] = useState();
  const [timePeriod, setTimePeriod] = useState("2024");
  const [typeValue, setTypeValue] = useState("all");

  const orderlistCall = async () => {
    if (token) {
      try {
        const response = await axios.post(
          orderlist,
          { per_page: 5, period: timePeriod, order_type: typeValue },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status == 200) {
          setOrderlistData(response.data.result);
        }
      } catch (error) {
        console.log("order list call error", error);
      }
    }
  };

  useEffect(() => {
    orderlistCall();
  }, [timePeriod, typeValue]);

  const handlePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeValue(e.target.value);
  };

  const handleMyOrder = () => {
    setTimePeriod("2024");
    setTypeValue("all");
  };

  return (
    <Container className="orders-main mx-lg-5 my-4 my-lg-0">
      <Row className="pb-4 border-bottom">
        <Col className="d-md-flex gap-md-2 justify-content-between align-items-md-center">
          <h2>Your Orders</h2>
          <Row className="gap-2">
            <Col className="d-flex align-items-center border rounded-5 py-2 px-3 gap-1">
              <label className="text-secondary d-none d-sm-flex">Period:</label>
              <select
                className="shadow-none border-0 focus-ring bg-white"
                value={timePeriod}
                onChange={handlePeriodChange}
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="older">Older</option>
              </select>
            </Col>
            <Col className="d-flex align-items-center border rounded-5 py-2 px-3 gap-1">
              <label className="text-secondary d-none d-sm-flex">Type:</label>
              <select
                className="shadow-none border-0 focus-ring bg-white"
                value={typeValue}
                onChange={handleTypeChange}
              >
                <option value="all">All Orders</option>
                <option value="out_for_delivery">On the way</option>
                <option value="delivered">Delivered</option>
                <option value="order_cancel">Cancelled</option>
                <option value="return_request">Returned</option>
              </select>
            </Col>
          </Row>
        </Col>
      </Row>

      {orderlistData && orderlistData?.data.length == 0 && (
        <Row className="my-5">
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <div style={{ width: "150px" }}>
              <Image src={noProduct} className="h-100 w-100" />
            </div>
            <h2 className="mt-4">No order found</h2>
            <p className="my-3 text-center">
              Try using different filter or go to back to orders
            </p>
            <Link
              className="btn btn-primary rounded-5 px-3 py-2"
              onClick={handleMyOrder}
            >
              Go to My Orders
            </Link>
          </Col>
        </Row>
      )}

      {orderlistData &&
        orderlistData.data.map((data) => (
          <Row className=" border-bottom py-3 flex-column gap-3" key={data.id}>
            <Col className="orderId">
              <span>Order #</span>
              <strong>{data.sub_order_number}</strong>
            </Col>
            <Col className="orderItem">
              <Row className="justify-content-between">
                <Col className="d-flex gap-3">
                  <div className="orderItemImageDiv">
                    <Image
                      src={
                        data.product_info.product_images[0].product_image_url
                      }
                      className="w-100 h-100"
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-between pb-2">
                    <p className="mb-0">{data.product_info.name}</p>
                    <div className="fw-semibold fs-4">
                      <sup>$</sup>
                      <span>{data.amount}</span>
                    </div>

                    <div className="d-flex gap-5">
                      {data.product_info.product_variation_detail.map(
                        (product) => (
                          <div
                            className="d-flex gap-1"
                            key={product.variation_id}
                          >
                            <span className="text-body-tertiary">
                              {product.variation_type}:
                            </span>
                            <span>{product.variation_name}</span>
                          </div>
                        )
                      )}
                      <div className="d-flex gap-1">
                        <span className="text-body-tertiary">Quantity:</span>
                        <span>{data.quantity}</span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="d-flex flex-column align-items-end justify-content-between pb-3">
                  <p className="fw-semibold mb-0">
                    <span className="text-success">Arriving On: </span>
                    {moment(data.expected_delivery_at).format("MMM DD, YYYY")}
                  </p>
                  <div>
                    <Button className="bg-white text-black border-dark-subtle rounded-5 px-3 d-flex align-items-center gap-2">
                      <Image src={cancelIcon} /> Cancel Order
                    </Button>
                  </div>
                  {data.order_status.name === "Delivered" && (
                    <div className="d-flex gap-2">
                      <span className="d-flex gap-2">
                        {rateTheProductData.map((star, index) => (
                          <Image
                            src={star}
                            alt="rate the product star"
                            key={index}
                          />
                        ))}
                      </span>
                      <span className="text-primary">Rate This Product</span>
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default OrderList;
