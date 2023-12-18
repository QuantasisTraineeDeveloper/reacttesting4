import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { BackBtn } from "../../Forum/forumlList/threadQuestion/index.style";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { QustionArea, Wrapper } from "./index.style";
import { InfoForm } from "../../Forum/manageTopic/topicDetails/index.style";
import { Button, Col, Form, Input, Row } from "antd";
import { CustomInput } from "../../../common/input/index.style";
import { antValidator, intoSeconds } from "../../../utils/helper";
import { courseScheme } from "../../../utils/validationSchema";
import TagsArea from "../../../common/input/TagsArea";
import LearningPoints from "../../courses/LearningPoints";
import { addCourse } from "../../../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomBtn from "../../../common/button";
import InputMask from "react-input-mask";
import { fileUpload } from "../../../services/FileRequest";

const { TextArea } = Input;


const AddCourse = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const [rules, setRules] = useState({});
  const [courseImageURL, setCourseImageURL] = useState({});
  const [courseVideoURL, setCourseVideoURL] = useState({});
  const [tags, setTags] = useState([]);
  const [learningPoints, setLearningPoints] = useState([]);
  const [form] = Form.useForm();
  const courseImageRef = useRef();
  const courseVideoRef = useRef();

  const [contentImageFile, setContentImageFile] = useState(null);
  const [contentVideoFile, setContentVideoFile] = useState(null);

  useEffect(() => {
    setRules(antValidator(courseScheme));
  }, []);

  const { courseLoading } = useSelector((state) => state?.course);
  const [azureFolderValue, setAzureFolderValue] = useState('');

  const handleAzureFolderBlur = (event) =>
  {
    const value = event.target.value;
    setAzureFolderValue(value);
  }

  const onReset = () => {
    // form.resetFields();
    setSelected("");
    setCourseImageURL([]);
    setCourseVideoURL([]);
    setTags([]);
    setLearningPoints([]);
  };
  const onCourseSubmit = async (values) => {
    const courseData = new FormData();
    courseData.append("shortName", values.shortName);
    courseData.append("longName", values.longName);
    courseData.append("courseDetails", values.description);
    // add azure root folder
    courseData.append("azureFolder", azureFolderValue);
    // end
    courseData.append("introImage", courseImageURL);
    courseData.append("introVideo", courseVideoURL);
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

    dispatch(addCourse({ courseData, onReset, navigate }));
  };

  const fetchPreSignedURL = async (file, flag) => {
    if(flag == "Image")
    fileUpload(file,  setCourseImageURL, setContentImageFile, azureFolderValue, "Image");
    else
    fileUpload(file,  setCourseVideoURL, setContentVideoFile, azureFolderValue, "Video");

  };

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

        <InfoForm layout="vertical" onFinish={onCourseSubmit} form={form}>
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
            {/* add azure root folder*/}
            <Col xs={12} lg={12}>
              <CustomInput
                name="azureFolder"
                label={<h3>azure root folder</h3>}
              >
                <Input onBlur={handleAzureFolderBlur}/>
              </CustomInput>
            </Col>
            <Col xs={12} lg={12}>
            </Col>
            {/* end */}
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
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
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

export default AddCourse;
