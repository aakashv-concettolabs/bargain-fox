import "./customerReview.scss";
import ProductImgs from "../../pages/productDetails/productImgs.js";
import fourstar from "../../assets/4Star.svg";
import tick from "../../assets/tick.png";
import brandlist from "../../assets/brandlist.svg";
import star from "../../assets/star.svg";
import { Col, Row, ProgressBar, Image } from "react-bootstrap";
import { ratingData, customerComments } from "./customerReviewDetails.js";
import RatingStar from "../ratingStar/RatingStar.jsx";

const CustomerReview = ({
  totalPurchase,
  description,
  specifications,
  averageRating,
  totalReview,
  rantingCount,
}) => {
  return (
    <>
      <Row className="customerReviewMain mt-3 px-md-4 flex-column-reverse flex-md-row">
        <Col xs={12} md={6} className="topBorder">
          <p className="fw-bold fs-4 p-3">Customer Ratings & Reviews</p>
          <Row>
            <Col className="rightBorder d-flex flex-column justify-content-center align-items-center">
              <span className="rateCount">{averageRating}</span>
              <RatingStar />
              <span className="mt-2">{totalReview} Ratings & Reviews</span>
            </Col>
            <Col className="my-auto">
              {ratingData.map((rating) => (
                <div
                  className="d-flex align-items-center ps-sm-4 ps-md-2 ps-lg-4  gap-2"
                  key={rating.id}
                >
                  <span className="d-flex align-items-center gap-1">
                    {rating.starRate} <img src={star} alt="" />
                  </span>
                  <div className="w-50">
                    <ProgressBar now={rating.rateCount} />
                  </div>
                  {rating.rateCount}
                </div>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="topBorder px-3">
          <Row>
            <Col>
              <p className="fw-bold fs-4 px-3 py-1">HighLight</p>
              <span className="d-flex align-items-center gap-1">
                <img src={tick} alt="" height="20px" width="20px" />
                {totalPurchase} Customers bought this item
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="topBorder mt-3">
              <p className="fw-bold fs-4 px-3 py-1">Product Description</p>
              <span>{description}</span>
              {specifications &&
                specifications.map((specification) => (
                  <p className="d-flex gap-2 mt-2" key={specification.id}>
                    <img src={brandlist} alt="cirlce" />
                    <strong>{specification.spec_name}:</strong>
                    {specification.spec_value}
                  </p>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mt-3 topBottomBorder py-4">
          <div className="d-flex justify-content-between align-items-center">
            <img src={fourstar} alt="" className="star" />
            <span className="rateThisProduct">Rate This Product</span>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={6}>
          <p className="fw-bold fs-4 px-3 ">Customer Photos(5)</p>
          <div className="px-3">
            {ProductImgs.map((productImg) => (
              <Image
                alt="171x180"
                src={productImg.imgUrl}
                className="border rounded-4"
                key={productImg.id}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={6}>
          <p className="fw-bold fs-4 px-3">Customer Review(3)</p>
          {customerComments.map((comment) => (
            <div key={comment.id} className="my-3 px-3">
              <div className="d-flex gap-3 align-items-center my-2">
                <img src={comment.customerImage} alt="" />
                <p className="fw-medium">{comment.customerName}</p>
              </div>
              <div>{comment.comment}</div>
              <div className="d-flex align-items-center gap-2">
                <img src={fourstar} alt="" />{" "}
                <span className="text-body-tertiary">10 July 2021</span>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default CustomerReview;
