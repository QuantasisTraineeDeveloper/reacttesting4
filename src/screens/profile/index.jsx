import { Col, Form, Input, Rate, Row, Upload, Select, Checkbox } from "antd";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { FaPen, FaUser } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MainHeading } from "../home/index.style";
import { Wrapper } from "./index.style";
import { updateUserProfile } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { antValidator, getBase64 } from "../../utils/helper";
import { profileScheme, testimonialSchema } from "../../utils/validationSchema";
import countryList from "react-select-country-list";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import {
  getSingleTestimonial,
  addTestimonial,
  updateTestimonial,
} from "../../redux/testimonialSlice";
import { getUserDashboard, getSubscription } from "../../redux/userSlice";
import CustomBtn from "../../common/button";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  return false;
};

const Profile = () => {
  const dispatch = useDispatch();
  const profileRef = useRef();
  const options = useMemo(() => countryList().getData(), []);
  const [profileForm] = Form.useForm();
  const [testimonialForm] = Form.useForm();
  const [rules, setRules] = useState({});
  const [tRules, setTRules] = useState({});
  const [imgUploadLoading, setImgUploadLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isDisableTestimonial, setIsDisableTestimonial] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [profileImage, setProfileImage] = useState({});
  const [profileImageCountry, setProfileImageCountry] = useState(1);
  const [userRating, setUserRating] = useState(1);
  const [publicImage, setPublicImage] = useState(true);
  const { TextArea } = Input;

  useEffect(() => {
    dispatch(getSingleTestimonial());
    dispatch(getSubscription());
    setRules(antValidator(profileScheme));
    setTRules(antValidator(testimonialSchema));
  }, []);

  const store = useSelector((state) => state);
  const { userProfile, profileLoading, updateProdileLoading } = store?.auth;
  const { singleTestimonial, loading, submitLoading } = store?.testimonial;
  const { subscriptions } = store?.user;
  const handleChange = (info) => {
    setProfileImageCountry(profileImageCountry + 1);
    setImgUploadLoading(true);
    if (info.file) {
      setProfileImage(info.file);
      getBase64(info.file, (url) => {
        setImgUploadLoading(false);
        setImageUrl(url);
      });
    }
  };

  const newProfileImage = userProfile?.imageURL + "?v=" + profileImageCountry;

  useEffect(() => {
    profileForm.setFieldsValue({
      username: userProfile?.name,
      email: userProfile?.email,
      country: userProfile?.country,
      city: userProfile?.city,
    });
    setPublicImage(userProfile?.publicImage);
    setImageUrl(newProfileImage);
  }, [userProfile, profileForm]);

  useEffect(() => {
    setUserRating(singleTestimonial?.userRating ?? 1);
  }, [singleTestimonial]);

  const uploadButton =
    imageUrl && userProfile?.publicImage ? (
      profileLoading ? (
        <span className='loading'>
          <AiOutlineLoading3Quarters />
        </span>
      ) : (
        <img src={imageUrl} alt={imageUrl} />
      )
    ) : (
      <div>
        {imgUploadLoading ? (
          <span className='loading'>
            <AiOutlineLoading3Quarters />
          </span>
        ) : (
          <FaUser />
        )}
      </div>
    );

  const onProfileSubmit = ({ username, country, city }) => {
    const formData = new FormData();
    formData.append("name", username);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("publicImage", publicImage);
    if (profileImage) {
      formData.append("picture", profileImage);
    }

    dispatch(updateUserProfile({ formData, setIsDisable }));
  };

  const onTestimonialSubmit = ({ testimonial }) => {
    const data = {
      username: userProfile?.name,
      testimonial: testimonial,
      userRating,
    };
    if (singleTestimonial === null) {
      dispatch(addTestimonial({ data, setIsDisableTestimonial }));
    } else if (singleTestimonial?.approved) {
      dispatch(updateTestimonial({ data, setIsDisableTestimonial }));
    } else {
      toast.info("Your review is already submitted!", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
    }
  };
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
                <img src='./images/googleImage.svg' alt='' />@
                {userProfile?.email?.split("@")[0]}
              </span>

              {isDisable ? (
                <div className='userprofile'>
                  {updateProdileLoading || profileLoading ? (
                    <span className='loading'>
                      <AiOutlineLoading3Quarters />
                    </span>
                  ) : (
                    <>
                      {userProfile?.publicImage ? (
                        <img src={imageUrl} alt={imageUrl} />
                      ) : (
                        <FaUser />
                      )}
                    </>
                  )}
                </div>
              ) : (
                <>
                  {" "}
                  <div className='userprofile'>
                    <Upload
                      ref={profileRef}
                      name='avatar'
                      listType='picture-card'
                      className='avatar-uploader'
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={handleChange}>
                      {imageUrl && userProfile?.publicImage ? (
                        <img src={imageUrl} alt={imageUrl} className='avatar' />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </div>
                  <div className='socialLinks'>
                    <div className='checkingArea'>
                      <Checkbox
                        checked={publicImage}
                        onChange={() => setPublicImage(!publicImage)}>
                        Show and Hide Your Image
                      </Checkbox>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Form form={profileForm} onFinish={onProfileSubmit}>
              {updateProdileLoading || profileLoading ? (
                <div className='profileLoading'>
                  <LoadingSpinner />
                </div>
              ) : (
                ""
              )}
              <div className='changeProfile'>
                {isDisable ? (
                  <span onClick={() => setIsDisable(false)}>
                    <FaPen />
                    Change profile
                  </span>
                ) : (
                  <div className='actionButtons'>
                    <button
                      type='button'
                      className='cancel'
                      onClick={() => {
                        setIsDisable(true);
                        profileForm.setFieldsValue({
                          username: userProfile?.name,
                          email: userProfile?.email,
                          country: userProfile?.country,
                          city: userProfile?.city,
                        });
                        setImageUrl(newProfileImage);
                      }}>
                      Cancel
                    </button>
                    <button type='submit'>Save</button>
                  </div>
                )}

                <Row gutter={16}>
                  <Col xs={{ span: 24 }}>
                    <Form.Item name='username' label='Name' rules={[rules]}>
                      <Input type='text' disabled={isDisable} />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item name='email' label='Email'>
                      <Input type='text' disabled={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }}>
                    <Form.Item name='country' label='Country' rules={[rules]}>
                      <Select
                        disabled={isDisable}
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
                  <Col xs={{ span: 24 }}>
                    <Form.Item name='city' label='City' rules={[rules]}>
                      <Input type='text' disabled={isDisable} />
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
        {singleTestimonial === null ||
        !isDisableTestimonial ||
        !singleTestimonial?.approved ? (
          <Form form={testimonialForm} onFinish={onTestimonialSubmit}>
            {(_, { getFieldError }) => {
              return (
                <>
                  <Rate
                    style={{ margin: "-2px 0 0 -20px", fontSize: "4rem" }}
                    defaultValue={userRating}
                    onChange={(r) => setUserRating(r)}
                    allowHalf='ture'
                    allowClear='false'
                  />
                  <div className='rateHeading'>
                    <Form.Item
                      name='testimonial'
                      className='testimonialTextArea'
                      rules={[tRules]}
                      help={
                        getFieldError("testimonial")?.length > 0
                          ? getFieldError("testimonial")?.[0]
                          : ""
                      }>
                      <TextArea />
                    </Form.Item>
                  </div>

                  <CustomBtn
                    type='submit'
                    title='Save changes'
                    loading={submitLoading}
                  />
                </>
              );
            }}
          </Form>
        ) : (
          <>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Rate
                  disabled
                  defaultValue={singleTestimonial?.userRating}
                  allowHalf={true}
                />
                <div className='rateSubIcon'>
                  <FaPen
                    onClick={() => {
                      setIsDisableTestimonial(false);
                      testimonialForm.setFieldsValue({
                        testimonial: singleTestimonial?.testimonial,
                      });
                      setUserRating(singleTestimonial?.userRating);
                    }}
                  />
                  <h6>{`“${singleTestimonial?.testimonial}”`}</h6>
                </div>
              </>
            )}
          </>
        )}
      </section>

      {/* <!-- subscription section --> */}
      <section className='subscription'>
        <div className='container'>
          <div className='borderTop'></div>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <h3>current subscription</h3>
            </div>
            <div className='col-lg-2 offset-lg-4 col-md-12'>
              <Link to='/payment-history'>
                <h6>Payment history</h6>
              </Link>
            </div>
            {subscriptions?.length > 0 ? (
              subscriptions?.map(({ plan, startDate, endDate, fee }) => {
                return (
                  <>
                    <div className='col-lg-4'>
                      <p>Subscription name</p>
                      <h6>{plan}</h6>
                    </div>
                    <div className='col-lg-2'>
                      <p>Start Date</p>
                      <h6>{moment(startDate).format("ll")}</h6>
                    </div>
                    <div className='col-lg-2'>
                      <p>End Date</p>
                      <h6>{moment(endDate).format("ll")}</h6>
                    </div>
                    <div className='col-lg-4'>
                      <p>Fee (monthly)</p>
                      <h6>${fee}</h6>
                    </div>
                  </>
                );
              })
            ) : (
              <p>No Subscription Found</p>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;
