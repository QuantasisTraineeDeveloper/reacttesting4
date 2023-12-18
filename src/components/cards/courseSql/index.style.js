import styled from "styled-components";

export const CardContainer = styled("div")`
  max-width: 1100px;
  height: 260px;
  display: flex;
  padding: 1.5em;
  margin: auto;
  margin-bottom: 1.5em;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  .professor {
    color: #3f6fd8;
    margin-top: 0.2em;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 768px) {
    & {
      height: 148px;
      padding: 0.5em;
      .professor {
        line-height: 1;
        margin-top: 0em;
        font-size: 0.7em;
      }
    }
  }
`;

export const CardAvatar = styled("div")`
  width: 278px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 1.5em;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    & {
      width: 278px;
      height: 130px;
      margin-right: 1em;
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
    background: #d3933110;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #d39331;
  }
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
export const Descr = styled("p")`
  margin-bottom: 1.7em;
  @media (max-width: 768px) {
    & {
      font-size: 0.7em;
      text-align: left;
      margin-bottom: 0.3em;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }
  }
`;
export const RateArea = styled("div")`
  color: #313131;
  strong {
    color: #181059 !important;
    font-weight: 900;
    margin-right: 0.7em;
  }
  .views {
    font-weight: 400;
    font-size: 1em;
    color: #181059;
    opacity: 0.6;
  }
  @media (max-width: 768px) {
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
  display: flex;
  // justify-content: space-between;
  align-items: center;
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
  @media (max-width: 768px) {
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
