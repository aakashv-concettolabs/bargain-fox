import React from "react";
import { Button, Image } from "react-bootstrap";
import noProduct from "../../assets/noResult.svg";
import { Link } from "react-router-dom";

const Noproduct = () => {
  return (
    <div className="text-center">
      <div className="mt-2 mb-4">
        <Image src={noProduct} />
      </div>
      <h2>No Product Found</h2>
      <p>
        Looks like there are no product available in selected category.{" "}
        <br className="d-none d-sm-flex" />
        Go ahead & explore top categories.
      </p>
      <Button className="rounded-5 px-4 py-2" as={Link} to={"/"}>
        Back to Shop
      </Button>
    </div>
  );
};

export default Noproduct;
