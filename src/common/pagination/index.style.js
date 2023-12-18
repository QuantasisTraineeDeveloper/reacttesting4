import styled from "styled-components";

export const Wrapper = styled("div")`
  text-align: center;
  margin: 2em 0 6em;
  .ant-pagination-item-link {
    border: none;
    color: #d39331;
    font-weight: 900;
  }
  .ant-pagination-item,
  .ant-pagination-item-active {
    font-weight: 500;
    font-size: 1.5em;
    margin-top: 0.4em;
    background: #fff;
    border-color: #ffff;
    color: #d3933140;
    font-weight: 900;
  }
  .ant-pagination-item-active {
    color: #d39331;
  }
  .anticon-right {
    height: 20px;
    background: url(/icons/right-arrow.svg);
    background-position: center;
    background-size: 100%;
    svg {
      opacity: 0;
    }
  }
  .anticon-left {
    height: 20px;
    background: url(/icons/left-arrow.svg);
    background-position: center;
    svg {
      opacity: 0;
    }
    background-size: 100%;
  }
  @media (max-width: 992px) {
    & {
      margin: 1em 0 2em;
      .ant-pagination-item,
      .ant-pagination-item-active {
        font-size: 1.2em;
      }
      .anticon-right,
      .anticon-left {
        height: 15px;
      }
    }
  }
`;
