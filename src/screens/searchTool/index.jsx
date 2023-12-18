import { Checkbox, Col, Form, Input, Radio, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GrSearch } from "react-icons/gr";
import CustomBtn from "../../common/button";
import { antValidator } from "../../utils/helper";
import { searchToolSchema } from "../../utils/validationSchema";
import { SelectArea } from "../courses/coursesTopic/index.style";
import { FormArea } from "../home/index.style";
import { Content, Wrapper } from "./index.style";
import { searchTool } from "../../redux/toolSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/courseSlice";
import { useNavigate } from "react-router-dom";

const SearchTool = () => {
  const [searchForm] = Form.useForm();
  const [rules, setRules] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCourses());
    setRules(antValidator(searchToolSchema));
  }, [dispatch]);

  const { allCourses } = useSelector((state) => state?.course);
  const { loading } = useSelector((state) => state?.tool);
  const courses = allCourses?.results;
  const courseOptions = [];
  courses?.map((course) => {
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
        <Content>
          <Form form={searchForm} onFinish={onSubmitSearch}>
            <div className='searchIcon'>
              <img src='/icons/search-desktop.png' alt='' />
            </div>
            <FormArea>
              <Form.Item name='search' rules={[rules]}>
                <Input
                  className='desktopSearch'
                  prefix={<GrSearch />}
                  placeholder='Search here'
                />
              </Form.Item>
              <div className='mobSearch'>
                <Row gutter={12} align='middle'>
                  <Col xs={{ span: 16, offset: 0 }} lg={{ span: 14 }}>
                    <Form.Item name='search' rules={[rules]}>
                      <Input
                        type='text'
                        prefix={<GrSearch />}
                        placeholder='Search here'
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 8 }} lg={{ span: 6 }}>
                    <CustomBtn type='submit' title='search' loading={loading} />
                  </Col>
                </Row>
              </div>
            </FormArea>
            <SelectArea>
              <Form.Item>
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
            </SelectArea>

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
              <Radio.Group className='checkingArea' options={checkBoxOption} />
            </Form.Item>

            <div className='desktopSearch'>
              <CustomBtn type='submit' title='Search' loading={loading} />
            </div>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default SearchTool;
