import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  position: relative;
  letter-spacing: 0em;
  font-family: "Source Sans Pro";
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-top: 3rem;
  margin-bottom: 6rem;

  .heading {
    text-align: center;
    font-size: 46px;
    font-weight: 300;
    margin-bottom: 1em;
    line-height: 58px;
    // text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #313131;
  }

  @media (max-width: 768px) {
    padding: 10px;

    .heading {
      font-size: 36px;
      line-height: 48px;
    }
  }
`;

export const Section = styled("div")`
  margin-top: 20px 0;
  margin: 0 auto;
  justify-content: center;
  color: #313131;
  width: 80%;

  .title {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    margin: 20px 0;
  }

  .sub_title {
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0;
  }

  ul {
    margin-left: 10px;
    margin: 10px 0;

    li {
      font-size: 16px;
      line-height: 1.89;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.89;
    display: inline;
    margin: 10px 0;
  }

  span {
    font-weight: 600;
    display: inline;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 90%;

    .title {
      font-size: 18px;
      line-height: 24px;
    }

    .sub_title {
      font-size: 16px;
    }

    ul {
      margin-left: 0;
      padding-left: 20px;

      li {
        font-size: 16px;
      }
    }

    p {
      font-size: 16px;
      line-height: 1.89;
      display: inline;
    }

    span {
      font-weight: 600;
      display: inline;
    }
  }
`;
