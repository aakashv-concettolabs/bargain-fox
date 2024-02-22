import "./circle.scss";

const Circle = ({ imgUrl, categoryText }) => {
  return (
    <div className="categoryCircle d-flex flex-column justify-content-center align-items-center">
      <img src={imgUrl} alt="" height="100px" width="100px" />
      <span className="text-center">{categoryText}</span>
    </div>
  );
};

export default Circle;
