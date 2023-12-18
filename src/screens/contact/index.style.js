import { Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 1em 3em;

  @media (max-width: 992px) {
    & {
      padding: 0em 0em;
    }
  }
`;
export const ContactForm = styled("div")`
  // height: 100vh;
  padding: 2em 0;
  text-align: center !imporatnt;
  @media (max-width: 992px) {
    & {
      height: 100%;
      padding: 0em 0em 1em;
    }
  }
  P {
    text-align: center;
    margin-bottom: 1em;
  }
  form {
    text-align: left;
    margin-top: 2em;
    // .ant-form-item {
    //   // height: 60px;
    //   // border: 1px solid gary;
    // }
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
        color: #000000;
      }
    }
    input {
      height: 60px;
    }
    .robotCheck {
      /* border: 1px solid #d9d9d9; */
      width: max-content;
      margin: 0em auto 2em;
      padding: 0.3em 0 0.3em 1em;
      img {
        margin-left: 1.5em;
      }
    }
  }
`;

// Message Modal

export const MessageModal = styled(Modal)`
  .ant-modal {
  }
  .ant-modal-content {
    width: 450px;
    border-radius: 0px;
  }
  .ant-modal-close-x {
    color: #000000;
  }
  .ant-modal-body {
    padding: 4em;
    text-align: center;
    h1 {
      font-weight: 900;
      margin: 0em;
    }
    p {
      font-size: 14px;
      margin: 1em 0 2em;
      color: #000000;
      opacity: 0.5;
    }
    button {
      span {
        font-size: 1.1em;
      }
    }
  }
  .ant-modal-footer {
    display: none;
  }
  @media (max-width: 768px) {
    .ant-modal-content {
      width: 100%;
      border-radius: 0px;
      .ant-modal-body {
        button {
          width: 150px;
          span {
            font-size: 1em;
          }
        }
      }
    }
  }
`;
