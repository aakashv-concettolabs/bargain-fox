import React from "react";

const ProductPriceTag = ({ offerPrice, price }) => {
  return (
    <div className="d-flex gap-2 align-items-center">
      <span className="fw-semibold price">
        <sup>$</sup>
        {Math.floor(offerPrice)}
      </span>
      <span className="originalPrice">
        <strike>${Math.floor(price)}</strike>
      </span>
    </div>
  );
};

export default ProductPriceTag;
