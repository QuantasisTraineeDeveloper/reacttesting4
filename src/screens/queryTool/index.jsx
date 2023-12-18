import { Button, Col, Input, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";
// import { RiSearchLine } from "react-icons/ri";
import CustomBtn from "../../common/button";
import CustomTable from "../../common/customTable";
import CustomPagination from "../../common/pagination";
import { CodeContainer } from "../../components/CodeSection/index.style";
import { SectionHeading } from "../home/index.style";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Content, MobMenu, ResultArea, Sidebar, Wrapper } from "./index.style";
import { getQueryInfo, runQuery } from "../../redux/queryToolSlice";
import { LoadingOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { TopicLoadingSpinner } from "../courses/coursesTopic";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import moment from "moment";

const { Option } = Select;

const QueryTool = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [errorMessage, setErrorMessage] = useState("");
  const [db, setDb] = useState("mysql");
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(getQueryInfo("mysql"));
  }, [dispatch]);

  const { allTables, loading, runQueryLoading, queryResult, query } =
    store?.queryTool;
  const { userProfile } = store?.auth;

  const rawCode = queryParams.get("rawCode");

  const [showItems, setSHowItems] = useState(false);
  const onChange = (value) => {
    dispatch(getQueryInfo(value));
    setDb(value);
  };

  const onSearch = (value) => {
    // console.log('search:', value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      query: rawCode,
    },
  });

  const dbEnvOptions = [
    { label: "MySql", value: "mysql" },
    { label: "MS SQL Server", value: "mssql" },
    { label: "Oracle", value: "oracledb" },
    { label: "PostgreSQL", value: "postgres" },
  ];

  const tableName =
    query?.split(" ")[
      query
        ?.split(" ")
        .findIndex((item) => item === "from" || item === "FROM") + 1
    ];

  const onSubmitQuery = ({ query }) => {
    dispatch(runQuery({ data: { query, db }, setErrorMessage }));
  };

  const subscribed = moment(userProfile?.paidSubscription?.endDate).isAfter(
    moment().startOf("day").format()
  );

  return (
    <Wrapper>
      <Sidebar>
        <h2>
          {db === "mysql"
            ? "MySQL"
            : db === "mssql"
            ? "MsSQL"
            : db === "oracledb"
            ? "Oracle"
            : db === "postgres" && "Postgres"}{" "}
          Database
        </h2>
        {/* <div>
          <Input prefix={<GrSearch />} placeholder='Search query' />
        </div>
        <div>
          <CustomBtn title='Search' />
        </div> */}
        <div className='records'>
          <div className='table'>
            <strong>Tablename</strong> <strong>Records</strong>
          </div>
          {loading ? (
            <TopicLoadingSpinner>
              <LoadingOutlined className='loadingSpinner' />
            </TopicLoadingSpinner>
          ) : allTables?.length > 0 ? (
            allTables?.map((table, i) => (
              <div className='table' key={i}>
                <span
                  className='table-name'
                  onClick={() => {
                    dispatch(
                      runQuery({
                        data: {
                          query: `select * from ${table?.table_name}`,
                          db,
                        },
                        setErrorMessage,
                      })
                    );
                    reset({ query: `select * from ${table?.table_name}` });
                  }}>
                  {table?.table_name}
                </span>{" "}
                <span>{table?.row_count}</span>
              </div>
            ))
          ) : (
            <p>No Tables Found</p>
          )}
        </div>
      </Sidebar>
      <MobMenu>
        <div
          className='collapseHeader'
          onClick={() => setSHowItems(!showItems)}>
          <div className='searchIcon'>
            {showItems ? "" : <img src='/icons/search-mob-icon.svg' alt='' />}
            <div>
              <h2>
                {" "}
                {db === "mysql"
                  ? "MySQL"
                  : db === "mssql"
                  ? "MsSQL"
                  : db === "oracledb"
                  ? "Oracle"
                  : db === "postgres" && "Postgres"}{" "}
                Database
              </h2>
              <p>{allTables?.length ?? 0} tables</p>
            </div>
          </div>
          <span
            style={
              showItems
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }>
            <BsChevronDown />
          </span>
        </div>
        {showItems ? (
          <div>
            {/* <Row gutter={16}>
              <Col span={16}>
                <Input prefix={<GrSearch />} placeholder='Search query' />
              </Col>
              <Col span={8}>
                <CustomBtn title='Search' />
              </Col>
            </Row> */}
            <div className='records'>
              <div className='table'>
                <strong>Tablename</strong> <strong>Records</strong>
              </div>
              {loading ? (
                <TopicLoadingSpinner>
                  <LoadingOutlined className='loadingSpinner' />
                </TopicLoadingSpinner>
              ) : allTables?.length > 0 ? (
                allTables?.map((table, i) => (
                  <div className='table' key={i}>
                    <span>{String(table?.table_name)?.toUpperCase()}</span>{" "}
                    <span>{table?.row_count}</span>
                  </div>
                ))
              ) : (
                <p>No Tables Found</p>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </MobMenu>
      <Content>
        <SectionHeading>Query Tool</SectionHeading>
        <p className='subText'>
          With our online MySQL editor, you can edit the SQL statements, and
          click on a button to view the result
        </p>
        <div className='selectSql'>
          <Select
            showSearch
            placeholder='Select Course'
            optionFilterProp='children'
            onChange={onChange}
            onSearch={onSearch}
            defaultValue='mysql'
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }>
            {dbEnvOptions.map(({ label, value }) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
        </div>
        <RunQueryCodeContainer>
          <form className='codeSection' onSubmit={handleSubmit(onSubmitQuery)}>
            <div className='codeEditor'>
              <textarea {...register("query", { required: true })} />
            </div>

            <div className='showBtn'>
              <RunQueryButton
                disabled={runQueryLoading || !subscribed}
                htmlType='submit'>
                {runQueryLoading ? (
                  <LoadingOutlined className='loader' />
                ) : (
                  "Run SQL"
                )}
              </RunQueryButton>
            </div>
            {!subscribed && (
              <p className='errorMessage'>
                Subscription required to use online sql query tool
              </p>
            )}
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
          </form>
        </RunQueryCodeContainer>
        <ResultArea>
          {queryResult?.code === 200 && (
            <>
              <h3>Result</h3>
              <p>
                Showing results for <strong>{tableName}</strong>{" "}
              </p>
              <span className='records'>
                {queryResult?.data?.length} records
              </span>
              <CustomTable
                currentPage={currentPage}
                pageSize={pageSize}
                data={queryResult?.data}
              />
              {queryResult?.data?.length > 10 ? (
                <CustomPagination
                  current={currentPage}
                  defaultPageSize={pageSize}
                  total={queryResult?.data?.length}
                  onChange={(page) => {
                    setCurrentPage(page);
                  }}
                />
              ) : null}
            </>
          )}
        </ResultArea>
      </Content>
    </Wrapper>
  );
};

export default QueryTool;

const RunQueryCodeContainer = styled(CodeContainer)`
  .codeEditor {
    padding: 2rem;
    display: block;
    max-width: 1100px;
    margin: 1em auto 0;
    height: 227px;
    width: 100%;
    background: #ffffff;
  }
  .errorMessage {
    text-align: center;
    color: red;
    position: relative;
    top: 1rem;
  }
  textarea {
    display: block;
    padding: 1rem;
    max-width: 1100px;
    height: 100%;
    width: 100%;
    background: #ffffff;
    resize: none;
    border: none;
    border-left: 3px solid #3f6fd8;
    outline: none;
  }
`;

export const RunQueryButton = styled(Button)`
  background: #d39331 !important;
  border: 1px solid #d39331 !important;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 0;
  .loader {
    font-size: 2rem !important;
  }

  &:disabled {
    background: #fafafa !important;
    border: 1px solid #fafafa !important;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 0;
    /* opacity: 0.5; */
    span {
      color: #31313190;
    }

    &:hover {
      /* background: #fafafa !important;
      border: 1px solid #fafafa !important;
      width: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border-radius: 0; */
      /* opacity: 0.5; */
      span {
        color: #31313190;
      }
    }
  }

  span {
    font-size: 1.3em;
    color: #ffffff;
  }
  &:focus,
  &:hover {
    background: #d39331;
    border-radius: 0;
    border: 1px solid #d39331;
    opacity: 0.9;
    span {
      color: #ffffff;
    }
  }
  @media (max-width: 992px) {
    & {
      width: 150px;
      height: 50px;
      padding: 0px 0px;
      span {
        // font-size: 1em !important;
      }
    }
  }
  @media (max-width: 768px) {
    & {
      width: 110px;
      height: 40px;
      span {
        font-size: 1em !important;
      }
    }
  }
`;
