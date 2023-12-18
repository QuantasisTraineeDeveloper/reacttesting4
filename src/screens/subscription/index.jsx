import { Input } from "antd";
import React, { useEffect } from "react";
import CustomBtn from "../../common/button";
import CommonSelect from "../../common/select";
import { SectionHeading } from "../home/index.style";
import { Wrapper } from "./index.style";
import subscriptionOptions from "../../components/json/subscription.json";
import { useState } from "react";
import { countDaysLeft, getTotal } from "../../utils/helper";
import { Form } from "antd";
import { CustomInput } from "../../common/input/index.style";
import { useSelector, useDispatch } from "react-redux";
import { getSubscription } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const [selectedSubscription, setSelectedSubscription] = useState([]);
  const [couponCode, setCouponCode] = useState({});
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSubscription());
  }, []);

  const store = useSelector((state) => state);
  const { subscriptions } = store?.user;

  let prices = [];
  for (let subscription of selectedSubscription) {
    prices.push(
      subscriptionOptions.find((s) => s.value === subscription).price.toFixed(2)
    );
  }

  const removeSubscription = (subscription) => {
    setSelectedSubscription(
      selectedSubscription.filter((s) => s !== subscription)
    );
  };

  return (
    <Wrapper>
      <SectionHeading>
        Select
        <strong>Subscription</strong>
      </SectionHeading>
      <p>Please enter the details to confirm your subscription</p>

      <div className='stepBar'>
        <div className='checkItems activeItem'>
          <span>1</span>
        </div>
        <div className='checkItems '>
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
        <section className='selectSubscription'>
          <h3>Select Subscription</h3>
          <CommonSelect
            mode='multiple'
            allowClear={true}
            value={selectedSubscription}
            onChange={(v) => setSelectedSubscription(v)}
            labelName='Subscription'
            options={subscriptionOptions}
          />
          <Form
            onFinish={(v) => setCouponCode({ value: 2, ...v })}
            form={form}
            className='subcriptionInput'>
            <CustomInput name='couponCode'>
              <Input placeholder='Coupon code (optional)' />
            </CustomInput>
            <button type='submit' className='btn'>
              Apply
            </button>
          </Form>
          <h3>active Subscriptions ({subscriptions?.length})</h3>

          {subscriptions?.length > 0 ? (
            subscriptions?.map(({ plan, startDate, endDate, fee }) => {
              return (
                <div className='standeredSubscription'>
                  <div className='standerdHeading'>
                    <h6>{plan}</h6>
                    <p>{countDaysLeft(startDate, endDate)} days left</p>
                  </div>
                  <div className='standardButton'>
                    <a href='#' className='renewBtn'>
                      Renew
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p className='noSubHeading'>No Subscription Found</p>
          )}

          <h3>
            selected Subscriptions (
            {selectedSubscription?.length > 0
              ? selectedSubscription?.length
              : 0}
            )
            {Object.keys(couponCode)?.length > 0 ? (
              <>
                <img src='./images/timesImage.svg' alt='' />
                <span>
                  <strong>{couponCode?.couponCode} </strong>coupon Applied
                </span>
                <img
                  src='./images/folderImage.svg'
                  alt=''
                  onClick={() => {
                    form.resetFields();
                    setCouponCode({});
                  }}
                />
              </>
            ) : null}
          </h3>
          {selectedSubscription?.length > 0 ? (
            selectedSubscription?.map((subscription) => {
              return (
                <div className='standardSubscription' key={subscription}>
                  <div className='standerdRate'>
                    <h6>{subscription} Subscription</h6>
                    <h6>
                      $
                      {subscriptionOptions
                        .find((s) => s.value === subscription)
                        .price.toFixed(2)}
                    </h6>
                  </div>
                  <div className='standardDelete'>
                    <img
                      src='/icons/delete-icon.svg'
                      alt=''
                      onClick={() => removeSubscription(subscription)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p className='noSubHeading'>No Package Selected</p>
          )}
        </section>
        <div className='subscriptionAmount'>
          {selectedSubscription?.length > 0 ? (
            <>
              {selectedSubscription?.map((subscription) => {
                return (
                  <div className='amountInner' key={subscription}>
                    <h5>{subscription} Subscription</h5>
                    <p>
                      $
                      {subscriptionOptions
                        .find((s) => s.value === subscription)
                        .price.toFixed(2)}
                    </p>
                  </div>
                );
              })}
              {Object.keys(couponCode)?.length > 0 ? (
                <div className='couponCode'>
                  <h5>{couponCode?.couponCode} Coupon Code</h5>
                  <p>-${couponCode?.value?.toFixed(2)}</p>
                </div>
              ) : null}

              <div className='amountInner'>
                <h6>
                  Total amount <span>(Tax included)</span>
                </h6>
                <p>
                  $
                  {selectedSubscription?.length > 0
                    ? (getTotal(prices) - (couponCode?.value ?? 0)).toFixed(2)
                    : Number(0).toFixed(2)}
                </p>
              </div>
              <CustomBtn
                title='Continue'
                onClick={() => navigate("/subscription/payment")}
              />
            </>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscription;
