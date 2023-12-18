import { Table } from "antd";
import styled from "styled-components";

export const CustomTable = styled(Table)`
  .ant-table-thead {
    .ant-table-cell {
      background: #ffffff;
      font-weight: 700;
      text-align: center;
      font-size: 1.3em;
      color: #313131;
      border-bottom: 2px solid #31313130;
      &:last-child {
        color: #3f6fd8;
      }
      &::before {
        display: none;
      }
    }
  }
  .ant-table-tbody {
    .ant-table-cell {
      text-align: center;
      background: #ffffff;
      border-bottom: 2px solid #31313110;

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
    }
  }
  .ant-table-pagination {
    display: none;
  }
`;
