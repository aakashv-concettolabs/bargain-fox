import "./filterSidebar.scss";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import fourStar from "../../assets/4Star.svg";
import threeStar from "../../assets/3Star.svg";
import twoStar from "../../assets/2Star.svg";
import oneStar from "../../assets/1Star.svg";
import offerSticker from "../../assets/offerSticker.svg";

const FilterSidebar = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Form.Label>Condition</Form.Label>
        <Form.Check type="checkbox" label="Brand New" />
        <Form.Check type="checkbox" label="Open Box" />
        <Form.Check type="checkbox" label="Like New" />
        <Form.Check type="checkbox" label="Very Good" />
        <Form.Check type="checkbox" label="Good" />
        <Form.Check type="checkbox" label="Acceptable" />
      </ListGroup.Item>

      <ListGroup.Item>
        <Form.Label>Review</Form.Label>
        <label htmlFor="" className="d-flex gap-1">
          <Form.Check type="checkbox" value="4star" id="4star" />
          <img src={fourStar} />
        </label>
        <label htmlFor="" className="d-flex gap-1">
          <Form.Check type="checkbox" id="3star" />
          <img src={threeStar} />
        </label>
        <label htmlFor="" className="d-flex gap-1">
          <Form.Check type="checkbox" id="2star" />
          <img src={twoStar} />
        </label>
        <label htmlFor="" className="d-flex gap-1">
          <Form.Check type="checkbox" id="1star" />
          <img src={oneStar} />
        </label>
        <Form.Check type="checkbox" label="No Review" id="noReview" />
      </ListGroup.Item>

      <ListGroup.Item>
        <Form.Label>Price</Form.Label>
        <Form.Check type="checkbox" label="Under $10" />
        <Form.Check type="checkbox" label="$10 - $25" />
        <Form.Check type="checkbox" label="$25 - $50" />
        <Form.Check type="checkbox" label="$50 - $100" />
        <Form.Check type="checkbox" label="Over $100" />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default FilterSidebar;
