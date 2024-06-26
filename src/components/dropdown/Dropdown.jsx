import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./dropdown.scss";

const Dropdown = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchText = params.get("searchText");
  const condition = params.get("condition");
  const discount = params.get("discount");
  const pricerange = params.get("price_range");
  const minprice = params.get("min_price");
  const maxprice = params.get("max_price");

  const [sortedValue, setSortedValue] = useState(
    params.get("sort_by") || "relevant"
  );

  const handleChange = (e) => {
    const dropdownValue = e.target.value;
    setSortedValue(dropdownValue);

    let sortedUrl = searchText ? "/search-results" : location.pathname;
    let params = new URLSearchParams(
      searchText ? { searchText, page: 1 } : { page: 1 }
    );

    params.set("sort_by", dropdownValue);

    if (condition) params.set("condition", condition);
    if (discount) params.set("discount", discount);
    if (pricerange) {
      params.set("price_range", pricerange);
      params.set("min_price", minprice);
      params.set("max_price", maxprice);
    }

    navigate(`${sortedUrl}?${params.toString()}`);
  };

  useEffect(() => {
    setSortedValue(params.get("sort_by") || "relevant");
  }, [location.search]);

  return (
    <Row className="dropdown-main border rounded-5 py-2 px-2 px-sm-1 px-md-2">
      <Col className="d-flex gap-2">
        <label className="text-secondary d-none d-sm-flex">Sort By:</label>
        <select
          className="shadow-none border-0 focus-ring bg-white"
          value={sortedValue}
          onChange={handleChange}
        >
          <option value="relevant">Relevant</option>
          <option value="lowest_price">Lowest Price</option>
          <option value="highest_price">Highest Price</option>
          <option value="top_customes_reviews">Top Customers Reviews</option>
          <option value="most_recent">Most Recent</option>
        </select>
      </Col>
    </Row>
  );
};

export default Dropdown;
