import styled from "styled-components";

export const CodeContainer = styled("div")`
  .codeSection {
    max-width: 1170px;
    height: 410px;
    margin: 1em auto;
    padding: 1em 1em 0;
    background: #f0f0f0;
    .codeContainer {
      padding: 1em 2rem;
      display: block;
      max-width: 1100px;
      margin: 1em auto 0;
      height: 227px;
      background: #ffffff;
      div {
        text-align: left;
        border-left: 2px solid #3f6fd8;
        padding-bottom: 1em;
        height: 190px;
        overflow-y: auto;
        p {
          max-width: 100%;
          padding-left: 1.5em;
          text-align: left;
        }
      }
    }
    .showBtn {
      display: flex;
      justify-content: center;
      margin-top: 2em;
    }
  }
`;
