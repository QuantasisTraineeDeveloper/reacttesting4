import { Checkbox, Col, Collapse, Input, Row, Select, Form, Radio } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { Container } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { relatedtopicdata } from "../../../assets/data/allData";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsPlayCircleFill } from "react-icons/bs";
import CustomBtn from "../../../common/button";
import { CodeContainer } from "../../../components/CodeSection/index.style";
import SocialComments from "../../../components/socialComments";
import { FormArea } from "../../home/index.style";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../../../redux/courseSlice";
import { searchTool } from "../../../redux/toolSlice";
import { getMostVisitedLessons } from "../../../redux/lessonSlice";
import { antValidator } from "../../../utils/helper";
import {
  getCourseID,
  resetCourseID,
  getSingleCourse,
  resetCourse,
} from "../../../redux/courseSlice";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { markedCompleted } from "../../../redux/courseSlice";
import { IoMdLock } from "react-icons/io";
import {
  Content,
  RelatedTopics,
  SelectArea,
  Sidebar,
  Wrapper,
} from "./index.style";
import { getCourseLessons } from "../../../redux/lessonSlice";
import { bytesToMB, nFormatter } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { searchToolSchema } from "../../../utils/validationSchema";
import { CodeBlock } from "react-code-blocks";
import { BsCheck } from "react-icons/bs";
import { getFileURLFromAzure } from "../../../services/FileRequest";

const { Panel } = Collapse;

const CoursesTopic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { courseName, lessonName } = useParams();
  const [currentLesson, setCurrentLesson] = useState({});
  const [rules, setRules] = useState({});
  const [fileData, setFileData] = useState(null);
  const [searchForm] = Form.useForm();
  const [jsonFileURL, setjsonFileURL] = useState(null);
  const [downloadFileURL, setdownloadFileURL] = useState(null);

  const { cid, singleCourse, courseLoading } = useSelector(
    (state) => state?.course
  );

  const { userProfile } = useSelector((state) => state?.auth);
  const { courseLessons, mostVisitedLessons } = useSelector(
    (state) => state?.lesson
  );

  const chaptersWithLessons = [];
  singleCourse?.chapter?.forEach((chapter) => {
    const lessons = courseLessons?.filter(
      (item) => item?.chapterName === chapter?.name
    );
    chaptersWithLessons.push({ ...chapter, lessons });
  });

  const rawLessons = chaptersWithLessons?.map((item) => [...item?.lessons]);
  const lessons = rawLessons?.flat(Infinity);

  // for course id
  useEffect(() => {
    dispatch(getCourseID({ data: { shortName: courseName } }));

    return () => {
      dispatch(resetCourseID());
    };
  }, [courseName, dispatch]);

  const courseID = cid?.courseID;
  const lessonID = currentLesson?._id;
  // const fileURL = currentLesson?.contentURL;
  useEffect(() => {
    if (currentLesson?.contentURL)
      getFileURLFromAzure(
        { fileName: currentLesson.contentURL, fileType: "Json" },
        setjsonFileURL
      );
  }, currentLesson?.contentURL);

  const fetchPreSignedURL = async (fileURL) => {
    try{
    const response = await getFileURLFromAzure(
      { fileName: fileURL, fileType: "allType" },
      setdownloadFileURL
    );
    if(response)
    {
      await downloadFileFromAzure(downloadFileURL, fileURL);
    }
    }catch(error){
      console.error('Error generating SAS token URL:', error);
    }
};

