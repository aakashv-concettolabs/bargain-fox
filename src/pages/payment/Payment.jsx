import { Col, Container, FormCheck, Image, Row } from "react-bootstrap";
import "./payment.scss";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import { Link, useLocation } from "react-router-dom";
import ProductPriceTag from "../../components/productPriceTag/ProductPriceTag";
import american from "../../assets/american.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { myCartApi, placeOrderApi, storedAddress } from "../../api/Apis";
import PaymentCardForm from "../../components/paymentCardForm/PaymentCardForm";
import SavedCreditDebitCards from "../../components/savedCreditDebitCards/SavedCreditDebitCards";
import BillingAddressForm from "../../components/billingAddressForm/BillingAddressForm";

const Payment = () => {
  const location = useLocation();
  const paymentpage = true;
  const token = localStorage.getItem("token");
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState();
  const [deliveryItem, setDeliveryItem] = useState();
  const [deliveryType, setDeliveryType] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("debitCreditCard");
  const [addressType, setAddressType] = useState("sameAddress");
  console.log("selected delivery address", selectedDeliveryAddress);

  const userStoredAddressCall = async () => {
    if (token) {
      try {
        const storedAddressResponse = await axios.get(storedAddress, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (storedAddressResponse.status == 200) {
          const result = storedAddressResponse.data.result;
          setSelectedDeliveryAddress(
            result.find((address) => address.id === location.state)
          );
        }
      } catch (error) {
        console.log("selected delivery address error", error);
      }
    }
  };

  const myCart = async () => {
    if (token) {
      try {
        const myCartResponse = await axios.post(
          myCartApi,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (myCartResponse.status === 200) {
          setDeliveryItem(myCartResponse.data.result);
        }
      } catch (error) {
        console.log("my cart delivery error", error);
      }
    }
  };

  const placeOrderCall = async () => {
    const shippingAddressData = {
      country: selectedDeliveryAddress?.country,
      full_name: selectedDeliveryAddress?.full_name,
      address: selectedDeliveryAddress?.address,
      address2: selectedDeliveryAddress?.address2,
      city: selectedDeliveryAddress?.city,
      state: selectedDeliveryAddress?.state,
      mobile: selectedDeliveryAddress?.mobile,
      postcode: selectedDeliveryAddress?.postcode,
    };

    const billingAddressData =
      addressType === "sameAddress" ? shippingAddressData : null;
    const ApiData = {
      address_id: selectedDeliveryAddress?.id,
      delivery_type_id: deliveryType === "standard" ? "1" : "0",
      shipping_address: shippingAddressData,
      billing_address: billingAddressData,
    };
    if (token) {
      try {
        const placeOrderResponse = await axios.post(placeOrderApi, ApiData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (placeOrderResponse.status == 200) {
          console.log("place order response", placeOrderResponse);
        }
      } catch (error) {
        console.log("place order api error", error);
      }
    }
  };

  useEffect(() => {
    userStoredAddressCall();
    myCart();
  }, []);

  const handleDeliveryType = (event) => {
    setDeliveryType(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressType = (event) => {
    setAddressType(event.target.value);
  };

  return (
    <div className="px-sm-4 py-4 py-lg-0">
      <Container fluid className="paymentMain">
        <Row>
          <Col sm={12} md={8}>
            <Row>
              <h2 className="paymentHeading pb-2">Payment</h2>
              <Col xl={6}>
                <h5>Delivery Address</h5>
                {selectedDeliveryAddress && (
                  <div className="address">
                    <h6 className="fw-semibold lead mb-0">
                      {selectedDeliveryAddress?.full_name}
                    </h6>
                    <p className="my-1">{`${selectedDeliveryAddress?.address}, ${selectedDeliveryAddress?.address2}, ${selectedDeliveryAddress?.city}, ${selectedDeliveryAddress?.state}, ${selectedDeliveryAddress?.country}, ${selectedDeliveryAddress?.postcode}`}</p>
                    <p className="mb-1">
                      <strong>Phone Number: </strong>
                      {selectedDeliveryAddress?.mobile}
                    </p>
                  </div>
                )}
                <Link
                  className="text-decoration-none my-3 d-flex justify-content-end"
                  to={"/checkout/address"}
                >
                  Change Address
                </Link>
              </Col>
              <Col xl={6} className="customborderleft">
                <h5>Delivery Method</h5>
                <div>
                  <div className="d-flex gap-2 mb-3">
                    <FormCheck
                      type="radio"
                      name="delivery-method"
                      value="standard"
                      checked={deliveryType === "standard"}
                      onChange={handleDeliveryType}
                    />
                    <label className="d-flex flex-column">
                      <strong>Standard</strong>
                      <span>{deliveryItem?.standard_expected_delivery}</span>
                    </label>
                  </div>
                  <div className="d-flex gap-2">
                    <FormCheck
                      type="radio"
                      name="delivery-method"
                      value="express"
                      checked={deliveryType === "express"}
                      onChange={handleDeliveryType}
                    />
                    <label
                      htmlFor="delivery-method"
                      className="d-flex flex-column"
                    >
                      <strong>Express</strong>
                      <span>{deliveryItem?.express_expected_delivery}</span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <h5 className="paymentHeading pb-2">Item Details</h5>
              {deliveryItem?.user_cart &&
                deliveryItem?.user_cart.map((item) => (
                  <Col xs={4} md={3} key={item.id}>
                    <div className="paymentImgDiv mb-3 object-fit-cover border rounded-4">
                      <Image
                        src={
                          item?.product_info?.product_images[0]
                            ?.product_image_url
                        }
                        className="w-100 h-100"
                      />
                    </div>
                    <ProductPriceTag
                      offerPrice={item?.product_info?.sale_price}
                      price={item?.product_info?.main_rrp}
                    />
                    <p className="d-flex gap-1">
                      <span className="fw-semibold text-body-tertiary">
                        Quantity:
                      </span>
                      <span className="fw-semibold">{item.quantity}</span>
                    </p>
                  </Col>
                ))}
            </Row>

            <Row>
              <Col>
                <h2 className="paymentHeading pb-2 mt-5">Payment Method</h2>
                <div className="mb-4">
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck
                      type="radio"
                      name="payment-method"
                      value="savedCards"
                      onChange={handlePaymentMethodChange}
                      checked={paymentMethod === "savedCards"}
                    />
                    <label>Your Saved Cards</label>
                  </div>
                  {paymentMethod === "savedCards" && <SavedCreditDebitCards />}
                </div>
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck
                      type="radio"
                      name="payment-method"
                      value="debitCreditCard"
                      onChange={handlePaymentMethodChange}
                      checked={paymentMethod === "debitCreditCard"}
                    />
                    <label className="d-flex gap-2 align-items-center">
                      Debit/Credit Card
                      <div className="d-flex gap-2">
                        <span className="cardImgDiv">
                          <Image src={visa} className="w-100 h-100" />
                        </span>
                        <span className="cardImgDiv">
                          <Image src={mastercard} className="w-100 h-100" />
                        </span>
                        <span className="cardImgDiv">
                          <Image src={american} className="w-100 h-100" />
                        </span>
                      </div>
                    </label>
                  </div>
                  {paymentMethod === "debitCreditCard" && <PaymentCardForm />}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="paymentHeading pb-2 mt-5">Billing Address</h2>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck
                      type="radio"
                      name="billing-address"
                      value="sameAddress"
                      onChange={handleAddressType}
                      checked={addressType === "sameAddress"}
                    />
                    <label>Same as Delivery Address</label>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck
                      type="radio"
                      name="billing-address"
                      value="differentAddress"
                      checked={addressType === "differentAddress"}
                      onChange={handleAddressType}
                    />
                    <label>Use Different Address</label>
                  </div>
                  {addressType === "differentAddress" && <BillingAddressForm />}
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={12} md={4} className="mt-4 mt-md-0">
            <PaymentSummary
              paymentpage={paymentpage}
              cartItem={deliveryItem}
              placeOrderCall={placeOrderCall}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
