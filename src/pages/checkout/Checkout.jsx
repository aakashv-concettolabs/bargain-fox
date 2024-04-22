import "./checkout.scss";
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
import { Link, useNavigate } from "react-router-dom";
import NewAddress from "../../components/newAddress/NewAddress";
import { useEffect, useState } from "react";
import NoAddress from "../../assets/no-address.svg";
import axios from "axios";
import { storedAddress } from "../../api/Apis";
import { toast } from "react-toastify";

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

const Checkout = () => {
  const [show, setShow] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editAddress, setEditAddress] = useState();
  const [checkedAddress, setCheckedAddress] = useState();
  const token = localStorage.getItem("token");
  console.log("addresses", addresses);
  console.log("checked addresses", checkedAddress);

  const navigate = useNavigate();

  const userStoredAddressCall = async () => {
    if (token) {
      try {
        const storedAddressResponse = await axios.get(storedAddress, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (storedAddressResponse.status == 200) {
          setAddresses(storedAddressResponse.data.result);
          setCheckedAddress(
            storedAddressResponse.data.result.find(
              (defaultaddress) => defaultaddress.default_address === 1
            )?.id
          );
        }
      } catch (error) {
        console.log("store delivery address error", error);
      }
    }
  };

  const handleEditAddress = (Id) => {
    setShow(true);
    const addressToEdit = addresses.find(
      (selectedAddress) => selectedAddress.id == Id
    );
    setEditAddress(addressToEdit);
  };

  useEffect(() => {
    userStoredAddressCall();
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleAddNew = () => {
    setShow(true);
    setEditAddress();
  };

  const handleContinueToPayment = () => {
    if (checkedAddress) {
      navigate("/checkout/payment", { state: checkedAddress });
    } else {
      toast.warning("please select address");
    }
  };

  const handleAddressChange = (event) => {
    setCheckedAddress(event.target.value);
  };

  return (
    <>
      <Container fluid className="address-container">
        {show && (
          <NewAddress
            show={show}
            handleClose={handleClose}
            addressList={userStoredAddressCall}
            editAddress={editAddress}
          />
        )}
        <Row className="justify-content-around mt-3">
          <Col xs={12} md={8} lg={8}>
            <Row>
              <Col>
                <h4>Select Delivery Address</h4>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Button
                  className="d-flex align-items-center gap-2 text-black bg-white btn-outline-light"
                  onClick={handleAddNew}
                >
                  <Image src={addressIcon} height="20px" />
                  <span>Add New</span>
                </Button>
              </Col>
            </Row>
            {addresses.length == 0 && (
              <Row>
                <Col className="text-center my-4">
                  <div>
                    <Image src={NoAddress} />
                  </div>
                  <h2 className="mt-4">No Address Yet</h2>
                  <p className="my-3">
                    Please add your address for your better experience.
                  </p>
                  <Link
                    className="btn btn-primary rounded-5 px-3 py-2"
                    to={"/"}
                  >
                    Return to Shop
                  </Link>
                </Col>
              </Row>
            )}

            {addresses &&
              addresses.map((userAddress) => (
                <Row className="mt-3 pt-3 customborder" key={userAddress.id}>
                  <Col xs={9} className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      name="address"
                      value={userAddress.id}
                      defaultChecked={userAddress.default_address}
                      onChange={handleAddressChange}
                    />
                    <div className=" d-flex flex-column">
                      <h2 className="fw-semibold lead mb-0">
                        {userAddress.full_name}
                      </h2>
                      <p className="my-1">{`${userAddress.address}, ${userAddress.address2}, ${userAddress.city}, ${userAddress.state}, ${userAddress.country}, ${userAddress.postcode}`}</p>
                      <p className="mb-1">
                        <strong>Phone Number: </strong>
                        {userAddress.mobile}
                      </p>
                      {userAddress.default_address == 1 && (
                        <span className="defaultAddress rounded-5 py-1 px-3 text-center mt-2 bg-body-secondary">
                          Default
                        </span>
                      )}
                    </div>
                  </Col>
                  <Col xs={3} className="d-flex justify-content-end">
                    <p
                      className="editoption text-primary"
                      onClick={() => handleEditAddress(userAddress.id)}
                    >
                      Edit Address
                    </p>
                  </Col>
                </Row>
              ))}
          </Col>

          <Col xs={12} md={4} lg={3}>
            <Card className="rounded-4">
              <Card.Body>
                <div className="">
                  <Button
                    className="w-100 rounded-5 text-white"
                    onClick={handleContinueToPayment}
                  >
                    Continue to Payment
                  </Button>
                </div>
                <div className="customborder mt-3 pt-3">
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