const downloadFileFromAzure = async (sasToken, fileURL) => {
  try {
    const response = await fetch(sasToken, {
      method: 'GET',
    });

    if (response.ok) {
      const blob = await response.blob();
      // Create a temporary URL for the blob object
      const url = URL.createObjectURL(blob);
      // Trigger a file download by creating an anchor element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileURL; // Set the desired file name and extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('Failed to download file');
    }
  } catch (error) {
    console.error('Error occurred while downloading file:', error);
  }
};

  useEffect(() => {
    if (jsonFileURL) {
      fetch(jsonFileURL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              "Error fetching the JSON file. Status: " + response.status
            );
          }
        })
        .then((data) => {
          setFileData(data);
        })
        .catch((error) => console.log("error", error));
    }
    return () => {
      setFileData(null);
    };
  }, [jsonFileURL]);

  const { allCourses } = useSelector((state) => state?.course);
  const { loading } = useSelector((state) => state?.tool);

  useEffect(() => {
    dispatch(getAllCourses());
    setRules(antValidator(searchToolSchema));
  }, [dispatch]);

  const courses = allCourses?.results;
  const courseOptions = [];
  courses?.map((course) => {
    courseOptions?.push({
      value: course?._id,
      label: course?.shortName,
    });
  });

  const checkBoxOption = [
    {
      label: "Chapter Names",
      value: "chapter",
    },
    {
      label: "Lesson Names",
      value: "lesson",
    },
    // {
    //   label: "Topic Content",
    //   value: "topic",
    // },
    {
      label: "Code",
      value: "code",
    },
  ];

  // Most visited Lessons
  useEffect(() => {
    if (courseID && lessonID) {
      dispatch(getMostVisitedLessons({ courseID, lessonID }));
    }
  }, [dispatch, courseID, lessonID]);

  // for course details and lessons
  useEffect(() => {
    if (courseID) {
      dispatch(getSingleCourse(courseID));
      dispatch(getCourseLessons(courseID));
    }

    return () => {
      dispatch(resetCourse());
    };
  }, [courseID, dispatch]);

  // setting current lesson
  useEffect(() => {
    if (courseLessons?.length > 0) {
      setCurrentLesson(
        courseLessons?.find((lesson) => lesson?.name === lessonName)
      );
    }

    // console.log('currents ', currentLesson);
  }, [courseLessons, lessonName]);

  // check if user is enrolled or not
  const enrolled =
    singleCourse?.enrollment &&
    Object.keys(singleCourse?.enrollment ?? {}).length > 0;

  const currentLessonIndex = lessons?.findIndex(
    (item) => item?._id === currentLesson?._id
  );

  // function for previos lesson
  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLesson(lessons[currentLessonIndex - 1]);
      navigate(
        `/${singleCourse?.shortName}/${
          lessons[currentLessonIndex - 1]?.course?.[0]?.chapterName
        }/${lessons[currentLessonIndex - 1]?.name}`
      );
    }
  };

  // function for next lesson
  const nextLesson = () => {
    if (currentLessonIndex < lessons?.length - 1) {
      setCurrentLesson(lessons[currentLessonIndex + 1]);
      navigate(
        `/${singleCourse?.shortName}/${
          lessons[currentLessonIndex + 1]?.course?.[0]?.chapterName
        }/${lessons[currentLessonIndex + 1]?.name}`
      );
    }
  };

  // marked complete action dispatch
  useEffect(() => {
    if (
      Object.keys(currentLesson ?? {})?.length > 0 &&
      Object.keys(userProfile ?? {})?.length > 0 &&
      enrolled &&
      !currentLesson?.finished
    ) {
      dispatch(
        markedCompleted({
          courseID,
          markedData: {
            id: currentLesson?._id,
            type: "lesson",
            chapterName: currentLesson?.course?.[0].chapterName,
            lessonId: currentLesson?._id,
          },
        })
      );
    }
  }, [currentLesson, enrolled, courseID, userProfile, dispatch]);

  const onSubmitSearch = ({ search, course, type }) => {
    const data = {
      search,
      course,
      searchIn: [type],
    };

    dispatch(searchTool({ data, navigate }));
  };

  return (
    <>
      <Wrapper>
        <Sidebar>
          {courseLoading ? (
            <TopicLoadingSpinner>
              <LoadingOutlined className="loadingSpinner" />
            </TopicLoadingSpinner>
          ) : singleCourse?.chapter?.length > 0 ? (
            <Collapse
              key={currentLesson?.course?.[0]?.chapterName}
              defaultActiveKey={currentLesson?.course?.[0]?.chapterName}
              accordion
              className="accordion"
            >
              {singleCourse.chapter.map((chapter, index) => {
                const filteredLessons = courseLessons?.filter(
                  (item) => item?.course?.[0]?.chapterName === chapter?.name
                );

                return (
                  <Panel
                    key={chapter.name}
                    header={
                      <div
                        className={`accordionBtn ${
                          currentLesson?.course?.[0]?.chapterName === chapter.name
                            ? "active"
                            : ""
                        }`}
                      >
                        <h4>{chapter.name}</h4>
                      </div>
                    }
                  >
                    {filteredLessons?.length > 0 ? (
                      filteredLessons?.map((item) => (
                        <Link
                          onClick={() => {
                            setCurrentLesson(item);
                            if (
                              Object.keys(userProfile ?? {})?.length > 0 &&
                              enrolled &&
                              !item?.finished
                            ) {
                              dispatch(
                                markedCompleted({
                                  courseID,
                                  markedData: {
                                    id: item?._id,
                                    type: "lesson",
                                    chapterName: item?.course?.[0]?.chapterName,
                                    lessonId: item?._id,
                                  },
                                })
                              );
                            }
                          }}
                          to={`/${singleCourse?.shortName}/${item?.course?.[0]?.chapterName}/${item?.name}`}
                          className={`allItems ${
                            currentLesson?._id === item?._id ? "active" : ""
                          }`}
                          key={item._id}
                        >
                          <div className="items">
                            <div className="videoDetail">
                              <div
                                className={`sidebarlessonName ${
                                  item?.finished && "text-green"
                                }`}
                                style={{
                                  color:
                                    currentLesson?._id === item?._id
                                      ? "#ffffff"
                                      : "",
                                }}
                              >
                                <BsPlayCircleFill
                                  className={`icon ${
                                    item?.finished && "text-green"
                                  }`}
                                  style={{
                                    color:
                                      currentLesson?._id === item?._id
                                        ? "#ffffff"
                                        : "",
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: "16px",
                                    marginLeft: "1rem",
                                    fontWeight: "400",
                                    color:
                                      currentLesson?._id === item?._id
                                        ? "#ffffff"
                                        : "",
                                  }}
                                >
                                  {item?.name?.length > 10
                                    ? item?.name?.substr(0, 10) + "..."
                                    : item?.name}
                                  {item?.finished ? (
                                    <BsCheckCircleFill className="checkIcon" />
                                  ) : null}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div style={{ color: "#ffffff30" }}>Not Topic Found</div>
                    )}
                  </Panel>
                );
              })}
            </Collapse>
          ) : (
            "No Chapter Found"
          )}
        </Sidebar>
        <Content>
          <Container>
            <div className="videoTitle">
              <h2>{singleCourse?.shortName}</h2>
              <div>
                {/* <div> {chapter?.name} </div> */}
                <div>{currentLesson?.course?.[0]?.chapterName} </div>
              </div>
            </div>
            <div className="mainHeading">
              <h1>{currentLesson?.name}</h1>
              <p>{currentLesson?.desc}</p>
            </div>
            <div className="subTitle">
              {/* <h3>Understanding Queries</h3> */}
              <Row gutter={50} key={currentLesson?.video}>
                {currentLesson?.video && currentLesson?.video?.length > 0
                  ? currentLesson?.video?.map((video, index) => (
                      <Col key={index} xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="aboutQueries">
                          <div className="cardHeader">
                            <img src="/icons/play-icon.svg" alt="" />
                            <p title={video?.name?.split(".")?.[0]}>
                              {video?.name?.split(".")?.[0]?.length > 60
                                ? video?.name?.split(".")?.[0]?.substr(0, 60) +
                                  "..."
                                : video?.name?.split(".")?.[0]}
                            </p>
                            {video?.viewed ? (
                              <BsCheckCircleFill className="checkIcon" />
                            ) : null}
                            {!video?.publicView && (
                              <IoMdLock className="lockIcon" />
                            )}
                          </div>
                          <div className="cardBody">
                            {video?.publicView && (
                              <>
                                <span className="views">
                                  <BsFillEyeFill />
                                  &nbsp; &nbsp;{video?.viewCount}
                                </span>

                                <ReactPlayer
                                  onPlay={() =>
                                    dispatch(
                                      markedCompleted({
                                        courseID,
                                        markedData: {
                                          id: video?._id,
                                          type: "video",
                                          chapterName:
                                            currentLesson?.course?.[0]?.chapterName,
                                          lessonId: currentLesson?._id,
                                        },
                                      })
                                    )
                                  }
                                  key={video?.url}
                                  // playing={playVideo}
                                  width="100%"
                                  // height="300%"
                                  // style={{ maxHeight: "300px" }}
                                  url={video?.url}
                                  controls={true}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </Col>
                    ))
                  : null}
              </Row>
            </div>
            <div className="subTitle">
              <h3>Test code</h3>
              <CodeContainer>
                {currentLesson?.code && currentLesson?.code?.length > 0 ? (
                  currentLesson?.code.map((code, index) => (
                    <div className="codeSection" key={index}>
                      <p>{code.comment}</p>
                      <code className="codeContainer">
                        <div>
                          <p>{code.rawCode}</p>
                        </div>
                      </code>
                      <Link
                        to={{
                          pathname: "/QueryTool",
                          search: `?rawCode=${encodeURIComponent(
                            code.rawCode
                          )}`,
                        }}
                      >
                        <div className="showBtn">
                          <CustomBtn title="Try it now" />
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <p>Code Not Found</p>
                  </Col>
                )}
              </CodeContainer>
            </div>

            <div>
              {fileData ? (
                <div className="subTitle">
                  {fileData.map((item, index) => (
                    <div key={index}>
                      <h3 style={{ marginTop: "2rem" }}>{item.title}</h3>
                      <img src={item.image} alt="" />
                      <p>{item.description}</p>

                      {item?.code && (
                        <div className="code">
                          <CodeBlock
                            text={String(item?.code)}
                            // language='mysql'
                            showLineNumbers={false}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="subTitle">
              <h3>Attachments</h3>
              <div className="saveFile">
                {currentLesson?.file && currentLesson?.file?.length > 0 ? (
                  currentLesson?.file.map((file, index) => (
                    <a
                      style={{
                        cursor: file?.publicView ? "pointer" : "not-allowed",
                      }}
                      href="#"
                      onClick = { async ()=> {
                        try {
                          if(file?.publicView){
                            fetchPreSignedURL(file?.url);
                          }
                        } catch (error) {
                          console.error('Error fetching pre-signed URL:', error);
                        }
                      }}
                      key={file?._id}
                      // rel='noreferrer'
                      className="file"
                    >
                      <div className="fileIcon">
                        <span>{file?.name.split(".")?.[1]}</span>
                      </div>
                      <strong>
                        {file?.name.split(".")?.[0]?.length > 5
                          ? file?.name.split(".")?.[0]?.substr(0, 5) +
                            "..." +
                            "." +
                            file?.name.split(".")?.[1]
                          : file?.name.split(".")?.[0] +
                            "." +
                            file?.name.split(".")?.[1]}
                      </strong>
                      <span>({bytesToMB(file?.size).toFixed(2)} MB)</span>
                    </a>
                  ))
                ) : (
                  <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                    <p>File Not Found</p>
                  </Col>
                )}
              </div>
            </div>
            <div className="nextPrevButtons">
              <button
                disabled={currentLessonIndex === 0 || lessons?.length === 0}
                className={
                  currentLessonIndex === 0 || lessons?.length === 0
                    ? "disabled"
                    : "active"
                }
                onClick={() => prevLesson()}
              >
                Previous
              </button>
              <button
                disabled={lessons?.length - 1 === currentLessonIndex}
                className={
                  lessons?.length - 1 === currentLessonIndex
                    ? "disabled"
                    : "active"
                }
                onClick={() => nextLesson()}
              >
                Next
              </button>
            </div>
            <SocialComments
              currentLesson={currentLesson}
              userProfile={userProfile}
            />
            <RelatedTopics>
              <h3>Related Topics</h3>
              <div className="relatedTopics">
                {currentLesson?.relatedTopics?.length > 0 &&
                currentLesson?.relatedTopics?.[0] !== null ? (
                  currentLesson.relatedTopics.map((item, i) => (
                    <div className="relatedItem" key={i}>
                      <Link
                        to={`/${item?.course?.[0]?.courseId?.shortName}/${item?.course?.[0]?.chapterName}/${item?.name}`}
                      >
                        <p>{item?.course?.[0].courseId?.shortName}</p>
                        <h6>{item?.name}</h6>
                        {i !== currentLesson.relatedTopics.length - 1 &&
                        item?.viewCount !== null ? (
                          <span>{nFormatter(item?.viewCount)} views</span>
                        ) : null}
                      </Link>
                    </div>
                  ))
                ) : (
                  <>
                    <p>Topics not Found</p>
                  </>
                )}
              </div>
            </RelatedTopics>
            <RelatedTopics>
              <h3>Most visited</h3>
              {mostVisitedLessons?.length > 0 ? (
                <div className="mostvisited">
                  {mostVisitedLessons?.map((item, i) => (
                    <div className="mostvisitedItem" key={i}>
                      <Link
                        to={`/${item?.course?.[0]?.courseId?.shortName}/${item?.course?.[0]?.chapterName}/${item?.name}`}
                      >
                        <p>{item?.course?.[0]?.courseId?.shortName}</p>
                        <h6>{item?.name}</h6>
                        <span>{nFormatter(item?.viewCount)} views</span>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Topics Not Found</p>
              )}
            </RelatedTopics>
            <Form form={searchForm} onFinish={onSubmitSearch}>
              <FormArea>
                <Row gutter={12} align="middle">
                  <Col xs={{ span: 16, offset: 0 }} lg={{ span: 14 }}>
                    <Form.Item name="search" rules={[rules]}>
                      <Input
                        className="desktopSearch"
                        prefix={<GrSearch />}
                        placeholder="Search here"
                      />
                    </Form.Item>
                  </Col>

                  <Col
                    xs={{ span: 8 }}
                    lg={{ span: 6 }}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <CustomBtn type="submit" title="Search" loading={loading} />
                  </Col>
                </Row>
              </FormArea>
              <SelectArea>
                <Form.Item
                  name="course"
                  key={singleCourse?._id}
                  initialValue={singleCourse?._id}
                >
                  <Select
                    showSearch
                    placeholder="Course Selection"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={courseOptions}
                  />
                </Form.Item>
                <Form.Item
                  name="type"
                  initialValue={"chapter"}
                  rules={[
                    {
                      required: true,
                      validator: (_, value) =>
                        value.length > 0
                          ? Promise.resolve()
                          : Promise.reject("At least one checkbox is required"),
                    },
                  ]}
                  validateTrigger="onChange"
                >
                  <Radio.Group
                    className="checkingArea"
                    options={checkBoxOption}
                  />
                </Form.Item>
              </SelectArea>
            </Form>
          </Container>
        </Content>
      </Wrapper>
    </>
  );
};

export default CoursesTopic;

export const TopicLoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  .loadingSpinner {
    color: #ffffff;
    font-size: 3rem;
  }
`;
