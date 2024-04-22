import "./savedCreditDebitCards.scss";
import { Card, Col, Image, Row } from "react-bootstrap";
import Visa from "../../assets/visa.svg";
import deleteImg from "../../assets/delete.svg";

const SavedCreditDebitCards = () => {
  return (
    <Row>
      <Col lg={9} className="savedCards-Main mt-3 offset-lg-1">
        <Row>
          <Col lg={6} className="p-3">
            <Card className="credit-card bg-warning-subtle border-warning border border-2 rounded-3">
              <Card.Body className="py-2">
                <Row>
                  <Col className=" d-flex justify-content-end">
                    <div className="deleteImgDiv">
                      <Image src={deleteImg} className="w-100 h-100" />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div className="visaImgDiv mb-2">
                      <Image src={Visa} className="w-100 h-100" />
                    </div>
                    <Card.Text className="fw-semibold">
                      **** **** **** 1234
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="small mb-0">CARD HOLDER</p>
                    <strong>Test Case</strong>
                  </Col>
                  <Col>
                    <p className="small mb-0">EXPIRES</p>
                    <strong>04/25</strong>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SavedCreditDebitCards;
