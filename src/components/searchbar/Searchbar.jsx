import "react-bootstrap-typeahead/css/Typeahead.css";
import "./searchbar.scss";
import axios from "axios";
import searchIcon from "../../assets/search-normal.png";
import React, { useState, useRef } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { productlist } from "../../api/Apis";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedProduct, setselectedProduct] = useState(null);
  const typeaheadRef = useRef();
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.post(productlist, { search: query });
      setOptions(response.data.result.data);
      setIsLoading(false);
    } catch (error) {
      console.log("search error", error);
    }
  };

  const handleInputChange = (query) => {
    if (!query) {
      setOptions([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && selectedProduct) {
      console.log("Selected User:", selectedProduct.name);
      navigate("/productList/productdetail");
    }
  };

  const handleButtonClick = () => {
    const query = typeaheadRef.current.inputNode.value;
    const searchUrl = `/search-results?searchText=${query}`;
    if (query) {
      handleSearch(query);
      navigate(searchUrl);
    }
  };

  return (
    <div className="searchbar-main d-flex align-items-center w-100">
      <AsyncTypeahead
        ref={typeaheadRef}
        filterBy={(option) => option.name}
        isLoading={isLoading}
        id="search"
        className="w-100"
        labelKey="name"
        minLength={1}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
        options={options}
        placeholder="Search Product"
        renderMenuItemChildren={(option) => (
          <>
            <Image
              roundedCircle
              alt={option.login}
              src={option.product_images[0].product_image_url}
              style={{
                height: "30px",
                marginRight: "10px",
                width: "30px",
              }}
            />
            <span>{option.name}</span>
          </>
        )}
        onChange={(selected) => {
          setselectedProduct(selected[0]);
        }}
      />
      <Button
        className="searchIconBtn d-flex justify-content-center align-items-center"
        onClick={handleButtonClick}
      >
        <Image src={searchIcon} />
      </Button>
    </div>
  );
};

export default Searchbar;
