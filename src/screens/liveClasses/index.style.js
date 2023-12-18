import styled from "styled-components";
import { Card, Button, Form } from "antd";

const primaryColor = "#313131";
const secondaryColor = "#3F6FD8";
const thirdColor = "#E04F5F";
const fourthColor = "#181059";
const fifthColor = "#D39331";
const mobileBreakpoint = "768px";

export const Popup = styled.div`
  width: 100%;
  height: 100%;

  .active {
    color: white !important;
    opacity: 1 !important;
  }

  .accordion {
    background: #ffffff;
    border: 1px solid #ffffff;
    color: ${fourthColor};

    .ant-collapse-content-box {
      background: #ffffff;
      padding: 0.3em;
    }

    .ant-collapse-header {
      padding: 0.3em;
      padding: 13px 0 13px 40px;
    }

    .ant-collapse-content {
      border-top: 1px solid #ffffff;
      padding: 13px 0 13px 20px;
    }

    .anticon {
      padding-top: 9px;

      svg {
        transform: rotate(90deg);
        color: ${fourthColor};
        width: 16px;
        height: 16px;
      }
    }

    .ant-collapse-item {
      background: rgba(63, 111, 216, 0);
      border-bottom: 1px solid #ffffff;
    }

    .ant-collapse-item-active {
      .ant-collapse-expand-icon {
        .anticon {
          svg {
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
        color: rgba(24, 16, 89, 1);
        font-size: 22px;
        line-height: 22px;
        font-family: Source Sans Pro;
        font-weight: 600;
      }
    }

    .allItems {
      line-height: 22.63px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
      cursor: pointer;
      color: ${fourthColor};
      font-size: 18px;
      margin-left: 1rem;
      font-weight: 400;

      &:hover {
        color: #000;
        opacity: 0.8;
        transition: color 0.2s ease, opacity 0.2s ease;
      }

      .items {
        .checkIcon {
          color: green;
          width: 20px;
          height: 20px;
          margin-left: 1rem;
        }

        .lesson {
          color: ${fourthColor};
          font-size: 18px !important;
          margin-left: 1rem !important;
          font-weight: 400 !important;
        }

        .markedlesson {
          color: green !important;
          font-size: 18px !important;
          margin-left: 1rem !important;
          font-weight: 400 !important;
        }

        .playIcon {
          color: green;
        }
      }
    }
  }
`;

export const Container = styled.div`
  margin: 10px auto;
  padding: 0;
  display: flex;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  color: ${primaryColor};
  font-family: "Source Sans Pro";
  font-weight: 400;
  width: 100%;
  flex-direction: column;

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .course-image {
    width: 127px;
    height: 126px;
    margin-top: -55px;
    margin-bottom: 5px;
    z-index: 1;
  }

  .lecturer-card {
    max-width: 120px;
    text-align: center;
  }

  .lecturer-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 18px;
    margin: 6px 0;
    line-height: 19px;
    width: 120px;
    color: ${primaryColor};
    font-family: "Source Sans Pro";
    display: inline-block;
  }

  .lecturer-specialisation {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: italic;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 27px;
    width: 120px;
    display: inline-block;
    color: ${primaryColor};
  }

  .lecturer-link {
    font-size: 14.5px;
    margin-left: 7px;
    width: 120px;
  }
  .lecturerlink {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${secondaryColor};
    margin-left: 5px;
  }

  .showInfo {
    height: 40px;
  }

  .class-status {
    font-size: 14px;
    line-height: 17.6px;
    color: ${thirdColor};
  }

  .class-details {
    padding-left: 14px;
  }

  .class-title {
    font-weight: 600;
    font-size: 22px;
    line-height: 27.65px;
    margin: 10px 0;
  }

  .class-description {
    font-size: 16px;
    line-height: 20.11px;
    margin: 10px 0;
    width: 98%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .class-duration {
    font-weight: 600;
    font-size: 16px;
    line-height: 20.11px;
    color: ${fourthColor};
    width: 90%;
  }

  .class-time {
    display: flex;
    align-items: left;
    color: ${fourthColor};
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
    text-overflow: ellipsis;
  }
  .class-time-est {
    font-weight: 400;
    line-height: 20.11px;
    white-space: nowrap;
    color: ${fourthColor};
  }
  .ist-list {
    margin: 0;
    padding: 0 auto;
  }
  .ist-item {
    font-weight: 400;
    line-height: 20.11px;
    white-space: nowrap;
    color: ${fourthColor};
  }

  .students-joined {
    font-weight: 700;
    font-size: 14px;
    line-height: 17.6px;
    color: ${fifthColor};
  }

  .class-progress {
    margin-bottom: 10px;
    max-width: 209px;
    padding-right: 10px;
  }

  .class-links {
    margin: 20px 0;
  }

  .class-link {
    font-weight: 600;
    font-size: 16px;
    line-height: 20.11px;
    color: ${secondaryColor};
    margin-left: 7px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 99%;

    .class-title {
      font-size: 20px;
      margin-top: 20px;
    }

    .class-time {
      display: flex;
      align-items: left;
      white-space: nowrap;
      font-size: 13.5px;
    }
    .class-time-est {
      white-space: nowrap;
    }

    .ist-item {
      white-space: nowrap;
    }
    .class-details {
      padding-left: 1px;
    }

    .class-links {
      margin: 10px 0;
    }

    .class-link {
      font-size: 14px;
    }

    .class-description {
      font-size: 14px;
    }
    .class-duration {
      font-size: 15px;
    }
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
  }
`;

