import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em;
  h3 {
    text-transform: uppercase;
    color: #313131;
  }
  .ant-table-thead {
    .ant-table-cell {
      background: #ffffff;
      font-weight: 700;
      padding-left: 1.7em;
      font-size: 1.2em;
      background-color: #181059;
      color: #ffffff;
      //   &:last-child {
      //     color: #3f6fd8;
      //   }
      &::before {
        display: none;
      }
    }
  }
  .ant-table-tbody {
    .ant-table-cell {
      padding-left: 1.7em;
      &:nth-child(1) {
        font-weight: 700;
      }
      .deleteBtn {
        span {
          cursor: pointer;
          margin: 0 0.5em;
          .closeIcon {
            font-size: 2rem;
            height: 1.25rem;
            width: 1.25rem;
            color: #c91d2e;
            fill: #c91d2e;
          }
        }
      }
    }
  }
  .ant-tabs {
    .ant-tabs-nav-wrap {
      justify-content: end;
      .ant-tabs-nav-list {
        border-bottom: 1px solid #00000050;
      }
    }
    .ant-tabs-nav {
      .ant-tabs-tab-btn {
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          font-weight: 700;
          letter-spacing: 0px;
          color: #181059;
          text-transform: uppercase;
        }
      }
      &::before {
        display: none;
      }
    }
    .ant-tabs-ink-bar {
      display: none;
    }
  }
  @media (max-width: 768px) {
    & {
      padding: 2em 0em;
    }
  }
`;
export const TitleHeading = styled("div")`
  display: flex;
  justify-content: space-between;
  .heading {
    position: relative;
    bottom: 3.25rem;

    @media (max-width: 1100px) {
      bottom: 0rem;
    }
  }
  .selectData {
    width: 500px;
  }
`;
export const AddChapter = styled(Form)`
  margin: 3em 0 2em;
  h3 {
    margin-bottom: 1em;
  }
  .ant-form-item {
    margin-bottom: 2em;
  }
  .checkingArea {
    margin: 1em 0;
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
`;

export const EditChapter = styled(Form)`
  margin: 0;
  h3 {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    margin-bottom: 2rem;
  }
  .checkingArea {
    margin: 0 0 1rem 0;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    .ant-checkbox-wrapper {
      margin-left: 0px;
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
`;

export const Heading = styled("div")``;
