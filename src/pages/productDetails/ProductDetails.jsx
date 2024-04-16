import { Col, Container, Row, Button, Image } from "react-bootstrap";
import "./productDetails.scss";
import share from "../../assets/share.png";
import people from "../../assets/people.png";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
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
import { addToCartApi, productDetailApi } from "../../api/Apis.js";
import RatingStar from "../../components/ratingStar/RatingStar.jsx";
import { toast } from "react-toastify";
import ProductColor from "../../components/productColorSize/ProductColor.jsx";
import ModalComponent from "../../components/modal/ModalComponent.jsx";
import { updateCartCount } from "../../reducers/cartSlice.js";
import { useDispatch } from "react-redux";

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
  product_variation_id: null,
  color_id: null,
  color_name: null,
  size_id: null,
};

const ProductDetails = () => {
  const { productSlug, productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const urlSku = params.get("sku");
  const [productDetail, setProductDetail] = useState(initialProductDetail);
  const [productCounter, setProductCounter] = useState(1);
  const [isaddCart, setIsaddCart] = useState(false);
  const [chooseSize, setChooseSize] = useState();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  console.log("product detail", productDetail);

  const handlePlus = () => {
    if (productCounter < 40) {
      setProductCounter(productCounter + 1);
    } else {
      toast.error("We're sorry! Only 40 unit(s) allowed in each order");
    }
  };

  const handleMinus = () => {
    if (productCounter > 1) {
      setProductCounter(productCounter - 1);
    }
  };

  useEffect(() => {
    const detailApiCall = async () => {
      try {
        const response = await axios.get(
          `${productDetailApi}/${productSlug}/${productId}`
        );
        if (response.status === 200) {
          const result = response.data.result;
          setProductDetail((prevproductDetail) => ({
            ...prevproductDetail,
            avg_rating: result.avg_rating,
            cart_qty_count: result.cart_qty_count,
            category_id: result.category_id,
            category_info: result.category_info,
            collection_id: result.collection_id,
            color: result.color,
            condition_id: result.condition_id,
            created_at: result.created_at,
            description: result.description,
            discount_value: result.discount_value,
            expected_delivery: result.expected_delivery,
            fastfox_enabled: result.fastfox_enabled,
            id: result.id,
            is_added_cart: result.is_added_cart,
            is_discount_on: result.is_discount_on,
            is_out_stock: result.is_out_stock,
            is_purchased: result.is_purchased,
            is_wishlisted: result.is_wishlisted,
            main_rrp: result.main_rrp,
            minimum_sale_price: result.minimum_sale_price,
            name: result.name,
            parent_id: result.parent_id,
            percentage_discount: result.percentage_discount,
            price: result.price,
            product_condition: result.product_condition,
            product_images: result.product_images,
            product_specification: result.product_specification,
            product_view: result.product_view,
            purchase_count: result.purchase_count,
            rating_count: result.rating_count,
            review: result.review,
            sale_price: result.sale_price,
            share_url: result.share_url,
            size: result.size,
            size_chart: result.size_chart,
            size_chart_url: result.size_chart_url,
            sku: result.sku,
            slug: result.slug,
            standard_expected_delivery: result.standard_expected_delivery,
            stock: result.stock,
            sub_category_id: result.sub_category_id,
            total_review: result.total_review,
            unique_id: result.unique_id,
            variation_list: result.variation_list,
            vendor_id: result.vendor_id,
            vendor_info: result.vendor_info,
          }));

          if (result?.variation_list?.length > 0) {
            const defaultVariation = result.variation_list.find(
              (variation) => variation.sku === urlSku
            );

            const colorVariationName = result.color.find(
              (variationName) =>
                variationName.variation_id == defaultVariation.color
            );
            if (colorVariationName) {
              setProductDetail((prevproductDetail) => ({
                ...prevproductDetail,
                color_name: colorVariationName.variation_name,
              }));
            }

            if (defaultVariation) {
              setProductDetail((prevproductDetail) => ({
                ...prevproductDetail,
                cart_qty_count: defaultVariation.cart_qty_count,
                condition_id: defaultVariation.condition_id,
                description: defaultVariation.description,
                is_added_cart: defaultVariation.is_added_cart,
                is_out_stock: defaultVariation.is_out_stock,
                is_purchased: defaultVariation.is_purchased,
                is_wishlisted: defaultVariation.is_wishlisted,
                percentage_discount: defaultVariation.percentage_discount,
                product_condition: defaultVariation.product_condition,
                id: defaultVariation.product_id,
                product_images: defaultVariation.product_images,
                product_variation_id: defaultVariation.product_variation_id,
                main_rrp: defaultVariation.rrp,
                sale_price: defaultVariation.sale_price,
                share_url: defaultVariation.share_url,
                sku: defaultVariation.sku,
                stock: defaultVariation.stock,
                avg_rating: defaultVariation.variation_avg_rating,
                color_id: defaultVariation.color,
              }));
            }
          }
        }
      } catch (error) {
        console.log("Error product details:", error);
      }
    };

    detailApiCall();
  }, [productSlug, productId, location.search, urlSku]);

  const handleColorChange = (Id) => {
    const selectColor = productDetail.variation_list.find(
      (product) => product.color == Id
    );

    const updatedUrl = new URLSearchParams(location.search);
    updatedUrl.set("sku", selectColor.sku);
    navigate({ search: updatedUrl.toString() });

    if (selectColor) {
      setIsaddCart(false);
      setProductDetail((prevproductDetail) => ({
        ...prevproductDetail,
        cart_qty_count: selectColor.cart_qty_count,
        condition_id: selectColor.condition_id,
        description: selectColor.description,
        is_added_cart: selectColor.is_added_cart,
        is_out_stock: selectColor.is_out_stock,
        is_purchased: selectColor.is_purchased,
        is_wishlisted: selectColor.is_wishlisted,
        percentage_discount: selectColor.percentage_discount,
        product_condition: selectColor.product_condition,
        id: selectColor.product_id,
        product_images: selectColor.product_images,
        product_variation_id: selectColor.product_variation_id,
        main_rrp: selectColor.rrp,
        sale_price: selectColor.sale_price,
        share_url: selectColor.share_url,
        sku: selectColor.sku,
        stock: selectColor.stock,
        avg_rating: selectColor.variation_avg_rating,
        color_id: selectColor.color,
      }));
    }
  };

  const handleSizeChange = (Id) => {
    const selectSize = productDetail.variation_list.find(
      (product) => product.size == Id && product.color == productDetail.color_id
    );
    if (selectSize) {
      setIsaddCart(false);
      setChooseSize(selectSize.size);
      setProductDetail((prevproductDetail) => ({
        ...prevproductDetail,
        avg_rating: selectSize.variation_avg_rating,
        cart_qty_count: selectSize.cart_qty_count,
        condition: selectSize.condition,
        is_added_cart: selectSize.is_added_cart,
        is_discount_on: selectSize.is_discount_on,
        is_out_stock: selectSize.is_out_stock,
        is_purchased: selectSize.is_purchased,
        is_wishlisted: selectSize.is_wishlisted,
        main_rrp: selectSize.rrp,
        sale_price: selectSize.sale_price,
        percentage_discount: selectSize.percentage_discount,
        product_condition: selectSize.product_condition,
        id: selectSize.product_id,
        product_variation_id: selectSize.product_variation_id,
        product_view: selectSize.product_view,
        stock: selectSize.stock,
        total_review: selectSize.total_review,
        share_url: selectSize.share_url,
        size_id: selectSize.size,
      }));
    }
  };

  const addToCartCall = async () => {
    const apiData = {
      product_id: productDetail.id,
      quantity: productCounter,
      product_variation_id: productDetail.product_variation_id,
    };
    try {
      const addToCartResponse = await axios.post(addToCartApi, apiData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (addToCartResponse.status === 200) {
        toast.success(addToCartResponse.data.message);
        setIsaddCart(true);
      }
    } catch (error) {
      console.log("add to cart error", error);
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (token) {
      if (productDetail.size.length > 0 && !chooseSize) {
        toast.warning("Please select size");
      } else {
        addToCartCall();
        dispatch(updateCartCount(productCounter));
      }
    } else {
      setShow(true);
    }
  };

  const handleGoToCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    if (token) {
      navigate("/checkout/address");
    } else {
      setShow(true);
    }
  };

  console.log("product detail", productDetail);

  return (
    <Container fluid className="mt-3 productDetailMain">
      {show && <ModalComponent show={show} handleClose={handleClose} />}
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
                  <RatingStar averageRating={productDetail?.avg_rating} />
                  <span>{Math.floor(productDetail?.avg_rating)}</span>
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
              {productDetail.color && productDetail.color.length > 0 && (
                <ProductColor
                  productcolor={productDetail.color}
                  handleColorChange={handleColorChange}
                  selectedVariationId={productDetail.color_id}
                  selectedColor={productDetail.color_name}
                />
              )}
              {productDetail?.size && productDetail?.size?.length > 0 && (
                <ProductSize
                  productsize={productDetail.size}
                  handleSizeClick={handleSizeChange}
                  selectedSize={chooseSize}
                />
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
                    <span>{productDetail?.product_view}</span>
                  </div>
                  <span className="fw-medium">
                    People looked for this product
                  </span>
                </Col>
                <Col className="mt-3">
                  <Row>
                    <Col>
                      {isaddCart ? (
                        <Button
                          className="w-100 rounded-5 cart bg-success border-success"
                          onClick={handleGoToCart}
                        >
                          Go to Cart
                        </Button>
                      ) : (
                        <Button
                          className="w-100 rounded-5 cart"
                          onClick={handleAddToCart}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </Col>
                    <Col>
                      <Button
                        className="w-100 rounded-5 buyNow"
                        onClick={handleBuyNow}
                      >
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
        totalPurchase={productDetail?.purchase_count}
        description={productDetail?.description}
        specifications={productDetail?.product_specification}
        averageRating={productDetail?.avg_rating}
        totalReview={productDetail?.total_review}
        ratingCount={productDetail?.rating_count}
      />
    </Container>
  );
};

export default ProductDetails;
