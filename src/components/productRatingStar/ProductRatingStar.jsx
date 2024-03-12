import React from "react";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import { Image } from "react-bootstrap";

const ProductRatingStar = () => {
  return (
    <div className="d-flex gap-2">
      <span className="d-flex gap-1 rating">
        <Image src={starColor} />
        <Image src={starColor} />
        <Image src={starColor} />
        <Image src={starColor} />
        <Image src={star} />
      </span>
      <span className="text-muted">4524</span>
    </div>
  );
};

export default ProductRatingStar;
