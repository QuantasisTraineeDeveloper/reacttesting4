import styled from "styled-components";

export const Wrapper = styled("div")`
  h3 {
    text-transform: uppercase;
  }
  p {
    text-align: center;
  }
  button {
    display: block;
    margin: auto;
  }
  .noSubHeading {
    text-align: left !important;
    color: gray;
  }
  .stepBar {
    max-width: 600px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem auto;
    overflow-x: hidden;
  }
  .activeItem,
  .checkItems {
    background-color: #e6e6e6;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: relative;
  }

  .checkItems {
    span {
      position: relative;
      font-weight: 700;
      z-index: 1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 16px;
      right: 0;
      display: inline-block;
      background-color: #e6e6e6;
      width: 220px;
      position: absolute;
      height: 4px;
    }
  }
  .activeItem {
    color: #ffffff;
    background-color: #d39331;
    span {
      position: relative;
      z-index: 4 !important;
    }
    &::before {
      z-index: 1 !important;
      background-color: #d39331 !important;
    }
  }
  .checkItems {
    &:first-child {
      z-index: 2;
      &::before {
        display: none !important;
      }
    }
  }
  .selectSubscription {
    padding-top: 2em;
    width: 100%;
    max-width: 920px;
    margin: auto;
  }
  .selectSubscription h1 {
    font-weight: 300;
    font-size: 46px;
    text-align: center;
  }
  .selectSubscription h1 strong {
    font-weight: 700;
  }
  .selectSubscription p {
    max-width: none;
    text-align: center;
  }

  .selectSubscription h3 {
    margin: 2rem 0 2rem 0;
  }

  .subcriptionInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2em auto;
    .ant-form-item {
      margin-right: 1em;
      input {
        padding-left: 1.7em;
      }
    }
    .btn {
      width: 136px;
      height: 58px;
      border-radius: 0;
      font-size: 1.2em;
      border: 1px solid var(--orange);
      color: var(--lightOrange);
      margin: 0;
    }
  }
  .standeredSubscription {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 920px;
    height: 83px;
    padding-left: 2em;
    margin-bottom: 0.7em;
    border: 1px solid rgba(49, 49, 49, 0.1);
  }
  .standerdHeading p {
    margin: 0;
    margin-top: 0.3em;
    text-align: left;
    color: #31313160;
  }

  .standerdHeading h6 {
    text-transform: capitalize;
  }

  .standardButton {
    .renewBtn {
      display: flex;
      width: 93px;
      height: 48px;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      font-weight: 600;
      margin-right: 2em;
      margin-bottom: 0.7em;
      border: 1px solid var(--darkBlue);
      color: var(--darkBlue);
    }
  }
  .selectSubscription h3 img {
    margin-left: 1.3em;
    margin-right: 0.7em;
  }
  .selectSubscription h3 span {
    font-weight: 600;
    font-size: 20px;
    color: var(--primary);
  }
  .selectSubscription h3 strong {
    font-weight: 700;
    font-size: 22px;
    color: var(--primary);
  }
  .standardSubscription {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 920px;
    height: 83px;
    margin-bottom: 0.7em;
    border: 1px solid rgba(49, 49, 49, 0.1);
  }
  .standerdRate {
    margin-left: 2em;
  }
  .standerdRate h6 {
    margin-bottom: 0.3em;
    text-transform: capitalize;
  }
  .standardDelete {
    margin-right: 4em;
    cursor: pointer;
    svg {
      color: var(--crimson);
      font-size: 1.5em;
      cursor: pointer;
    }
  }
  .subscriptionAmount {
    width: 100%;
    border-top: 1px solid #31313110;
    padding: 2em 0;
    margin-top: 3.5em;
  }
  .amountInner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 920px;
    margin: 1em auto;
  }
  .amountInner h5 {
    font-weight: 400;
    font-size: 22px;
    text-transform: capitalize;
    color: var(--secondaryBlack);
  }
  .amountInner h6 {
    font-weight: 700;
    font-size: 22px;
  }
  .amountInner h6 span {
    font-weight: 300;
    color: gray;
  }
  .amountInner p {
    font-weight: 400;
    font-size: 22px;
    margin: 0;
    color: var(--secondaryBlack);
  }

  // coupon code
  .couponCode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 920px;
    margin: 1em auto;
  }
  .couponCode h5 {
    font-weight: 400;
    font-size: 22px;
    color: var(--secondaryBlack);
  }
  .couponCode h6 {
    font-weight: 700;
    font-size: 22px;
  }
  .couponCode h6 span {
    font-weight: 300;
    color: gray;
  }

  .couponCode p {
    font-weight: 400;
    font-size: 22px;
    margin: 0;

    color: var(--crimson);
  }

  .amountInner:nth-last-child(2) p {
    font-weight: 700 !important;
  }
  .amountInner:nth-last-child(2) {
    border-top: 1px solid #31313110;
    padding-top: 1em;
  }
  .subscriptionAmount .btn1 {
    margin: 4em auto;
  }

  //  payment section
  .paymentdetail {
    width: 100%;
    max-width: 920px;
    margin: auto;
    margin-top: 4em;
  }
  .paymentdetail h1 {
    font-weight: 300;
    font-size: 46px;
    text-align: center;
  }
  .paymentdetail p {
    text-align: center;
  }
  .paymentdetail h3 {
    margin: 1em 0;
  }
  .selectionCard {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 920px;
    height: auto;
    padding: 2em;
    border: 1px solid rgba(49, 49, 49, 0.5);
  }
  .selectForm {
    width: 100%;
    max-width: 416px;
    height: 58px;
    font-size: 1.3em;
    font-weight: 900;
    background-position: right 18.55rem center;
    background-size: 22px;
    padding: 0.6em 0 0.6em 1.5em;
    margin-right: 1em;
    margin-bottom: 1em;
    cursor: pointer;
    color: var(--darkBlue);
    border: 1px solid rgba(49, 49, 49, 0.1);
  }
  .formCheck {
    font-weight: 400;
    font-size: 22px;
    color: var(--secondaryBlack);
    margin-top: 1.5em;
    margin-bottom: 0.7em;
  }
  .formCheckInput {
    border: 1px solid var(--secondaryBlack);
    cursor: pointer;
  }
  .paymentdetail .textInput {
    width: 100%;
    max-width: 416px;
    height: 58px;
    padding-left: 2em;
    cursor: pointer;
    border: 1px solid rgba(49, 49, 49, 0.1);
  }
  .paypalAccount {
    width: 100%;
    max-width: 920px;
    height: auto;
    padding: 2em;
    border: 1px solid rgba(49, 49, 49, 0.1);
  }
`;

export const ConfirmPayment = styled("div")`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
  .amountCharged {
    margin-bottom: 4em;
    h3 {
      font-weight: 400;
      font-size: 22px;
      width: 100%;
      max-width: 498px;
      margin: 0.5em auto;
      text-transform: none;
      text-align: center;
    }
    p {
      width: 100%;
      max-width: 484px;
      text-align: center;
      margin: auto;
    }
  }
  .enterCod {
    h1 {
      font-weight: 700;
      font-size: 32px;
      margin-top: 1em;
      color: var(--darkBlue);
    }
  }
  .codArea {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .codArea {
    width: 100%;
    margin: 1.5em auto;
    span {
      margin: 0 0.2em;
    }
    input {
      width: 50px !important;
      height: 50px;
      font-size: 1.5em;
      border: 1px solid rgba(49, 49, 49, 0.1);
    }
  }
  .resendBtn {
    text-align: center;
    font-weight: 700;
    display: inline-block;
    font-size: 16px;
    color: #d39331;
    margin: 1em 0 2em;
    cursor: pointer;
  }
  .enterCod {
    p {
      margin: 1.5em 0 2em;
    }
  }
`;
