import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 1em 0 3em;
  background: #f5f8fd;
  h2 {
    font-weight: 700;
    font-size: 28px;
    color: #313131;
    margin: 1em 0;
  }
  @media (max-width: 768px) {
    padding: 1em 0.7em 3em;
    h2 {
      font-size: 1em;
    }
  }
`;
export const Content = styled("div")`
  .searchItem {
    display: flex;
    overflow-x: auto;
    padding: 1em 0;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent; 
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .carditem {
      margin: 0 1em;:
    }
  }
@media (max-width: 768px) {
  .searchItem {
    .carditem {
      margin: 0 0.3em;:
    }
  }
}
`;
