import { Modal } from "antd";
import styled from "styled-components";

export const CardContainer = styled("div")`
  display: flex;
  width: 300px;
  /* cursor: pointer; */
  margin-bottom: 2em;

  .videoDetail {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }
  .viewed {
    display: flex;
    justify-content: center;
    align-items: center;

    .checkIcon {
      color: #25ad84;
      font-size: 1.25rem;
      margin: 0 !important;
    }
    p {
      color: #25ad84;
      font-size: 14px;
      margin: 0 0 0 0;
    }
  }

  img {
    margin-right: 1em;
  }
  div {
    /* width: 200px; */
    width: auto;
  }
  @media (max-width: 992px) {
    width: 100%;
    img {
      width: 80px;
      margin-right: 0.3em;
    }
    div {
      width: 100%;
    }
  }
`;
export const VideoItem = styled("div")`
  display: flex;
  padding: 1em 0;
  /* margin-bottom: 2em; */
  position: relative;
  .playIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 26px;
      width: 26px;
    }
  }
  img {
    width: 80px;
    height: 60px;
    margin-right: 0.5em;
  }
  p {
    color: #ffffff;
  }
  .videoDetail {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;

    .videoTitle {
      width: 60%;
    }
  }
  .viewed {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;
    .checkIcon {
      color: #25ad84;
      font-size: 1.25rem;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    img {
      width: 80px;
      margin-right: 0.3em;
    }
    div {
      width: 100%;
    }
  }
`;

export const VideoModal = styled(Modal)`
  .chapterName {
    font-size: 1.5rem;
  }
  .courseName {
    font-size: 1.75rem;
    font-weight: 600;
    font-family: Source Sans Pro;
    color: #ffffff;
  }
  .ant-modal {
  }
  .ant-modal-content {
    width: 410px;
    border-radius: 0px;
    background: #1f1f1f;
    color: #ffffff;
    .ant-modal-close {
      color: #ffffff;
      position: absolute;
      top: 15px;
      right: 35%;
      transform: translateX(-50%);
    }
  }
  .ant-modal-body {
    padding: 5.5em 1em 1em;
    h4 {
      color: #ffffff !important;
      margin: 0em;
      font-size: 1.6em;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
    .modalVideos {
      /* height: 450px; */
      height: auto;
      max-height: 450px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
      h4 {
        color: #ffffff !important;
        margin: 1em 0;
      }
    }
    .playArea {
      width: 380px;
      // height: 250px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .footerBtn {
      text-align: center;
      margin-top: 1em;
      span {
        font-size: 1.5em;
      }
    }
  }
  .ant-modal-footer {
    display: none;
  }
  @media (max-width: 992px) {
    .ant-modal-content {
      width: 100%;
    }
    img {
      width: 80px;
      margin-right: 0.3em;
    }
    .playArea {
      width: 340px;
      // height: 190px;
      img {
        width: 90%;
        max-width: 100% !important;
        height: auto;
      }
    }
  }
`;
