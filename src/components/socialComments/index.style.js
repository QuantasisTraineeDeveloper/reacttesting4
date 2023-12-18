import styled from "styled-components";

export const CommentContainer = styled("div")`
  border-top: 2px solid #31313110;
  border-bottom: 2px solid #31313110;
  padding: 3em 0;
  .commentSection {
    h2 {
      font-size: 1.5em;
      margin-bottom: 1em;
      span {
        font-weight: 400;
        color: #31313170;
      }
    }
  }
  .commentArea {
    max-width: 700px;
    form {
      margin-top: 1em;
      input {
        border: none;
        height: 40px;
        font-size: 1.3em;
        padding-left: 0;
        border-bottom: 2px solid #31313110;
        &:focus {
          border: none;
          box-shadow: none;
          border-bottom: 2px solid #31313110;
        }
      }
    }
    .userAvatar {
      width: 45px;
      height: 45px;
      overflow: hidden;
      background: #3f6fd8;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-right: 1em;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      strong {
        color: #ffffff;
        font-size: 1.7em;
      }
    }
    .commentsUser {
      margin-top: 1.5em;
      display: flex;
      justify-content: start;
      align-items: top;
      p {
        margin-top: 0;
      }
      .userName {
        display: flex;
        justify-content: start;
        align-items: center;
        div {
          margin-right: 0.7em;
        }
        strong {
          color: #3f6fd8;
          margin: 0 1em;
        }
        span {
          margin-left: 1em;
        }
      }
      .likeArea {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 0.3em;
        div {
          span {
            display: inline-flex;
            justify-content: start;
            align-items: center;
          }
          img {
            margin-right: 0.5em;
          }
        }
        .dislike,
        span {
          cursor: pointer;
        }
        .dislike {
          margin-left: 2em;
        }
        .replyBtn {
          margin-left: 1em;
          color: #313131;
          &:hover {
            color: #d39331;
          }
        }
        .active {
          color: #d39331;
        }
      }
    }
  }
  .showReply {
    border: 1px solid #ffffff;
    background-color: #ffffff;
    border-bottom: 1px solid #ffffff;
    .showBtn {
      padding: 0.3em 0;
    }
    .ant-collapse-content {
      border-top: 1px solid #ffffff;
    }
    .ant-collapse-expand-icon {
      position: absolute;
      left: 50px;
      top: 6px;
    }
    .anticon {
      svg {
        transform: rotate(90deg);
        color: #181059;
      }
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
    .ant-collapse-item {
      border-bottom: 1px solid #ffffff;
      .ant-collapse-header {
        padding: 0.3em 0;
      }
    }
    .ant-collapse-content-box {
      border-left: 3px solid #18105910;
      padding: 0 0.7em;
    }
    .userAvatar {
      width: 35px;
      height: 35px;
      strong {
        color: #ffffff;
        font-size: 1.7em;
      }
    }
  }
  .commentReply {
    border-left: 3px solid #18105910;
    margin: 1em 1em 1em 3.85em;
    padding: 0 0.7em;
    .userAvatar {
      width: 35px;
      height: 35px;
      strong {
        color: #ffffff;
        font-size: 1.5em;
      }
    }
  }
  .yourComment {
    strong {
      font-size: 1.2em;
      font-weight: 900;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .emojiPicker {
        position: absolute;
        top: 30px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
      div {
        margin-top: 0.5em;
        button {
          border: 1px solid #31313110;
          width: 83px;
          height: 29px;
          background: #ffffff;
          &:last-child {
            background: #31313110;
            margin-left: 0.5em;
          }
        }
      }
    }
  }
`;
