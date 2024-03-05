import "./returnPolicy.scss";
import deliveryVan from "../../assets/delivery-van.png";
import returnDay from "../../assets/returnDay.png";
import warranty from "../../assets/warranty.png";
import { Image, Col } from "react-bootstrap";

const conditions = [
  {
    id: 1,
    imgUrl: deliveryVan,
    detail: "Spend £14 for free delivery.",
  },
  {
    id: 2,
    imgUrl: returnDay,
    detail: "14-day returns.",
  },
  {
    id: 3,
    imgUrl: warranty,
    detail: "6 month warranty with the Bargain Fox guarantee.",
  },
];
const ReturnPolicy = () => {
  return (
    <>
      {conditions.map((condition) => (
        <div
          key={condition.id}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="bg-body-secondary p-2 rounded-circle">
            <Image src={condition.imgUrl} />
          </div>
          <p>
            {condition.detail} <span className="learn">Learn more </span>
          </p>
        </div>
      ))}
    </>
  );
};

export default ReturnPolicy;
