import { Container, Row, Col, Image } from "react-bootstrap";
import Category from "../../components/category/Category";
import banner from "../../assets/banner.png";
import "./home.scss";
import Deals from "../../components/deals/Deals";
import Trending from "../../components/trending/Trending";
import Garden from "../../components/garden/Garden";
import Electronics from "../../components/electronics/Electronics";

const Home = () => {
  return (
    <Container fluid>
      <Category />
      <Row>
        <Col className="p-0">
          <Image src={banner} className="w-100" />
        </Col>
      </Row>
      <Deals />
      <Trending />
      <Garden />
      <Electronics />
    </Container>
  );
};

export default Home;
