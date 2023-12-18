import { Modal } from "antd";
import styled from "styled-components";

export const ThemeModal = styled(Modal)`
  .ant-modal {
  }
  .ant-modal-content {
    min-width: 450px;
    border-radius: 0px;
  }
  .ant-modal-close-x {
    color: #000000;
  }
  .ant-modal-body {
    padding: 2em;
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
