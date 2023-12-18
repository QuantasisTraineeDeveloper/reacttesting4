import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 0em 3em 2em;
  .switch {
    margin: 1em;
    .ant-switch {
      background: #3468d6;
      min-width: 60px;
    }
    .activePlan {
      color: #000000 !important;
      opacity: 1;
      transition: all;
      transition-duration: 0.5s;
    }
    strong {
      margin: 1em;
      color: #313131;
      opacity: 0.4;
      transition-duration: 0.5s;
    }
  }
  .dataArea {
    h2 {
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      text-transform: uppercase;
      color: #313131;
      margin: 1em 0;
    }
    @media (max-width: 992px) {
      display: none;
      h2 {
        text-align: center;
      }
    }
  }

  @media (max-width: 992px) {
    & {
      padding: 0px 0px;
    }
  }
`;
