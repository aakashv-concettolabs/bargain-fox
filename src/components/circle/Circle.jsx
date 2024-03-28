import "./circle.scss";
import { useState } from "react";
import { Col, Image, Row, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Circle = ({ categoryData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const subcategoryData = categoryData.subcategory;
  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };
  const handleMouseLeave = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="categoryCircle position-relative ">
      <div className="d-flex flex-column align-items-center justify-content-between">
        <Link
          className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
          to={`productList/${categoryData.slug}`}
        >
          <div className="categoryImageContainer d-flex flex-column justify-content-center align-items-center">
            <Image
              roundedCircle
              src={categoryData.thumbnail_image_url}
              className="w-100"
            />
          </div>
          <span className="text-center fw-medium text-black">
            {categoryData.title}
          </span>
        </Link>
        <div className="dot rounded-circle position-absolute"></div>
      </div>

      {subcategoryData != "" && (
        <div className="menu position-absolute z-3">
          <div className=" mt-3 p-3 rounded-5 bg-white">
            <Tab.Container>
              <Row>
                <Col>
                  {subcategoryData.map((subcategory, index) => (
                    <Nav
                      key={subcategory.id}
                      className={`text-decoration-none ${
                        activeTab === index ? "bg-body-secondary" : null
                      }`}
                      as={Link}
                      to={`productList/${categoryData.slug}/${subcategory.slug}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <Nav.Item
                        className={`fw-medium d-block px-3 py-2  ${
                          activeTab === index ? "text-black" : "text-muted"
                        }`}
                      >
                        {subcategory.title}
                      </Nav.Item>
                    </Nav>
                  ))}
                </Col>
                <Col>
                  <Tab.Content className="d-flex flex-column gap-2 bi-cursor">
                    {activeTab != null &&
                      subcategoryData[activeTab].collection.map(
                        ({ title, slug }, index) => (
                          <Tab.Pane
                            key={index}
                            as={Link}
                            to={`productList/${categoryData.slug}/${subcategoryData[activeTab].slug}/${slug}`}
                            className="text-decoration-none"
                          >
                            {title}
                          </Tab.Pane>
                        )
                      )}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default Circle;
