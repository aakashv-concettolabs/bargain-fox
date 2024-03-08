import "./sectionHeading.scss";
import { Col, Nav, Row } from "react-bootstrap";
import rightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";

const SectionHeading = ({ sectionHeadingTitle }) => {
  return (
    <Row className="sectionTitleMain">
      <Col className="col-12 p-0">
        <Row>
          <Col className="col-8 d-flex gap-2">
            <div className="d-flex align-items-center">
              <span className="sectionTitle fw-bolder">
                {sectionHeadingTitle}
              </span>
            </div>
          </Col>
          <Col className="col-4 p-0">
            <Nav className="d-flex justify-content-end">
              <Nav.Link as={Link} href="#home" className="d-flex gap-2">
                <span>View All</span>
                <img src={rightArrow} alt="View all" />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SectionHeading;
