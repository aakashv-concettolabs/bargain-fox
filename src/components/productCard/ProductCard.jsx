import { Card, Button, Image, CardTitle } from "react-bootstrap";
import "./productcard.scss";
import heart from "../../assets/heart.png";
import deleteImg from "../../assets/delete.svg";
import OfferStickerComponent from "../offerStickerComponent/OfferStickerComponent";
import RatingStar from "../ratingStar/RatingStar";
import ProductPriceTag from "../productPriceTag/ProductPriceTag";
import { useState } from "react";
import SpinnerComponent from "../spinner/SpinnerComponent";
import { Link } from "react-router-dom";

const ProductCard = ({ btnClass, productData }) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const wishOrDelClick = (e) => {
    e.preventDefault();
    if (`${btnClass}` === "d-block") {
      console.log("remove");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLiked(!liked);
        console.log(!liked);
      }, 1000);
    }
  };

  return (
    <div className="productCard-main mx-2">
      <Card
        className="position-relative text-decoration-none"
        as={Link}
        to={`/productDetail/${productData?.slug}/${productData?.unique_id}?sku=${productData?.sku}`}
      >
        <div
          className={`heartDiv position-absolute rounded-circle d-flex justify-content-center align-items-center ${
            liked ? "addedwishlist" : "bg-white"
          }`}
          onClick={wishOrDelClick}
        >
          {loading ? (
            <SpinnerComponent />
          ) : (
            <Image
              src={`${btnClass}` === "d-block" ? deleteImg : heart}
              height="22px"
              width="22px"
            />
          )}
        </div>
        <div className="productCardImg d-flex justify-content-center align-items-center">
          <Image
            src={productData?.product_images[0]?.product_image_url}
            className="w-100 h-100 object-fit-contain"
          />
        </div>
        <div className="p-2">
          <CardTitle className="productDetail mb-1 mb-md-3">
            {productData?.name}
          </CardTitle>
          <div className="d-flex gap-1 align-items-center text-muted">
            <RatingStar />
            <span>
              {Math.floor(
                productData?.product_var_avg_rating || productData?.avg_rating
              )}
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center my-2">
            <ProductPriceTag
              offerPrice={
                productData?.product_var_sale_price ||
                productData?.my_sale_price ||
                productData?.sale_price
              }
              price={productData?.product_var_rrp || productData?.main_rrp}
            />
            <OfferStickerComponent
              discountPercent={Math.floor(
                productData?.product_var_percentage_discount ||
                  productData?.percentage_discount
              )
                .toString()
                .padStart(2, "0")}
            />
          </div>
          <Button className={`${btnClass} cardbtn w-100 rounded-5 mt-3 mb-2`}>
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
