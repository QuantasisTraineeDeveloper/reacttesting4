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
  width: 271px;
  padding: 4em 2em;
  // height: 100vh;
  background: #181059;
  .active {
    color: white !important;
    opacity: 1 !important;
  }
  .checkIcon {
    color: green;
    width: 16px;
    height: 16px;
    margin-left: 1rem;
  }
  .accordion {
    background: #181059;
    border: 1px solid #181059;

    .ant-collapse-content-box {
      background: #181059;
      padding: 0.3em;
    }
    .ant-collapse-header {
      padding: 0.3em;
    }
    .ant-collapse-content {
      color: rgba(0, 0, 0, 0.85);
      background-color: #fff;
      border-top: 1px solid #181059;
    }
    .anticon {
      svg {
        font-size: 1.1em;
        transform: rotate(90deg);
        color: #ffffff;
      }
    }
    .ant-collapse-item {
      background: rgba(63, 111, 216, 0);
      border-bottom: 1px solid #181059;
    }
    .ant-collapse-item-active {
      .ant-collapse-expand-icon {
        .anticon {
          svg {
            font-size: 1.1em;
            transform: rotate(-90deg) !important;
          }
        }
      }
    }
    .accordionBtn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5em;
      width: 100%;
      h4 {
        font-weight: 600;
        color: #ffffff;
        font-size: 1.1em;
        margin-bottom: 0;
      }
      div {
        color: #ffffff;
      }
    }
    .allItems {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
      color: #ffffff30;
      font-size: 1em;
      font-weight: 400;
      cursor: pointer;
      .items {
        img {
          width: 12px;
          filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(102deg)
            brightness(102%) contrast(101%);
          margin-right: 1em;
          opacity: 0.3;
        }
        span {
          color: #ffffff30;
        }
        &:hover {
          img {
            opacity: 1;
          }
          span {
            color: #ffffff;
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    & {
      width: 100%;
      display: none;
    }
  }
`;
export const Content = styled("div")`
  padding: 1em 2em;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 147.9%;
    color: #313131;
    margin-top: 0.5em;
  }
  .videoTitle {
    max-width: 800px;
    margin-bottom: 0.5em;
    h2 {
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      color: #181059;
      margin-bottom: 1.5em;
    }
    div {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #3f6fd8;
    }
  }
  .mainHeading {
    max-width: 800px;
  }
  .subTitle {
    padding: 1.5em 0;
    h3 {
      font-weight: 600;
      font-size: 28px;
      text-transform: uppercase;
      color: #313131;
      margin-bottom: 0.5em;
    }
    .images {
      margin: 1em 0;
    }

    .code {
      margin: 1rem 0 0 0;
    }
  }
  .aboutQueries {
    margin: 0.5em 0;
    .cardHeader {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
      p {
        margin: 0;
      }
      img {
        margin-right: 1em;
      }
      .checkIcon {
        color: green;
        width: 16px;
        height: 16px;
        margin-left: 1rem;
      }
      .lockIcon {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }
    .cardBody {
      position: relative;

      .views {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.3em 0.8em;
        background: #fffffff0;
        color: black;
        position: absolute;
        top: 11%;
        right: 2%;
      }
    }
  }
  .saveFile {
    display: grid;
    grid-template-columns: repeat(5, 125px);
    column-gap: 20px;
    row-gap: 20px;

    .file {
      width: 125px;
      height: 125px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 0.9em;
      border: 1px solid #3f6fd8;

      &:hover {
        color: #0d6efd !important;
      }

      .fileIcon {
        height: 35px;
        margin-bottom: 0.3em;
        width: 25px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: end;
        font-weight: 400;
        border-radius: 2px;
        border-top-right-radius: 0;
        font-size: 0.85rem;
        background-color: #ffffff;
        border: 1px solid #3f6fd8;
        position: relative;
        span {
          margin: 0 0 4px 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          background-color: #3f6fd8;
          color: #ffffff;
          text-transform: uppercase;
          font-weight: 600;
          position: absolute;
          font-size: 0.75rem;
          height: 1rem;
          padding: 0 0.25rem;
        }
        &:before {
          content: "";
          position: absolute;
          top: -1px;
          right: -1px;
          border-top: 12px solid white;
          border-left: 12px solid transparent;
          width: 0;
        }

        &::after {
          content: "";
          position: absolute;
          left: 42%;
          top: 10%;
          width: 0px;
          transform: rotate(45deg);
          height: 0px;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid rgb(63, 111, 216);
          clear: both;
        }
      }
    }

    @media (max-width: 992px) {
      & {
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(100%, 125px), 125px)
        );
      }
    }
  }

  .nextPrevButtons {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5em 0;

    .disabled {
      cursor: not-allowed;
    }
    .active {
      background: #d39331;
      color: #ffffff;
    }
    button {
      width: 131px;
      color: #31313190;
      font-weight: 700;
      height: 40px;
      border: none;
    }
  }
  @media (max-width: 992px) {
    & {
      padding: 1em 0.5em;
      img {
        max-width: 100%;
      }
    }
  }
`;
export const RelatedTopics = styled("div")`
  margin: 1em 0;
  h3 {
    color: #181059;
    font-size: 1.5em;
    margin: 1em 0;
  }

  .relatedTopics {
    display: grid;
    grid-template-columns: repeat(4, 125px);
    column-gap: 100px;
    row-gap: 20px;
    .relatedItem {
      width: 200px;
      margin-right: 1em;
      h6 {
        margin: 0.3em 0;
        font-weight: 600;
        font-size: 1.3em;
        color: rgb(63, 111, 216);
      }
      p {
        font-size: 1em;
        font-weight: 400;
        color: #313131 !important;
      }
      span {
        color: #181059;
      }
    }
  }

  .mostvisited {
    display: grid;
    grid-template-columns: repeat(4, 125px);
    column-gap: 100px;
    row-gap: 20px;
    .mostvisitedItem {
      width: 200px;
      margin-right: 1em;
      h6 {
        margin: 0.3em 0;
        font-weight: 600;
        font-size: 1.3em;
        color: rgb(63, 111, 216);
      }
      p {
        font-size: 1em;
        font-weight: 400;
        color: #313131 !important;
      }
      span {
        color: #181059;
      }
    }
  }
  @media (max-width: 992px) {
    .relatedTopics {
      display: flex;
      flex-wrap: wrap;
      .relatedItem {
        width: 150px;
        margin-right: 1em;
        h6 {
          font-size: 1em;
        }
        p {
          font-size: 0.8em;
        }
        span {
          color: #31313150;
        }
      }
    }
  }
`;
export const SelectArea = styled("div")`
  .ant-select {
    width: 250px;
  }
  .ant-select-selector {
    height: 60px !important;
    .ant-select-selection-search {
      input {
        height: 60px !important;
      }
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      padding-top: 0.8rem;
      font-weight: 600;
      height: 60px !important;
      color: #000000;
    }
  }
  .checkingArea {
    margin: 1em 0;
    font-weight: 600;
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

    /* .ant-checkbox-wrapper {
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
    } */
  }
  @media (max-width: 768px) {
    padding: 0 0.7em;
    .ant-select-selector {
      height: 38px !important;
      .ant-select-selection-search {
        input {
          height: 38px !important;
        }
      }
    }
    .ant-checkbox-wrapper {
      margin-left: 0;
      margin-right: 1em;
    }
    .ant-select-selection-placeholder {
      height: 38px !important;
      padding-top: 0.3em !important;
    }
    .ant-select-selection-item {
      height: 38px !important;
    }
    .checkingArea {
      margin: 1em 0;
      font-weight: 600;
      .ant-checkbox-wrapper {
        .ant-checkbox {
          border: 1px solid #181059;
        }
        .ant-checkbox-checked {
          .ant-checkbox-inner {
            &::after {
              border-bottom: 1px solid #181059 !important;
              border-right: 1px solid #181059 !important;
            }
          }
        }
        span {
          color: #181059 !important;
          font-size: 1em;
          font-weight: 600;
        }
      }
    }
  }
`;
