import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: #fff;
  a {
    padding: 1em 1.5em;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #8b8b8b;
    display: flex;
    align-items: center;
    span:first-child {
      width: 24px;
      height: 24px;
      margin-right: 1em;
    }
    span {
      display: block;
    }
  }
  .active {
    color: #00854a;
  }
`;
export const Logo = styled.div`
  width: 116px;
  margin: 2em auto;

  img {
    max-width: 100%;
  }
`;
export const QrCode = styled.div`
  text-align: center;
  margin-top: 2em;
`;
