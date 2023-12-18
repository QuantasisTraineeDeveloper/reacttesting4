import { Col, Row } from "antd";
import React from "react";
import CustomBtn from "../../../common/button";
import CommonInput from "../../../common/input";
import { SectionHeading } from "../../home/index.style";
import { Wrapper } from "../index.style";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <SectionHeading>Payment Details</SectionHeading>
      <p>Please enter the details to confirm your subscription</p>

      <div className='stepBar'>
        <div className='checkItems activeItem'>
          <span>1</span>
        </div>
        <div className='checkItems activeItem'>
          <span>2</span>
        </div>
        <div className='checkItems '>
          <span>3</span>
        </div>
        <div className='checkItems '>
          <span>4</span>
        </div>
      </div>
      <div className='container'>
        <section className='paymentdetail'>
          <h3>payment method</h3>
          <div className='form-check formCheck'>
            <input
              className='form-check-input formCheckInput'
              type='radio'
              name='exampleRadios'
              id='exampleRadios1'
              value='option1'
            />
            <label className='form-check-label' for='exampleRadios1'>
              Debit/Credit Card
            </label>
          </div>
          <div className='selectionCard'>
            <select
              className='form-select selectForm'
              aria-label='Default select example'>
              <option selected>VISA</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <input
              className='textInput'
              type='date'
              placeholder='Expiry date'
            />
            <input className='textInput' type='password' placeholder='CVV' />
          </div>
          <div className='form-check formCheck'>
            <input
              className='form-check-input formCheckInput'
              type='radio'
              name='exampleRadios'
              id='exampleRadios2'
              value='option2'
            />
            <label className='form-check-label' for='exampleRadios2'>
              Paypal
            </label>
          </div>
          <div className='paypalAccount'>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <CommonInput labelName='Full name' />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <CommonInput labelName='Account number' inputtype='number' />
              </Col>
            </Row>
          </div>
          <div className='form-check formCheck'>
            <input
              className='form-check-input formCheckInput'
              type='radio'
              name='exampleRadios'
              id='exampleRadios3'
              value='option3'
            />
            <label className='form-check-label' for='exampleRadios3'>
              Phonepe
            </label>
          </div>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CommonInput labelName='Phone number' inputtype='number' />
            </Col>
          </Row>
        </section>

        {/* <!--subscriptionAmount section  --> */}
        <div className='subscriptionAmount'>
          <div className='amountInner'>
            <h5>Standard subscription</h5>
            <p>$4.99</p>
          </div>
          <div className='amountInner'>
            <h5>Silver subscription</h5>
            <p>$7.99</p>
          </div>
          <div className='amountInner'>
            <h5>New User coupon</h5>
            <p>-$2.00</p>
          </div>
          <div className='amountInner'>
            <h6>
              Total amount <span>(Tax included)</span>
            </h6>
            <p>$7.98</p>
          </div>
          <CustomBtn
            title='Continue'
            onClick={() => navigate("/subscription/confirmotp")}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PaymentDetails;
