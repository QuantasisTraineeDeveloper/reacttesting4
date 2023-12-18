import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 3.5em;
  .titleHeading {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    span {
      color: #6a737c;
      font-size: 0.9em;
      margin-top: 1em;
    }
  }
  .showView {
    display: flex;
    justify-content: start;
    // align-items: center;
    div {
      margin: 1em 2em 0 0;
      span {
        display: block;
        color: #6a737c;
        font-size: 0.85em;
      }
      strong {
        display: block;
        font-size: 0.9em;
      }
    }
  }
`;
export const BackBtn = styled("span")`
  display: inline-flex;
  align-items: center;
  color: #3f6fd8;
  font-weight: 600;
  margin-bottom: 2em;
  cursor: pointer;
  svg {
    margin-right: 0.5em;
    font-size: 1.3em;
  }
`;
export const HeadingCard = styled("div")`
  border-top: 2px solid #00000010;
  padding: 2em 0;
  h3 {
    color: #3f6fd8;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
  }
`;
export const AddBtn = styled(Button)`
  display: block;
  background: #d39331;
  color: #ffffff;
  border: 1px solid #d39331;
  width: 180px;
  height: 60px;
  border-radius: 0;
  margin: 2em 0 1em auto;
  font-weight: 600;
`;
export const AnswersCard = styled("div")`
  margin-bottom: 1em;
  .countBtn {
    width: 20px;
    text-align: center;
    margin-bottom: 1.3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      cursor: pointer;
      color: #8b87ac;
      font-size: 2.5rem;
    }
    .activeIcon {
      color: #d39331 !important;
    }
    span {
      display: block;
      cursor: pointer;
      margin-bottom: 0.3em;
    }
    strong {
      display: block;
      font-weight: 700;
      font-size: 21px;
      color: #181059;
    }
  }
  p {
    margin-bottom: 1em;
  }
  .codeArea {
    margin-bottom: 1em;
    padding: 1em;
    background: #fafafa;
    code {
      color: #2f3337;
      font-size: 1em;
      span {
        color: #015493;
        &:nth-child(4) {
          color: #567a0d;
        }
        &:nth-child(6) {
          color: #567a0d;
        }
      }
    }
  }
  .shareArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      &:first-child {
        display: flex;
        width: 55%;
        justify-content: start;
        align-items: center;
      }
      .mySqlBtn3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1em;
        width: 73px;
        height: 24px;
        font-weight: 400;
        font-size: 12px;
        text-decoration: none;
        color: var(--primary);
        background: #3f6fd815;
      }
    }
    .andyIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        margin-right: 0.5em;
      }
      p {
        font-size: 0.9em;
        margin-bottom: 0;
        color: #0074cc;
      }
      .andyIconContent {
        line-height: 0.7;
        span {
          font-size: 0.8em;
        }
        .blackText {
          color: #6a737c;
        }
        .grayText {
          color: #838c95;
        }
        .dot {
          background-color: #d39331;
          width: 8px;
          display: inline-block;
          height: 8px;
          border-radius: 50%;
          margin: 0 0.3em;
        }
      }
    }
  }
`;

export const AnswerSection = styled("div")`
  border-top: 2px solid #00000010;
  margin: 2em 0;
  padding: 2em 0;
  h1 {
    font-weight: 600;
    font-size: 28px;
    text-transform: uppercase;
    color: #313131;
    margin-bottom: 1em;
  }
  .demo {
    /* width: unset !important; */
    a {
      margin-left: 0.4em;
    }
  }
  .comments {
    border-top: 2px solid #00000010;
    margin: 1em 0 0;
    input {
      padding-top: 1em;
      font-size: 1em;
      border: none !important;
      &:focus {
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0);
      }
    }
  }
  .vote {
    display: inline-flex;
    img {
      margin-right: 0.5rem;
    }
    span {
      font-weight: 600;
      color: #181059;
    }
    .time {
      color: rgba(106, 115, 124, 1);
      margin-right: 2em;
    }
  }
  .answerBtn {
    width: 136px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border: 1px solid #d39331;
    color: #d39331;
    background: #ffffff;
    line-height: 2;
    margin-top: 1rem;
  }
  em {
    color: #313131;
    margin-top: 1.5em;
    font-size: 0.8em;
    display: block;
    span {
      color: #0074cc;
    }
  }
  .tagged {
    display: flex;
    margin: 1em 0 0.2em;
    p {
      margin-right: 1em;
      a {
        color: #0074cc;
        font-weight: 700;
        font-size: 22px;
      }
    }
    .mySqlBtn3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;
      width: 73px;
      height: 24px;
      font-weight: 400;
      font-size: 12px;
      text-decoration: none;
      color: var(--primary);
      background: #3f6fd815;
    }
  }
  p {
    margin-right: 1em;
    a {
      color: #0074cc;
      font-weight: 700;
      font-size: 22px;
    }
  }
`;
