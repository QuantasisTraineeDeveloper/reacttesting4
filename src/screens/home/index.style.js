import styled from "styled-components";

export const Wrapper = styled("div")`
  background-color: #ffffff;
  height: 100%;
`;
export const HomeSection = styled("div")`
  padding: 1em 3em;
  background-color: #ffffff;
  position: relative;
  height: 100vh;
  form {
    position: relative;
    z-index: 2;
    top: 3em;
    max-width: 850px;
    p {
      max-width: 450px;
      font-weight: 400;
      font-size: 1.2em;
      margin: 2rem 0;
      color: #313131;
    }
  }
  @media (max-width: 1440px) {
    & {
      height: 100%;
      margin-bottom: 4em;
    }
  }
  @media (max-width: 992px) {
    & {
      text-align: center;
      padding: 1em 0em;
      margin-bottom: 1em;
      height: 100%;
      form {
        z-index: 2;
        top: 0em;
        p {
          font-size: 1em;
          margin: 1rem 0;
        }
      }
    }
  }
`;
export const MainHeading = styled("h1")`
  font-family: "Poppins", sans-serif !important;
  font-weight: 400;
  font-size: 8.5em;
  margin-bottom: 0.4em;
  strong {
    font-family: "Poppins", sans-serif !important;
    font-weight: 900;
    color: #3f6fd8;
  }
  @media (max-width: 1550px) {
    & {
      font-size: 6em;
    }
  }
  @media (max-width: 992px) {
    & {
      text-align: center;
      font-size: 2.5em;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    width: 350px;
    margin: auto;
    & {
      text-align: center;
      font-size: 2.5em;
      br {
        display: none;
      }
    }
  }
`;
export const FormArea = styled("div")`
  margin: 2rem 0;

  .ant-input-prefix {
    font-size: 1.8em;
    color: #313131;
    opacity: 0.5;
  }
  input {
    /* width: 480px; */
    height: 50px;
    font-size: 1.2em;
    border-radius: 0;
  }
  .searchBtn {
  }

  @media (max-width: 992px) {
    & {
      margin: 1rem 0;
      text-align: center;
      // font-size: 2.5em;
      .ant-input-prefix {
        font-size: 1.1em;
      }
      input {
        width: 100%;
        height: 45px;
        font-size: 1em;
        border-radius: 0;
      }
      .searchBtn {
        button {
          width: 130px;
          margin: 1em auto;
        }
      }
    }
  }
  @media (max-width: 768px) {
    & {
      padding: 0 1em;
      input {
        height: 30px;
      }
    }
  }
`;

export const MobileImg = styled("div")`
  display: none;
  margin-bottom: 2rem;
  img {
    max-width: 100%;
  }
  @media (max-width: 992px) {
    & {
      position: relative;
      display: block;
      .visits {
        width: 80px;
        border-bottom: 2px solid #3f6fd850;
        position: absolute;
        bottom: 0%;
        right: 5%;
        text-align: right;
        p {
          color: #3f6fd8 !important;
          font-family: "Poppins", sans-serif !important;
          font-weight: 700 !important;
          font-size: 0.5em;
        }
        h2 {
          font-family: "Poppins", sans-serif !important;
          color: #3f6fd8;
          font-weight: 900;
          font-size: 0.8em;
          margin-bottom: 0em;
        }
      }
    }
  }
`;
export const ImageArea = styled("div")`
  background: #f5f8fd;
  position: absolute;
  top: -10px;
  right: 3%;
  left: 22%;
  padding: 2em 2em 0;
  img {
    width: 100%;
    max-width: 100%;
  }
  .visits {
    width: 230px;
    border-bottom: 2px solid #3f6fd850;
    position: absolute;
    bottom: 5%;
    right: 12%;
    text-align: right;
    p {
      color: #3f6fd8 !important;
      font-family: "Poppins", sans-serif !important;
      font-weight: 700 !important;
    }
    h2 {
      font-family: "Poppins", sans-serif !important;
      color: #3f6fd8;
      font-weight: 900;
      margin-bottom: 0.5em;
    }
  }
  @media (max-width: 992px) {
    & {
      display: none;
    }
  }
`;

export const DiscoverSection = styled("div")`
  //   height: 90vh;
  padding: 1em 3em;
  .tryBtn {
    button {
      margin: auto;
    }
  }
  p {
    max-width: 880px;
    margin: 0rem auto 1rem;
    text-align: center;
  }
  @media (max-width: 992px) {
    & {
      height: 100%;
      padding: 1em;
    }
  }
`;

export const SectionHeading = styled("h1")`
  max-width: 890px;
  font-weight: 300;
  font-size: 2.9em;
  line-height: 58px;
  text-align: center;
  margin: 1em auto 1.5em;
  color: #313131;
  strong {
    font-weight: 700;
  }
  @media (max-width: 992px) {
    & {
      font-size: 1.5em;
      line-height: 38px;
    }
  }
`;
export const SpecialistCards = styled("div")`
  max-width: 800px;
  margin: auto;
  .cardItems {
    display: flex;
    margin: 3em 0 6em;
    justify-content: space-between;
    align-items: center;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    p {
      text-align: left;
      margin: 1em 0;
      font-weight: 300;
      font-size: 28px;
    }
    ul {
      li {
        margin: 0em 0 1em;
      }
    }
    button {
      margin-top: 1rem;
      background: #ffffff !important;
      border-radius: 0;
      border: 1px solid #d39331;
      span {
        color: #d39331;
      }
    }
  }
  @media (max-width: 992px) {
    & {
      .cardItems {
        display: flex;
        margin: 2em 0 2em;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        &:nth-child(odd) {
          flex-direction: column;
        }
        h1 {
          margin-top: 1.5em;
          font-size: 1.2em;
        }
        p {
          text-align: center;
          font-size: 1.2em;
        }
      }
      ul {
        text-align: left;
        li {
          font-size: 0.8em;
          margin: 0em 0 0.5em;
        }
      }
    }
  }
`;
