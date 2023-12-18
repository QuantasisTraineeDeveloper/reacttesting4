import { Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { TableContainer } from "../../../../common/customTable/index.style";
import CustomPagination from "../../../../common/pagination";
import { CustomSelect } from "../../../../common/select/index.style";
import { Heading, TitleHeading } from "../../index.style";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCourses } from "../../../../redux/courseSlice";
import {
  approveThread,
  deleteThread,
  getAllCourseThreads,
} from "../../../../redux/forumSlice";
import { paginate } from "../../../../utils/helper";
import moment from "moment";
import { CgClose } from "react-icons/cg";

const ThreadsData = () => {
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
  const { allCourseThreads, loading } = store.forum;

  useEffect(() => {
    setSelectedCourse(adminCourses?.[0]?._id);
  }, [adminCourses]);

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
      dispatch(getAllCourseThreads({ courseID: adminCourses?.[0]?._id }));
    }
  }, [adminCourses, dispatch]);

  const dataSource = [];
  paginate(allCourseThreads, currentPage, pageSize)
    ?.filter((t) => !t?.approved)
    ?.map((thread, i) => {
      dataSource.push({
        key: thread?._id,
        date: moment(thread?.createdAt).format("LL"),
        name: thread?.username,
        topic: <strong className='topics'>{thread?.title}</strong>,
        actions: (
          <Space size='middle' className='deleteBtn'>
            <span
              onClick={() =>
                dispatch(
                  approveThread({
                    threadID: thread?._id,
                    courseID: thread?.courseId?._id,
                  })
                )
              }>
              {thread?.approved ? (
                <img src='/icons/check-icon-1.svg' alt='' />
              ) : (
                <CgClose className='closeIcon' />
              )}
            </span>
            <span
              onClick={() =>
                confirmDeleteThread({
                  threadID: thread?._id,
                  courseID: thread?.courseId?._id,
                })
              }>
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
      title: "Approve/Delete",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  // confirm delete thread
  const confirmDeleteThread = ({ threadID, courseID }) => {
    modal.confirm({
      title: "Delete Thread!",
      content: "Do you want to delete this thread?",
      async onOk() {
        await dispatch(
          deleteThread({
            threadID,
            courseID,
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
            <p>{allCourseThreads?.length} Forum Threads</p>
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
                dispatch(getAllCourseThreads({ courseID: id }));
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
      {allCourseThreads?.length > 10 ? (
        <CustomPagination
          current={currentPage}
          defaultPageSize={pageSize}
          total={allCourseThreads?.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </div>
  );
};

export default ThreadsData;
