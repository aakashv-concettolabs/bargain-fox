import { Button, Col, Container, Row } from "react-bootstrap";
import "./wishlist.scss";
import ProductCard from "../../components/productCard/ProductCard";
import garden1 from "../../assets/garden-1.png";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import offerSticker from "../../assets/offerSticker.svg";

const wishlistData = [
  {
    id: 1,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 2,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 3,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 4,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 5,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 6,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
  {
    id: 7,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    ratedStar: starColor,
    unratedStar: star,
    offerPrice: 44,
    price: 50,
    offerSticker: offerSticker,
    discount: "-10%",
  },
];

const Wishlist = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h4>Wishlist</h4>
        </Col>
      </Row>
      <Row>
        {wishlistData.map((wishlistProduct) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={wishlistProduct.id}
            className="my-3"
          >
            <ProductCard
              imgUrl={wishlistProduct.imgUrl}
              detail={wishlistProduct.detail}
              ratedStar={wishlistProduct.ratedStar}
              unratedStar={wishlistProduct.unratedStar}
              offerPrice={wishlistProduct.offerPrice}
              price={wishlistProduct.price}
              offerSticker={wishlistProduct.offerSticker}
              discount={wishlistProduct.discount}
              btnClass="d-block rounded-5 w-100 border-0 my-1"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wishlist;
