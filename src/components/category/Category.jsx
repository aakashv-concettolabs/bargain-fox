import "./category.scss";
import kitchenCategory from "../../assets/kitchenCategory.png";
import healthCategory from "../../assets/healthCategory.png";
import electronicCategory from "../../assets/electroniCategory.png";
import toyCategory from "../../assets/toy.png";
import sportsCategory from "../../assets/sport.png";
import clearanceCategory from "../../assets/clearance.png";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { useState } from "react";

const categoryDatas = [
  {
    id: 1,
    imgUrl: kitchenCategory,
    categoryText: "Home & Kitchen",
    notOffer: "d-none",
  },
  {
    id: 2,
    imgUrl: healthCategory,
    categoryText: "Health & Beauty",
    notOffer: "d-none",
  },
  {
    id: 3,
    imgUrl: electronicCategory,
    categoryText: "Electonics",
    notOffer: "d-none",
  },
  {
    id: 4,
    imgUrl: toyCategory,
    categoryText: "Toys & Crafts",
    notOffer: "d-none",
  },
  {
    id: 5,
    imgUrl: sportsCategory,
    categoryText: "Sports & Leisure",
    notOffer: "d-none",
  },
  {
    id: 6,
    imgUrl: clearanceCategory,
    categoryText: "Clearance",
    notOffer: "d-none",
  },
];
const Category = () => {
  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-12 col-xl-8 offset-xl-2 ">
          <Row>
            {categoryDatas.map((categoryData) => (
              <Col
                xs={3}
                md={2}
                className="my-2 d-flex justify-content-start"
                key={categoryData.id}
              >
                <Circle
                  imgUrl={categoryData.imgUrl}
                  categoryText={categoryData.categoryText}
                  notOffer={categoryData.notOffer}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
