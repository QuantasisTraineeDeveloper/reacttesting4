import { Select, Space, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { TableContainer } from "../../../../common/customTable/index.style";
import CustomPagination from "../../../../common/pagination";
import { CustomSelect } from "../../../../common/select/index.style";
import { Heading, TitleHeading } from "../../index.style";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCourses } from "../../../../redux/courseSlice";
import moment from "moment";
import { paginate } from "../../../../utils/helper";
import {
  approveComment,
  deleteComment,
  getCourseComments,
} from "../../../../redux/commentSlice";
import { CgClose } from "react-icons/cg";
const TopicComments = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modal, contextHolder] = Modal.useModal();
  useEffect(() => {
    dispatch(getAdminCourses());
  }, [dispatch]);

  const store = useSelector((state) => state);
  const { adminCourses } = store.course;
  const { singleCourseComments, loading } = store.comment;

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
      dispatch(getCourseComments(adminCourses?.[0]?._id));
    }
  }, [adminCourses, dispatch]);

  const dataSource = [];
  paginate(singleCourseComments, currentPage, pageSize)
    ?.filter((c) => !c?.approved)
    ?.map((comment, i) => {
      dataSource.push({
        key: i,
        date: moment(comment?.createdAt).format("LL"),
        name: comment?.lessonName,
        comment: (
          <strong className='topics'>
            {comment?.comment?.length > 50
              ? comment?.comment?.slice(0, 50) + "..."
              : comment?.comment}
          </strong>
        ),
        actionButton: (
          <Space size='middle' className='deleteBtn'>
            <span
              onClick={() =>
                dispatch(
                  approveComment({
                    lessonID: comment?.lessonId,
                    commentID: comment?._id,
                    courseID: selectedCourse,
                  })
                )
              }>
              {comment?.approved ? (
                <img src='/icons/check-icon-1.svg' alt='' />
              ) : (
                <CgClose className='closeIcon' />
              )}
            </span>
            <span
              onClick={() => {
                confirmDeleteComment({
                  lessonID: comment?.lessonId,
                  commentID: comment?._id,
                });
              }}>
              <img src='/icons/bin-icon.svg' alt='' />
            </span>
          </Space>
        ),
      });
    });

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Topic",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },

    {
      title: "Approve/Delete",
      dataIndex: "actionButton",
      key: "actionButton",
    },
  ];

  // confirm delete comment
  const confirmDeleteComment = ({ lessonID, commentID }) => {
    modal.confirm({
      title: "Delete Comment!",
      content: "Do you want to delete this comment?",
      async onOk() {
        await dispatch(
          deleteComment({
            lessonID,
            commentID,
            courseID: selectedCourse,
          })
        );
      },
    });
  };
  return (
    <div>
      {contextHolder}
      <TitleHeading>
        <div className='heading'>
          <Heading>
            <h3>Admin review panel</h3>
            <p>{singleCourseComments?.length} Comments</p>
          </Heading>
        </div>
        <div className='selectData'>
          <CustomSelect>
            <Select
              showSearch
              key={selectedCourse}
              placeholder='-- Select Course --'
              defaultValue={selectedCourse}
              optionFilterProp='children'
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              onChange={(id) => {
                dispatch(getCourseComments(id));
                setSelectedCourse(id);
              }}
              options={courseOptions}
            />
          </CustomSelect>
        </div>
      </TitleHeading>
      <TableContainer
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      />
      {singleCourseComments?.length > 10 ? (
        <CustomPagination
          current={currentPage}
          defaultPageSize={pageSize}
          total={singleCourseComments?.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </div>
  );
};

export default TopicComments;
