import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 0em !important;
  overflow-x: hidden;
  h1 {
    margin: 0 auto 1em;
  }
  .noCourse {
    padding: 4rem 2rem 4rem 2rem;
    color: #d39331;
    text-align: center;
  }
  .userCard {
    max-width: 260px;
    a {
      display: inline-block;
      margin-top: 1rem;
    }
    p {
      font-style: italic;
      font-weight: 300;
      font-size: 22px;
      margin: 1rem 0;
      strong {
        font-weight: 900;
      }
    }
  }
  .about {
    p {
      font-size: 16px;
      line-height: 20px;
      color: #313131;
      opacity: 0.6;
    }
  }
  .topHeader {
    width: 84%;
    margin: 0em auto;
    margin-bottom: 1em;
    .linkPagination {
      margin-bottom: 1em;
      a {
        color: #d39331;
      }
      color: #d39331;
    }
    p {
      color: #313131;
      opacity: 0.6;
      strong {
      }
    }
    .tabLinks {
      margin: 1em 0 2em;
      button {
        display: inline-flex;
        justify-content: center;
        border: none;
        align-items: center;
        color: #3f6fd8;
        background: #3f6fd810;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem 1.5rem;
      }
    }
  }

  @media (max-width: 992px) {
    & {
      // padding: 0px 0px;
    }
  }
`;
