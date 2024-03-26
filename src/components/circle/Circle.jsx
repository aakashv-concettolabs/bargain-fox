import "./circle.scss";
import { useState } from "react";
import { Col, Image, Row, Tab, Nav } from "react-bootstrap";
import { tabMenu } from "./hoverMenuData";

const Circle = ({ imgUrl, categoryText, responsedResult }) => {
  const [activeTab, setActiveTab] = useState("first");
  const handleTabHover = (eventKey) => {
    setActiveTab(eventKey);
  };
  return (
    <div className="categoryCircle position-relative ">
      <div className="d-flex flex-column align-items-center justify-content-between">
        <div className="categoryImageContainer d-flex flex-column justify-content-center align-items-center">
          <Image roundedCircle src={imgUrl} className="w-100" />
        </div>
        <span className="text-center fw-medium">{categoryText}</span>
        <div className="dot rounded-circle position-absolute"></div>
      </div>
      <div className="menu position-absolute z-3">
        <div className="bg-body-tertiary mt-3 p-3 rounded-5">
          <Tab.Container activeKey={activeTab}>
            <Row className="d-flex">
              <Col>
                {responsedResult.map((tabmenu, index) => (
                  <Nav key={index}>
                    {/* {console.log("first", tabmenu)} */}
                    {tabmenu.map((subtabmenu, subindex) =>
                      console.log("first", subtabmenu)
                    )}
                    {/* <div>
                      <Nav.Item>
                        <Nav.Link
                          eventKey={tabmenu.id}
                          onMouseEnter={() => handleTabHover(`${tabmenu.id}`)}
                          className={
                            activeTab === `${tabmenu.id}`
                              ? "text-black"
                              : "text-muted"
                          }
                        >
                          {tabmenu.menu}
                        </Nav.Link>
                      </Nav.Item>
                    </div> */}
                  </Nav>
                ))}
              </Col>
              <Col>
                <Tab.Content className="d-flex flex-column gap-3 small">
                  <Tab.Pane eventKey="first">Appliances & Accessories</Tab.Pane>
                  <Tab.Pane eventKey="first">Cleaning & Household</Tab.Pane>
                  <Tab.Pane eventKey="first">Lighting</Tab.Pane>
                  <Tab.Pane eventKey="first">Bathroom</Tab.Pane>
                  <Tab.Pane eventKey="first">Furnishings</Tab.Pane>
                  <Tab.Pane eventKey="first">Decor</Tab.Pane>
                  <Tab.Pane eventKey="second">Appliances</Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Utensils, Tools & Gadgets
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Cooking & Baking</Tab.Pane>
                  <Tab.Pane eventKey="second">Tableware</Tab.Pane>
                  <Tab.Pane eventKey="third">Storage & Organisation</Tab.Pane>
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
  );
};

export default Circle;
