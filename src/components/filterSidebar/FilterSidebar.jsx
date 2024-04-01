import "./filterSidebar.scss";
import { ListGroup, Image } from "react-bootstrap";
import fourStar from "../../assets/4Star.svg";
import threeStar from "../../assets/3Star.svg";
import twoStar from "../../assets/2Star.svg";
import oneStar from "../../assets/1Star.svg";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Conditions = [
  {
    id: 21,
    label: "Brand New",
  },
  {
    id: 22,
    label: "Open Box",
  },
  {
    id: 33,
    label: "Like New",
  },
  {
    id: 24,
    label: "Very Good",
  },
  {
    id: 25,
    label: "Good",
  },
  {
    id: 26,
    label: "Acceptable",
  },
];

const CustomerReviews = [
  {
    id: 7,
    imgUrl: fourStar,
  },
  {
    id: 8,
    imgUrl: threeStar,
  },
  {
    id: 9,
    imgUrl: twoStar,
  },
  {
    id: 10,
    imgUrl: oneStar,
  },
];

const Pricedata = [
  {
    id: 11,
    price: "Under £10",
  },
  {
    id: 12,
    price: "£10 - £25",
  },
  {
    id: 13,
    price: "£25 - £50",
  },
  {
    id: 14,
    price: "£50 - £100",
  },
  {
    id: 15,
    price: "Over £100",
  },
];

const FilterSidebar = () => {
  const [check, setCheck] = useState(null);
  const [reviewcheck, setReviewCheck] = useState(null);
  const [conditioncheck, setConditioncheck] = useState(null);
  const location = useLocation();
  console.log("location", location);

  const handleCustomerReview = (indexCustomer) => {
    if (reviewcheck === indexCustomer) {
      setReviewCheck(null);
    } else setReviewCheck(indexCustomer);
  };

  const handleCondition = (indexCondition) => {
    if (conditioncheck === indexCondition) {
      setConditioncheck(null);
    } else setConditioncheck(indexCondition);
  };

  const handleCheck = (index) => {
    if (check === index) {
      setCheck(null);
    } else {
      setCheck(index);
    }
  };

  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="border-0 d-flex flex-column gap-3">
        <h6 className="pb-2 fw-semibold">Condition</h6>
        {Conditions.map((condition, index) => (
          <Checkbox
            shape="round"
            color="primary"
            key={condition.id}
            checked={conditioncheck === index}
            onChange={() => handleCondition(index)}
          >
            {condition.label}
          </Checkbox>
        ))}
      </ListGroup.Item>

      <ListGroup.Item className="border-0 d-flex flex-column gap-3 mt-3">
        <h6 className="pb-2 fw-semibold">Customer Review</h6>
        {CustomerReviews.map((CustomerReview, index) => (
          <label key={CustomerReview.id}>
            <Checkbox
              shape="round"
              color="primary"
              checked={reviewcheck === index}
              onChange={() => handleCustomerReview(index)}
            />
            <Image src={CustomerReview.imgUrl} />
          </label>
        ))}
        <label className="d-flex align-items-center">
          <Checkbox shape="round" color="primary" className="d-flex" /> No
          Review
        </label>
      </ListGroup.Item>

      <ListGroup.Item className="border-0 d-flex flex-column gap-3 mt-3">
        <h6 className="pb-2 fw-semibold">Price</h6>
        {Pricedata.map((price, index) => (
          <Checkbox
            shape="round"
            color="primary"
            key={price.id}
            checked={check === index}
            onChange={() => handleCheck(index)}
          >
            {price.price}
          </Checkbox>
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default FilterSidebar;
