import styled from "styled-components";

export const Wrapper = styled("div")`
  .active {
    border: 1px solid #3f6fd8 !important;
    background: #3f6fd8;
    color: #ffffff;
    height: 457px;
    p {
      div,
      span {
        color: #ffff;
      }
    }
    h1 {
      color: #ffffff;
    }
    strong {
      color: #ffffff;
      span {
        color: #ffffff;
      }
    }
    a {
      color: #3f6fd8;
    }
  }
`;
export const CardContainer = styled("div")`
  max-width: 260px;
  height: 417px;
  text-align: left;
  margin: 2rem auto;
  border: 1px solid #d8d8d8;
  padding: 2em 1.5em;
  transition: 200ms;

  .featureTitle {
    font-size: 1rem;
  }
  h1 {
    margin-bottom: 0.5em;
    font-size: 24px;
    color: #313131;
  }
  strong {
    font-weight: 900;
    font-size: 26px;
    color: #181059;
    span {
      font-size: 16px;
      font-weight: 700;
      color: #181059;
      opacity: 0.7;
      margin-left: 0.3em;
    }
  }
  p {
    font-weight: 400;
    font-size: 1em;
    display: flex;
    margin-bottom: 0.5em;
    span {
      font-size: 1.2em;
      color: #181059;
      margin-top: -0.2em;
      margin-right: 0.3em;
    }
  }
  a {
    background: #ffffff;
    border: 1px solid #d8d8d8;
    font-weight: 900;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.5em;
    height: 48px;
    border-radius: 0;
    color: #d39331;
    &:focus,
    &:hover {
      background: #ffffff;
      border-radius: 0;
      border: 1px solid #d39331;
      opacity: 0.9;
    }
  }
  &:hover {
    border: 1px solid #3f6fd8;
    background: #3f6fd8;
    color: #ffffff;
    p {
      div,
      span {
        color: #ffff;
      }
    }
    h1 {
      color: #ffffff;
    }
    strong {
      color: #ffffff;
      span {
        color: #ffffff;
      }
    }
    a {
      color: #3f6fd8;
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
