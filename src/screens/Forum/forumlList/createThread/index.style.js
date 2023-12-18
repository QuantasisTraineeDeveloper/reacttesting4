import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em 4em;
  p {
    color: #31313160;
    max-width: 719px;
    font-size: 1em;
  }
  .checkboxs {
    margin-bottom: 1em;
  }
  .ant-collapse-header {
    padding: 0.3em;
    background-color: #fff;
    position: relative;
    .ant-collapse-expand-icon {
      position: absolute;
      right: 0;
    }
  }
  .ant-collapse-content {
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border-top: 1px solid #fff;
    overflow-y: auto;
    height: 230px;
    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      width: 1px !important;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #000;
    }
  }
  .anticon {
    svg {
      font-size: 1.5em;
      transform: rotate(90deg);
      color: #ffffff;
    }
  }
  .ant-collapse-item {
    background: rgba(63, 111, 216, 0);
  }
  .ant-collapse-item-active {
    .ant-collapse-expand-icon {
      .anticon {
        svg {
          font-size: 1.5em;
          transform: rotate(-90deg) !important;
        }
      }
    }
  }
  form {
    .ant-checkbox {
      border: 1px solid #181059;
    }
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        border-color: #ffff;
        background: #ffff;
        &::after {
          border-bottom: 1px solid #181059 !important;
          border-right: 1px solid #181059 !important;
        }
        &:hover {
          border-color: #ffff !important;
        }
      }
    }
  }
  @media (width: 992px) {
    & {
      padding: 1em 2em;
    }
  }
  @media (width: 768px) {
    & {
      padding: 1em 0em;
    }
  }
`;
export const QuestionSteps = styled("div")`
  background: #3f6fd810;
  padding: 2em;
  margin-bottom: 2em;
  img {
    margin-bottom: 2em;
  }
  h5 {
    margin-bottom: 0.5em;
    font-weight: 600;
    font-size: 1.5em;
    color: #3f6fd8;
  }

  u {
    color: #31313160;
  }
  h6 {
    margin-top: 0.5em;
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

export const QustionArea = styled("div")`
  border: 1px solid #00000010;
  padding: 2em;
  margin: 1em 0 2em;
  .ant-select-selector {
    height: 50px;
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

export const AnswerArea = styled("div")`
  margin: 1em 0 2em;
`;
export const Answers = styled("div")`
  width: 104px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3f6fd810;
  color: #3f6fd8;
`;
export const AnswerContent = styled("div")`
  h5 {
    color: #3f6fd8;
    font-weight: 400;
    font-size: 1.1em;
  }
  p {
    margin-bottom: 0em;
  }
  div {
    font-size: 0.8em;
  }
`;
