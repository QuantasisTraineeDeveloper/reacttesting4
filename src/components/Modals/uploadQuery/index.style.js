import { Modal } from "antd";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
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
    padding: 2em;
    text-align: center;
    h1 {
      font-weight: 900;
      font-size: 2em;
      margin: 0.7em 0;
    }
    p {
      font-size: 14px;
      margin: 2em 0 0;
      color: #000000;
      opacity: 0.5;
    }
    button {
      margin: 0.5em auto;
      span {
        font-size: 1.1em;
      }
    }
    .ant-form-item {
      margin-bottom: 1em;
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
