import "./productColorSize.scss";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const ProductSize = () => {
  return (
    <div className="d-flex gap-2">
      {sizes.map((size, index) => (
        <div key={index} className="border rounded-4 px-md-3 px-2 small">
          <div>{size}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductSize;
