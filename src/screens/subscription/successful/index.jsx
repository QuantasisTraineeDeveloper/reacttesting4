import React from "react";
import CustomBtn from "../../../common/button";
import { SectionHeading } from "../../home/index.style";
import { ConfirmPayment, Wrapper } from "../index.style";
import { useNavigate } from "react-router-dom";

const SuccessfulMsg = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SectionHeading>Payment successful</SectionHeading>
      <p>Congratulations! Subscription purchased successfully</p>

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
        <div className='checkItems activeItem'>
          <span>4</span>
        </div>
      </div>
      <div className='container'>
        <ConfirmPayment>
          <div className='circleCheck'>
            <img src='/images/check-icon.png' alt='' />
          </div>
          <div className='enterCod'>
            <h1>Standard subscription activated</h1>
            <p>You can review or deactivate your subscription anytime</p>
          </div>
          <div className='successful'>
            <CustomBtn
              title='Explore courses'
              onClick={() => navigate("/courses/list")}
            />
          </div>
        </ConfirmPayment>
      </div>
    </Wrapper>
  );
};

export default SuccessfulMsg;
