import "./productColorSize.scss";

const colors = ["orange", "black", "green", "magenta", "purple"];

const ProductColorSize = () => {
  return (
    <div className="d-flex gap-2">
      {colors.map((color, index) => (
        <div className="colorContainer rounded " key={index}>
          <div
            className="color rounded"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProductColorSize;
