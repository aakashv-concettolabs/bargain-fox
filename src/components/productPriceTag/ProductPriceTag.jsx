import React from "react";

const ProductPriceTag = ({ offerPrice, price }) => {
  return (
    <div className="d-flex gap-2 align-items-center">
      <span className="fw-semibold price">
        <sup>$</sup>
        {offerPrice}
      </span>
      <span className="originalPrice">
        <strike>${price}</strike>
      </span>
    </div>
  );
};

export default ProductPriceTag;
