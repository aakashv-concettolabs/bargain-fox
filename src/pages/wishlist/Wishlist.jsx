import { Col, Container, Image, Row } from "react-bootstrap";
import "./wishlist.scss";
import ProductCard from "../../components/productCard/ProductCard";
import noProduct from "../../assets/noorder.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { userWishlist } from "../../api/Apis";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const token = localStorage.getItem("token");
  const [wishlistData, setWishlistData] = useState();

  const wishlistCall = async () => {
    if (token) {
      try {
        const response = await axios.post(
          userWishlist,
          { per_page: 10 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status == 200) {
          setWishlistData(response.data.result.data);
        }
      } catch (error) {
        console.log("wishlist error", error);
      }
    }
  };

  useEffect(() => {
    wishlistCall();
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h4>Wishlist</h4>
        </Col>
      </Row>
      <Row>
        {wishlistData == undefined || wishlistData.length == 0 ? (
          <Row className="my-5">
            <Col className="text-center">
              <div>
                <Image src={noProduct} />
              </div>
              <h2 className="mt-4">No products found</h2>
              <p className="my-3">
                Look like you have not added any product in your wishlist yet.
              </p>
              <Link className="btn btn-primary rounded-5 px-3 py-2" to={"/"}>
                Return to Shop
              </Link>
            </Col>
          </Row>
        ) : (
          wishlistData.map((wishList) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={wishList.id}
              className="my-3"
            >
              <ProductCard
                productData={wishList}
                btnClass="d-block"
                wishlistCall={wishlistCall}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;
