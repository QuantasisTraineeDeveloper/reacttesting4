import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import CustomPagination from "../../common/pagination";
import { SectionHeading } from "../home/index.style";
import { TestimonalUserCard, Wrapper } from "./index.style";
import { getAllTestimonials } from "../../redux/testimonialSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { FaUser } from "react-icons/fa";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import { useState } from "react";
import { paginate } from "../../utils/helper";

const Testimonials = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch]);
  const store = useSelector((state) => state);
  const { loading, allTestimonials } = store?.testimonial;

  return (
    <Wrapper>
      <Container fluid>
        <div className='testimonySection'>
          <SectionHeading>Testimonials</SectionHeading>
          <p>See what our students say about us</p>

          {loading ? (
            <LoadingSpinner />
          ) : allTestimonials?.length > 0 ? (
            paginate(allTestimonials, currentPage, pageSize)?.map(
              (testimonial, i) => (
                <TestimonalUserCard key={i}>
                  <h3>{moment(testimonial?.createdAt).format("LL")}</h3>
                  <h1>“ {testimonial?.review} ”</h1>
                  <p>{testimonial?.user?.admin ? "Instructor" : "Student"}</p>
                  <h6>{testimonial?.user?.name}</h6>

                  {testimonial?.user?.image ? (
                    <div className='userImage'>
                      <img src={testimonial.avatar} alt='' />
                    </div>
                  ) : (
                    <div className='noImage'>
                      <FaUser />
                    </div>
                  )}
                </TestimonalUserCard>
              )
            )
          ) : (
            <h3 className='noTestimonial'>No Course Found</h3>
          )}
        </div>
        <div>
          {allTestimonials?.length > 5 ? (
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
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
