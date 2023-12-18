import { Col, Collapse, Progress, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsCheck, BsChevronUp } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";
import { EnrolledButton } from "../../../common/button/index.style";
import CourseVideos from "../../../components/cards/courseVideos";
import SearchedSql from "../../../components/searchedSql";
import {
  CardAvatar,
  History,
  RateArea,
  SellerBtn,
  TitleName,
  CardContainer,
  TopHeader,
  Wrapper,
  Profile,
  UserProfile,
  Categories,
} from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import {
  addCourseRating,
  courseReviews,
  enrollCourse,
  getCourseID,
  getSingleCourse,
  markedCompleted,
  resetCourse,
  resetCourseID,
  getCourseDetailFileURL,
} from "../../../redux/courseSlice";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  convertIntoHHMMSS,
  nFormatter,
  intoHours,
  intoHoursMins,
  getReducedData,
} from "../../../utils/helper";
import useWindowDimensions from "../../../common/Dimension";
import { getCourseLessons } from "../../../redux/lessonSlice";
import ReactPlayer from "react-player";
import { VideoModal } from "../../../components/cards/courseVideos/index.style";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import CustomBtn from "../../../common/button";
import { InfoCircleFilled } from "@ant-design/icons";
import { BsPlayCircleFill } from "react-icons/bs";
import moment from "moment";
import { getFileURLFromAzure } from "../../../services/FileRequest";

