import styled from "styled-components";

export const Wrapper = styled("div")`
  padding: 2em 4em;
  .ant-table-thead {
    display: none;
  }
  .ant-table-tbody {
    .ant-table-cell {
      .ant-progress-text {
        font-weight: 700;
        color: #000000;
      }
      .analyticsData {
        display: flex;
        align-items: center;
        a {
          color: rgba(0, 0, 0, 0.85);
        }
        .pending {
          background-color: #d39331;
        }
        .completed {
          background-color: #25ad84;
        }
        span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 1em;
        }
      }
      &:first-child {
        text-align: center;
      }
    }
  }
  .searchItem {
    .carditem {
      border-radius: 15px !important;
      box-shadow: 0px 0px 16px 0px #00000010;
    }
  }
  .videoCard {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }
  @media (max-width: 768px) {
    padding: 1em 0em;
    table {
      width: 600px;
    }
    .ant-table-tbody {
      .ant-table-cell {
        padding: 0.5em;
        font-size: 0.8em;
        .analyticsData {
          h6 {
            font-size: 0.9em;
          }
          span {
            width: 6px;
            height: 6px;
            margin-right: 0.5em;
          }
        }
      }
    }
  }
`;
export const Heading = styled("div")`
  margin-bottom: 2em;
  p {
    font-weight: 600;
  }
  h3 {
  }
`;
export const ShowCourses = styled("div")`
  border: 1px solid #00000010;
  padding: 1em;
  margin-bottom: 1em;
  p {
    font-weight: 600;
  }
  .counter {
    color: #1e3465;
    font-weight: 400;
    margin-bottom: 0em;
    font-size: calc(1.375rem + 1.5vw);
    @media (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
  h1 {
    color: #1e3465;
    font-weight: 400;
    margin-bottom: 0em;
  }
  @media (max-width: 768px) {
    border: 1px solid #00000010;
    padding: 0.5em;
    margin-bottom: 0.5em;
  }
`;
export const TitleHeading = styled("h4")`
  color: #1e3465;
  font-size: 1.2em;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
  }
`;
export const VideoCard = styled("div")`
  width: 200px;
  height: 200px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 1em;
  text-align: center;
  color: #ffffff;
  p,
  h6 {
    color: #ffffff;
    position: relative;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    background: #00000050;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
