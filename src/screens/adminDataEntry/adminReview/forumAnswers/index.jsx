import { Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { TableContainer } from "../../../../common/customTable/index.style";
import CustomPagination from "../../../../common/pagination";
import { CustomSelect } from "../../../../common/select/index.style";
import { Heading, TitleHeading } from "../../index.style";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCourses } from "../../../../redux/courseSlice";
import {
  approveForumAnswer,
  deleteForumAnswer,
  getForumAnswers,
} from "../../../../redux/forumSlice";
import moment from "moment";
import { CgClose } from "react-icons/cg";
import { paginate } from "../../../../utils/helper";

const ForumAnswers = () => {
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
  const { allCourseThreadsReplies, loading } = store.forum;

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
      dispatch(getForumAnswers({ courseID: adminCourses?.[0]?._id }));
    }
  }, [adminCourses, dispatch]);

  const dataSource = [];

  paginate(allCourseThreadsReplies, currentPage, pageSize)
    ?.filter((r) => !r?.reply?.approved)
    ?.map((thread, i) => {
      dataSource.push({
        key: thread?.reply?._id,
        date: moment(thread?.reply?.date).format("LL"),
        name: thread?.reply?.username,
        topic: <strong className='topics'>{thread?.title}</strong>,
        answer: <strong>{thread?.reply?.desc}</strong>,
        actionButton: (
          <Space size='middle' className='deleteBtn'>
            <span
              onClick={() =>
                dispatch(
                  approveForumAnswer({
                    threadID: thread?._id,
                    answerID: thread?.reply?._id,
                    courseID: selectedCourse,
                  })
                )
              }>
              {thread?.reply?.approved ? (
                <img src='/icons/check-icon-1.svg' alt='' />
              ) : (
                <CgClose className='closeIcon' />
              )}
            </span>
            <span
              onClick={() => {
                confirmDeleteAnswer({
                  threadID: thread?._id,
                  answerID: thread?.reply?._id,
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
      title: "User",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Forum Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
    {
      title: "Approve/Delete",
      dataIndex: "actionButton",
      key: "actionButton",
    },
  ];

  // confirm delete comment
  const confirmDeleteAnswer = ({ threadID, answerID }) => {
    modal.confirm({
      title: "Delete Thread Answer!",
      content: "Do you want to delete this answer?",
      async onOk() {
        await dispatch(
          deleteForumAnswer({
            threadID,
            answerID,
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
            <p>{allCourseThreadsReplies?.length} Forum Thread Answers</p>
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
                dispatch(getForumAnswers({ courseID: id }));
                setSelectedCourse(id);
              }}
              options={courseOptions}
            />
          </CustomSelect>{" "}
        </div>
      </TitleHeading>
      <TableContainer
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      />
      {allCourseThreadsReplies?.length > 10 ? (
        <CustomPagination
          current={currentPage}
          defaultPageSize={pageSize}
          total={allCourseThreadsReplies?.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </div>
  );
};

export default ForumAnswers;
