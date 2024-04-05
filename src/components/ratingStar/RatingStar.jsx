import fourstar from "../../assets/4Star.svg";
import threestar from "../../assets/3Star.svg";
import twostar from "../../assets/2Star.svg";
import onestar from "../../assets/1Star.svg";
import { Image } from "react-bootstrap";

const RatingStar = ({ averageRating }) => {
  if (averageRating == 5) {
    return <Image src={fourstar} />;
  }
  if (averageRating == 4) {
    return <Image src={fourstar} />;
  }
  if (averageRating == 3) {
    return <Image src={threestar} />;
  }
  if (averageRating == 2) {
    return <Image src={twostar} />;
  }
  if (averageRating == 1) {
    return <Image src={onestar} />;
  }
  return <Image src={onestar} />;
};

export default RatingStar;
