import styled from "styled-components";

export const CustomContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 3em 0;
  margin-top: auto;
  height: 243px;
  background: #1e3465;
  color: #ffffff;
  .footerLinks {
    a {
      color: #ffffff;
      display: block;
      font-weight: 400;
      margin-bottom: 2em;
      font-size: 12px;
      &:hover {
        color: #d39331 !important;
        font-weight: 400 !important;
      }
    }
  }
  .footerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .socialLinks {
    h5 {
      margin-bottom: 1em;
      color: #ffffff;
    }
    div {
      display: flex;
      justify-content: start;
      align-items: center;
      a {
        margin-right: 1.5em;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  p {
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    margin: 0em auto;
    color: #ffffff;
  }
  @media (max-width: 992px) {
    & {
      padding: 2em 1em 0;
      height: 100%;
      .footerLogo {
        height: 50px;
        margin-bottom: 1em;
      }
      .footerLinks {
        a {
          font-size: 10px;
        }
      }
      .socialLinks {
        margin-bottom: 1em;
        text-align: center;
        div {
          justify-content: center;
          a {
            margin: 0 0.5em;

            img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
      p {
        text-align: center;
        font-weight: 300;
        font-size: 10px;
        margin: 0em auto 1em;
      }
    }
  }
`;
