import { Form } from "antd";
import styled from "styled-components";

export const CustomInput = styled(Form.Item)`
  width: 100%;
  margin-bottom: 0;
  input {
    height: 60px;
  }
  @media (max-width: 992px) {
    & {
      input {
        height: 38px;
      }
    }
  }
`;
export const CustomLabel = styled(Form.Item)`
  width: 100%;
  margin-bottom: 5px !important;
  input {
    height: 60px;
  }
  
  .ant-form-item-label {
    padding: 0 0 8px;
    line-height: 0.9;
    left: 12px;
    white-space: normal;
    text-align: left;
    top: 24px;
    z-index: 1;
    font-size: 14px;
    color: #757575;
  }
 
  .ant-form-item {
    margin-bottom: 0em !important;
}

  .ant-form-item-label > label {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 1px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
  }

  @media (max-width: 992px) {
    input {
      height: 42px;
    }
  }
`;