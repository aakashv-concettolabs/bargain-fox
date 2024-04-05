import { Card, Button, Image, CardTitle } from "react-bootstrap";
import "./productcard.scss";
import heart from "../../assets/heart.png";
import deleteImg from "../../assets/delete.svg";
import OfferStickerComponent from "../offerStickerComponent/OfferStickerComponent";
import ProductRatingStar from "../productRatingStar/ProductRatingStar";
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
        to={`/productDetail/${productData?.slug}/${productData?.unique_id}`}
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
          <ProductRatingStar />
          <div className="d-flex justify-content-between align-items-center my-2">
            <ProductPriceTag
              offerPrice={productData?.my_sale_price || productData?.sale_price}
              price={productData?.main_rrp}
            />
            <OfferStickerComponent
              discountPercent={productData?.percentage_discount}
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
