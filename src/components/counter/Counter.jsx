import React from "react";

const Counter = ({ productCounter, handlePlus, handleMinus }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="text-body-tertiary">Quantity:</span>
      <span className="d-flex gap-1 align-items-center border">
        <button
          className="btn-outline-secondary btn border-0 border-end rounded-0"
          onClick={handleMinus}
        >
          -
        </button>
        <span className="px-2">{productCounter}</span>
        <button
          className="btn-outline-secondary btn border-0 border-start rounded-0"
          onClick={handlePlus}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default Counter;
