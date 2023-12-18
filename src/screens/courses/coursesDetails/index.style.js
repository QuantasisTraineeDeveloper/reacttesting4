import styled from "styled-components";

export const Wrapper = styled("div")`
  h1 {
    margin: 0 auto 1em;
  }
  .courseLoading {
    background-color: rgba(255, 255, 255, 0.75);
    width: 100%;

    height: 100vh;
    top: 118px;
    position: absolute;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subscriptionWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 2rem 0;

    .subscriptionBox {
      background-color: #d393312b;
      padding: 0.5rem 2rem 0.5rem 1rem;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1rem;

      p {
        color: #d39331;
      }
      .subscriptionIcon {
        color: #d39331;
        font-size: 1.25rem;
      }
    }
  }
  .aboutCourses {
    margin-bottom: 3.2em;

    .tabLinks {
      margin: 1em 0 2em;
      div {
        display: inline-flex;
        justify-content: center;
        border: none;
        align-items: center;
        color: #3f6fd8;
        background: #3f6fd810;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem 1.5rem;
      }
    }
    h3 {
      text-transform: uppercase;
      font-size: 1.8em;
      font-weight: 600;
      color: #313131;
      margin-bottom: 1.2em;
      svg {
        margin-left: 0.3em;
        margin-bottom: 0.3em;
      }
    }
    .topics {
      display: flex;
      flex-wrap: wrap;
      .topic {
        width: 220px;
        display: flex;
        // align-items: center;
        color: #181059;
        margin-right: 1.5em;
        svg {
          width: 26px !important;
          margin-right: 0.5em;
          // margin-top: 0.2em;
          font-size: 1.8em;
        }
        p {
          color: #181059;
        }
      }
    }
    .videos {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .video {
        display: flex;
        color: #181059;
        margin-right: 1.5em;
        svg {
          margin-right: 0.5em;
          margin-top: 0.2em;
        }
      }

      h5 {
        color: #181059;
        margin-bottom: 1em;
      }
    }
    .accordion {
      .anticon {
        svg {
          font-size: 1.5em;
          transform: rotate(90deg);
          color: #181059;
        }
      }
      .ant-collapse-item {
        background: rgba(63, 111, 216, 0.05);
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
      .accordionBtn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        h4 {
          font-weight: 600;
          color: #181059;
          font-size: 22px;
        }
        div {
          color: #181059;
          br {
            display: none;
          }
        }
      }
      .allItems {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
        color: #181059;
        font-size: 1em;
        font-weight: 400;
        cursor: pointer;
        .items {
          img {
            margin-right: 1em;
          }

          .videoDetail {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 1rem;

            .activeLesson {
              color: #ffffff;
            }

            .lessonName {
              display: flex;
              justify-content: center;
              align-items: center;

              .icon {
                font-size: 1rem;
                margin-right: 1rem;
              }
            }
            .text-green {
              color: #25ad84;
            }
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
        }
      }
    }
    .reviews {
      display: flex;
      align-items: center;
      .showMore {
        font-weight: 700;
        font-size: 18px;
        color: #d39331;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 992px) {
    .subscriptionWrapper {
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    & {
      overflow: hidden;
      padding: 0px 0px;
      .aboutCourses {
        margin-bottom: 1.2em;
        h3 {
          font-size: 1em;
          margin-bottom: 1em;
          svg {
            margin-left: 0.3em;
            margin-bottom: 0.3em;
          }
        }
        .topic {
          li {
            font-size: 0.8em;
          }
        }
        p {
          font-size: 0.8em;
        }
      }
      .accordion {
        .anticon {
          svg {
            font-size: 1.2em !important;
          }
        }
        .ant-collapse-item-active {
          .ant-collapse-expand-icon {
            .anticon {
              svg {
                font-size: 1.2em !important;
              }
            }
          }
        }
        .accordionBtn {
          h4 {
            font-weight: 600;
            color: #181059;
            font-size: 1.2em !important;
            max-width: 160px;
          }
          div {
            max-width: 90px;
            color: #181059;
            br {
              display: block;
            }
            span {
              display: none;
            }
          }
        }
      }
      .reviews {
        display: flex;
        align-items: center;
        overflow-x: auto;
        // width: 100vw;
        &::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background: transparent;
        }
        .showMore {
          font-weight: 700;
          font-size: 18px;
          color: #d39331;
          cursor: pointer;
        }
      }
    }
  }
`;
export const TopHeader = styled("div")`
  margin-bottom: 1em;
  padding: 3em 3em 0;
  background: #181059;
  color: #ffffff;
  @media (max-width: 992px) {
    padding: 0em;
    position: relative;
  }
`;

export const CardContainer = styled("div")`
  height: 375px;
  display: flex;
  padding: 1.5em;
  position: relative;
  margin: auto;
  margin-bottom: 1.5em;
  background: #181059;
  // box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  .professor {
    color: #ffffff;
    margin-top: 0.2em;
    display: block;
  }
  .videoPopup {
    position: absolute;
    right: 1.5em;
    top: 1.5em;
    .topicVideo {
      position: relative;
      .overlay {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #ffffff 0%,
          rgba(255, 255, 255, 0.6) 100%
        );
      }

      .overlayImage {
        height: 270px;
        width: 100%;
        max-width: 270px;
        object-fit: contain;
        object-position: center;
      }

      div {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        cursor: pointer;
        img {
          width: 30px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    & {
      height: auto;
      display: block;
      padding: 1em;
      // overflow-y: hidden;
      margin-bottom: 0.5em;
      .professor {
        line-height: 1;
        margin-top: 0em;
        font-size: 0.7em;
      }
      .videoPopup {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);
        background: #ffffff;
        padding: 1em;
        top: 0;
        z-index: 1111111;
        transition: 300ms;
        .topicVideo {
          width: 195px;
          height: 195px;
          img {
            width: 100%;
          }
        }
      }
      .enrollBtn {
        position: absolute;
        display: flex;
        align-items: center;
        top: 20px;
        left: -65px;
        color: #d39331;
        background-color: #ffff;
        padding: 0.2em 0.4em;
        font-size: 0.9em;
        .openMenu,
        .closeMenu {
          transition: 200ms;
          display: inline-flex;
          align-items: center;
          svg {
            font-size: 1.3em;
          }
        }
        .openMenu {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const CardAvatar = styled("div")`
  width: 268px;
  height: 266px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 1.5em;
  img {
    width: 100%;
  }
  @media (max-width: 992px) {
    & {
      width: 200px;
      height: 130px;
      margin-right: 1em;
    }
  }
  @media (max-width: 768px) {
    & {
      width: 141px;
      height: auto;
      margin-right: 0.5em;
      margin-bottom: 1em;
    }
  }
