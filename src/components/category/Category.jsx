import "./category.scss";
// import kitchenCategory from "../../assets/kitchenCategory.png";
// import healthCategory from "../../assets/healthCategory.png";
// import electronicCategory from "../../assets/electroniCategory.png";
// import toyCategory from "../../assets/toy.png";
// import sportsCategory from "../../assets/sport.png";
// import clearanceCategory from "../../assets/clearance.png";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { categorylist } from "../../api/Apis";
import { useEffect, useState } from "react";

// const categoryDatas = [
//   {
//     id: 1,
//     imgUrl: kitchenCategory,
//     categoryText: "Home & Kitchen",
//   },
//   {
//     id: 2,
//     imgUrl: healthCategory,
//     categoryText: "Health & Beauty",
//   },
//   {
//     id: 3,
//     imgUrl: electronicCategory,
//     categoryText: "Electonics",
//   },
//   {
//     id: 4,
//     imgUrl: toyCategory,
//     categoryText: "Toys & Crafts",
//   },
//   {
//     id: 5,
//     imgUrl: sportsCategory,
//     categoryText: "Sports & Leisure",
//   },
//   {
//     id: 6,
//     imgUrl: clearanceCategory,
//     categoryText: "Clearance",
//   },
// ];
const Category = () => {
  const [responsedResult, setResponsedResult] = useState([]);

  const CategoryApiCall = async () => {
    try {
      const response = await axios.get(categorylist);
      setResponsedResult(response.data.result);
    } catch (error) {
      console.log("CategoryApiCall error", error);
    }
  };

  useEffect(() => {
    CategoryApiCall();
  }, []);
  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-xl-8 offset-xl-2 ps-0 ">
          <Row className="categoryRow">
            {responsedResult.map((categoryData) => (
              <Col
                xs={3}
                md={2}
                className="my-2 categoryCol"
                key={categoryData.id}
              >
                <Circle
                  imgUrl={categoryData.thumbnail_image_url}
                  categoryText={categoryData.title}
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
