import "./category.scss";
import kitchenCategory from "../../assets/kitchenCategory.png";
import healthCategory from "../../assets/healthCategory.png";
import electronicCategory from "../../assets/electroniCategory.png";
import toyCategory from "../../assets/toy.png";
import sportsCategory from "../../assets/sport.png";
import clearanceCategory from "../../assets/clearance.png";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Container className="my-3">
      <Row>
        <Col className="col-12 col-xl-8 offset-xl-2 ">
          <Row className="d-flex">
            <Col className="col-3 col-md-2">
              <Circle imgUrl={kitchenCategory} categoryText="Home & Kitchen" />
            </Col>
            <Col className="col-3  col-md-2">
              <Circle imgUrl={healthCategory} categoryText="Health & Beauty" />
            </Col>
            <Col className="col-3  col-md-2">
              <Circle imgUrl={electronicCategory} categoryText="Electonics" />
            </Col>
            <Col className="col-3 col-md-2">
              <Circle imgUrl={toyCategory} categoryText="Toys & Crafts" />
            </Col>
            <Col className="d-none d-md-flex  col-md-2">
              <Circle imgUrl={sportsCategory} categoryText="Sports & Leisure" />
            </Col>
            <Col className="d-none d-md-flex  col-md-2">
              <Circle imgUrl={clearanceCategory} categoryText="Clearance" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
