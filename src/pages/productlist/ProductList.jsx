import { Col, Container, Row, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./productList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import filter from "../../assets/filter.svg";
import FilterSidebar from "../../components/filterSidebar/FilterSidebar";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { Link } from "react-router-dom";
import { GardenDatas } from "../../components/sliderSetting/SliderSetting";
import axios from "axios";
import { productlist } from "../../api/Apis";

const ProductList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [responseResult, setresponseResult] = useState([]);

  const productListApiCall = async () => {
    try {
      const response = await axios.post(productlist);
      setresponseResult(response.data.result.data);
    } catch (error) {
      console.log("productlist error", error);
    }
  };
  const abc = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    productListApiCall();
  }, []);

  return (
    <Container fluid className="productList-main">
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
          <div className="row border rounded-5 p-2">
            <div className="col d-flex gap-2">
              <label className="text-secondary">Sort BY:</label>
              <select className="shadow-none border-0 focus-ring bg-white">
                <option>Relevency</option>
                <option value="1">Lowest Price</option>
                <option value="2">Highest Price</option>
                <option value="3">Top Customers Reviews</option>
                <option value="4">Most Recent</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="d-flex d-lg-none mt-4 ms-1 align-items-center justify-content-between">
        <Col className="col-5 d-flex align-items-center">
          <div className="row border rounded-5 p-2">
            <div className="col  d-flex gap-2">
              <label className="text-secondary d-none d-md-flex">
                Sort BY:
              </label>
              <select className="shadow-none border-0 focus-ring bg-white">
                <option>Relevency</option>
                <option value="1">Lowest Price</option>
                <option value="2">Highest Price</option>
                <option value="3">Top Customers Reviews</option>
                <option value="4">Most Recent</option>
              </select>
            </div>
          </div>
        </Col>
        <Col className="fliterOptionButton col-5 d-flex align-items-center justify-content-end gap-2">
          <img src={filter} alt="filter" onClick={handleShow} />
          <span className="text-secondary fw-medium fs-3" onClick={handleShow}>
            Filter
          </span>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col lg={2} className="d-none d-lg-flex">
          <FilterSidebar />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <span className="ps-3 text-secondary fw-medium fs-3">Filter</span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <FilterSidebar />
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        <Col md={12} lg={10} className="col-12">
          <Row className="d-flex">
            {responseResult.map((gardenData) => (
              <Col
                xs={12}
                sm={6}
                lg={3}
                md={4}
                className="mt-3"
                key={gardenData.id}
              >
                <Link
                  to={"/productList/productdetail"}
                  className="text-decoration-none"
                >
                  <ProductCard
                    imgUrl={gardenData.product_images[0].product_image_url}
                    detail={gardenData.name}
                    key={gardenData.id}
                    price={gardenData.main_rrp}
                    offerPrice={gardenData.my_sale_price}
                    discountPercent={gardenData.percentage_discount}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <PaginationComponent />
          <button onClick={abc}>next</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
