import "./offerStickerComponent.scss";
import offerSticker from "../../assets/offerSticker.svg";
import { Image } from "react-bootstrap";

const OfferStickerComponent = ({ discountPercent }) => {
  return (
    <div className="position-relative offerStickerMain">
      <div className="offerStickerImg">
        <Image src={offerSticker} className="w-100 h-100" />
      </div>
      <span className="offerDiscount position-absolute text-white">
        {discountPercent}%
      </span>
    </div>
  );
};

export default OfferStickerComponent;
