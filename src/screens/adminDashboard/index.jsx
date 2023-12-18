import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Heading,
  PaymentProcessing,
  ShowCoursesCard,
  Wrapper,
} from "./index.style";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { getAdminDashboard } from "../../redux/adminSlice";
import { Link, useNavigate } from "react-router-dom";
import { getAdminCourses } from "../../redux/courseSlice";

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const { userProfile } = store?.auth;

  useEffect(() => {
    dispatch(getAdminDashboard());
    dispatch(getAdminCourses());
  }, []);

  const { adminDashboard } = store?.admin;
  const { adminCourses } = store?.course;
  return (
    <Wrapper>
      <Container fluid>
        <Heading>
          <p>Welcome!</p>
          <h3>{userProfile?.name}.</h3>
        </Heading>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 16 }}>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <ShowCoursesCard className="firstCard">
                  <div className="cardHeader">
                    <img src="/icons/book-icon.png" alt="" />
                    <span style={{ color: "#d39331" }}>
                      <AiOutlinePlus
                        onClick={() => navigate("/admin/courses/add-course")}
                      />
                    </span>
                  </div>
                  <div className="topics">
                    <CountUp start={0} end={adminCourses?.length} delay={0}>
                      {({ countUpRef }) => <h1 ref={countUpRef} />}
                    </CountUp>
                    <p>Courses</p>
                  </div>
                  <Link to="/admin/courses">See all Courses</Link>
                </ShowCoursesCard>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <ShowCoursesCard style={{ backgroundColor: "#9A3BAA" }}>
                  <div className="cardHeader">
                    <img src="/icons/book.png" alt="" />
                    <span>
                      <AiOutlinePlus
                        onClick={() => navigate("/admin/chapters")}
                      />
                    </span>
                  </div>
                  <div className="topics">
                    <p>Chapters</p>
                  </div>
                  <Link to="/admin/chapters">Go to Chapters</Link>
                </ShowCoursesCard>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <ShowCoursesCard style={{ backgroundColor: "#25A4AD" }}>
                  <div className="cardHeader">
                    <img src="/icons/topic.png" alt="" />
                    <span>
                      <AiOutlinePlus onClick={() => navigate("/admin/topic")} />
                    </span>
                  </div>
                  <div className="topics">
                    <p>Topics</p>
                  </div>
                  <Link to="/admin/topic">Manage topics</Link>
                </ShowCoursesCard>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <ShowCoursesCard style={{ backgroundColor: "#3F6FD8" }}>
                  <div className="cardHeader">
                    <img
                      width="28"
                      height="28"
                      src="/icons/liveclassIcon.svg"
                      alt="class"
                    />
                    <span>
                      <AiOutlinePlus
                        onClick={() => navigate("/admin/liveclass")}
                      />
                    </span>
                  </div>
                  <div className="topics">
                    <p>Live Class</p>
                  </div>
                  <Link to="/admin/liveclass">Live Class</Link>
                </ShowCoursesCard>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <PaymentProcessing>
                  <img src="/icons/bank.png" alt="" />
                  <p>Payment Processing</p>
                </PaymentProcessing>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Link to="/payment-history">
                  <PaymentProcessing style={{ backgroundColor: "#e04f5f" }}>
                    <img src="/icons/atm.png" alt="" />
                    <p>Payment History</p>
                  </PaymentProcessing>
                </Link>
              </Col>
              <Col span={24}>
                <PaymentProcessing style={{ backgroundColor: "#edbb01" }}>
                  <img src="/icons/msg.png" alt="" />
                  <div className="commentsLinks">
                    <Link to="/admin/review">
                      Review Comments <span>16</span>
                    </Link>
                    <Link to="/admin/review">Review Threads</Link>
                    <Link to="/admin/review">Review Testimonials</Link>
                  </div>
                </PaymentProcessing>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default AdminDashBoard;
