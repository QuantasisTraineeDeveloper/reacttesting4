import { Table } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em;
  .mainHeading {
    display: flex;
    justify-content: space-between;
    h3 {
      text-transform: uppercase;
      color: #313131;
      font-weight: 600;
      font-size: 22px;
    }
    .total {
      font-weight: 400;
      color: #31313160;
      font-size: 16px;
    }
    .ant-form-item {
      width: 350px;
    }
  }
`;
export const TableContainer = styled(Table)`
  border: 2px solid #31313110;
  .ant-table-thead {
    .ant-table-cell {
      background: #ffffff;
      font-weight: 700;
      padding-left: 1.7em;
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
      padding-left: 2em;
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
  .deleteBtn {
    a {
      margin-right: 1.5em;
    }
  }
  @media (max-width: 992px) {
    width: 700px;
    overflow-x: auto;
  }
`;
export const AddBtn = styled("div")`
  width: 100px;
  margin: 1em 0 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3f6fd8;
  font-weight: 600;
  cursor: pointer;
  svg {
    font-size: 1.2em;
    margin-right: 0.2em;
  }
`;
