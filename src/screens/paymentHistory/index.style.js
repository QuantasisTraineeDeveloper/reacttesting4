import { Table } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  h1 {
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    color: #313131;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: #31313160;
    margin-bottom: 2em;
  }
`;
export const TableContainer = styled(Table)`
  border: 2px solid #31313110;
  margin-bottom: 2em;
  .ant-table-thead {
    .ant-table-cell {
      background: #ffffff;
      font-weight: 700;
      font-size: 1.2em;
      background-color: #181059;
      color: #ffffff;
      //   &:last-child {
      //     color: #3f6fd8;
      //   }
      &::before {
        display: none;
      }
    }
  }
  .ant-table-tbody {
    .ant-table-cell {
      background: #ffffff;
      border-bottom: 1px solid #31313110;

      p {
        font-weight: 700;
        font-size: 1em;
        color: #181059;
        img {
          margin-left: 0.3em;
        }
      }
      &:first-child {
        text-align: left;
      }
      .ant-table-cell-row-hover {
        background: #ffffff !important;
      }
      &:nth-child(1) {
        font-weight: 700;
      }
      /* &:nth-child(3) {
        font-weight: 700;
      } */
    }
    tr {
      &:hover {
        background: #ffffff !important;
      }
      &:nth-child(even) {
        .ant-table-cell {
          background: #31313110 !important;
        }
      }
    }
  }
  .ant-table-pagination {
    display: none;
  }
  @media (max-width: 992px) {
    width: 700px;
    overflow-x: auto;
  }
`;
