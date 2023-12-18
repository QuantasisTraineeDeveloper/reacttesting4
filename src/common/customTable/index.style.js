import { Table } from "antd";
import styled from "styled-components";

export const TableContainer = styled(Table)`
  border: 2px solid #31313110;
  .ant-table-thead {
    .ant-table-cell {
      background: #ffffff;
      font-weight: 700;
      font-size: 1.2em;
      background-color: #313131;
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
