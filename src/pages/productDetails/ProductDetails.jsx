import { Col, Container, Row, Button, Image } from "react-bootstrap";
import "./productDetails.scss";
import share from "../../assets/share.png";
import people from "../../assets/people.png";
import { Link, useParams } from "react-router-dom";
import ProductColor from "../../components/productColorSize/ProductColor";
import ProductSize from "../../components/productColorSize/ProductSize";
import ReturnPolicy from "../../components/returnPolicy/ReturnPolicy";
import CustomerReview from "../../components/cusomerReview/CustomerReview";
import email from "../../assets/emailimg.svg";
import FB from "../../assets/fbimg.svg";
import copylink from "../../assets/copylink.svg";
import pinterest from "../../assets/pinterestimg.svg";
import ProductPriceTag from "../../components/productPriceTag/ProductPriceTag.jsx";
import ProductDetailSlider from "../../components/productDetailSlider/ProductDetailSlider.jsx";
import Counter from "../../components/counter/Counter.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { productDetailApi } from "../../api/Apis.js";
import RatingStar from "../../components/ratingStar/RatingStar.jsx";
import { toast } from "react-toastify";

const shareOptions = [
  {
    mode: "Email",
    imgUrl: email,
  },
  {
    mode: "Facebook",
    imgUrl: FB,
  },
  {
    mode: "Pinterest",
    imgUrl: pinterest,
  },
  {
    mode: "Copy Link",
    imgUrl: copylink,
  },
];

const initialProductDetail = {
  avg_rating: null,
  cart_qty_count: null,

  category_id: null,
  category_info: null,
  collection_id: null,
  color: null,
  condition_id: null,
  created_at: null,
  description: null,
  discount_value: null,
  expected_delivery: null,
  fastfox_enabled: null,
  id: null,
  is_added_cart: null,
  is_discount_on: null,
  is_out_stock: null,
  is_purchased: null,
  is_wishlisted: null,
  main_rrp: null,
  minimum_sale_price: null,
  name: null,
  parent_id: null,
  percentage_discount: null,
  price: null,
  product_condition: null,
  product_images: null,
  product_specification: null,
  product_view: null,
  purchase_count: null,
  rating_count: null,
  review: null,
  sale_price: null,
  share_url: null,
  size: null,
  size_chart: null,
  size_chart_url: null,
  sku: null,
  slug: null,
  standard_expected_delivery: null,
  stock: null,
  sub_category_id: null,
  total_review: null,
  unique_id: null,
  variation_list: null,
  vendor_id: null,
  vendor_info: null,
};

