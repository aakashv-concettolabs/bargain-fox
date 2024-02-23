import "./dealCard.scss";
import { Card } from "react-bootstrap";

const DealCard = ({
  imgUrl,
  offer,
  title,
  offerStyle,
  imgStyle,
  titleStyle,
}) => {
  return (
    <div className="dealCard-main mx-2">
      <Card className="border-0">
        <div className="cardImg d-flex justify-content-center">
          <Card.Img src={imgUrl} className={`${imgStyle}`} />
        </div>
        <Card.Body className="px-0 lh-sm">
          <Card.Text className={`py-0 mb-2 ${offerStyle}`}>{offer}</Card.Text>
          <Card.Title className={`py-0 my-2 ${titleStyle}`}>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DealCard;
