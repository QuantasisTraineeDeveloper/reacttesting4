import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  .ant-select {
    width: 40% !important;
    margin-bottom: 1em;
  }
  @media (max-width: 992px) {
    & {
      padding: 0px 0px;
      display: block;
      .ant-select {
        width: 100% !important;
        margin-bottom: 0.3em;
      }
    }
  }
`;
export const Content = styled("div")`
  width: 100%;
  padding: 3em;
  margin: 1em auto;
  .searchForm {
    .ant-form-item {
      margin: 0;
    }
  }

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
  .checkingArea {
    margin: 2em 0;
    width: 60%;
    display: flex;
    justify-content: start;
    gap: 4rem;
    align-items: center;

    .ant-radio-inner:after {
      background: #1e3465 !important;
    }

    .ant-radio-checked .ant-radio-inner,
    .ant-radio:hover .ant-radio-inner,
    .ant-radio-wrapper:hover,
    .ant-radio-input:focus .ant-radio-inner {
      border-color: #1e3465 !important;
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
      margin: 1em 0;
      display: block;
      width: 100%;
    }
    .mobSearch {
      display: block;
    }
    .desktopSearch {
      display: none;
    }
  }
`;
export const ResultArea = styled("div")`
  .resulCount {
    font-size: 18px;
    padding: 4px 0;
  }
  .noCourse {
    padding: 4rem 2rem 6rem 2rem;

    color: #d39331;
    text-align: center;
  }
`;
