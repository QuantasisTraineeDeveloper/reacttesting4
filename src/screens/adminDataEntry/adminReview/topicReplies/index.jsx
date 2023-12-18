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
  approveReply,
  deleteCommentReply,
  getCommentReplies,
} from "../../../../redux/commentSlice";
import { CgClose } from "react-icons/cg";
const TopicReplies = () => {
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
  const { commentReplies, loading } = store.comment;

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
      dispatch(getCommentReplies(adminCourses?.[0]?._id));
    }
  }, [adminCourses, dispatch]);

  const dataSource = [];
  paginate(commentReplies, currentPage, pageSize)
    ?.filter((r) => !r?.reply?.approved)
    ?.map((reply, i) => {
      dataSource.push({
        key: i,
        date: moment(reply?.reply?.date).format("LL"),
        name: reply?.lessonName,
        comment: reply?.comment,
        reply: (
          <strong className='topics'>
            {reply?.reply?.comment?.length > 50
              ? reply?.reply?.comment?.slice(0, 50) + "..."
              : reply?.reply?.comment}
          </strong>
        ),
        actionButton: (
          <Space size='middle' className='deleteBtn'>
            <span
              onClick={() =>
                dispatch(
                  approveReply({
                    lessonID: reply?.lessonId,
                    commentID: reply?._id,
                    replyID: reply?.reply?._id,
                    courseID: selectedCourse,
                  })
                )
              }>
              {reply?.reply?.approved ? (
                <img src='/icons/check-icon-1.svg' alt='' />
              ) : (
                <CgClose className='closeIcon' />
              )}
            </span>
            <span
              onClick={() => {
                confirmDeleteReply({
                  lessonID: reply?.lessonId,
                  commentID: reply?._id,
                  replyID: reply?.reply?._id,
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
      title: "Reply",
      dataIndex: "reply",
      key: "reply",
    },
    {
      title: "Approve/Delete",
      dataIndex: "actionButton",
      key: "actionButton",
    },
  ];

  // confirm delete comment
  const confirmDeleteReply = ({ lessonID, commentID, replyID }) => {
    modal.confirm({
      title: "Delete Comment!",
      content: "Do you want to delete this reply?",
      async onOk() {
        await dispatch(
          deleteCommentReply({
            lessonID,
            commentID,
            replyID,
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
            <p>{commentReplies?.length} Replies</p>
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
                dispatch(getCommentReplies(id));
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
      {commentReplies?.length > 10 ? (
        <CustomPagination
          current={currentPage}
          defaultPageSize={pageSize}
          total={commentReplies?.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </div>
  );
};

export default TopicReplies;
