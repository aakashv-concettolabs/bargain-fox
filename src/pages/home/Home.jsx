import { Container, Row, Col } from "react-bootstrap";
import Category from "../../components/category/Category";
import banner from "../../assets/banner.png";
import "./home.scss";
import Deals from "../../components/deals/Deals";
import Trending from "../../components/trending/Trending";

const Home = () => {
  return (
    <Container fluid>
      <Category />
      <Row>
        <Col className="p-0">
          <img src={banner} alt="banner" width="100%" />
        </Col>
      </Row>
      <Deals />
      <Trending />
    </Container>
  );
};

export default Home;
