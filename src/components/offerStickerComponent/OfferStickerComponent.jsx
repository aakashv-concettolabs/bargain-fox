import "./offerStickerComponent.scss";
import offerSticker from "../../assets/offerSticker.svg";
import { Image } from "react-bootstrap";

const OfferStickerComponent = () => {
  return (
    <div className="d-none d-sm-block position-relative offerStickerMain">
      <div>
        <Image src={offerSticker} />
      </div>
      <span className="position-absolute offerDiscount">-10%</span>
    </div>
  );
};

export default OfferStickerComponent;
