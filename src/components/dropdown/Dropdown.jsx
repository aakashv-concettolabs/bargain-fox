import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./dropdown.scss";

const Dropdown = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchText = params.get("searchText");
  const initialSelectedValue = params.get("sort_by") || "relevant";
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  const handlechange = (e) => {
    const dropdownValue = e.target.value;
    setSelectedValue(dropdownValue);
    let sortedUrl = "";
    if (searchText) {
      sortedUrl += "/search-results";
      sortedUrl += `?searchText=${searchText}`;
      sortedUrl += `&sort_by=${dropdownValue}`;
      navigate(sortedUrl);
    } else {
      sortedUrl = `${location.pathname}?sort_by=${dropdownValue}`;
      navigate(sortedUrl);
    }
  };

  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    const newSelectedValue = newParams.get("sort_by") || "relevant";
    setSelectedValue(newSelectedValue);
  }, [location.search]);

  return (
    <Row className="dropdown-main border rounded-5 py-2 px-2 px-sm-1 px-md-2">
      <Col className="d-flex gap-2">
        <label className="text-secondary d-none d-sm-flex">Sort By:</label>
        <select
          className="shadow-none border-0 focus-ring bg-white"
          value={selectedValue}
          onChange={handlechange}
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
