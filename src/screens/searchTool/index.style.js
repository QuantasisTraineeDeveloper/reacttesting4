import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  .ant-select {
    width: 100% !important;
    margin-bottom: 1em;
  }
  @media (max-width: 992px) {
    & {
      padding: 0px 0px;
      display: block;
    }
  }
`;
export const Content = styled("div")`
  width: 60%;
  padding: 3em;
  margin: 1em auto;
  .searchIcon {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .mobSearch {
    display: none;
  }
  /* .checkingArea {
    margin: 2em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */

  .checkingArea {
    margin: 2em 0;
    display: flex;
    justify-content: start;
    gap: 4rem;
    align-items: center;
    font-weight: 700;

    .ant-radio-inner:after {
      background: #1e3465 !important;
    }

    .ant-radio-checked .ant-radio-inner,
    .ant-radio:hover .ant-radio-inner,
    .ant-radio-wrapper:hover,
    .ant-radio-input:focus .ant-radio-inner {
      border-color: #1e3465 !important;
    }

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

  .desktopSearch {
    button {
      margin: 2em auto;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1em 0;
    .checkingArea {
      margin: 2em 0;
      display: block;
    }
    .mobSearch {
      display: block;
    }
    .desktopSearch {
      display: none;
    }
  }
`;
