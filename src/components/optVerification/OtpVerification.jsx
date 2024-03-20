import { Modal, Button, Form } from "react-bootstrap";
import { useState, useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { sendOtp, verifyOtp } from "../../api/Apis";
import AuthContext from "../../context/authContext/AuthContext";

let currentOTPIndex = 0;

const OtpVerification = ({ handleVerify }) => {
  const correctOTP = "000000";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(null);
  const [activeInputBox, setActiveInputBox] = useState(0);
  const [verifyDisable, setVerifyDisable] = useState(true);
  const otpBoxReference = useRef(null);
  const [loading, setLoading] = useState(false);
  const userEmail = useSelector((state) => state.userLogin.email);
  const { setUserDetails } = useContext(AuthContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    const updatedOtp = [...otp];
    updatedOtp[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveInputBox(currentOTPIndex - 1);
    } else {
      setActiveInputBox(currentOTPIndex + 1);
    }
    setOtp(updatedOtp);
    const allInputFilled = updatedOtp.every((value) => value !== "");
    setVerifyDisable(!allInputFilled);
  };

  const handleBackspace = (e, index) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") {
      setActiveInputBox(currentOTPIndex - 1);
    }
  };

  useEffect(() => {
    otpBoxReference.current?.focus();
  }, [activeInputBox]);

  const handleResendCode = async () => {
    try {
      const response = axios.post(sendOtp, { email: userEmail });
      console.log("otp resend", response);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp !== correctOTP) {
      setOtpError("Invalid");
    } else {
      setLoading(true);
      setOtpError(false);
      try {
        const response = await axios.post(verifyOtp, {
          otp: enteredOtp,
          email: userEmail,
        });
        const userResult = response.data.result;
        setUserDetails(userResult);
        setTimeout(() => {
          handleVerify();
        }, 1000);
      } catch (error) {
        console.log("otp error", error);
      }
    }
  };

  return (
    <Modal.Body className="pt-1">
      <span className="text-secondary small d-flex justify-content-center mb-3">
        A verification code is sent to {userEmail}
      </span>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mx-3 mb-3">
          <Form.Label>Verification Code</Form.Label>
          <div className="d-flex gap-4">
            {otp.map((eachotp, index) => (
              <Form.Control
                key={index}
                ref={activeInputBox === index ? otpBoxReference : null}
                type="number"
                value={otp[index]}
                onChange={handleChange}
                onKeyDown={(e) => handleBackspace(e, index)}
                className={`form-control shadow-none rounded-2 text-center`}
              />
            ))}
          </div>
          {otpError ? <p className="text-danger pt-2">Invalid Otp</p> : null}
        </Form.Group>
        <Form.Group className="d-flex justify-content-between mx-3 mb-3">
          <Form.Label>Expires in 00:30</Form.Label>
          <Form.Label className="text-primary" onClick={handleResendCode}>
            Resend Code
          </Form.Label>
        </Form.Group>
        <div className="px-2">
          <Button
            type="submit"
            className="w-100 rounded-5"
            disabled={verifyDisable}
          >
            {loading ? "Please wait..." : "Verify"}
          </Button>
        </div>
      </Form>
    </Modal.Body>
  );
};

export default OtpVerification;
