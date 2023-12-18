import { Space, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { TableContainer } from "../../../../common/customTable/index.style";
import CustomPagination from "../../../../common/pagination";
import { Heading, TitleHeading } from "../../index.style";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { paginate } from "../../../../utils/helper";
import { CgClose } from "react-icons/cg";
import {
  approveTestimonial,
  deleteTestimonial,
  getAllTestimonials,
} from "../../../../redux/testimonialSlice";
const AdminTestimonials = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modal, contextHolder] = Modal.useModal();
  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch]);

  const store = useSelector((state) => state);
  const { adminCourses } = store.course;
  const { allTestimonials, loading } = store.testimonial;

  const courseOptions = [];
  adminCourses?.map((course) => {
    courseOptions.push({
      value: course?._id,
      label: course?.longName,
    });
  });

  const dataSource = [];
  paginate(allTestimonials, currentPage, pageSize)
    ?.filter((t) => !t?.approved)
    ?.map((testimonial, i) => {
      dataSource.push({
        key: i,
        date: moment(testimonial?.createdAt).format("LL"),
        user: testimonial?.user?.name,
        testimonial: <strong className='topics'>{testimonial?.review}</strong>,
        actionButton: (
          <Space size='middle' className='deleteBtn'>
            <span
              onClick={() =>
                dispatch(
                  approveTestimonial({
                    testimonialID: testimonial?._id,
                  })
                )
              }>
              {testimonial?.approved ? (
                <img src='/icons/check-icon-1.svg' alt='' />
              ) : (
                <CgClose className='closeIcon' />
              )}
            </span>
            <span
              onClick={() => {
                confirmDeleteTestimonial({
                  testimonialID: testimonial?._id,
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
      width: "12%",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      width: "12%",
    },
    {
      title: "Testimonial",
      dataIndex: "testimonial",
      key: "testimonial",
    },

    {
      title: "Approve/Delete",
      dataIndex: "actionButton",
      key: "actionButton",
    },
  ];

  // confirm delete comment
  const confirmDeleteTestimonial = ({ testimonialID }) => {
    modal.confirm({
      title: "Delete Comment!",
      content: "Do you want to delete this testimonial?",
      async onOk() {
        await dispatch(
          deleteTestimonial({
            testimonialID,
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
            <p>{allTestimonials?.length} Testimonials</p>
          </Heading>
        </div>
      </TitleHeading>
      <TableContainer
        style={{ marginTop: "1.75rem" }}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
      />
      {allTestimonials?.length > 10 ? (
        <CustomPagination
          current={currentPage}
          defaultPageSize={pageSize}
          total={allTestimonials?.length}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </div>
  );
};

export default AdminTestimonials;
