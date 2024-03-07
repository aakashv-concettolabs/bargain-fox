import "./address.scss";
import {
  Col,
  Container,
  Image,
  Row,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import addressIcon from "../../assets/addAddressIcon.svg";
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import american from "../../assets/american.png";
import { Link } from "react-router-dom";
import NewAddress from "../../components/newAddress/NewAddress";
import { useState } from "react";

const paymentMethod = [
  {
    id: 1,
    imgUrl: paypal,
    imgName: "paypal",
  },
  {
    id: 2,
    imgUrl: visa,
    imgName: "visa card",
  },
  {
    id: 3,
    imgUrl: mastercard,
    imgName: "master card",
  },
  {
    id: 4,
    imgUrl: american,
    imgName: "american card",
  },
];

const userAddresses = [
  {
    id: 1,
    userName: "Aman Patel",
    postalAddress: "22 Walden Road, Greenland, UK, KW14 3XY",
    mobNumber: "+44 9876543210",
  },
  {
    id: 2,
    userName: "Aditya Patel",
    postalAddress: "22 Walden Road, Greenland, UK, KW14 3XY",
    mobNumber: "+44 9876543210",
  },
];

const Address = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Container fluid className="address-container">
        <Row className="justify-content-around mt-3">
          <Col xs={12} md={8} lg={8}>
            <Row>
              <Col>
                <h4>Select Delivery Address</h4>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Button className="gap-2 d-flex align-items-center text-black bg-white btn-outline-light">
                  <Image
                    src={addressIcon}
                    height="20px"
                    onClick={() => setShow(true)}
                  />
                  <span onClick={() => setShow(true)}>Add New</span>
                </Button>
              </Col>
            </Row>

            {userAddresses.map((userAddresse) => (
              <Row className="mt-3 pt-3 border-top" key={userAddresse.id}>
                <Col xs={9} className="d-flex gap-4">
                  <Form.Check type="radio" name="address" />
                  <div className=" d-flex flex-column">
                    <span className="fw-bold lead">
                      {userAddresse.userName}
                    </span>
                    <span>{userAddresse.postalAddress}</span>
                    <span>
                      <strong>Phone Number: </strong>
                      {userAddresse.mobNumber}
                    </span>
                  </div>
                </Col>
                <Col xs={3} className="d-flex justify-content-end">
                  <p className="editoption">Edit Address</p>
                </Col>
              </Row>
            ))}
          </Col>

          <Col xs={12} md={4} lg={3}>
            <Card className="border rounded-4">
              <Card.Body>
                <div className="border-bottom pb-3">
                  <Button
                    className="w-100 rounded-5 border-0 text-white"
                    as={Link}
                  >
                    Continue to Payment
                  </Button>
                </div>
                <div>
                  <div>
                    <p>We Accept:</p>
                    <Row>
                      <Col xs={11} sm={10} md={12} className="d-flex">
                        {paymentMethod.map((paymentmode) => (
                          <div key={paymentmode.id} className="w-75">
                            <Image
                              src={paymentmode.imgUrl}
                              alt={paymentMethod.imgName}
                              className="w-75"
                            />
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {show && <NewAddress show={show} handleClose={handleClose} />}
    </>
  );
};

export default Address;
