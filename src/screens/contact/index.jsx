import { Col, Form, Input, Row, Select } from "antd";
import React, { useState, useMemo, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ButtonContainer } from "../../common/button/index.style";
import { SectionHeading } from "../home/index.style";
import { ContactForm, MessageModal, Wrapper } from "./index.style";
import countryList from "react-select-country-list";
import { contactScheme } from "../../utils/validationSchema";
import { antValidator } from "../../utils/helper";
import { submitContactUs } from "../../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomBtn from "../../common/button";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import pupose from "../../components/json/contactPurpose.json";
import { getAllCourses } from "../../redux/courseSlice";
import timeSlot from "../../components/json/timeSlot.json";

const { TextArea } = Input;

const Contact = () => {
  const dispatch = useDispatch();
  const captchaRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [rules, setRules] = useState({});
  const [email, setEmail] = useState();
  const [showFields, setShowFields] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const store = useSelector((state) => state);
  const { loading } = store?.contact;
  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const onChangePurpose = (value) => {
    if (value === "live_class") {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
    // console.log(`selected ${value}`);
  };

  const onSearchPurpose = (value) => {
    // console.log("search:", value);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onContactSubmit = async (values) => {
    // const token = await captchaRef.current.executeAsync();
    // console.log(token);
    setEmail(values.email);
    dispatch(submitContactUs({ values, setIsModalOpen, onReset }));
  };

  useEffect(() => {
    setRules(antValidator(contactScheme));
    dispatch(getAllCourses());
  }, []);

  const { allCourses } = useSelector((state) => state?.course);
  const courses = allCourses?.results;
  const courseOptions = [];
  courses?.map((course) => {
    courseOptions?.push({
      value: course?._id,
      label: course?.shortName,
    });
  });

  return (
    <Wrapper>
      <MessageModal
        title=''
        centered
        open={isModalOpen}
        onCancel={handleCancel}>
        <img src='/images/envolep.png' alt='' />
        <h1>Thank you!</h1>
        <p>You will be notified soon on your email {email}</p>
        <div className='d-flex justify-content-center'>
          <ButtonContainer onClick={handleOk}>
            Continue browsing
          </ButtonContainer>
        </div>
      </MessageModal>
      <Container>
        <SectionHeading>Contact Us</SectionHeading>
        <ContactForm>
          <p>Please contact us in case of any query. We are happy to help.</p>

          <Form onFinish={onContactSubmit} form={form}>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                <Form.Item name='purpose' rules={[rules]}>
                  <Select
                    showSearch
                    placeholder='--Purpose of Contact--'
                    optionFilterProp='children'
                    onChange={onChangePurpose}
                    onSearch={onSearchPurpose}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={pupose}
                  />
                </Form.Item>
              </Col>
            </Row>
            {showFields && (
              <Row gutter={16}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    name='course'
                    rules={[
                      {
                        required: showFields,
                        message: "course is required",
                      },
                    ]}>
                    <Select
                      showSearch
                      placeholder='--Course Selection--'
                      optionFilterProp='children'
                      // onChange={onChange}
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={courseOptions}
                    />
                  </Form.Item>
                </Col>

                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    name='timezone'
                    rules={[
                      {
                        required: showFields,
                        message: "timezone is required",
                      },
                    ]}>
                    <Select
                      showSearch
                      placeholder='--Time Zone--'
                      optionFilterProp='children'
                      // onChange={onChange}
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        { label: "Asia/Karachi", value: "Asia/Karachi" },
                        { label: "Asia/Kabul", value: "Asia/Kabul" },
                      ]}
                    />
                  </Form.Item>
                </Col>

                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    name='time'
                    rules={[
                      {
                        required: showFields,
                        message: "time slot is required",
                      },
                    ]}>
                    <Select
                      showSearch
                      placeholder='--Time Slot--'
                      optionFilterProp='children'
                      // onChange={onChange}
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={timeSlot}
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}

            <Row gutter={16}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item name='name' rules={[rules]}>
                  <Input placeholder='Full name' />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item name='email' rules={[rules]}>
                  <Input placeholder='Email' />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item name='country'>
                  <Select
                    showSearch
                    placeholder='--Select Country--'
                    optionFilterProp='children'
                    // onChange={onChange}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={options}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item name='city'>
                  <Input placeholder='City' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name='message' rules={[rules]}>
                  <TextArea rows={8} placeholder='Type full message' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <div className='buttonArea'>
                  <div className='robotCheck'>
                    <ReCAPTCHA
                      ref={captchaRef}
                      onChange={() => setButtonDisable(false)}
                      sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                      // onChange={onCaptchaChange}
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <CustomBtn
                      disable={buttonDisable}
                      htmlType='submit'
                      type='submit'
                      title='submit'
                      loading={loading}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </ContactForm>
      </Container>
    </Wrapper>
  );
};

export default Contact;
