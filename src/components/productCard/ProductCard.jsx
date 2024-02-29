import { Card } from "react-bootstrap";
import "./productcard.scss";

const ProductCard = ({
  imgUrl,
  detail,
  ratedStar,
  unratedStar,
  offerPrice,
  price,
  offerSticker,
  discount,
}) => {
  return (
    <div className="productCard-main mx-2">
      <Card className="border">
        <div className="productCardImg d-flex justify-content-center">
          <Card.Img src={imgUrl} />
        </div>
        <Card.Body className="lh-sm p-1 body-font">
          <Card.Text>
            {detail.slice(0, 50)}
            {detail.length > 50 ? "..." : ""}
          </Card.Text>
          <Card.Text className="d-flex gap-2">
            <span className="d-flex gap-1 rating">
              <img src={ratedStar} />
              <img src={ratedStar} />
              <img src={ratedStar} />
              <img src={ratedStar} />
              <img src={unratedStar} />
            </span>
            <span className="text-muted">4524</span>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <span className="d-flex gap-2 align-items-center">
              <span className="fw-bold price">
                <sup>$</sup>
                {offerPrice}
              </span>
              <span className="">
                <strike>${price}</strike>
              </span>
            </span>
            <span className="d-none d-sm-flex">
              <img src={offerSticker} className="position-relative" />
              <span className="position-absolute discount text-white">
                {discount}
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