const CoursesDetails = () => {
  const [enrollMenu, setEnrollMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openIntroVideo, setOpenIntroVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const name = searchParams.get("name");
  const { Panel } = Collapse;

  const store = useSelector((state) => state);
  const {
    singleCourse,
    singleCourseReviews,
    courseLoading,
    cid,
    enrollLoading,
  } = store?.course;

  const [introImageURL, setIntroImageURL] = useState({});
  const [introVideoURL, setIntroVideoURL] = useState({});

  const { userProfile } = store?.auth;
  const { courseLessons } = store?.lesson;
  // const courseVideos = courseLessons?.filter((item) => item?.video?.length > 0);

  useEffect(() => {
    dispatch(getCourseID({ data: { shortName: name } }));
    return () => {
      dispatch(resetCourseID());
    };
  }, [name, dispatch]);

  const id = cid?.courseID;

  useEffect(() => {
    if (id) {
      dispatch(getSingleCourse(id));
      dispatch(getCourseLessons(id));
      dispatch(courseReviews(id));
    }

    return () => {
      dispatch(resetCourse());
    };
  }, [dispatch, id]);


  const { width } = useWindowDimensions();

  const enrolled =
    singleCourse?.enrollment &&
    Object.keys(singleCourse?.enrollment).length > 0;

  const subscribed =
    Object.keys(singleCourse?.enrollment ?? {}).length > 0 &&
    singleCourse?.enrollment?.subscriptionEnd !== null &&
    moment(singleCourse?.enrollment?.subscriptionEnd).isAfter(
      moment().startOf("day").format()
    );

  // auto enrolled course
  useEffect(() => {
    const courseId = localStorage.getItem("courseId");
    const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
    // const token = authUser?.["token"];

    if (singleCourse) {
      if (
        courseId &&
        authUser &&
        Object.keys(authUser)?.length > 0 &&
        !enrolled
        // && userProfile?.subscribed
      ) {
        dispatch(enrollCourse({ courseID: { courseId } }));
      }
    }
  }, [dispatch, enrolled]);

  useEffect(() => {
    if (width <= 992) {
      setEnrollMenu(false);
    } else {
      setEnrollMenu(true);
    }
  }, [width]);


  useEffect(() => {
    if(singleCourse.imageURL)
        dispatch(getCourseDetailFileURL({fileName: singleCourse.imageURL, fileType: "Image"}));
  }, [dispatch, singleCourse.imageURL]);


  useEffect(() =>{
    setIntroImageURL(store.course.courseDetailFileURL);
  }, [dispatch, store.course.courseDetailFileURL]);

  const fetchPreSignedURL = async () => {
    getFileURLFromAzure({fileName: singleCourse.videoURL, fileType: "Video"}, setIntroVideoURL);
  };

  const videosByChapters = getReducedData(courseLessons);

  return (
    <Wrapper>
      <VideoModal
        title=''
        centered
        open={openIntroVideo}
        onCancel={() => {
          if (playVideo) {
            setPlayVideo(!playVideo);
          }
          setOpenIntroVideo(false);
        }}>
        <ReactPlayer
          key={playVideo}
          // playing={playVideo}
          width='100%'
          style={{ maxHeight: "264px" }}
          url={introVideoURL}
          controls={true}
        />
      </VideoModal>

      {courseLoading ? (
        <div className='courseLoading'>
          <LoadingSpinner />
        </div>
      ) : null}
      {enrollMenu ? (
        <>
          {/* Desktop */}
          <TopHeader>
            <CardContainer>
              <div className='videoPopup'>
                <div className='topicVideo'>
                  <div className='overlay'></div>
                  <div
                    onClick={() => {
                      fetchPreSignedURL();
                      setPlayVideo(true);
                      setOpenIntroVideo(true);
                    }}>
                    <img src='/icons/play-icon.svg' alt='' />
                    <h6>Watch Intro</h6>
                  </div>
                  {/* <ReactPlayer
                    className='overlayImage'
                    key={playVideo}
                    // playing={playVideo}
                    width='100%'
                    style={{ maxHeight: "264px" }}
                    url={singleCourse?.introVideo}
                    controls={true}
                  /> */}
                  <img
                    className='overlayImage'
                    src={introImageURL ?? "/images/img-2.png"}
                    alt=''
                  />
                </div>
                <Categories>
                  <div className='statItem'>
                    <img src='/icons/clock-icon.svg' alt='' />
                    <span>
                      {intoHours(singleCourse?.videoLength)} hours of on-demand
                      videos
                    </span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/book-icon.svg' alt='' />
                    <span>{singleCourse?.chapterCount ?? 0} Chapters</span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/topic-icon.svg' alt='' />
                    <span>{singleCourse?.lessonCount} Topics</span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/play-icon.svg' alt='' />
                    <span>{singleCourse?.videoCount ?? 0} videos</span>
                  </div>
                  <div className='statItem certi'>
                    <img src='/icons/cup-icon-gray.svg' alt='' />
                    <span>Certificate of completion</span>
                  </div>
                  {enrolled ? (
                    <EnrolledButton>
                      Enrolled on{" "}
                      {moment(singleCourse?.enrollment?.enrolledDate).format(
                        "ll"
                      )}
                    </EnrolledButton>
                  ) : (
                    <CustomBtn
                      onClick={() => {
                        Object.keys(userProfile)?.length > 0 && !enrolled
                          ? dispatch(
                              enrollCourse({ courseID: { courseId: id } })
                            )
                          : (() => {
                              navigate(
                                `/login/?returnURL=${
                                  location.pathname + location.search
                                }`
                              );
                              localStorage.setItem("courseId", id);
                            })();
                      }}
                      htmlType='submit'
                      type='submit'
                      title='Enroll Now'
                      loading={enrollLoading}
                      disable={enrollLoading || enrolled}
                    />
                  )}
                  {Object.keys(userProfile)?.length > 0 && enrolled ? (
                    <>
                      <div className='userCourseProgress'>
                        <p
                          className={`chapters ${
                            singleCourse?.enrollment?.completion === 100
                              ? "text-green"
                              : "text-orange"
                          }`}>
                          {singleCourse?.enrollment?.completedChapters ?? 0} /{" "}
                          {singleCourse?.chapterCount ?? 0} Chapters
                        </p>
                        <Progress
                          className={
                            singleCourse?.enrollment?.completion === 100
                              ? "text-green"
                              : "text-orange"
                          }
                          strokeColor={`${
                            singleCourse?.enrollment?.completion === 100
                              ? "#25ad84"
                              : "#d39331"
                          }`}
                          trailColor='#8c8c8c50'
                          size='small'
                          percent={singleCourse?.enrollment?.completion}
                          format={(percent) => percent + "%"}
                        />
                      </div>

                      <div className='userCourseRating'>
                        <h4>Rate this Course</h4>
                        <Rate
                          className='courseRating'
                          key={singleCourse?.enrollment?.rating ?? 0}
                          defaultValue={singleCourse?.enrollment?.rating ?? 0}
                          allowHalf={true}
                          disabled={enrolled ? false : true}
                          onChange={(rating) =>
                            dispatch(
                              addCourseRating({
                                ratingData: { rating },
                                courseID: id,
                              })
                            )
                          }
                        />
                      </div>
                    </>
                  ) : null}
                </Categories>
              </div>
              <CardAvatar>
                <img src={introImageURL} alt='' />
              </CardAvatar>
              <div>
                <SellerBtn>
                  <a href=''>Best seller</a>
                </SellerBtn>
                <TitleName>{singleCourse?.longName}</TitleName>
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 20 }}>
                    <RateArea>
                      <strong>{singleCourse?.ratingCount}</strong>
                      <Rate
                        key={singleCourse?.ratingCount}
                        allowHalf
                        disabled={true}
                        defaultValue={singleCourse?.overallRating ?? 0}
                      />
                      &nbsp; ({singleCourse?.overallRating?.toFixed(1)})
                      &nbsp;&bull;&nbsp;
                      <span className='views'>
                        {nFormatter(singleCourse?.enrolledCount)} students
                        enrolled
                      </span>
                      &nbsp; &nbsp;&bull;&nbsp;
                      <span className='views'>
                        {nFormatter(singleCourse?.viewCount)} views
                      </span>
                    </RateArea>
                  </Col>
                  <Col span={24}>
                    <History>
                      <Profile>
                        <div className='avatar'>
                          <img src='/images/user.png' alt='' />
                        </div>
                        <div>
                          <p>Instructor</p>
                          <h6>{singleCourse?.instructor}</h6>
                        </div>
                      </Profile>
                      <Profile>
                        <div className='firstItem'>
                          <p>Course language</p>
                          <h6>{singleCourse?.language}</h6>
                        </div>
                        <div>
                          <p>Category</p>
                          <h6>{singleCourse?.category}</h6>
                        </div>
                      </Profile>
                    </History>
                  </Col>
                </Row>
              </div>
            </CardContainer>
          </TopHeader>
        </>
      ) : (
        <>
          {/* mobile */}
          <TopHeader>
            <CardContainer>
              <div
                className='videoPopup'
                style={showMenu ? { right: "0px" } : { right: "-230px" }}>
                <div
                  className='enrollBtn'
                  onClick={() => setShowMenu(!showMenu)}>
                  <span className={showMenu ? "openMenu" : "closeMenu"}>
                    <FiChevronLeft />
                  </span>
                  Enroll
                </div>
                <div className='topicVideo'>
                  <div className='overlay'></div>
                  <div
                    onClick={() => {
                      fetchPreSignedURL();
                      setPlayVideo(true);
                      setOpenIntroVideo(true);
                    }}>
                    <img src='/icons/play-icon.svg' alt='' />
                    <h6>Watch Intro</h6>
                  </div>
                  <img
                    src={introImageURL ?? "/images/img-2.png"}
                    alt=''
                  />
                </div>
                <Categories>
                  <div className='statItem'>
                    <img src='/icons/clock-icon.svg' alt='' />
                    <span>
                      {intoHours(singleCourse?.videoLength)} hours of on-demand
                      videos
                    </span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/book-icon.svg' alt='' />
                    <span>{singleCourse?.chapterCount} Chapters</span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/topic-icon.svg' alt='' />
                    <span>{singleCourse?.lessonCount} Topics</span>
                  </div>
                  <div className='statItem'>
                    <img src='/icons/play-icon.svg' alt='' />
                    <span>{singleCourse?.videoCount} videos</span>
                  </div>
                  <div className='statItem certi'>
                    <img src='/icons/cup-icon-gray.svg' alt='' />
                    <span>Certificate of completion</span>
                  </div>
                  {enrolled ? (
                    <EnrolledButton>
                      Enrolled on{" "}
                      {moment(singleCourse?.enrollment?.enrolledDate).format(
                        "ll"
                      )}
                    </EnrolledButton>
                  ) : (
                    <CustomBtn
                      onClick={() => {
                        Object.keys(userProfile)?.length > 0 && !enrolled
                          ? dispatch(
                              enrollCourse({ courseID: { courseId: id } })
                            )
                          : (() => {
                              navigate(
                                `/login/?returnURL=${
                                  location.pathname + location.search
                                }`
                              );
                              localStorage.setItem("courseId", id);
                            })();
                      }}
                      htmlType='submit'
                      type='submit'
                      title='Enroll Now'
                      loading={enrollLoading}
                      disable={enrollLoading || enrolled}
                    />
                  )}

                  {Object.keys(userProfile)?.length > 0 && enrolled ? (
                    <>
                      <div className='userCourseProgress'>
                        <p className='chapters'>
                          {singleCourse?.enrollment?.completedChapters ?? 0} /{" "}
                          {singleCourse?.chapterCount ?? 0} Chapters
                        </p>
                        <Progress
                          strokeColor={`${
                            singleCourse?.enrollment?.completion === 100
                              ? "#25ad84"
                              : "#d39331"
                          }`}
                          trailColor='#8c8c8c50'
                          size='small'
                          percent={singleCourse?.enrollment?.completion}
                          format={(percent) => percent + "%"}
                        />
                      </div>

                      <div className='userCourseRating'>
                        <h4>Rate this Course</h4>
                        <Rate
                          className='courseRating'
                          key={singleCourse?.enrollment?.rating ?? 0}
                          defaultValue={singleCourse?.enrollment?.rating ?? 0}
                          allowHalf={true}
                          disabled={enrolled ? false : true}
                          onChange={(rating) =>
                            dispatch(
                              addCourseRating({
                                ratingData: { rating },
                                courseID: id,
                              })
                            )
                          }
                        />
                      </div>
                    </>
                  ) : null}
                </Categories>
              </div>
              <div>
                <Row>
                  <Col span={10}>
                    <CardAvatar>
                      <img src={introImageURL} alt='' />
                    </CardAvatar>
                  </Col>
                  <Col span={14}>
                    <SellerBtn>
                      <a href=''>Best seller</a>
                    </SellerBtn>
                    <TitleName>{singleCourse?.longName}</TitleName>

                    <RateArea>
                      <strong>{singleCourse?.ratingCount}</strong>
                      <Rate
                        key={singleCourse?.ratingCount}
                        allowHalf
                        disabled={true}
                        defaultValue={singleCourse?.ratingCount ?? 0}
                      />
                      &nbsp; ({singleCourse?.overallRating})
                      <br />
                      <span className='views'>
                        {nFormatter(singleCourse?.enrolledCount)} students
                        enrolled
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span className='views'>
                        {" "}
                        {nFormatter(singleCourse?.viewCount)} views
                      </span>
                    </RateArea>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }}>
                    <History>
                      <Profile>
                        <div className='avatar'>
                          <img src='/images/user.png' alt='' />
                        </div>
                        <div>
                          <p>Instructor</p>
                          <h6>{singleCourse?.instructor}</h6>
                        </div>
                        <div className='firstItem'>
                          <p>Course language</p>
                          <h6>{singleCourse?.language}</h6>
                        </div>
                        <div>
                          <p>Category</p>
                          <h6>{singleCourse?.category}</h6>
                        </div>
                      </Profile>
                    </History>
                  </Col>
                </Row>
              </div>
            </CardContainer>
          </TopHeader>
        </>
      )}

      <div>
        <Container>
          <Row>
            {/* No Subscription Section */}
            {!subscribed ? (
              <Col xs={{ span: 24 }} md={{ span: 16 }}>
                <div className='subscriptionWrapper'>
                  <div className='subscriptionBox'>
                    <InfoCircleFilled className='subscriptionIcon' />
                    <p>
                      Subscripition is required to view videos of this course.
                    </p>
                  </div>
                  <CustomBtn
                    onClick={() => {
                      navigate("/subscription");
                    }}
                    htmlType='button'
                    type='button'
                    title='Subscribe now'
                  />
                </div>
              </Col>
            ) : null}
            {/* Course Details Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>course details</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: singleCourse?.courseDetails,
                  }}></p>
              </div>
            </Col>
            {/* What you will learn Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>What you’ll learn</h3>
                <div className='topics'>
                  {singleCourse?.whatYouWillLearn?.map((learn, i) => (
                    <div key={i} className='topic'>
                      <div>
                        <BsCheck />
                      </div>
                      <p>{learn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            {/* Requirement Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>Requirements</h3>
                {singleCourse?.requirements ? (
                  singleCourse?.requirements?.includes(",") ? (
                    <ul className='topic'>
                      {singleCourse?.requirements?.split(",")?.map((req, i) => {
                        return <li key={i}>{req}</li>;
                      })}
                    </ul>
                  ) : (
                    <p>{singleCourse?.requirements}</p>
                  )
                ) : (
                  <p>No prior requirements</p>
                )}
              </div>
            </Col>
            {/* Course Content Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>
                  course content <BsChevronUp />
                </h3>
                {singleCourse?.chapter?.length > 0 ? (
                  <Collapse
                    // defaultActiveKey={["0"]}
                    accordion
                    className='accordion'>
                    {singleCourse?.chapter?.map((chapter) => {
                      const filteredLessons = courseLessons?.filter(
                        (item) => item?.course[0]?.chapterName === chapter?.name
                      );
                      return (
                        <Panel
                          key={chapter._id}
                          header={
                            <div className='accordionBtn'>
                              <h4>{chapter?.name}</h4>
                              <div>
                                {filteredLessons?.length} lectures
                                &nbsp;&bull;&nbsp;
                                {intoHoursMins(chapter?.videoLength)}
                              </div>
                            </div>
                          }>
                          {filteredLessons?.length > 0
                            ? filteredLessons?.map((item, index) => {
                                return (
                                  <Link
                                    onClick={() => {
                                      if (
                                        Object.keys(userProfile)?.length > 0 &&
                                        enrolled &&
                                        !item?.finished
                                      ) {
                                        dispatch(
                                          markedCompleted({
                                            courseID: id,
                                            markedData: {
                                              id: item?._id,
                                              type: "lesson",
                                              chapterName: item?.course[0]?.chapterName,
                                              lessonId: item?._id,
                                            },
                                          })
                                        );
                                      }
                                    }}
                                    to={`/${singleCourse?.shortName}/${item?.course[0]?.chapterName}/${item?.name}`}
                                    className='allItems'
                                    key={item?._id}>
                                    <div className='items'>
                                      <div className='videoDetail'>
                                        <div
                                          className={`lessonName ${
                                            item?.finished && "text-green"
                                          }`}>
                                          <BsPlayCircleFill
                                            className={`icon ${
                                              item?.finished && "text-green"
                                            }`}
                                          />
                                          <span>{item?.name}</span>
                                        </div>
                                        {item?.finished ? (
                                          <div className='viewed'>
                                            <BsCheck className='checkIcon' />{" "}
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                    {Object.keys(userProfile)?.length > 0 ? (
                                      <span>
                                        {convertIntoHHMMSS(item?.videoLength)}
                                      </span>
                                    ) : null}
                                  </Link>
                                );
                              })
                            : "No Topic Found"}
                        </Panel>
                      );
                    })}
                  </Collapse>
                ) : (
                  "No Chapter Found"
                )}
              </div>
            </Col>
            {/* Student Reviews Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>Student Reviews</h3>
                <div className='reviews'>
                  {singleCourseReviews?.length > 0 ? (
                    singleCourseReviews?.slice(0, 3)?.map((review, i) => {
                      return (
                        <UserProfile key={i}>
                          <div className='avatar'>
                            <img
                              className='reviewedUserImage'
                              src={review?.user?.imageURL}
                              alt={review?.user?.name}
                            />
                          </div>
                          <div className='username'>
                            <h6>{review?.user?.name}</h6>
                            <Rate
                              disabled={true}
                              allowHalf
                              defaultValue={review?.stars}
                            />
                            <p className='review-text'>{review?.review}</p>
                          </div>
                        </UserProfile>
                      );
                    })
                  ) : (
                    <p>No Review Found</p>
                  )}

                  {/* <div className='d-none d-lg-block'>
                    <span className='showMore'>
                      4 More <FaChevronRight />
                    </span>
                  </div> */}
                </div>
              </div>
            </Col>
            {/* Tags Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>Tags</h3>
                <div className='tabLinks'>
                  {singleCourse?.tags?.length > 0 ? (
                    singleCourse?.tags?.map((tag) => {
                      return <div key={tag}>{tag}</div>;
                    })
                  ) : (
                    <p>No Tag Found</p>
                  )}
                </div>
              </div>
            </Col>
            {/* Course Videos Section */}
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <div className='aboutCourses'>
                <h3>
                  Course Videos{" "}
                  {Object.keys(userProfile).length > 0 ? (
                    <BsChevronUp />
                  ) : (
                    <IoMdLock />
                  )}
                </h3>
                {Object.keys(userProfile).length > 0
                  ? videosByChapters?.length > 0
                    ? videosByChapters?.map((chapter, i) => {
                        return (
                          <div className='videos' key={i}>
                            <h5>
                              {chapter?.chapterName} ({chapter?.videos?.length}{" "}
                              videos)
                            </h5>
                            <Row>
                              {chapter?.videos?.length > 0 ? (
                                chapter?.videos?.map((video, i, videoArr) => (
                                  <Col span={12} key={i}>
                                    <div className='video'>
                                      <CourseVideos
                                        courseName={singleCourse?.longName}
                                        courseID={id}
                                        video={video}
                                        videos={videoArr}
                                      />
                                    </div>
                                  </Col>
                                ))
                              ) : (
                                <p style={{ margin: "0 0 1rem 0" }}>
                                  No Video Found
                                </p>
                              )}
                            </Row>
                          </div>
                        );
                      })
                    : "No Course Video Found"
                  : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <SearchedSql />
    </Wrapper>
  );
};

export default CoursesDetails;
