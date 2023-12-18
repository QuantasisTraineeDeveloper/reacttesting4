import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em;
  .ant-select-suffix {
    display: none !important;
  }
  .ant-select-selector {
    height: 60px !important;
    .ant-select-selection-search {
      input {
        height: 60px !important;
      }
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      padding-top: 0.8rem;
      height: 60px !important;
      text-align: right;
      font-weight: 900;
      color: #000000;
    }
  }
  form {
    padding: 0 0 0 1.5em;
  }
  .profileSection {
    h1 {
      font-weight: 300;
      font-size: 46px;
      text-align: center;
    }
  }
  .socialInputs {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .socialLogin {
    width: 100%;
    max-width: 195px;
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    object-position: top;
    width: 100%;
    max-width: 195px;
    height: 225px;
  }
  .userprofile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 195px;
    height: 225px;
    margin-top: 1em;
    background-color: #3f6fd810;
    .avatar-uploader {
      div {
        border: none;
      }
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    svg {
      color: var(--primary);
      font-size: 50px;
      font-weight: 600;
    }
    .ant-upload-select-picture-card {
      width: 100%;
      height: 225px;
      margin: 0;
      background-color: #3f6fd810;
      border: 1px solid #3f6fd810;
    }
  }
  form {
    position: relative;
  }
  .profileLoading {
    background-color: rgba(255, 255, 255, 0.75);
    width: 100%;
    max-width: 449px;
    height: 345px;
    top: 65px;
    position: absolute;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .changeProfile {
    width: 100%;
    max-width: 449px;
    span {
      cursor: pointer;
      color: var(--bs-link-color);
      display: flex;
      justify-content: end;
      align-items: center;
      text-decoration: none;
      width: 100%;
      max-width: 449px;
      height: 58px;
      svg {
        margin-right: 0.5em;
        font-size: 1em;
      }
    }

    .actionButtons {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 2rem;

      .cancel {
        cursor: pointer;
        color: var(--bs-red);
        display: flex;
        justify-content: end;
        align-items: center;
        text-decoration: none;
        max-width: 449px;
        height: 58px;
      }
      button {
        cursor: pointer;
        color: var(--bs-green);
        display: flex;
        justify-content: end;
        align-items: center;
        text-decoration: none;
        height: 58px;
        border: none;
        background-color: white;
      }
    }
    .ant-form-item-label {
      position: absolute;
      color: #000000 !important;
      z-index: 2;
      top: 28%;
      left: 1em;

      label {
        &::after {
          display: none;
        }
      }
    }

    input {
      width: 100%;
      max-width: 449px;
      text-align: right;
      height: 58px;
      margin: 0.5rem 0;
      font-weight: 900;
      padding-left: 2em;
      cursor: pointer;
      border: 1px solid rgba(49, 49, 49, 0.1);
    }

    .ant-input-disabled {
      cursor: not-allowed;
      color: #313131 !important;
      background-color: white;
      border: 1px solid rgba(49, 49, 49, 0.1);
    }
    .ant-select {
      .ant-select-selection-placeholder {
        padding: 0 !important;
      }
      .ant-select-selector {
        border: 1px solid rgba(49, 49, 49, 0.1) !important;
      }
      .ant-select-selection-item {
        padding: 0px;
        color: #313131;
      }
      input {
        padding: 0 10px 0 0 !important;
        color: #313131;
      }
    }
    .ant-select-disabled {
      .ant-select-selector {
        background-color: white !important;
      }
      cursor: not-allowed;
      color: #313131 !important;
      background-color: white !important;
      .ant-select-selection-placeholder {
        padding: 0 !important;
        color: #313131;
      }
    }
    .ant-form-item {
      position: relative;
      .labelName {
        position: absolute;
        color: #000000 !important;
        z-index: 2;
        top: 35%;
        left: 1em;
      }
    }

    .ant-select-selector {
      .ant-select-selection-search {
        right: 0 !important;
        left: 0px !important;
      }
    }
  }
  .rateSection {
    text-align: center;
    margin: 2em auto;
    width: 100%;
    max-width: 800px;
    p {
      max-width: unset;
    }
    .ant-rate {
      font-size: 4em;
    }
    button {
      display: block;
      margin: auto;
    }
  }
  .rateSubIcon {
    max-width: 520px;
    margin: auto;
    svg {
      display: block;
      width: 20px;
      margin: 0 0em 0.5em auto;
      color: var(--primary);
    }
    h6 {
      text-align: center;
      line-height: 1.7;
    }
  }
  .borderTop {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid #31313110;
  }
  .subscription {
    padding: 4em 0;
    h3 {
      margin-top: 1em;
      margin-bottom: 1em;
      text-transform: uppercase;
    }
    h6 {
      &:first-child {
        margin: 2em 0 1em 2.2em;
        color: var(--primary);
      }
    }
    p {
      color: var(--darkBlue) !important;
      font-size: 18px;
      font-weight: 5 00;
      margin: 1em 0;
    }
  }
  .rateHeading {
    width: 100%;
    max-width: 779px;
    height: 200px;
    margin: 3em auto 2rem auto;
    background-color: var(--gray);

    .ant-form-item,
    .ant-row,
    .ant-col,
    .ant-form-item-control-input,
    .ant-form-item-control-input-content {
      width: 100%;
      height: 100%;

      .ant-input-status-error {
        border: 1px solid #ff4d4f;
        height: 100%;
        background-color: var(--gray);
        &:hover {
          background-color: var(--gray);
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
    .ant-form-item-explain {
      background-color: white;
    }
    textarea {
      font-weight: 400;
      font-size: 18px;
      color: var(--secondaryBlack);
      background-color: var(--gray);
      padding-top: 1.5em;
      padding-left: 1.5em;
      text-align: left;
      width: 100%;
      height: 100%;
      min-height: unset;
      outline: none;
      border: 1px solid transparent;
      box-shadow: none;
      resize: none;
    }
  }
  .socialLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
    padding: 1em 0;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 48px;
      border-radius: 0;
      &:first-child {
        border: 1px solid var(--darkBlue);
        color: var(--darkBlue);
      }
      &:last-child {
        border: 1px solid var(--crimson);
        color: var(--crimson);
      }
    }
    .changeBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 48px;
      border-radius: 0;
      font-size: 1rem;
      background-color: var(--white);
      border: 1px solid var(--darkBlue);
      color: var(--darkBlue);
    }
    .checkingArea {
      margin: 0.5em 0;
      font-weight: 700;
      .ant-checkbox-wrapper {
        .ant-checkbox {
          border: 2px solid #181059;
          &:after {
            border: 1px solid #181059;
            border-radius: 0px;
          }
        }
        .ant-checkbox-checked {
          .ant-checkbox-inner {
            background-color: #ffffff;
            border-color: #181059;
            border-radius: 0px;
            &::after {
              border-bottom: 2px solid #181059 !important;
              border-right: 2px solid #181059 !important;
              top: 41%;
              left: 15%;
              width: 5.714286px;
              height: 11.142857px;
            }
          }
        }
        span {
          color: #181059 !important;
          font-size: 1.2em;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 2em 1em;
    form {
      padding: 0em;
    }
    .socialInputs {
      display: block;
    }
    .socialLogin {
      width: 100%;
      max-width: 195px;
      margin: 1em auto;
      text-align: center;
    }
    .changeProfile {
      a {
        justify-content: center;
      }
    }
    .rateSection {
      margin: 1em auto;
      .ant-rate {
        font-size: 1.5em;
      }
    }
  }
`;
