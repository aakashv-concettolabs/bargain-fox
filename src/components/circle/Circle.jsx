import "./circle.scss";

const Circle = ({ imgUrl, imgStyle, categoryText, offerText, notOffer }) => {
  return (
    <div className="categoryCircle d-flex flex-column justify-content-center align-items-center">
      <img
        src={imgUrl}
        className={`${imgStyle}`}
        alt=""
        height="100px"
        width="100px"
      />
      <span
        className={`offerText p-2 rounded-5 text-white small my-1 mb-3 ${notOffer}`}
      >
        {offerText}
      </span>
      <span className="text-center fw-medium">{categoryText}</span>
    </div>
  );
};

export default Circle;
