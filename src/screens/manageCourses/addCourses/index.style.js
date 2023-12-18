import { Space } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 3em 4em 4em;
  form {
    border-bottom: none;
    .ant-upload {
      width: 100%;
      height: 58px;
      border: none;
      button {
        border: 1px solid #d39331;
        width: 100%;
        height: 58px;
        span {
          font-size: 1em;
          color: #d39331;
        }
      }
    }
    .ReactFlagsSelect-module_selectBtn__19wW7 {
      height: 58px;
      border-radius: 0;
      &::after {
        border-top: 9px solid #4d4d4d;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 0;
      }
    }
  }
  .dataTable {
    padding: 2em 0;
    .uplaodArea {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
      h4 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.1em;
        color: #313131;
      }
    }
    .address {
      width: 369px;
      font-weight: 400 !important;
      font-size: 1.2em !important;
      line-height: 23px;
      color: #313131 !important;
    }
    .viewBtn {
      font-weight: 700;
      font-size: 1.2em;
      color: #3f6fd8;
    }
    .ant-upload {
      width: 150px;
      height: 150px;
      background-color: #ffffff;
      border: none;
      svg {
        font-size: 3em;
        color: #d39331;
      }
    }
  }
  .inputHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    padding-bottom: 0.5rem;
    .addpoints {
      font-size: 1.2em;
      color: #3f6fd8;
    }
  }
  @media (max-width: 992px) {
    & {
      padding: 1em 0em 2em;
      form {
        .ReactFlagsSelect-module_selectBtn__19wW7 {
          height: 38px !important;
          border-radius: 0;
          &::after {
            border-top: 5px solid #4d4d4d;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 0;
          }
        }
        .ant-upload {
          width: 100%;
          height: 38px !important;
          border: none;
          button {
            border: 1px solid #d39331;
            width: 100%;
            height: 38px !important;
            span {
              font-size: 0.75em;
              color: #d39331;
            }
          }
        }
      }
    }
  }
`;

export const LearningPointArea = styled(Space)`
  width: 100%;

  .ant-space-item {
    width: 100%;
  }
`;

export const LearningPoint = styled("div")`
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #31313130;
  padding: 0 2em;
  margin: 2em 0;
  font-size: 1em;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`;

export const DeleteBtn = styled("div")`
  cursor: pointer;
`;

export const QustionArea = styled("div")`
  margin: 1em 0 2em;
  .tagConatiner {
    padding: 1em;
    min-height: 120px;
    height: auto;
    border: 1px solid #00000010 !important;
  }
  .ant-select-selector {
    border: none !important;
    // height: 15px;
    padding: 0 1.5em;
    .ant-select-selection-overflow-item {
      .ant-select-selection-item {
        background: #3f6fd810;
        height: 32px;
        padding: 0.2em;
        span {
          color: #3f6fd8 !important;
          margin: 0 0.5em;
          .anticon-close {
            svg {
              color: #3f6fd8 !important;
              font-size: 1.1em;
            }
          }
        }
      }
    }
  }
  .ant-select-focused {
  }
  h3 {
    font-weight: 600;
    font-size: 1.4em;
  }
  p {
    margin-bottom: 1em;
  }
  @media (width: 992px) {
    & {
      padding: 1em 2em;
    }
  }
  @media (width: 768px) {
    & {
      padding: 1em;
    }
  }
`;
