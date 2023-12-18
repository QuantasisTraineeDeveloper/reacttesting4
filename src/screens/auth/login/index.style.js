import styled from "styled-components";

export const LoginContainer = styled("div")`
  background: url("/images/heroBgImage.jpg") rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 243px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-blend-mode: multiply;
  .registratioModal {
    width: 100%;
    max-width: 424px;
    height: auto;
    padding: 2rem;
    margin: auto;
    text-align: center;
    background: var(--white);
    margin: 2rem auto;
    h1 {
      margin-bottom: 0.7em;
    }
  }
  .registerLinks {
    margin: 2.5rem 0;
  }
  .linkItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 315px;
    height: 57px;
    margin: 0.6rem auto;
    border: 1px solid lightgrey;
    cursor: pointer;

    .inner {
      width: 210px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;
      margin: 0 0 0 1rem;
    }
  }
  .login {
    p {
      color: var(--secondaryBlack);
      opacity: 1;
    }
    a {
      font-weight: 700;
      font-size: 16px;
      color: var(--primary);
      text-decoration: none;
    }
  }
  // @media (max-width: 992px) {
  //   padding: 1rem 0;
  // }
`;
