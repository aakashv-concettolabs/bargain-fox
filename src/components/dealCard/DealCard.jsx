import "./dealCard.scss";
import { Card } from "react-bootstrap";

const DealCard = ({ imgUrl, offer, title }) => {
  return (
    <Card className="dealsCard-main rounded-5">
      <Card.Img src={imgUrl} />
      <Card.Body>
        <Card.Text>{offer}</Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DealCard;
