import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { BackBtn } from "../../Forum/forumlList/threadQuestion/index.style";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { QustionArea, Wrapper } from "./index.style";
import { InfoForm } from "../../Forum/manageTopic/topicDetails/index.style";
import { Button, Col, Form, Input, Row } from "antd";
import { CustomInput } from "../../../common/input/index.style";
import { fileUpload } from "../../../services/FileRequest";

import {
  antValidator,
  intoSeconds,
  getFileName,
  intoHours,
} from "../../../utils/helper";
import { courseScheme } from "../../../utils/validationSchema";
import TagsArea from "../../../common/input/TagsArea";
import LearningPoints from "../../courses/LearningPoints";
import {
  updateCourse,
  getSingleCourse,
  resetCourse,
} from "../../../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomBtn from "../../../common/button";
import InputMask from "react-input-mask";

const { TextArea } = Input;

const EditCourse = () => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();
  const [rules, setRules] = useState({});
  const [tags, setTags] = useState([]);
  const [learningPoints, setLearningPoints] = useState([]);
  const [form] = Form.useForm();
  const courseImageRef = useRef();
  const courseVideoRef = useRef();
  const { courseId } = useParams();
  const store = useSelector((state) => state);

  const [contentImageFile, setContentImageFile] = useState(null);
  const [contentVideoFile, setContentVideoFile] = useState(null);
  const [courseImageURL, setCourseImageURL] = useState({});
  const [courseVideoURL, setCourseVideoURL] = useState({});

  useEffect(() => {
    dispatch(getSingleCourse(courseId));
    return () => {
      dispatch(resetCourse());
    };
  }, [courseId]);

  useEffect(() => {
    setRules(antValidator(courseScheme));
  }, []);

  const { singleCourse } = store?.course;
  
  useEffect(() => {
    if (singleCourse) {
      form.setFieldsValue({
        shortName: singleCourse?.shortName,
        longName: singleCourse?.longName,
        description: singleCourse?.courseDetails,
        azureFolder: singleCourse?.azureFolder,
        contentImageFile: getFileName(singleCourse?.imageURL),
        contentVideoFile: getFileName(singleCourse?.videoURL),
        noOfLesson: singleCourse?.lessonCount,
        noOfChapter: singleCourse?.chapterCount,
        noOfVideo: singleCourse?.videoCount,
        videoLength: intoHours(singleCourse?.videoLength),
        requirements: singleCourse?.requirements,
        price: singleCourse?.price,
        discount: singleCourse?.discount,
        instructor: singleCourse?.instructor,
        category: singleCourse?.category,
        language: singleCourse?.language,
      });

      setTags(singleCourse?.tags);
      setLearningPoints(singleCourse?.whatYouWillLearn);
      setContentImageFile(getFileName(singleCourse?.imageURL));
      setContentVideoFile(getFileName(singleCourse?.videoURL));
    }
  }, [form, singleCourse]);

  const { courseLoading } = store?.course;


  const fetchPreSignedURL = async (file, flag) => {
    if(flag == "Image")
    fileUpload(file,  setCourseImageURL, setContentImageFile, singleCourse?.azureFolder, "Image");
    else
    fileUpload(file,  setCourseVideoURL, setContentVideoFile, singleCourse?.azureFolder, "Video");

  };

  const onCourseUpdateSubmit = async (values) => {
    const courseData = new FormData();
    courseData.append("shortName", values.shortName);
    courseData.append("longName", values.longName);
    courseData.append("courseDetails", values.description);
    // update azure folder
    courseData.append("azureFolder", values.azureFolder);
    // end
    courseData.append("imageURL", courseImageURL);
    courseData.append("videoURL", courseVideoURL);
    courseData.append("lessonCount", values.noOfLesson);
    courseData.append("chapterCount", values.noOfChapter);
    courseData.append("videoCount", values.noOfVideo);
    courseData.append("videoLength", intoSeconds(values.videoLength));
    for (let learningPoint of learningPoints) {
      courseData.append("whatYouWillLearn[]", learningPoint);
    }

    courseData.append("requirements", values.requirements);
    courseData.append("language", values.language);
    courseData.append("instructor", values.instructor);
    courseData.append("category", values.category);
    for (let tag of tags) {
      courseData.append("tags[]", tag);
    }

    dispatch(updateCourse({ courseData, courseId }));
  };

  const lessonOptions = [];

  for (let i = 1; i <= singleCourse?.lessonCount; i++) {
    lessonOptions.push({
      value: i,
      label: i,
    });
  }

  return (
    <Wrapper>
      <Container fluid>
        <BackBtn
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <span>
            <BsChevronLeft />
          </span>
          <span>Back to manage courses</span>
        </BackBtn>

        <InfoForm layout="vertical" onFinish={onCourseUpdateSubmit} form={form}>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="shortName"
                rules={[rules]}
                label={<h3>Short Name (15 Characters max.)</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="longName"
                rules={[rules]}
                label={<h3>Full Name</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }}>
              <CustomInput
                name="description"
                rules={[rules]}
                label={<h3>Course description</h3>}
              >
                <TextArea rows={8} />
              </CustomInput>
            </Col>
            <Col xs={{ span: 12 }}>
              <CustomInput
                name="azureFolder"
                label={<h3>azure root folder</h3>}
              >
                <Input disabled/>
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}/>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="courseImage"
                rules={[rules]}
                label={<h3>course title Image</h3>}
              >
                <Row gutter={10}>
                  <Col span={18}>
                    <input
                      accept="image/x-png,image/jpg,image/jpeg"
                      onChange={(e) => fetchPreSignedURL(e.target.files?.[0], "Image")}
                      style={{ display: "none" }}
                      type="file"
                      ref={courseImageRef}
                    />
                    <Input
                      // placeholder='Image name...'
                      value={contentImageFile?.name ?? contentImageFile}
                      readOnly
                      name="contentImageFile"
                      onClick={() => {
                        courseImageRef.current.click();
                      }}
                    />
                  </Col>
                  <Col span={6}>
                    <div className="ant-upload ">
                      <Button
                        onClick={() => {
                          courseImageRef.current.click();
                        }}
                      >
                        Upload Image
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="courseIntroVideo"
                rules={[rules]}
                label={<h3>course intro video</h3>}
              >
                <Row gutter={10}>
                  <Col span={18}>
                    <input
                      onChange={(e) => fetchPreSignedURL(e.target.files?.[0], "Video")}
                      accept="video/mp4,video/x-m4v,video/*"
                      style={{ display: "none" }}
                      type="file"
                      ref={courseVideoRef}
                    />
                    <Input
                      // placeholder='Video name...'
                      value={contentVideoFile?.name ?? contentVideoFile}
                      readOnly
                      name="contentVideoFile"
                      onClick={() => courseVideoRef.current.click()}
                    />
                  </Col>
                  <Col span={6}>
                    <div className="ant-upload ">
                      <Button onClick={() => courseVideoRef.current.click()}>
                        Upload Video
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="noOfLesson"
                rules={[rules]}
                label={<h3>Number of Lessons</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="noOfChapter"
                rules={[rules]}
                label={<h3>Number of chapters</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="noOfVideo"
                rules={[rules]}
                label={<h3>Number of videos</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="videoLength"
                rules={[rules]}
                label={<h3>video length</h3>}
              >
                <InputMask mask="99:99">
                  {(inputProps) => (
                    <Input {...inputProps} type="text" disableUnderline />
                  )}
                </InputMask>
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }}>
              <div className="inputHeader">
                <h3>What You’ll learn</h3>
                <div className="addpoints">{learningPoints?.length} Added</div>
              </div>
              <Row gutter={16}>
                <LearningPoints
                  learningPoints={learningPoints}
                  setLearningPoints={setLearningPoints}
                />
              </Row>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="requirements"
                rules={[rules]}
                label={<h3>Requirements</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <CustomSelect label={<h3>Language</h3>}>
                <ReactFlagsSelect
                  selected={selectedLanguage}
                  onSelect={(code) => setSelectedLanguage(code)}
                />
              </CustomSelect> */}

              <CustomInput
                name="language"
                rules={[rules]}
                label={<h3>Language</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="instructor"
                rules={[rules]}
                label={<h3>instructor</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomInput
                name="category"
                rules={[rules]}
                label={<h3>course category</h3>}
              >
                <Input />
              </CustomInput>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <QustionArea>
                <h3>Tags</h3>
                <p>Add up to 15 tags to describe what your course is about.</p>
                <div className="tagConatiner">
                  <CustomInput name="tags">
                    <TagsArea tags={tags} setTags={setTags} />
                  </CustomInput>
                </div>
              </QustionArea>
            </Col>
          </Row>
          <Row align="middle" style={{ justifyContent: "center" }}>
            <Col>
              <CustomBtn
                type="submit"
                title="Save Course"
                loading={courseLoading}
                disable={courseLoading}
              />
            </Col>
          </Row>
        </InfoForm>
      </Container>
    </Wrapper>
  );
};

export default EditCourse;
