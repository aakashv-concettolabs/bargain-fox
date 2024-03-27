import "./circle.scss";
import { useState } from "react";
import { Col, Image, Row, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Circle = ({ responsedResult }) => {
  const [activeTab, setActiveTab] = useState(0);
  const subcategoryData = responsedResult.subcategory;
  const handleMouseEnter = (index) => {
    setActiveTab(index);
  };
  const handleMouseLeave = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="categoryCircle position-relative ">
      <div className="d-flex flex-column align-items-center justify-content-between">
        <div className="categoryImageContainer d-flex flex-column justify-content-center align-items-center">
          <Image
            roundedCircle
            src={responsedResult.thumbnail_image_url}
            className="w-100"
          />
        </div>
        <span className="text-center fw-medium">{responsedResult.title}</span>
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
                      className={` ${
                        activeTab === index ? "bg-body-secondary" : null
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <Nav.Item>
                        <Nav.Link
                          as={Link}
                          to={subcategory.slug}
                          className={`fw-medium ${
                            activeTab === index ? "text-black" : "text-muted"
                          }`}
                        >
                          {subcategory.title}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  ))}
                </Col>
                <Col>
                  <Tab.Content className="d-flex flex-column gap-2 bi-cursor">
                    {activeTab !== null &&
                      subcategoryData[activeTab] &&
                      subcategoryData[activeTab].collection &&
                      subcategoryData[activeTab].collection.map(
                        ({ title, slug }, index) => (
                          <Tab.Pane
                            key={index}
                            as={Link}
                            to={slug}
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
