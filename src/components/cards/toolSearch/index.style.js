import styled from "styled-components";

export const CardContainer = styled("div")`
  height: 260px;
  display: flex;
  padding: 1.5em;
  position: relative;
  margin: auto;
  margin-bottom: 1.5em;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  .lableMark {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 59px;
    position: absolute;
    top: 0;
    right: 2%;
    overflow: hidden;
    background: #415e72;
    img {
      width: 20px;
      margin-bottom: 0.7em;
      // filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(102deg)
      //   brightness(102%) contrast(101%);
    }
    &::after {
      content: "";
      width: 50px;
      height: 50px;
      position: absolute;
      top: 41px;
      right: 0;
      left: 0;
      display: block;
      background: #ffffff;
      transform: rotate3d(8, 3, -7, 65deg);
    }
  }
  .userName {
    display: block;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    & {
      height: 148px;
      padding: 0.5em;
      .lableMark {
        width: 20px;
        height: 25px;
        img {
          width: 12px;
          margin-bottom: 0.4em;
        }
        &::after {
          width: 20px;
          height: 20px;
          top: 15px;
        }
      }
      .userName {
        display: block;
        margin-bottom: 1em;
        font-size: 0.8em;
      }
      .chapter {
        font-size: 0.8em;
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
  margin-bottom: 1.2em;
  max-width: 600px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .runBtn {
    width: 157px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d39331;
    font-weight: 400;
    font-size: 1em;
    text-align: center;
    color: #ffffff;
  }
  .views {
    font-weight: 400;
    font-size: 1em;
    color: #181059;
    opacity: 0.7;
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
      .runBtn {
        width: 80px;
        height: 25px;
        font-size: 0.8em;
      }
    }
  }
`;
