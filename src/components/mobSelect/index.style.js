import { Select } from "antd";
import styled from "styled-components";

export const CustomContainer = styled("div")`
  display: none;
  text-align: left;
  padding-bottom: 1em;
  margin-bottom: 2em;
  border-bottom: 2px solid #31313110;
  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3em 1em;
    border-bottom: 2px solid #31313110;
    &:last-child {
      border-bottom: 2px solid #31313100;
    }
    p {
      font-weight: 700;
      font-size: 14px;
      color: #181059;
      img {
        margin-left: 1em;
      }
    }
  }
  @media (max-width: 992px) {
    display: block;
  }
`;
export const CustomSelect = styled(Select)`
  width: 100%;
  text-algin: left;
  height: 50px;
  margin-bottom: 1em;
  .ant-select-selector {
    height: 50px !important;
    .ant-select-selection-item {
      margin-top: 0.5em;
      font-weight: 700;
      font-size: 16px;
      color: #313131;
      height: 50px;
      text-align: left;
    }
  }
`;
