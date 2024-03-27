import "./category.scss";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { categorylist } from "../../api/Apis";
import { useEffect, useState } from "react";

const Category = () => {
  const [responsedResult, setResponsedResult] = useState([]);
  useEffect(() => {
    CategoryApiCall();
  }, []);

  const CategoryApiCall = async () => {
    try {
      const response = await axios.get(categorylist);
      setResponsedResult(response.data.result);
    } catch (error) {
      console.log("CategoryApiCall error", error);
    }
  };

  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-xl-10 offset-xl-1 ps-0 ">
          <Row className="categoryRow">
            {responsedResult.map((categoryData) => (
              <Col
                xs={3}
                md={2}
                className="my-2 categoryCol"
                key={categoryData.id}
              >
                <Circle responsedResult={categoryData} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
