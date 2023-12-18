import styled from "styled-components";

export const HeaderContent = styled("div")`
  background-color: transparent;
  padding: 0em 4em;
  .mobSearch {
    display: none;
  }
  @media (max-width: 992px) {
    & {
      padding: 0em 0.2em !important;
      .mobSearch {
        display: inline-block;
        width: 80px;
        .searchBtn {
          margin-left: auto !important;
        }
      }
      .navbar-brand {
        img {
          width: 50px;
        }
      }
    }
  }
  .navbar {
    background-color: transparent !important;
    .navbar-nav {
      a {
        margin: 0.4em 1.5em;
        color: #313131;
        font-weight: 400;
        &:hover {
          color: #d39331 !important;
          // font-weight: 400 !important;
        }
      }
      .searchBtn {
        margin-left: 7em !important;
      }
    }
    button {
      border: none;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .active {
    color: #d39331 !important;
    font-weight: 600 !important;
  }
  .profile {
    display: flex;
    align-items: center;
    strong {
      color: #d39331 !important;
      margin: 0 0.3em;
    }
  }
  .signupBtn {
    width: 123px;
    height: 48px;
    color: #d39331 !important;
    font-weight: 600;
    margin: 0 0em 1em 1em !important;
    border: 1px solid #d39331;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(211,147,49,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  .navbar-toggler {
    border-color: rgba(211, 147, 49, 1);
    border: none !important;
    outline: none !important;
  }
`;
