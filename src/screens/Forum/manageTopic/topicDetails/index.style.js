import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em 4em;
  .dataTable {
    padding: 2em 0;
    height: auto;
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
  @media (max-width: 768px) {
    padding: 1em 0em 2em;
    /* .ant-upload {
      display: none;
    } */
  }
`;

export const QueryCode = styled("div")`
  width: 100%;
  min-height: 250px;
  max-height: 400px;
  background-color: #3f6fd810;
  text-align: start !important;
  padding: 1rem;
  overflow: auto;
`;
export const InfoForm = styled(Form)`
  border-bottom: 2px solid #31313120;
  padding: 1em 0 3em;
  h3 {
    text-transform: uppercase;
    color: #313131;
    font-weight: 600;
    font-size: 1.2em;
  }
  .ant-form-item {
    margin-bottom: 2em;
  }
  .checkingArea {
    margin: 1em 0 2em;
    font-weight: 700;
    .ant-checkbox-wrapper {
      margin-right: 1em;
      .ant-checkbox-inner {
        width: 12px;
        height: 12px;
      }
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
          //   border-color: #181059;
          width: 12px;
          height: 12px;
          border-radius: 0px;
          &::after {
            border-bottom: 1px solid #181059 !important;
            border-right: 1px solid #181059 !important;
            top: 40%;
            left: 15%;
            width: 3.714286px;
            height: 8.142857px;
          }
        }
      }
      span {
        color: #181059 !important;
        font-size: 0.9em;
      }
      &:hover {
        .ant-checkbox-inner {
          border: 1px solid #181059;
        }
      }
    }
  }
`;
export const UploadBtn = styled("span")`
  width: 166px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #d39331;
  border: 1px solid #d39331;
  cursor: pointer;
`;
export const UploadJson = styled("div")`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: repeat(5, 183px);
  column-gap: 20px;
  row-gap: 50px;

  .fileUploadLoader {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: none;
    svg {
      font-size: 3em;
      color: #d39331;
    }
  }

  @media (max-width: 992px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 183px), 183px));
    }
  }
`;
export const TxtFile = styled("div")`
  width: 183px;
  height: 183px;
  font-weight: 600;
  font-size: 16px;
  margin-right: 1em;
  color: #d39331;
  .fileCard {
    width: 183px;
    height: 183px;
    padding: 0.5em 0;
    border: 1px solid #3f6fd8;
    .cardBody {
      padding: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        margin-bottom: 0.3em;
      }
      .fileIcon {
        height: 40px;
        margin-bottom: 0.3em;
        width: 30px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: end;
        font-weight: 400;
        border-radius: 4px;
        border-top-right-radius: 0;
        font-size: 0.85rem;
        background-color: #3f6fd8;
        position: relative;
        span {
          margin-bottom: 2px;
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          border-top: 12px solid white;
          border-left: 12px solid transparent;
          width: 0;
        }

        &::after {
          content: "";
          position: absolute;
          left: 40%;
          top: 20%;
          width: 0;
          transform: rotate(45deg);
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid #e8e8e8;
          clear: both;
        }
      }
      h5 {
        margin-bottom: 0.5em;
      }
    }
  }
  .cardFooter,
  .cardHeader {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0.2em 0.5em;
    span {
      margin: 0 0.5em;
      cursor: pointer;
    }
  }
  .cardFooter {
    margin-top: 0.2em;
    justify-content: start;
    cursor: pointer;
    padding: 0.5em 0;
    img {
      margin-right: 0.5em;
    }
  }
`;
