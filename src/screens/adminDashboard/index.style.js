import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em;
  .firstCard {
    border: 1px solid #00000010;
    .cardHeader {
      span {
        color: #d39331;
      }
    }
    p {
      color: #313131;
    }
    a {
      border: 1px solid #00000010;
      color: #d39331;
    }
  }
  @media (max-width: 768px) {
    padding: 1em 0em;
  }
`;
export const Heading = styled("div")`
  margin-bottom: 2em;
  p {
    font-weight: 600;
  }
  h3 {
  }
`;
export const ShowCoursesCard = styled("div")`
  border: 1px solid #00000010;
  max-width: 220px;
  height: 250px;
  padding: 1em 2em;
  margin-bottom: 1em;
  .cardHeader {
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    span {
      color: #ffffff;
      svg {
        font-size: 2em;
        cursor: pointer;
      }
    }
  }
  p {
    color: #ffff;
  }
  .topics {
    height: 100px;
  }
  h1 {
    color: #1e3465;
    font-weight: 400;
    margin-bottom: 0.5em;
  }
  a {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin: 1em 0 0.5em;
    border: 1px solid #ffffff90;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 1em auto;
  }
`;

export const PaymentProcessing = styled("div")`
  padding: 1em 2em;
  margin-bottom: 1em;
  background-color: #25ad84;
  p {
    margin-top: 0.5em;
    color: #ffffff;
  }
  .commentsLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      border: 1px solid #ffff;
      width: 250px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      margin: 1em 0 0.5em;
      &:first-child {
        background: #ffffff;
        color: #d39331;
        position: relative;
        span {
          background: #e04f5f;
          width: 25px;
          height: 25px;
          font-size: 0.8em;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0px;
          top: -8px;
          border-radius: 50%;
          color: #ffffff;
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    .commentsLinks {
      display: block;
      a {
        border: 1px solid #ffff;
        width: 100%;
        height: 48px;
        font-size: 0.9em;
      }
    }
  }
`;
