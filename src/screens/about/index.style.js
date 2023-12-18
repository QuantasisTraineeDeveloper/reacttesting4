import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 0em 3em 2em;
  h1 {
    margin: 0 auto 1em;
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
  @media (max-width: 992px) {
    & {
      padding: 0px 0px;
    }
  }
`;
export const CardHeader = styled("div")`
  margin-bottom: 1em;
  img {
    margin: 0 0 1em;
    box-shadow: 20px 20px 0 1px #f5f8fd;
  }
`;
