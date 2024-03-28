import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./dropdown.scss";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("lowest_price");
  const location = useLocation();

  const handlechange = (e) => {
    setSelectedValue(e.target.value);
    const queryParams = new URLSearchParams(location.search);
    console.log("selectedValue", queryParams);
  };
  return (
    <Row className="dropdown-main border rounded-5 py-2 px-2 px-sm-1 px-md-2">
      <Col className="d-flex gap-2">
        <label className="text-secondary d-none d-sm-flex">Sort By:</label>
        <select
          className="shadow-none border-0 focus-ring bg-white"
          value={selectedValue}
          onChange={handlechange}
        >
          <option value="lowest_price">Lowest Price</option>
          <option value="highest_price">Highest Price</option>
          <option value="top_customes_reviews">Top Customers Reviews</option>
          <option value="relevant, most_recent">Most Recent</option>
        </select>
      </Col>
    </Row>
  );
};

export default Dropdown;