const ProductDetails = () => {
  const { productSlug, productId } = useParams();
  const [productDetail, setProductDetail] = useState(initialProductDetail);
  const [productCounter, setProductCounter] = useState(0);

  const handlePlus = () => {
    setProductCounter(productCounter + 1);
    if (productCounter >= 40) {
      setProductCounter(productCounter);
      toast.error("We're sorry! Only 40 unit(s) allowed in each order");
    }
  };

  const handleMinus = () => {
    setProductCounter(productCounter - 1);
  };

  useEffect(() => {
    const detailApiCall = async () => {
      try {
        const response = await axios.get(
          `${productDetailApi}/${productSlug}/${productId}`
        );
        if (response.status == 200) {
          setProductDetail({ price: response.data.result.description });
          setProductDetail(response.data.result);
          if (response.data.result.variation_list.length > 0) {
            setProductDetail({
              ...response.data.result,
              description: response.data.result.variation_list[0].description,
              percentage_discount:
                response.data.result.variation_list[0].percentage_discount,
              product_condition:
                response.data.result.variation_list[0].product_condition,
              main_rrp: response.data.result.variation_list[0].rrp,
              sale_price: response.data.result.variation_list[0].sale_price,
              avg_rating:
                response.data.result.variation_list[0].variation_avg_rating,
              product_images:
                response.data.result.variation_list[0].product_images,
            });
          }
        }
      } catch (error) {
        console.log("product detail error", error);
      }
    };

    detailApiCall();
  }, []);
  console.log("productDetail", productDetail);

  return (
    <Container fluid className="mt-3 productDetailMain">
      <Row className="justify-content-around">
        <Col lg={6} xs={12}>
          <ProductDetailSlider productImages={productDetail?.product_images} />
        </Col>
        <Col lg={6} xs={12} className="mt-4 mt-lg-0">
          <Row className="justify-content-between">
            <Col lg={9} xs={10}>
              <span className="fw-medium productTitle lh-1">
                {productDetail?.name}
              </span>
            </Col>
            <Col
              lg={2}
              xs={2}
              className="d-flex justify-content-lg-center justify-content-end align-items-center"
            >
              <div className="position-relative share">
                <div className="shareImage p-3 d-flex rounded-circle">
                  <img src={share} alt="share" />
                </div>

                <div className="position-absolute shareHover pt-4 pt-sm-3">
                  <ul className="text-decoration-none list-unstyled shadow-sm rounded-3 bg-body-tertiary">
                    {shareOptions.map((shareOption) => (
                      <li className="px-3 py-2" key={shareOption.mode}>
                        <Link className="text-decoration-none justify-content-between d-flex">
                          <span>{shareOption.mode}</span>
                          <Image src={shareOption.imgUrl} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Row>
                <Col xs={12} sm={6} className="d-flex gap-2 align-items-center">
                  <RatingStar averageRating={productDetail.avg_rating} />
                  <span>{productDetail?.avg_rating}</span>
                </Col>
                <Col xs={12} sm={6} className="d-flex justify-content-sm-end">
                  <span className="text-muted vendor">
                    Sold, by{" "}
                    <strong className="text-black">
                      {productDetail?.vendor_info?.trading_name}
                    </strong>
                  </span>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex align-items-center gap-3">
                  <ProductPriceTag
                    offerPrice={productDetail?.sale_price}
                    price={productDetail?.main_rrp}
                  />
                  <div>
                    <span className="discount bg-primary rounded-5 text-white px-3 py-1">
                      {productDetail?.percentage_discount}%
                    </span>
                  </div>
                </Col>
              </Row>
              {productDetail.color && productDetail.color?.length > 0 && (
                <ProductColor productcolor={productDetail.color} />
              )}
              {productDetail.size && productDetail.size?.length > 0 && (
                <ProductSize productsize={productDetail.size} />
              )}
              <Row className="mt-3">
                <Col>
                  <span className="text-body-tertiary">Condition:</span>{" "}
                  <strong>{productDetail?.product_condition?.title}</strong>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex align-items-center gap-1">
                  <Counter
                    productCounter={productCounter}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                  />
                </Col>
              </Row>
              <Row className="mt-3 flex-column-reverse flex-md-column">
                <Col className="d-sm-flex gap-3 topBottomBorder align-items-center pt-3">
                  <ReturnPolicy />
                </Col>
                <Col className="d-flex justify-content-md-end align-items-center mt-2 gap-1">
                  <div className="bg-body-secondary rounded-2 px-2 py-1 d-flex justify-content-between align-items-center gap-1">
                    <img src={people} alt="people" />
                    <span>{productDetail.product_view}</span>
                  </div>
                  <span className="fw-medium">
                    People looked for this product
                  </span>
                </Col>
                <Col className="mt-3">
                  <Row>
                    <Col>
                      <Button className="w-100 rounded-5 cart">
                        {productDetail.is_added_cart
                          ? "Go to Cart"
                          : "Add to Cart"}
                      </Button>
                    </Col>
                    <Col>
                      <Button className="w-100 rounded-5 buyNow">
                        Buy Now
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="mt-3">
                  <p>
                    Order within <span className="text-success">2h 25m</span>{" "}
                    and choose{" "}
                    <span className="text-primary">Express Shipping</span> to
                    get it by <strong>Tuesday 25/7/2023</strong>
                  </p>
                  <p>{productDetail?.standard_expected_delivery}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <CustomerReview
        totalPurchase={productDetail.purchase_count}
        description={productDetail.description}
        specifications={productDetail.product_specification}
        averageRating={productDetail.avg_rating}
        totalReview={productDetail.total_review}
        ratingCount={productDetail.rating_count}
      />
    </Container>
  );
};

export default ProductDetails;
