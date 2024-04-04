import "./filterSidebar.scss";
import { ListGroup } from "react-bootstrap";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { useEffect, useState } from "react";
import { filterData } from "./filterData";
import { filterCondition } from "../../api/Apis";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FilterSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    condition: null,
    discount: null,
    price_range: null,
  });
  const [conditionData, setConditionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(filterCondition);
        setConditionData(data.result.condition_filter);
      } catch (error) {
        console.error("condition error", error);
      }
    };
    fetchData();
    const params = new URLSearchParams(location.search);

    setFilters({
      condition: params.get("condition") || null,
      discount: params.get("discount") || null,
      price_range: params.get("price_range") || null,
    });
  }, [location.search]);

  const handleFilterChange = (filterType, value) => {
    let updatedFilters;

    if (filterType === "price_range" && filters[filterType] === value) {
      updatedFilters = { ...filters, [filterType]: null };
    } else {
      updatedFilters = {
        ...filters,
        [filterType]: filters[filterType] === value ? null : value,
      };
    }
    setFilters(updatedFilters);

    const urlParams = new URLSearchParams(location.search);
    const currentPage = urlParams.get("page") || 1;
    urlParams.set("page", 1);

    if (filterType === "price_range") {
      if (updatedFilters[filterType]) {
        const [minPrice, maxPrice] = value.split("-");
        urlParams.set("price_range", value);
        urlParams.set("min_price", minPrice);
        urlParams.set("max_price", maxPrice);
      } else {
        urlParams.delete("price_range");
        urlParams.delete("min_price");
        urlParams.delete("max_price");
        urlParams.delete(filterType);
      }
    } else {
      if (updatedFilters[filterType]) {
        urlParams.set(filterType, value);
      } else {
        urlParams.delete(filterType);
      }
    }

    const newSearchParams = urlParams.toString();
    const newPath = currentPage
      ? `${location.pathname}?${newSearchParams}`
      : `${location.pathname}?page=1&${newSearchParams}`;

    navigate(newPath);
  };

  const isChecked = (filterType, value) => filters[filterType] === value;

  const renderCheckboxGroup = (title, data, filterType) => (
    <ListGroup.Item className="border-0 d-flex flex-column gap-3">
      <h6 className="pb-2 fw-semibold">{title}</h6>
      {data.map((item) => (
        <Checkbox
          shape="round"
          color="primary"
          key={item.id}
          value={item.slug}
          checked={isChecked(filterType, item.slug)}
          onChange={() => handleFilterChange(filterType, item.slug)}
        >
          {item.title}
        </Checkbox>
      ))}
    </ListGroup.Item>
  );

  return (
    <ListGroup variant="flush">
      {renderCheckboxGroup("Condition", conditionData, "condition")}
      {filterData.map((filter, index) =>
        renderCheckboxGroup(
          filter.title,
          filter.data,
          index === 0 ? "discount" : "price_range"
        )
      )}
    </ListGroup>
  );
};

export default FilterSidebar;