export const PopupData = styled.div`
  .custom-heading {
    font-weight: 700;
    font-size: 32px;
    color: ${primaryColor};
    line-height: 40.22px;
  }
`;

export const Scroller = styled(Form.Item)`
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #555;
  }
`;

export const StyledCard = styled(Card)`
  box-shadow: 0px 1px 8px 0px #00000012;
  padding: 1px;
  color: ${primaryColor};
`;

export const Duration = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  p {
    margin-right: 3em;
    color: ${fourthColor};
    font-weight: 600;
    font-size: 16px;

    img {
      margin-right: 0.7em;
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 0;

    div {
      line-height: 1;
    }

    a {
      margin-right: 1em;
      font-size: 0.6em;
    }
  }
`;

export const Btn = styled(Button)`
  background: #d39331 !important;
  border: 1px solid #d39331 !important;
  width: 193px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;

  .loader {
    font-size: 2rem !important;
  }

  &:disabled {
    background: #d39331;
    border: 1px solid #d39331;
    width: 193px;
    height: 42px;
    border-radius: 0;
    opacity: 0.5;

    &:hover {
      background: #d39331;
      border: 1px solid #d39331;
      border-radius: 0;
      opacity: 0.5;
    }
  }

  span {
    font-size: 16px;
    color: #ffffff;
  }

  &:focus,
  &:hover {
    background: #d39331;
    border-radius: 0;
    border: 1px solid #d39331;
    opacity: 0.9;

    span {
      color: #ffffff;
    }
  }

  @media (max-width: 992px) {
    width: 150px;
    height: 50px;
    padding: 0;
    &:disabled {
      background: #d39331;
      border: 1px solid #d39331;
      width: 150px;
      height: 50px;
      border-radius: 0;
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 40px;
    &:disabled {
      background: #d39331;
      border: 1px solid #d39331;
      width: 110px;
      height: 40px;
      border-radius: 0;
      opacity: 0.5;
    }

    span {
      font-size: 1em !important;
    }
  }
`;

export const Heading = styled.div`
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  letter-spacing: 0em;
  font-family: "Source Sans Pro";
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-top: 2.5rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (max-width: ${mobileBreakpoint}) {
    width: 99.8%;
  }
  .heading {
    margin-bottom: 0.3em;
    font-size: 46px;
    font-weight: 300;
    line-height: 58px;
    text-align: center;
    color: ${primaryColor};
  }

  .title {
    margin: 10px 0;
  }
  .f-l-class {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }

  .len-class {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    opacity: 0.6 !important;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 99%;

    .heading {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 1em;
    }
  }
`;
