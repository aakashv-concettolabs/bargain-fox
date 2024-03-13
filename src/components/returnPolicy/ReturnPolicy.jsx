import "./returnPolicy.scss";
import deliveryVan from "../../assets/delivery-van.png";
import returnDay from "../../assets/returnDay.png";
import warranty from "../../assets/warranty.png";
import { Image } from "react-bootstrap";

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
          className="d-flex gap-2 flex-column justify-content-center align-items-center text-center returnPolicyMain"
        >
          <div className="imageContainerDiv bg-body-secondary rounded-circle d-flex justify-content-center align-items-center p-2">
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
