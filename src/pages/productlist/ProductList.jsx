import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Form,
  ListGroup,
} from "react-bootstrap";
import "./productList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import garden1 from "../../assets/garden-1.png";
import fourStar from "../../assets/4Star.svg";
import threeStar from "../../assets/3Star.svg";
import twoStar from "../../assets/2Star.svg";
import oneStar from "../../assets/1Star.svg";
import offerSticker from "../../assets/offerSticker.svg";

const ProductList = () => {
  return (
    <Container fluid className="productList-main">
      <Breadcrumb className="small d-none d-lg-flex">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active className="text-black">
          Western Wear
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="d-none d-lg-flex">
        <Col lg={2} className="d-flex align-items-center fs-3 ">
          <span className="ps-3 text-secondary fw-medium">Filter</span>
        </Col>
        <Col lg={7} className="d-flex align-items-center">
          <span className="fw-bold fs-3">Results</span>
        </Col>
        <Col
          lg={3}
          className=" d-flex align-items-center justify-content-center"
        >
          <div className="border d-flex align-items-center justify-content-center rounded-5 px-2">
            <div>
              <span>Sort By:</span>
            </div>
            <div>
              <Form.Select className="shadow-none border-0">
                <option>Relevency</option>
                <option value="1">Lowest Price</option>
                <option value="2">Highest Price</option>
                <option value="3">Top Customers Reviews</option>
                <option value="4">Most Recent</option>
              </Form.Select>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="d-flex d-lg-none">
        <Col className=" d-flex align-items-center">
          <div className="border d-flex align-items-center justify-content-center rounded-5 px-2">
            <div>
              <span>Sort By:</span>
            </div>
            <div>
              <Form.Select className="shadow-none border-0">
                <option>Relevency</option>
                <option value="1">Lowest Price</option>
                <option value="2">Highest Price</option>
                <option value="3">Top Customers Reviews</option>
                <option value="4">Most Recent</option>
              </Form.Select>
            </div>
          </div>
        </Col>
        <Col>a</Col>
      </Row>

      <Row className="d-none d-lg-flex">
        <Col md={2}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Form.Label>Condition</Form.Label>
              <Form.Check type="checkbox" label="Brand New" />
              <Form.Check type="checkbox" label="Open Box" />
              <Form.Check type="checkbox" label="Like New" />
              <Form.Check type="checkbox" label="Very Good" />
              <Form.Check type="checkbox" label="Good" />
              <Form.Check type="checkbox" label="Acceptable" />
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Label>Review</Form.Label>
              <label htmlFor="" className="d-flex gap-1">
                <Form.Check type="checkbox" value="4star" id="4star" />
                <img src={fourStar} />
              </label>
              <label htmlFor="" className="d-flex gap-1">
                <Form.Check type="checkbox" id="3star" />
                <img src={threeStar} />
              </label>
              <label htmlFor="" className="d-flex gap-1">
                <Form.Check type="checkbox" id="2star" />
                <img src={twoStar} />
              </label>
              <label htmlFor="" className="d-flex gap-1">
                <Form.Check type="checkbox" id="1star" />
                <img src={oneStar} />
              </label>
              <Form.Check type="checkbox" label="No Review" id="noReview" />
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Label>Price</Form.Label>
              <Form.Check type="checkbox" label="Under $10" />
              <Form.Check type="checkbox" label="$10 - $25" />
              <Form.Check type="checkbox" label="$25 - $50" />
              <Form.Check type="checkbox" label="$50 - $100" />
              <Form.Check type="checkbox" label="Over $100" />
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={10}></Col>
      </Row>
    </Container>
  );
};

export default ProductList;
