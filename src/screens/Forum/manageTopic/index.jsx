import { Select, Space, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Container } from "react-bootstrap";
import CommonSelect from "../../../common/select";
import { Wrapper, TableContainer, AddBtn } from "./index.style";
import { Link } from "react-router-dom";
import CustomPagination from "../../../common/pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAdminCourses, getSingleCourse, currentSelectedCourse } from "../../../redux/courseSlice";
import { CustomSelect } from "../../../common/select/index.style";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  getCourseLessons,
  deleteCourseLesson,
} from "../../../redux/lessonSlice";
const { confirm } = Modal;

const ManageTopic = () => {
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState("");
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAdminCourses());
  }, []);

  const { adminCourses } = store?.course;
  const { lessonLoading, courseLessons } = store?.lesson;

  const courseOptions = [];
  adminCourses?.map((course) => {
    courseOptions.push({
      value: course?._id,
      label: course?.longName,
    });
  });

  useEffect(() => {
    setSelectedCourse(adminCourses?.[0]?._id);
    if (adminCourses?.[0]?._id) {
      dispatch(getCourseLessons(adminCourses?.[0]?._id));
      dispatch(currentSelectedCourse(adminCourses?.[0].azureFolder))
    }
  }, [adminCourses]);

  // delete course lesson confirmation
  const confirmDeleteLesson = (lesson) => {
    confirm({
      title: "Do you Want to delete this topic?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        const data = {
          courseID: selectedCourse,
          lessonID: lesson?._id,
        };
        await dispatch(deleteCourseLesson(data));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const dataSource = [];
  courseLessons?.map((lesson, index) => {
    dataSource.push({
      key: lesson?._id,
      id: index + 1,
      topic: lesson?.name,
      chapter: lesson?.chapterName,
      attachments: lesson?.files,
      videos: lesson?.videos,
      queries: lesson?.codes,
      actions: (
        <Space size='middle' className='deleteBtn'>
          <Link to={`/admin/topic/edit/${selectedCourse}/${lesson?._id}`}>
            <img src='/icons/pen-icon.svg' alt='' />
          </Link>
          <Link
            onClick={() => {
              confirmDeleteLesson(lesson);
            }}>
            <img src='/icons/bin-icon.svg' alt='' />
          </Link>
        </Space>
      ),
    });
  });
  const columns = [
    {
      title: "Sequence No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Chapter",
      dataIndex: "chapter",
      key: "chapter",
    },
    {
      title: "Attachments",
      dataIndex: "attachments",
      key: "attachments",
    },
    {
      title: "Videos",
      dataIndex: "videos",
      key: "videos",
    },
    {
      title: "Queries",
      dataIndex: "queries",
      key: "queries",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];
  return (
    <Wrapper>
      <Container fluid>
        <div className='mainHeading'>
          <div>
            <h3>manage Topic</h3>
            <span className='total'>{courseLessons?.length} total Topics</span>
          </div>
          <div>
            <CustomSelect>
              <Select
                key={selectedCourse}
                showSearch
                placeholder='-- Select Course --'
                defaultValue={selectedCourse}
                optionFilterProp='children'
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                onChange={(id, a) => {
                  dispatch(getCourseLessons(id));
                  setSelectedCourse(id);
                  dispatch(currentSelectedCourse(a.label))
                }}
                options={courseOptions}
              />
            </CustomSelect>

            <Link to={`/admin/topic/add-topic/${selectedCourse}`}>
              <AddBtn>
                <GoPlus />
                <span>Add Topic</span>
              </AddBtn>
            </Link>
          </div>
        </div>
        <TableContainer
          // onRow={(record, rowIndex) => {
          //   return {
          //     onClick: (e) => {
          //       navigate("/manage/details");
          //     },
          //   };
          // }}
          loading={lessonLoading}
          dataSource={dataSource}
          columns={columns}
        />
        {/* <CustomPagination count={20} /> */}
      </Container>
    </Wrapper>
  );
};

export default ManageTopic;
