import styled from "styled-components";

export const CardContainer = styled("div")`
  width: 312px;
  height: 100%;
  padding: 1em 1em 0;
  margin-bottom: 1.5em;
  background: #ffffff;
  // box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  .professor {
    color: #3f6fd8;
    font-size: 14px;
    margin-top: 0.2em;
    display: block;
  }
  @media (max-width: 768px) {
    width: 182px;
    .professor {
      font-size: 8px;
    }
  }
`;

export const CardAvatar = styled("div")`
  width: 100%;
  height: 210px;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    // width: 112px;
    height: 112px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const TitleName = styled("h3")`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
`;
export const Descr = styled("p")`
  font-size: 12px;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
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
    .ant-rate {
      font-size: 0.8em;
    }
    strong {
      font-size: 0.8em;
    }
    .views {
      font-size: 0.8em;
    }
    .countNum {
      font-size: 0.8em;
    }
  }
`;
export const History = styled("div")`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.7em;
  }
  a {
    color: #181059;
    font-weight: 600;
    font-size: 16px;
    img {
      margin-right: 0.7em;
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 10px;
      img {
        width: 10px;
      }
    }
  }
`;
