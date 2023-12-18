import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CustomBtn from "../../../common/button";
import { SectionHeading } from "../../home/index.style";
import { ConfirmPayment, Wrapper } from "../index.style";
import { useNavigate } from "react-router-dom";

const ConfirmOtp = () => {
  const [state, setState] = useState({ otp: "" });
  const navigate = useNavigate();

  const handleChange = (otp) => setState({ otp });
  return (
    <Wrapper>
      <SectionHeading>Confirm Payment</SectionHeading>
      <p>Please enter the details to confirm your subscription</p>
      <div className='stepBar'>
        <div className='checkItems activeItem'>
          <span>1</span>
        </div>
        <div className='checkItems activeItem'>
          <span>2</span>
        </div>
        <div className='checkItems activeItem'>
          <span>3</span>
        </div>
        <div className='checkItems '>
          <span>4</span>
        </div>
      </div>
      <div className='container'>
        <ConfirmPayment>
          <div className='amountCharged'>
            <h3>
              Total amount charged to{" "}
              <strong> 1111 2222 3333 4444 **** </strong> will be{" "}
              <strong>$4.99 </strong>
            </h3>
            <p>
              Your order will be confirmed and mentioned amount will be deducted
              from your account
            </p>
          </div>
          <div className='enterCod'>
            <h1>OTP sent to +91 123 456 781</h1>
            <p>Enter 6- digit code sent to your number via sms here</p>
          </div>
          <div className='codArea'>
            <OtpInput
              numInputs={6}
              value={state.otp}
              onChange={handleChange}
              separator={<span>&nbsp; &nbsp;</span>}
              inputStyle={{ color: "#000" }}
            />
          </div>
          <span className='resendBtn'>Resend code</span>
          <CustomBtn
            title='Submit'
            onClick={() => navigate("/subscription/successful")}
          />
        </ConfirmPayment>
      </div>
    </Wrapper>
  );
};

export default ConfirmOtp;
