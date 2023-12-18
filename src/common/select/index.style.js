import { Form } from "antd";
import styled from "styled-components";

export const CustomSelect = styled(Form.Item)`
  .ant-select {
    width: 100%;
    .ant-select-selector {
      padding-left: 2em;
      height: 60px !important;
      .ant-select-selection-search {
        input {
          padding-left: 1.2em;
          height: 60px !important;
        }
      }
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      padding: 0.8rem;
      height: auto !important;
      margin-top: 0 !important;
      /* font-weight: 700;
      height: 60px !important;
      color: #313131; */
    }
  }
  @media (max-width: 992px) {
    & {
      .ant-select {
        .ant-select-selector {
          padding-left: 1em;
          height: 38px !important;
          .ant-select-selection-search {
            input {
              padding-left: 1em;
              height: 38px !important;
            }
          }
        }
        .ant-select-selection-placeholder,
        .ant-select-selection-item {
          padding-top: 0.3rem;
          font-weight: 700;
          height: 38px !important;
          color: #313131;
        }
      }
    }
  }
`;
