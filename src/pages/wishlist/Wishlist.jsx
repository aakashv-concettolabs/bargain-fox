import { Col, Container, Row } from "react-bootstrap";
import "./wishlist.scss";
import ProductCard from "../../components/productCard/ProductCard";
import { GardenDatas } from "../../components/sliderSetting/SliderSetting";

const Wishlist = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h4>Wishlist</h4>
        </Col>
      </Row>
      <Row>
        {GardenDatas.map((gardenData) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={gardenData.id}
            className="my-3"
          >
            <ProductCard
              imgUrl={gardenData.imgUrl}
              detail={gardenData.detail}
              price={gardenData.price}
              offerPrice={gardenData.offerPrice}
              btnClass="d-block w-100 rounded-5 my-3"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wishlist;
