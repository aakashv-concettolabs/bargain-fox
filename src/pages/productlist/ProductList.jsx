import { Breadcrumb, Col, Container, Row, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import "./productList.scss";
import ProductCard from "../../components/productCard/ProductCard";
import garden1 from "../../assets/garden-1.png";
import star from "../../assets/star.svg";
import starColor from "../../assets/starColor.svg";
import offerSticker from "../../assets/offerSticker.svg";
import FilterSidebar from "../../components/filterSidebar/FilterSidebar";
import PaginationComponent from "../../components/pagination/PaginationComponent";

const ProductList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <Row className="d-flex d-lg-none mt-4 ms-1 align-items-center">
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
        <Col
          className="fliterOptionButton col-7 d-flex align-items-center justify-content-end gap-2"
          onClick={handleShow}
        >
          <img
            src="https://concetto-web.bargainfox.com/images/svg/filter.svg"
            alt=""
          />
          <span className="text-secondary fw-medium fs-3">Filter</span>
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
            <Col lg={3} sm={6} xs={12} md={4} className="mt-3">
              <ProductCard
                imgUrl={garden1}
                detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                ratedStar={starColor}
                unratedStar={star}
                offerPrice="44"
                price="50"
                offerSticker={offerSticker}
                discount="-10%"
              />
            </Col>
            <Col lg={3} sm={6} xs={12} md={4} className="mt-3">
              <ProductCard
                imgUrl={garden1}
                detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                ratedStar={starColor}
                unratedStar={star}
                offerPrice="44"
                price="50"
                offerSticker={offerSticker}
                discount="-10%"
              />
            </Col>
            <Col lg={3} sm={6} xs={12} md={4} className="mt-3">
              <ProductCard
                imgUrl={garden1}
                detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                ratedStar={starColor}
                unratedStar={star}
                offerPrice="44"
                price="50"
                offerSticker={offerSticker}
                discount="-10%"
              />
            </Col>
            <Col lg={3} sm={6} xs={12} md={4} className="mt-3">
              <ProductCard
                imgUrl={garden1}
                detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                ratedStar={starColor}
                unratedStar={star}
                offerPrice="44"
                price="50"
                offerSticker={offerSticker}
                discount="-10%"
              />
            </Col>
            <Col lg={3} sm={6} xs={12} md={4} className="mt-3">
              <ProductCard
                imgUrl={garden1}
                detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                ratedStar={starColor}
                unratedStar={star}
                offerPrice="44"
                price="50"
                offerSticker={offerSticker}
                discount="-10%"
              />
            </Col>
          </Row>

          {/* <div className="d-flex ">
            <ProductCard
              imgUrl={garden1}
              detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              ratedStar={starColor}
              unratedStar={star}
              offerPrice="44"
              price="50"
              offerSticker={offerSticker}
              discount="-10%"
            />
            <ProductCard
              imgUrl={garden1}
              detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              ratedStar={starColor}
              unratedStar={star}
              offerPrice="44"
              price="50"
              offerSticker={offerSticker}
              discount="-10%"
            />
            <ProductCard
              imgUrl={garden1}
              detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              ratedStar={starColor}
              unratedStar={star}
              offerPrice="44"
              price="50"
              offerSticker={offerSticker}
              discount="-10%"
            />
            <ProductCard
              imgUrl={garden1}
              detail="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              ratedStar={starColor}
              unratedStar={star}
              offerPrice="44"
              price="50"
              offerSticker={offerSticker}
              discount="-10%"
            />
          </div> */}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
