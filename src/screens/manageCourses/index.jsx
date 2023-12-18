import React from "react";
import { Container } from "react-bootstrap";
import CustomPagination from "../../common/pagination";
import { TableContainer, Wrapper } from "./index.style";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Space, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteCourse, getAdminCourses } from "../../redux/courseSlice";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;
const ManageCourses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminCourses());
  }, []);

  const { adminCourses, courseLoading } = useSelector((state) => state?.course);

  // delete course confirmation
  const confirmDeleteCourse = (course) => {
    confirm({
      title: "Do you Want to delete this course?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        await dispatch(deleteCourse(course?._id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const dataSource = [];
  adminCourses?.map((course, i) => {
    dataSource.push({
      key: course?._id,
      id: i + 1,
      shortname: course?.shortName,
      lessons: course?.lessonCount,
      chapters: course?.chapterCount,
      video: course?.videoCount,
      category: course?.category,
      actions: (
        <Space size='middle' className='deleteBtn'>
          <Link to={`/admin/courses/edit/${course?._id}`}>
            <img src='/icons/pen-icon.svg' alt='' />
          </Link>
          <Link
            onClick={() => {
              confirmDeleteCourse(course);
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
      title: "Short Name",
      dataIndex: "shortname",
      key: "shortname",
    },
    {
      title: "Lessons",
      dataIndex: "lessons",
      key: "lessons",
    },
    {
      title: "Chapters",
      dataIndex: "chapters",
      key: "chapters",
    },
    {
      title: "Videos",
      dataIndex: "video",
      key: "video",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <div>
          <h1>manage Courses</h1>
          <p>Last 12 month history</p>
        </div>
        <div className='addCourseBtn'>
          <Link to='/admin/courses/add-course'>
            <span>
              <HiPlus />
            </span>
            <span>Add Course</span>
          </Link>
        </div>
        <TableContainer
          loading={courseLoading}
          dataSource={dataSource}
          columns={columns}
        />
        {/* <CustomPagination count={20} /> */}
      </Container>
    </Wrapper>
  );
};

export default ManageCourses;
