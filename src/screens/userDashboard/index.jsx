import React, { useEffect } from "react";
import {
  Heading,
  ShowCourses,
  TitleHeading,
  VideoCard,
  Wrapper,
} from "./index.style";
import { Col, Progress, Row } from "antd";
import { Container } from "react-bootstrap";
import { TableContainer } from "../paymentHistory/index.style";
import SearchedSql from "../../components/searchedSql";
import { Content } from "../../components/searchedSql/index.style";
import { searchsqlcardsdata } from "../../assets/data/allData";
import CourseSearchSql from "../../components/cards/courseSearchSql";
import { useSelector, useDispatch } from "react-redux";
import { getUserDashboard } from "../../redux/userSlice";
import CountUp from "react-countup";
import { getRandomCourse } from "../../redux/courseSlice";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { userProfile } = store?.auth;

  useEffect(() => {
    dispatch(getRandomCourse());
  }, []);

  const { randomCourse, randomCourseLoading } = useSelector(
    (store) => store.course
  );
  const columns = [
    {
      title: "",
      width: 150,
      dataIndex: "id",
      key: "id",
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
      width: 500,
    },
    // {
    //   title: "",
    //   width: 200,
    //   dataIndex: "enrolledDate",
    //   key: "enrolledDate",
    // },
    {
      title: "",
      width: 200,
      dataIndex: "chapters",
      key: "chapters",
    },
    {
      title: "",
      width: 500,
      dataIndex: "completion",
      key: "completion",
    },
  ];

  useEffect(() => {
    dispatch(getUserDashboard());
  }, []);

  const { userDashboard } = store?.user;

  const dataSource = [];

  userDashboard?.data?.map((course, i) => {
    dataSource.push({
      key: i,
      id: i + 1,
      name: (
        <div className='analyticsData'>
          <span
            className={`${
              course?.completion === 100 ? "completed" : "pending"
            }`}></span>
          <h6>
            {" "}
            <Link to={`/course_detail?name=${course?.shortName}`} key={i}>
              {course?.longName}
            </Link>
          </h6>
        </div>
      ),
      // enrolledDate: `${moment(course?.enrolledDate).format("ll")}`,
      chapters: `${course?.completedChapters}/${course?.chapterCount} Chapters`,
      completion: (
        <div>
          <Progress
            strokeColor={`${
              course?.completion === 100 ? "#25ad84" : "#d39331"
            }`}
            trailColor='#8c8c8c50'
            size='small'
            percent={course?.completion}
            format={(percent) => percent + "%"}
          />
        </div>
      ),
    });
  });
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
              <Col xs={{ span: 24 }} md={{ span: 10 }}>
                <ShowCourses>
                  <CountUp start={0} end={userDashboard?.length} delay={0}>
                    {({ countUpRef }) => <h1 ref={countUpRef} />}
                  </CountUp>
                  <p>Enrolled Courses</p>
                </ShowCourses>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 7 }}>
                <ShowCourses>
                  <CountUp start={0} end={userDashboard?.pending} delay={0}>
                    {({ countUpRef }) => <h1 ref={countUpRef} />}
                  </CountUp>
                  <p>Pending</p>
                </ShowCourses>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 7 }}>
                <ShowCourses>
                  <CountUp start={0} end={userDashboard?.completed} delay={0}>
                    {({ countUpRef }) => <h1 ref={countUpRef} />}
                  </CountUp>
                  <p>Completed</p>
                </ShowCourses>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <TitleHeading>Subscribed Courses</TitleHeading>
            <div>
              <TableContainer dataSource={dataSource} columns={columns} />
            </div>
          </Col>
          <Col xs={{ span: 24 }}>
            <TitleHeading>Continue</TitleHeading>
            <div className='videoCard'>
              <VideoCard style={{ backgroundImage: "url(/images/img-2.png)" }}>
                <div>
                  <div className='overlay'></div>
                  <img src='/icons/play-icon.svg' alt='' />
                  <h6>SQL - MySQL for Data</h6>
                  <p>Analytics and Business Intelligence</p>
                </div>
              </VideoCard>
              <VideoCard style={{ backgroundImage: "url(/images/img-1.png)" }}>
                <div className='overlay'></div>
                <div>
                  <h6>SQL - MySQL for Data</h6>
                  <p>Analytics and Business Intelligence</p>
                </div>
              </VideoCard>
            </div>
          </Col>
        </Row>

        <TitleHeading>Suggested Courses</TitleHeading>

        <Content>
          <div className='searchItem'>
            {randomCourse?.map((item, i) => (
              <Link
                className='carditem'
                to={`/course_detail?name=${item?.shortName}`}
                key={i}>
                <CourseSearchSql data={item} />
              </Link>
            ))}
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default UserDashBoard;
