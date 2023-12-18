import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  @media (max-width: 992px) {
    & {
      padding: 0px 0px;
      display: block;
    }
  }
`;
export const Sidebar = styled("div")`
  width: 330px;
  padding: 4em 2em;
  background: #181059;
  text-align: center;
  h2 {
    color: #ffffffff;
    margin-bottom: 1em;
  }
  .ant-input-affix-wrapper {
    height: 58px;
    margin-bottom: 1em;
  }
  button {
    margin: auto;
    height: 58px;
    span {
      font-size: 1.2em;
    }
  }
  .records {
    margin-top: 2em;
    .table {
      margin-top: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;

      .table-name {
        cursor: pointer;

        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
      strong {
        font-size: 1.2em;
      }
      a {
        color: #ffffff;
      }
    }
    p {
      padding: 4rem 0;
      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Content = styled("div")`
  width: 70%;
  padding: 1em 2em;
  .subText {
    text-align: center;
    margin: auto;
    margin-bottom: 1em;
    max-width: 450px;
    color: #31313160;
  }
  .selectSql {
    margin-top: 2em;
    margin-right: 3em;
    text-align: right;
    .ant-select-selector {
      height: 60px !important;
      .ant-select-selection-search {
        input {
          height: 60px !important;
        }
      }
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        text-align: left;
        padding-top: 0.8rem;
        width: 300px;
        font-weight: 600;
        height: 60px !important;
        color: #000000;
      }
      @media (max-width: 992px) {
        .ant-select-selection-item {
          width: 300px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const ResultArea = styled("div")`
  margin-top: 2em;
  p {
    color: #313131;
  }
  .records {
    display: block;
    margin: 0.5em 0;
    color: #31313160;
  }
`;
export const MobMenu = styled("div")`
  display: none;
  padding: 1em;
  transition: 200ms;
  .collapseHeader {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .searchIcon {
      display: flex;
      align-items: center;
      img {
        margin-right: 0.5em;
      }
    }
    span {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #ffffff;
      transition: 200ms;
      // transform: rotate(180deg);
      svg {
        color: #181059;
        font-size: 1.4em;
      }
    }
  }
  @media (max-width: 768px) {
    display: block;
    // width: 330px;
    padding: 1em 1.2em;
    background: #181059;
    text-align: center;
    h2 {
      color: #ffffffff;
      font-weight: 600;
      text-align: left;
      font-size: 1.2em;
    }
    p {
      color: #ffffff99;
      text-align: left;
      margin-bottom: 0em;
    }
    .ant-input-affix-wrapper {
      height: 38px;
      margin-bottom: 1em;
    }
    button {
      margin: auto;
      height: 38px;
      span {
        font-size: 0.9em;
      }
    }
    .records {
      margin-top: 0em;
      .table {
        margin-top: 0.7em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.95em;
        color: #ffffff;
        strong {
          font-size: 1.2em;
        }
        a {
          color: #ffffff;
        }
      }
    }
  }
`;
