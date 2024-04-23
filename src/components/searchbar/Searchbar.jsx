import "react-bootstrap-typeahead/css/Typeahead.css";
import "./searchbar.scss";
import axios from "axios";
import searchIcon from "../../assets/search-normal.png";
import React, { useState, useRef, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { productlist } from "../../api/Apis";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
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

  const handleButtonClick = () => {
    const query = typeaheadRef.current.inputNode.value;
    const searchUrl = `/search-results?searchText=${query}`;
    if (query) {
      handleSearch(query);
      navigate(searchUrl);
    }
  };

  const handleProductClick = (option) => {
    navigate(
      `/productDetail/${option.slug}/${option.unique_id}?sku=${option.sku}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleButtonClick();
      typeaheadRef.current.toggleMenu(false);
      event.target.blur();
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      typeaheadRef.current.clear(true);
    }
  }, [window.location.pathname]);

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
        onKeyDown={handleKeyDown}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
        options={options}
        placeholder="Search Product"
        onChange={(selected) => {
          navigate(
            `/productDetail/${selected[0].slug}/${selected[0].unique_id}?sku=${selected[0].sku}`
          );
          typeaheadRef.current.clear(true);
        }}
        renderMenuItemChildren={(option) => (
          <div onClick={() => handleProductClick(option)}>
            <Image
              roundedCircle
              alt={option.login}
              src={option?.product_images[0]?.product_image_url}
              style={{
                height: "30px",
                marginRight: "10px",
                width: "30px",
              }}
            />
            <span>{option.name}</span>
          </div>
        )}
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
