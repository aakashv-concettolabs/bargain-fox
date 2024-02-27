import "./category.scss";
import kitchenCategory from "../../assets/kitchenCategory.png";
import healthCategory from "../../assets/healthCategory.png";
import electronicCategory from "../../assets/electroniCategory.png";
import toyCategory from "../../assets/toy.png";
import sportsCategory from "../../assets/sport.png";
import clearanceCategory from "../../assets/clearance.png";
import Circle from "../../components/circle/Circle";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { useState } from "react";

const Category = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabHover = (eventKey) => {
    setActiveTab(eventKey);
  };
  return (
    <Container className="my-3 category-main">
      <Row>
        <Col className="col-12 col-xl-8 offset-xl-2 ">
          <Row className="d-flex">
            <Col className="col-3 col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={kitchenCategory}
                    categoryText="Home & Kitchen"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
                <div className="menu position-absolute">
                  <div className="bg-body-tertiary mt-3 p-3 rounded-5">
                    <Tab.Container activeKey={activeTab}>
                      <Row className="d-flex">
                        <Col lg={6} md={6}>
                          <Nav className="flex-column gap-2">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onMouseEnter={() => handleTabHover("first")}
                                className={
                                  activeTab === "first"
                                    ? "text-black"
                                    : "text-muted"
                                }
                              >
                                Home
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "second"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="second"
                                onMouseEnter={() => handleTabHover("second")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Kitchen
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "third"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="third"
                                onMouseEnter={() => handleTabHover("third")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Office
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={6} md={6}>
                          <Tab.Content className="d-flex flex-column gap-3 small">
                            <Tab.Pane eventKey="first">
                              Appliances & Accessories
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Cleaning & Household
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">Lighting</Tab.Pane>
                            <Tab.Pane eventKey="first">Bathroom</Tab.Pane>
                            <Tab.Pane eventKey="first">Bedroom</Tab.Pane>
                            <Tab.Pane eventKey="first">Furnishings</Tab.Pane>
                            <Tab.Pane eventKey="first">Decor</Tab.Pane>
                            <Tab.Pane eventKey="second">Appliances</Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Utensils, Tools & Gadgets
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Cooking & Baking
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Tableware</Tab.Pane>
                            <Tab.Pane eventKey="third">
                              Storage & Organisation
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Supplies</Tab.Pane>
                            <Tab.Pane eventKey="third">Printers</Tab.Pane>
                            <Tab.Pane eventKey="third">Shredders</Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="col-3  col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={healthCategory}
                    categoryText="Health & Beauty"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
                <div className="menu position-absolute">
                  <div className="bg-body-tertiary mt-3 p-3 rounded-5">
                    <Tab.Container activeKey={activeTab}>
                      <Row className="d-flex">
                        <Col lg={6} md={6}>
                          <Nav className="flex-column gap-2">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onMouseEnter={() => handleTabHover("first")}
                                className={
                                  activeTab === "first"
                                    ? "text-black"
                                    : "text-muted"
                                }
                              >
                                Health
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "second"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="second"
                                onMouseEnter={() => handleTabHover("second")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Beauty
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "third"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="third"
                                onMouseEnter={() => handleTabHover("third")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Baby & Kids
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={6} md={6}>
                          <Tab.Content className="d-flex flex-column gap-3 small">
                            <Tab.Pane eventKey="first">
                              Shaving & Hair Removal
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">Oral Care</Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Massage & Relaxation
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Medical & Mobility
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Sexual Pleasure & Wellbeing
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Skincare & Beauty
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Hair Care & Styling
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Cooking & Baking
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">Baby Products</Tab.Pane>
                            <Tab.Pane eventKey="third">Kids</Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="col-3  col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={electronicCategory}
                    categoryText="Electonics"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
                <div className="menu position-absolute">
                  <div className="bg-body-tertiary mt-3 p-3 rounded-5">
                    <Tab.Container activeKey={activeTab}>
                      <Row className="d-flex">
                        <Col lg={6} md={6}>
                          <Nav className="flex-column gap-2">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onMouseEnter={() => handleTabHover("first")}
                                className={
                                  activeTab === "first"
                                    ? "text-black"
                                    : "text-muted"
                                }
                              >
                                Computing
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "second"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="second"
                                onMouseEnter={() => handleTabHover("second")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Appliances
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={6} md={6}>
                          <Tab.Content className="d-flex flex-column gap-3 small">
                            <Tab.Pane eventKey="first">
                              Computing & Accessories
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Phones & Tablets
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Audio & Visuals
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">Gaming</Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Kitchen Appliances
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Heating, Cooling & Air
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Home Appliances
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="col-3 col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={toyCategory}
                    categoryText="Toys & Crafts"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
                <div className="menu position-absolute">
                  <div className="bg-body-tertiary mt-3 p-3 rounded-5">
                    <Tab.Container activeKey={activeTab}>
                      <Row className="d-flex">
                        <Col lg={6} md={6}>
                          <Nav className="flex-column gap-2">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onMouseEnter={() => handleTabHover("first")}
                                className={
                                  activeTab === "first"
                                    ? "text-black"
                                    : "text-muted"
                                }
                              >
                                Toys & Games
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "second"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="second"
                                onMouseEnter={() => handleTabHover("second")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Crafts & Party
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={6} md={6}>
                          <Tab.Content className="d-flex flex-column gap-3 small">
                            <Tab.Pane eventKey="first">
                              Games & Puzzles
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Outdoor & Sports Toys
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Educational Toys
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Dolls & Figures
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Arts & Crafts</Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Fancy Dress & Party
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Home Appliances
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="d-none d-md-flex  col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={sportsCategory}
                    categoryText="Sports & Leisure"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
                <div className="menu position-absolute">
                  <div className="bg-body-tertiary mt-3 p-3 rounded-5">
                    <Tab.Container activeKey={activeTab}>
                      <Row className="d-flex">
                        <Col lg={6} md={6}>
                          <Nav className="flex-column gap-2">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                onMouseEnter={() => handleTabHover("first")}
                                className={
                                  activeTab === "first"
                                    ? "text-black"
                                    : "text-muted"
                                }
                              >
                                Sports & Games
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "second"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="second"
                                onMouseEnter={() => handleTabHover("second")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Travel & Champing
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "third"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="third"
                                onMouseEnter={() => handleTabHover("third")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Garden & DIY
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className={
                                  activeTab === "fourth"
                                    ? "text-black"
                                    : "text-muted"
                                }
                                eventKey="fourth"
                                onMouseEnter={() => handleTabHover("fourth")}
                                onMouseLeave={() => handleTabHover("first")}
                              >
                                Entertainment
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={6} md={6}>
                          <Tab.Content className="d-flex flex-column gap-3 small">
                            <Tab.Pane eventKey="first">Water Sports</Tab.Pane>
                            <Tab.Pane eventKey="first">Ball Sports</Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Bikes, Scooters & Ride-Ons
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Outdoor & Sporting Toys
                            </Tab.Pane>
                            <Tab.Pane eventKey="first">
                              Training & Fitness
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Luggage & Travel
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Champing & Outdoor
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              Caravans & Champers
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Motors</Tab.Pane>
                            <Tab.Pane eventKey="third">Gardening</Tab.Pane>
                            <Tab.Pane eventKey="third">DIY</Tab.Pane>
                            <Tab.Pane eventKey="fourth">Books</Tab.Pane>
                            <Tab.Pane eventKey="fourth">Music</Tab.Pane>
                            <Tab.Pane eventKey="fourth">Party</Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="d-none d-md-flex  col-md-2">
              <div className="categoryItem position-relative ">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <Circle
                    imgUrl={clearanceCategory}
                    categoryText="Clearance"
                    notOffer="d-none"
                  />
                  <div className="dot rounded-circle position-absolute"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
