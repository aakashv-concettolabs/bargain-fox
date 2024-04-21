  import { Col, Container, FormCheck, Image, Row, Form } from "react-bootstrap";
import "./payment.scss";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";
import { Link, useLocation } from "react-router-dom";
import ProductPriceTag from "../../components/productPriceTag/ProductPriceTag";
import american from "../../assets/american.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  emptyCart,
  myCartApi,
  placeOrderApi,
  storedAddress,
} from "../../api/Apis";
import PaymentCardForm from "../../components/paymentCardForm/PaymentCardForm";
import SavedCreditDebitCards from "../../components/savedCreditDebitCards/SavedCreditDebitCards";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { addressSchema } from "../../schema";
import BillingAddressForm from "../../components/billingAddressForm/BillingAddressForm";

const initialValueAddress = {
  country: "India",
  fullName: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  number: "",
};

const countryNames = [
  {
    id: 1,
    countryname: "India",
  },
  {
    id: 2,
    countryname: "Indonesia",
  },
  {
    id: 3,
    countryname: "China",
  },
];

const Payment = () => {
  const location = useLocation();
  const address_Id = location.state;
  const paymentpage = true;
  const token = localStorage.getItem("token");
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState();
  const [deliveryItem, setDeliveryItem] = useState();
  const [deliveryType, setDeliveryType] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("debitCreditCard");
  const [addressType, setAddressType] = useState("sameAddress");
  const [formData, setFormData] = useState(initialValueAddress);

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValueAddress,
      validationSchema: addressSchema,
      onSubmit: (values) => {
        setFormData(values);
      },
    });

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
          const deliveryAddress = result.find(
            (address) => address.id == address_Id
          );
          setSelectedDeliveryAddress(deliveryAddress);
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
      addressType == "sameAddress"
        ? shippingAddressData
        : {
            country: formData?.country,
            full_name: formData?.fullName,
            address: formData?.address,
            address2: formData?.address2,
            city: formData?.city,
            state: formData?.state,
            mobile: formData?.number.toString(),
            postcode: formData?.postcode.toString(),
          };

    const ApiData = {
      address_id: selectedDeliveryAddress?.id,
      delivery_type_id: deliveryType === "standard" ? "1" : "2",
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
          toast.success(placeOrderResponse.data.message);
          emptyCartCall();
        }
      } catch (error) {
        console.log("place order api error", error);
      }
    }
  };

  const emptyCartCall = async () => {
    if (token) {
      try {
        const emptyCartResponse = await axios.get(emptyCart, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (emptyCartResponse.status == 200) {
          console.log("empty cart response", emptyCartResponse);
        }
      } catch (error) {
        console.log("empty cart error", error);
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

  const handleAddressDetails = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-sm-4 py-4 py-lg-0">
      <Container fluid className="paymentMain">
        <Row>
          <Col sm={12} md={8}>
          <div className="overflow-y-scroll overflow-x-hidden vh-100">
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
                      id="sameAddress"
                      value="sameAddress"
                      onChange={handleAddressType}
                      checked={addressType === "sameAddress"}
                    />
                    <label htmlFor="sameAddress">Same as Delivery Address</label>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <FormCheck
                      type="radio"
                      name="billing-address"
                      id="differentAddress"
                      value="differentAddress"
                      checked={addressType === "differentAddress"}
                      onChange={handleAddressType}
                    />
                    <label htmlFor="differentAddress">Use Different Address</label>
                  </div>
                  {addressType === "differentAddress" && 
                    <BillingAddressForm
                            handleBillingForm={handleAddressDetails}
                            formData={formData} />
                   
                  }
                </div>
              </Col>
            </Row>
            </div>
          </Col>

          <Col sm={12} md={4} className="mt-4 mt-md-0">
            <PaymentSummary
              paymentpage={paymentpage}
              cartItem={deliveryItem}
              placeOrderCall={placeOrderCall}
              handleBillingForm={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
