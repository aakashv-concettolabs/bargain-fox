import { Col, Container, Row, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { productlist } from "../../api/Apis";
import axios from "axios";
import "./productList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import filter from "../../assets/filter.svg";
import FilterSidebar from "../../components/filterSidebar/FilterSidebar";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import Dropdown from "../../components/dropdown/Dropdown";
import Noproduct from "../../components/noProduct/Noproduct";

const ProductList = () => {
  const [show, setShow] = useState(false);
  const [responseResult, setResponseResult] = useState([]);
  const [emptyProduct, setEmptyProduct] = useState(false);
  const [result, setResult] = useState({});
  const { category, subcategory, collection } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const productListCall = async () => {
      const apiData = {
        category_id: category,
        sub_category_id: subcategory,
        collection_id: collection,
        sort_by: params.get("sort_by"),
        search: params.get("searchText"),
        page: params.get("page"),
        condition: params.get("condition"),
        discount: params.get("discount"),
        price_range: params.get("price_range"),
        min_price: params.get("min_price"),
        max_price: params.get("max_price"),
      };

      try {
        const response = await axios.post(productlist, apiData);
        if (response.status === 200) {
          if (response.data.result.data == 0) {
            setEmptyProduct(true);
          } else {
            setEmptyProduct(false);
          }
          setResult(response.data.result);
          setResponseResult(response.data.result.data);
        }
      } catch (error) {
        console.log("productlist error", error);
      }
    };

    productListCall();
  }, [category, subcategory, collection, location.search]);
  return (
    <Container fluid className="productList-main">
      <Row className="d-none d-lg-flex">
        <Col lg={2} className="d-flex align-items-center fs-3 ">
          <span className="ps-3 text-secondary fw-medium">Filter</span>
        </Col>

        {!emptyProduct && (
          <Col lg={7} className="d-flex align-items-center">
            <span className="fw-bold fs-3">Results</span>
          </Col>
        )}

        {!emptyProduct && (
          <Col
            lg={3}
            className=" d-flex align-items-center justify-content-center"
          >
            <Dropdown />
          </Col>
        )}
      </Row>

      <Row className="d-flex d-lg-none mt-4 ms-1 align-items-center justify-content-between">
        <Col className="col-5 d-flex align-items-center"></Col>
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
        <Col md={12} lg={10}>
          <Row>
            {emptyProduct && (
              <Col>
                <Noproduct />
              </Col>
            )}
            {responseResult &&
              responseResult.map((productData) => (
                <Col
                  xs={12}
                  sm={6}
                  lg={3}
                  md={4}
                  className="mt-3"
                  key={productData.id}
                >
                  <ProductCard productData={productData} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <PaginationComponent lastpage={result.last_page} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
