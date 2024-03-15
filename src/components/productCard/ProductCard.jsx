import { Card, Button, Image } from "react-bootstrap";
import "./productcard.scss";
import heart from "../../assets/heart.png";
import deleteImg from "../../assets/delete.svg";
import OfferStickerComponent from "../offerStickerComponent/OfferStickerComponent";
import ProductRatingStar from "../productRatingStar/ProductRatingStar";
import ProductPriceTag from "../productPriceTag/ProductPriceTag";
import { useState } from "react";
import SpinnerComponent from "../spinner/SpinnerComponent";

const ProductCard = ({ imgUrl, detail, offerPrice, price, btnClass }) => {
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
      <Card className="position-relative">
        <div
          className={`heartDiv position-absolute  rounded-circle d-flex justify-content-center align-items-center ${
            liked ? "addedwishlist" : "bg-white"
          }`}
          onClick={wishOrDelClick}
        >
          {loading ? (
            <SpinnerComponent />
          ) : (
            <Image
              src={`${btnClass}` === "d-block" ? deleteImg : heart}
              className="w-50"
            />
          )}
        </div>
        <div className="productCardImg d-flex justify-content-center">
          <Image src={imgUrl} width="100%" />
        </div>
        <div className="lh-sm p-2">
          <p className="productDetail mb-1 mb-md-3">{detail}</p>
          <ProductRatingStar />
          <div className="d-flex justify-content-between align-items-center my-2">
            <ProductPriceTag offerPrice={offerPrice} price={price} />
            <OfferStickerComponent />
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
