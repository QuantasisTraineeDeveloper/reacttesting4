import styled from "styled-components";

export const Wrapper = styled("div")`
  width: 100%;
  max-width: 827px;
  margin: auto;
  padding: 2em 0;
  p {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #31313160;
  }
  .threeButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
  }
  .mySqlBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 32px;
    margin: 0 0.5em 2em 0.5em;
    color: var(--orange);
    background: #d3933110;
  }
  .addBtn {
    background: #d39331;
    border: 1px solid #d39331;
    display: block;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    height: 60px;
    border-radius: 0;
    color: #ffffff;
  }
  .selectionCard {
    max-width: 650px;
    margin: auto;
  }
  .ant-tabs-nav {
    &::before {
      border-bottom: 2px solid #31313120;
    }
  }
  .ant-tabs-tab {
    .ant-tabs-tab-btn {
      color: #313131;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: #313131;
    }
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: #1890ff;
    pointer-events: none;
    display: none;
  }
`;

export const SqlQuestion = styled("div")`
  .mySqlQuestion {
    border-top: 2px solid #31313110;
    padding: 1.5em 0;
    width: 100%;
    margin: auto;
    p {
      font-size: 16px;
      font-weight: 400;
      margin: 0.5em 0;
      text-align: left;
      color: #3b4045;
    }
    .mySqlUpdate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h6 {
        font-weight: 400;
        font-size: 1.4em;
        color: var(--primary);
      }
      p {
        font-size: 12px;
        color: #6a737c;
        margin: 0;
      }
    }
    .mySqlLinks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .backSlashBtn {
        display: flex;
        justify-content: start;
        align-items: center;
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
      .voteIcon,
      .answerIcon,
      .vieWsIcon,
      .andyIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        gap: 0.5rem;
        span {
          line-height: 0 !important;
        }
        p {
          line-height: 0 !important;
          margin: 0;
          font-weight: 600;
        }
      }
      .voteIcon {
        font-size: 1.25rem;
        p {
          color: #525960;
        }
      }
      .answerIcon {
        p {
          color: #2f6f44;
        }
      }
      .vieWsIcon {
        p {
          color: #525960;
          opacity: 0.5;
        }
      }
      .andyIcon {
        font-weight: 400;
        span {
          font-weight: 700;
          font-size: 11px;
          margin-left: 0.5em;
          color: #525960;
        }
        div {
          margin-left: 0.5em;
          color: #3f6fd8;
        }
      }
    }
    &:nth-child(2) {
      border-top: 1px solid #ffffff;
    }
  }
`;
