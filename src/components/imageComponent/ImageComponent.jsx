import React from "react";
import { Image } from "react-bootstrap";

const ImageComponent = ({ imgUrl }) => {
  return (
    <>
      <Image src={imgUrl} />
    </>
  );
};

export default ImageComponent;
