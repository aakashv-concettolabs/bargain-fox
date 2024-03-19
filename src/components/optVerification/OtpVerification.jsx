import { Modal, Button, Form } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

const correctOTP = "000000";
let currentOTPIndex = 0;
const OtpVerification = ({ handleVerify }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(null);
  const [activeInputBox, setActiveInputBox] = useState(0);
  const otpBoxReference = useRef(null);

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
  };

  function handleBackspaceAndEnter(e, index) {
    currentOTPIndex = index;
    if (e.key === "Backspace") {
      setActiveInputBox(currentOTPIndex - 1);
    }
  }
  useEffect(() => {
    otpBoxReference.current?.focus();
  }, [activeInputBox]);

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp !== correctOTP) {
      setOtpError("Invalid");
    } else {
      handleVerify();
    }
  };

  return (
    <Modal.Body className="pt-1">
      <span className="text-secondary small d-flex justify-content-center mb-3">
        A verification code is sent to stephenparker@gmail.com
      </span>

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mx-3 mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Verification Code</Form.Label>
          <div className="d-flex gap-4">
            {otp.map((_, index) => (
              <Form.Control
                key={index}
                ref={activeInputBox === index ? otpBoxReference : null}
                type="number"
                value={otp[index]}
                onChange={handleChange}
                onKeyDown={(e) => handleBackspaceAndEnter(e, index)}
                className={`form-control shadow-none rounded-2 text-center`}
              />
            ))}
          </div>
        </Form.Group>
        <div className="px-2">
          <Button type="submit" className="w-100 rounded-5 ">
            Verify
          </Button>
        </div>
      </Form>
    </Modal.Body>
  );
};

export default OtpVerification;
