import "./filterSidebar.scss";
import { ListGroup } from "react-bootstrap";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { useEffect, useState } from "react";
import { filterData } from "./filterData";
import { filterCondition } from "../../api/Apis";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
let filterUrl = "";

const FilterSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pricecheck, setPricecheck] = useState(null);
  const [discountCheck, setDiscountCheck] = useState(null);
  const [conditioncheck, setConditioncheck] = useState(null);
  const [conditionData, setConditionData] = useState([]);
  useEffect(() => {
    const conditionDataCall = async () => {
      try {
        const { data } = await axios.post(filterCondition);
        setConditionData(data.result.condition_filter);
      } catch (error) {
        console.log("condition error", error);
      }
    };
    conditionDataCall();
  }, []);

  const handleCondition = (indexCondition, slug) => {
    if (conditioncheck === indexCondition) {
      setConditioncheck(null);
    } else {
      setConditioncheck(indexCondition);
      filterUrl = `${location.pathname}?page=1&condition=${slug}`;
      navigate(filterUrl);
    }
  };

  const handleDiscount = (indexCustomer, slug) => {
    if (discountCheck === indexCustomer) {
      setDiscountCheck(null);
    } else {
      setDiscountCheck(indexCustomer);
      filterUrl = `${location.pathname}?page=1&discount=${slug}`;
      navigate(filterUrl);
    }
  };

  const handlePrice = (indexPrice, slug) => {
    if (pricecheck === indexPrice) {
      setPricecheck(null);
    } else {
      setPricecheck(indexPrice);
      filterUrl = `${location.pathname}?page=1&price_range=${slug}&min_price=${
        slug.split("-")[0]
      }&max_price=${slug.split("-")[1]}`;
      navigate(filterUrl);
    }
  };
  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="border-0 d-flex flex-column gap-3">
        <h6 className="pb-2 fw-semibold">Condition</h6>
        {conditionData &&
          conditionData.map((condition, index) => (
            <Checkbox
              shape="round"
              color="primary"
              key={condition.id}
              value={condition.slug}
              checked={conditioncheck === index}
              onChange={() => handleCondition(index, condition.slug, condition)}
            >
              {condition.title}
            </Checkbox>
          ))}
      </ListGroup.Item>

      <ListGroup.Item className="border-0 d-flex flex-column gap-3 mt-3">
        <h6 className="pb-2 fw-semibold">{filterData[0].title}</h6>
        {filterData &&
          filterData[0].data &&
          filterData[0].data.map((discount, index) => (
            <Checkbox
              key={discount.id}
              shape="round"
              color="primary"
              value={discount.slug}
              checked={discountCheck === index}
              onChange={() => handleDiscount(index, discount.slug)}
            >
              {discount.title}
            </Checkbox>
          ))}
      </ListGroup.Item>

      <ListGroup.Item className="border-0 d-flex flex-column gap-3 mt-3">
        <h6 className="pb-2 fw-semibold">{filterData[1].title}</h6>
        {filterData &&
          filterData[1].data &&
          filterData[1].data.map((price, index) => (
            <Checkbox
              shape="round"
              color="primary"
              key={price.id}
              value={price.slug}
              checked={pricecheck === index}
              onChange={() => handlePrice(index, price.slug)}
            >
              {price.title}
            </Checkbox>
          ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default FilterSidebar;
