import { Col, Form, Input, Rate, Row } from "antd";
import React from "react";
import { FaPen } from "react-icons/fa";
import CustomBtn from "../../../common/button";
import CountrySelect from "../../../components/CountrySelect";
import { MainHeading } from "../../home/index.style";
import { Wrapper } from "../index.style";

const ProfileChange = () => {
  return (
    <Wrapper>
      <section className='profileSection'>
        <MainHeading>Profile</MainHeading>
        <div className='container'>
          {/* <!-- social inputs --> */}
          <div className='socialInputs'>
            <div className='socialLogin'>
              <h3>social login</h3>
              <span>
                <img src='./images/googleImage.svg' alt='' />
                @123Jane
              </span>

              <div className='userprofile'>
                <img src='/images/loginImage.svg' alt='' />
              </div>
              <div className='socialLinks'>
                <a href='#' className='btn'>
                  Hide
                </a>
                <a href='#' className='btn'>
                  Remove
                </a>
              </div>
            </div>
            <Form>
              <div className='changeProfile'>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }}>
                    <Form.Item>
                      {/* <span className="labelName">Name</span>
                      <Input /> */}
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item>
                      <span className='labelName'>Name</span>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item>
                      <span className='labelName'>Email</span>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item>
                      <span className='labelName'>Country</span>
                      <CountrySelect />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item>
                      <span className='labelName'>City</span>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      </section>
      {/* <!-- rate section --> */}
      <section className='rateSection'>
        <h2>Rate Us</h2>
        <p>Please share yor experience how did you feel using our platform </p>
        <Rate defaultValue={2.5} />
        <div className='rateHeading'>
          <h6>
            “ It was a great experience. Got all I need, Would definitely
            recommend to my friends as well . ”
          </h6>
        </div>
        <CustomBtn title='Save changes' />
      </section>

      {/* <!-- subscription section --> */}
    </Wrapper>
  );
};

export default ProfileChange;