`;
export const SellerBtn = styled("div")`
  margin-bottom: 1em;
  a {
    width: 112px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d39331;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000000;
  }
  @media (max-width: 992px) {
    & {
      margin-bottom: 0.3em;
      a {
        width: 82px;
        height: 22px;
        font-size: 12px;
      }
    }
  }
`;
export const TitleName = styled("h3")`
  margin-bottom: 0.5em;
  color: #ffffff;
  @media (max-width: 992px) {
    & {
      margin-bottom: 0.3em;
      font-size: 0.8em;
      text-align: left;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }
  }
`;
export const RateArea = styled("div")`
  color: #ffffff;
  strong {
    color: #ffffff;
    font-weight: 900;
    margin-right: 0.7em;
  }
  .views {
    font-weight: 400;
    font-size: 1em;
    color: #ffffff;
    opacity: 1;
  }
  @media (max-width: 992px) {
    & {
      font-size: 0.7em;
      margin-top: 0.3em;
      .ant-rate {
        line-height: 0;
      }
      div {
        line-height: 0;
      }
      strong {
        font-size: 0.7em;
      }
      .views {
        font-size: 0.7em;
      }
      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
`;
export const History = styled("div")`
  margin-top: 0.7em;
  a {
    margin-right: 3em;
    color: #181059;
    font-weight: 600;
    font-size: 16px;
    img {
      margin-right: 0.7em;
    }
  }
  @media (max-width: 992px) {
    & {
      display: block;
      margin-top: 0em;
      div {
        line-height: 1;
      }
      a {
        margin-right: 1em;
        font-size: 0.6em;
        img {
          width: 9px;
          margin-right: 0.7em;
        }
      }
    }
  }
`;
export const Profile = styled("div")`
  display: flex;
  color: #ffffff;
  margin-bottom: 1em;
  .firstItem {
    margin-right: 3.7em;
  }
  .avatar {
    margin-right: 0.7em;
  }
  h6,
  p {
    color: #ffffff;
  }
  @media (max-width: 992px) {
    .firstItem {
      margin-right: 1.7em;
      margin-left: 1.7em;
    }
    .avatar {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.7em;
    }
    h6 {
      font-size: 0.9em;
    }

    .firstItem {
      margin-right: 1em;
      margin-left: 1em;
    }
  }
`;

export const UserProfile = styled("div")`
  display: flex;
  color: #ffffff;
  height: 188px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  margin-bottom: 1em;
  margin-right: 1em;
  padding: 1em;
  .avatar {
    margin-right: 0.7em;
    .reviewedUserImage {
      height: 42px;
      width: 42px;
      object-position: center;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .username {
    width: 180px !important;
  }
  .review-text {
    max-height: 100px; /* Adjust this value as needed to control the maximum height of the box */
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .review-text::-webkit-scrollbar {
    display: none;
  }
  h6 {
    color: #313131;
  }
  p {
    color: #31313160;
    font-size: 0.9em;
  }
  .ant-rate {
    li {
      height: 15px;
    }
    svg {
      font-size: 0.6em;
    }
  }
  @media (max-width: 992px) {
    & {
      padding: 0.5em;
      .username {
        width: 200px !important;
        font-size: 0.9em;
      }
    }
  }
`;

export const Categories = styled("div")`
  width: 270px;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  padding: 2em;
  margin-top: 2em;
  .certi {
    color: gray !important;
    cursor: not-allowed !important;
  }
  .statItem {
    display: flex;
    align-items: flex-start;
    color: #181059;
    font-weight: 600;
    font-size: 1em;
    margin-bottom: 1em;
    img {
      margin-top: 0.4em;
      margin-right: 0.7em;
    }
  }
  .userCourseProgress {
    margin: 1rem 0rem;

    .text-green {
      color: #25ad84 !important;
    }
    .text-orange {
      color: #d39331 !important;
    }
    .chapters {
      font-weight: 800;
      margin-bottom: -0.5rem;
    }

    .ant-progress .ant-progress-text {
      position: absolute;
      bottom: 1.125rem;
      right: -0.5rem;
      font-weight: 800;
      color: inherit;
      font-size: 1rem;
    }
    .ant-progress .ant-progress-outer {
      margin: 0;
      padding: 0;
    }
  }
  .userCourseRating {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;

    .courseRating {
      font-size: 1.75rem;
    }

    @media (max-width: 992px) {
      .courseRating {
        font-size: 1.5rem;
      }
    }
    h4 {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
  }
  @media (max-width: 992px) {
    width: 195px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0);
    padding: 1em;
    a {
      font-size: 0.8em;
      margin-bottom: 1em;
      img {
        width: 15px;
        margin-top: 0.4em;
        margin-right: 0.5em;
      }
    }
  }
`;
