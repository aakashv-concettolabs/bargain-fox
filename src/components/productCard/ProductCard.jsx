import { Card, Button, Image } from "react-bootstrap";
import "./productcard.scss";
import heart from "../../assets/heart.png";
import OfferStickerComponent from "../offerStickerComponent/OfferStickerComponent";
import ProductRatingStar from "../productRatingStar/ProductRatingStar";
import ProductPriceTag from "../productPriceTag/ProductPriceTag";

const ProductCard = ({ imgUrl, detail, offerPrice, price, btnClass }) => {
  return (
    <div className="productCard-main mx-2">
      <Card className="position-relative">
        <div className="heartDiv position-absolute bg-white rounded-circle d-flex justify-content-center align-items-center">
          <Image src={heart} className="w-50" />
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
          <Button className={`${btnClass} cardbtn`}>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
