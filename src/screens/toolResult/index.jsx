import { Checkbox, Col, Form, Input, Radio, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GrSearch } from "react-icons/gr";
import { searchdata } from "../../assets/data/allData";
import CustomBtn from "../../common/button";
import CustomPagination from "../../common/pagination";
import ToolSearchCard from "../../components/cards/toolSearch";
import { SelectArea } from "../courses/coursesTopic/index.style";
import { FormArea } from "../home/index.style";
import { Content, ResultArea, Wrapper } from "./index.style";
import { searchTool } from "../../redux/toolSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/courseSlice";
import { useNavigate } from "react-router-dom";
import { antValidator, paginate } from "../../utils/helper";
import { searchToolSchema } from "../../utils/validationSchema";
import styled from "styled-components";

const SearchToolResult = () => {
  const [searchForm] = Form.useForm();
  const [rules, setRules] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, searchResults } = useSelector((state) => state?.tool);

  useEffect(() => {
    dispatch(getAllCourses());
    setRules(antValidator(searchToolSchema));
  }, [dispatch]);

  const { allCourses } = useSelector((state) => state?.course);

  const allCoursess = allCourses?.results;
  const courseOptions = [];
  allCoursess?.map((course) => {
    courseOptions?.push({
      value: course?._id,
      label: course?.shortName,
    });
  });
  const checkBoxOption = [
    {
      label: "Chapter Names",
      value: "chapter",
    },
    {
      label: "Lesson Names",
      value: "lesson",
    },
    // {
    //   label: "Topic Content",
    //   value: "topic",
    // },
    {
      label: "Code",
      value: "code",
    },
  ];

  const onSubmitSearch = ({ search, course, type }) => {
    const data = {
      search,
      course,
      searchIn: [type],
    };

    dispatch(searchTool({ data, navigate }));
  };

  return (
    <Wrapper>
      <Container>
        <SearchContent>
          <Form
            className='searchForm'
            form={searchForm}
            onFinish={onSubmitSearch}>
            <FormArea>
              <div className=''>
                <Row gutter={12} align='top'>
                  <Col xs={{ span: 16, offset: 0 }} lg={{ span: 14 }}>
                    <Form.Item name='search' rules={[rules]}>
                      <Input prefix={<GrSearch />} placeholder='mySQL' />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 8 }} lg={{ span: 6 }}>
                    <CustomBtn type='submit' title='search' loading={loading} />
                  </Col>
                </Row>
              </div>
            </FormArea>
            <SelectArea>
              <Form.Item name='course'>
                <Select
                  showSearch
                  placeholder='--Course selection (optional)--'
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={courseOptions}
                />
              </Form.Item>
              <Form.Item
                name='type'
                initialValue={"chapter"}
                rules={[
                  {
                    required: true,
                    validator: (_, value) =>
                      value.length > 0
                        ? Promise.resolve()
                        : Promise.reject("At least one checkbox is required"),
                  },
                ]}
                validateTrigger='onChange'>
                <Radio.Group
                  className='checkingArea'
                  options={checkBoxOption}
                />
              </Form.Item>
            </SelectArea>
          </Form>
        </SearchContent>
        <ResultArea>
          {searchResults?.length > 0 ? (
            <p className='resulCount'>
              {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, searchResults?.length)} of {""}
              {searchResults?.length} results
            </p>
          ) : null}

          {searchResults?.length > 0 ? (
            paginate(searchResults, currentPage, pageSize)?.map((course, i) => (
              <ToolSearchCard key={i} data={course} />
            ))
          ) : (
            <h3 className='noCourse'>No Course Found</h3>
          )}
          {searchResults?.length > 10 ? (
            <CustomPagination
              current={currentPage}
              defaultPageSize={pageSize}
              total={searchResults?.length}
              onChange={(page) => {
                setCurrentPage(page);
              }}
            />
          ) : null}
        </ResultArea>
      </Container>
    </Wrapper>
  );
};

export default SearchToolResult;

export const SearchContent = styled(Content)`
  padding: 3em 3em 1em 3em;
`;
