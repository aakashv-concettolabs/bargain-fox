import "./category.scss";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { categorylist } from "../../api/Apis";
import { useEffect, useState } from "react";
import SpinnerComponent from "../spinner/SpinnerComponent";
import { dividerClasses } from "@mui/material";

const Category = () => {
  const [responsedResult, setResponsedResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    CategoryApiCall();
  }, []);

  const CategoryApiCall = async () => {
    setLoading(true);
    try {
      const response = await axios.get(categorylist);
      setLoading(false);
      setResponsedResult(response.data.result);
    } catch (error) {
      console.log("CategoryApiCall error", error);
    }
  };

  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-xl-10 offset-xl-1 ps-0 ">
          {loading ? (
            <div className="text-center">
              <SpinnerComponent />
            </div>
          ) : (
            <Row className="categoryRow">
              {responsedResult.map((categoryData) => (
                <Col
                  xs={3}
                  md={2}
                  className="my-2 categoryCol"
                  key={categoryData.id}
                >
                  <Circle categoryData={categoryData} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
