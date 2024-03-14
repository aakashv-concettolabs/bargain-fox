import "./category.scss";
import kitchenCategory from "../../assets/kitchenCategory.png";
import healthCategory from "../../assets/healthCategory.png";
import electronicCategory from "../../assets/electroniCategory.png";
import toyCategory from "../../assets/toy.png";
import sportsCategory from "../../assets/sport.png";
import clearanceCategory from "../../assets/clearance.png";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row } from "react-bootstrap";

const categoryDatas = [
  {
    id: 1,
    imgUrl: kitchenCategory,
    categoryText: "Home & Kitchen",
  },
  {
    id: 2,
    imgUrl: healthCategory,
    categoryText: "Health & Beauty",
  },
  {
    id: 3,
    imgUrl: electronicCategory,
    categoryText: "Electonics",
  },
  {
    id: 4,
    imgUrl: toyCategory,
    categoryText: "Toys & Crafts",
  },
  {
    id: 5,
    imgUrl: sportsCategory,
    categoryText: "Sports & Leisure",
  },
  {
    id: 6,
    imgUrl: clearanceCategory,
    categoryText: "Clearance",
  },
];
const Category = () => {
  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-12 col-xl-8 offset-xl-2 ps-0 ">
          <Row className="categoryRow">
            {categoryDatas.map((categoryData) => (
              <Col xs={3} md={2} className="my-2" key={categoryData.id}>
                <Circle
                  imgUrl={categoryData.imgUrl}
                  categoryText={categoryData.categoryText}
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
