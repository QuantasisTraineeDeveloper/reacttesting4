import {
  Form,
  Checkbox,
  Col,
  Input,
  Row,
  Select,
  Space,
  Upload,
  Tooltip,
  Modal
} from "antd";
import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { CustomInput } from "../../../../common/input/index.style";
import { CustomSelect } from "../../../../common/select/index.style";
import UploadQuery from "../../../../components/Modals/uploadQuery";
import UploadVideo from "../../../../components/Modals/uploadVideo";
import { BackBtn } from "../../forumlList/threadQuestion/index.style";
import { TableContainer } from "../index.style";
import {
  InfoForm,
  QueryCode,
  TxtFile,
  UploadBtn,
  UploadJson,
  Wrapper
} from "./index.style";
import {
  antValidator,
  bytesToMB,
  convertIntoHHMMSS,
} from "../../../../utils/helper";
import { topicScheme } from "../../../../utils/validationSchema";
import CustomBtn from "../../../../common/button";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from "../../../../redux/courseSlice";
import {
  addLesson,
  addLessonFile,
  getLessonDetails,
  deleteLessonFile,
  deleteLessonVideo,
  deleteLessonQuery,
  getAllLessons,
} from "../../../../redux/lessonSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { CustomModal } from "../../../../components/Modals/uploadQuery/index.style";
import { fileUpload } from "../../../../services/FileRequest";

const { TextArea } = Input;
const { confirm } = Modal;

const TopicDetails = () => {
  const navigate = useNavigate();
  const [isVideoModal, setIsVideoModal] = useState(false);
  const [isQueryModal, setIsQueryModal] = useState(false);
  const [isShowCodeModal, setIsShowCodeModal] = useState(false);
  const [queryCode, setQueryCode] = useState("");
  const [rules, setRules] = useState({});
  const [publicVideos, setPublicVideos] = useState(false);
  const [publicFiles, setPublicFiles] = useState(false);
  const [relatedTopics, setRelatedTopics] = useState([]);
  const [copiedText, setCopiedText] = useState("Copy URL");
  const [contentFile, setContentFile] = useState(null);
  const [contentURL, setContentURL] = useState(null);
  const [currentSelectedCourseName, setCurrentSelectedCourseName] = useState("");


  const dispatch = useDispatch();
  const { courseId } = useParams();

  const [form] = Form.useForm();
  const [queryForm] = Form.useForm();
  const urlRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    setRules(antValidator(topicScheme));
    dispatch(getAllLessons());
  }, []);

  useEffect(() => {
    dispatch(getSingleCourse(courseId));
    setCurrentSelectedCourseName(store.course.currentSelectedCourseName);
  }, [courseId]);

  setTimeout(() => {
    if (copiedText === "Copied!") setCopiedText("Copy URL");
  }, 1000);

  // delete video confirmation
  const confirmDeleteVideo = (item) => {
    confirm({
      title: "Do you Want to delete this video?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        await dispatch(
          deleteLessonVideo({
            courseID: courseId,
            lessonID,
            videoID: item?._id,
          })
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // delete query code confirmation
  const confirmDeleteQuery = (item) => {
    confirm({
      title: "Do you Want to delete this query code?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        await dispatch(
          deleteLessonQuery({
            courseID: courseId,
            lessonID,
            queryID: item?._id,
          })
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // delete file confirmation
  const confirmDeleteFile = (item) => {
    confirm({
      title: "Do you Want to delete this file?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        await dispatch(
          deleteLessonFile({ courseID: courseId, lessonID, fileID: item?._id, fileName: item.name, azureFolder: currentSelectedCourseName })
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const store = useSelector((state) => state);
  const { singleCourse } = store.course;
  const {
    lessonLoading,
    lessonFileLoading,
    lessonDetails,
    lessonID,
    allLessons,
  } = store.lesson;

  const createrRelatedTopicOption = (p) => {
    const relatedTopicOption = [];
    allLessons.map((lesson, i) => {
      relatedTopicOption.push({
        label: lesson?.name,
        value: lesson?._id,
        disabled: relatedTopics?.includes(lesson?._id),
        position: p,
      });
    });
    return relatedTopicOption;
  };

  const chaptersOption = [];
  singleCourse?.chapter?.map((chapter) => {
    chaptersOption.push({
      label: chapter?.name,
      value: chapter?.name,
    });
  });

  useEffect(() => {
    if (lessonID) {
      dispatch(getLessonDetails({ courseID: courseId, lessonID }));
    }
  }, [lessonID]);

  const handleCancel = () => {
    setIsVideoModal(false);
    setIsQueryModal(false);
  };
  const dataSource = [];
  lessonDetails?.video?.map((video) => {
    dataSource.push({
      key: video?._id,
      id: <strong>{video?.sequence}</strong>,
      name: video?.name,
      url: (
        <a href={video?.url} target="_blank" rel="noreferrer">
          {video?.url}
        </a>
      ),
      length: convertIntoHHMMSS(video?.length),
      views: <strong>{video?.viewCount}</strong>,
      actions: (
        <Space size="middle" className="deleteBtn">
          <span>
            <img
              className="cursor-pointer"
              src="/icons/bin-icon.svg"
              alt=""
              onClick={() => confirmDeleteVideo(video)}
            />
          </span>
        </Space>
      ),
    });
  });

  const columns = [
    {
      title: "Sequence No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Video name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Video Length",
      dataIndex: "length",
      key: "leng",
    },
    {
      title: "Views Count",
      dataIndex: "views",
      key: "views",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  // Query
  const querydataSource = [];
  lessonDetails?.code?.map((query) => {
    querydataSource.push({
      key: query?._id,
      id: <strong>{query?.sequence}</strong>,
      comment: (
        <p className="address">
          {query?.comment?.length > 50 ? (
            <span>{query?.comment?.slice(0, 50)}...</span>
          ) : (
            <span>{query?.comment}</span>
          )}
        </p>
      ),
      code: (
        <Space size="middle">
          <span>
            <strong
              className="viewBtn cursor-pointer"
              onClick={() => {
                setQueryCode(query?.rawCode);
                setIsShowCodeModal(true);
              }}
            >
              View code
            </strong>
          </span>
        </Space>
      ),
      actions: (
        <Space size="middle" className="deleteBtn">
          <span>
            <img
              className="cursor-pointer"
              src="/icons/bin-icon.svg"
              alt=""
              onClick={() => confirmDeleteQuery(query)}
            />
          </span>
        </Space>
      ),
    });
  });

  const querycolumns = [
    {
      title: "Sequence No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Query Comments",
      dataIndex: "comment",
      key: "comment",
      width: "200",
    },
    {
      title: "Query Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  const onReset = () => {
    form.resetFields();
  };


  const attachmentProps = {
    accept: "application/pdf,application/vnd.ms-excel,application/*,image/*",
    disabled: lessonID ? false : true,
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: true,
    onChange: (info) => {
      const formData = new FormData();
      formData.append("file", info?.file);
      formData.append("name", info?.file?.name);
      formData.append("size", info?.file?.size);
      formData.append("type", info?.file?.type);
      formData.append("azureFolder", currentSelectedCourseName);
      fileUpload(info?.file,  null, null, currentSelectedCourseName, "allType");
      dispatch(addLessonFile({ courseID: courseId, lessonID, data: formData }));
    },
    beforeUpload: (file) => {
      return false;
    }
  };

  const onRelatedTopicSelect = (value, option) => {
    setRelatedTopics((prevArray) => {
      const newArray = [...prevArray];

      if (option.position >= 0 && option.position < newArray.length) {
        newArray[option.position] = value;
      } else if (option.position === newArray.length) {
        newArray.push(value);
      } else {
        newArray.push(value);
      }

      // Return the new array to update the state
      return newArray;
    });
  };

  // copy text
  const copyText = () => {
    const text = urlRef.current.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  const onTopicSubmit = async (values) => {
    const data = {
      chapterName: values.chapterName,
      name: values?.topicName,
      sequence: values?.sequenceNumber,
      desc: values?.description,
      publicVideos: publicVideos,
      publicFiles: publicFiles,
      contentURL: contentURL,
      relatedTopics: relatedTopics,
    };
    dispatch(addLesson({ courseID: courseId, data }));
  };
  const fetchPreSignedURL = async (file) => {
    fileUpload(file, setContentURL, setContentFile, currentSelectedCourseName, "Json");
  };
  return (
    <Wrapper>
      <UploadVideo
        courseId={courseId}
        lessonID={lessonID}
        uploadVideo={isVideoModal}
        setUploadVideo={handleCancel}
      />
      <UploadQuery
        form={queryForm}
        courseId={courseId}
        lessonID={lessonID}
        uploadQuery={isQueryModal}
        setUploadQuery={handleCancel}
      />
      <CustomModal
        title=""
        open={isShowCodeModal}
        onCancel={() => setIsShowCodeModal(false)}
      >
        <h1>Query Code</h1>
        <QueryCode>{queryCode}</QueryCode>
      </CustomModal>
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
          <span>Back to manage topics</span>
        </BackBtn>
        <InfoForm onFinish={onTopicSubmit} form={form} layout="vertical">
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomSelect
                    label={<h3>Chapter name</h3>}
                    name="chapterName"
                    rules={[rules]}
                  >
                    <Select
                      showSearch
                      placeholder="-- Select Chapter --"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={chaptersOption}
                    />
                  </CustomSelect>
                </Col>
                <Col span={12}></Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput
                    name="topicName"
                    rules={[rules]}
                    label={<h3>Topic name</h3>}
                  >
                    <Input />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput
                    name="sequenceNumber"
                    rules={[rules]}
                    label={<h3>Topic sequence number</h3>}
                  >
                    <Input />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }}>
                  <CustomInput
                    name="description"
                    rules={[rules]}
                    label={<h3>Topic description</h3>}
                  >
                    <TextArea rows={8} />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }}>
                  <div className="checkingArea">
                    <Checkbox
                      checked={publicVideos}
                      onClick={(e) => setPublicVideos(e.target.checked)}
                    >
                      Allow Public videos
                    </Checkbox>
                    <Checkbox
                      checked={publicFiles}
                      onClick={(e) => setPublicFiles(e.target.checked)}
                    >
                      Allow Public to Download files
                    </Checkbox>
                  </div>
                </Col>
                <CustomInput name="content" label={<h3>Content</h3>}>
                  <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <input
                      accept="application/JSON"
                      onChange={(e) => {
                        fetchPreSignedURL(e.target.files?.[0]);
                      }}
                      style={{ display: "none" }}
                      type="file"
                      ref={contentRef}
                    />

                    <Input
                      value={contentFile?.name ?? contentFile}
                      readOnly
                      onClick={() => {
                        contentRef.current.click();
                      }}
                    />
                  </Col>
                </CustomInput>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={16}>
                <Col xs={{ span: 24 }}>
                  <h3 className="mb-3">related topics</h3>
                </Col>
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                    <CustomSelect
                      label={<h3>Topic name</h3>}
                      name={`relatedChapter${item}`}
                    >
                      <Select
                        showSearch
                        placeholder="-- Select Chapter --"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={createrRelatedTopicOption(item)}
                        onChange={onRelatedTopicSelect}
                      />
                    </CustomSelect>
                  </Col>
                ))}
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <CustomBtn
                    htmlType="submit"
                    type="submit"
                    title="Save info"
                    loading={lessonLoading}
                    disable={lessonLoading}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </InfoForm>
        <div className="dataTable">
          <div className="uplaodArea">
            <h4>Videos List ({lessonDetails?.video?.length ?? 0})</h4>
            {lessonID && (
              <UploadBtn onClick={() => setIsVideoModal(true)}>
                Upload new video
              </UploadBtn>
            )}
          </div>
          <TableContainer dataSource={dataSource} columns={columns} />
        </div>
        <div className="dataTable">
          <div className="uplaodArea">
            <h4>Queries List ({lessonDetails?.code?.length ?? 0})</h4>
            {lessonID && (
              <UploadBtn onClick={() => setIsQueryModal(true)}>
                Add new query
              </UploadBtn>
            )}
          </div>
          <TableContainer dataSource={querydataSource} columns={querycolumns} />
        </div>
        <div className="dataTable">
          <div className="uplaodArea">
            <h4>attachments ({lessonDetails?.file?.length ?? 0}) </h4>
          </div>
          <UploadJson>
            {lessonDetails?.file?.map((file) => (
              <TxtFile key={file?._id}>
                <div className="fileCard">
                  <div className="cardHeader">
                    {/* <span>
                      <img src='/icons/pen-icon.svg' alt='' />
                    </span> */}
                    <span>
                      <img
                        src="/icons/bin-icon.svg"
                        alt=""
                        onClick={() => confirmDeleteFile(file)}
                      />
                    </span>
                  </div>
                  <div className="cardBody">
                    <div className="fileIcon">
                      <span>{file?.name.split(".")?.[1]}</span>
                    </div>
                    <h5>
                      {file?.name.split(".")?.[0]?.length > 5
                        ? file?.name.split(".")?.[0]?.substr(0, 5) +
                          "..." +
                          "." +
                          file?.name.split(".")?.[1]
                        : file?.name.split(".")?.[0] +
                          "." +
                          file?.name.split(".")?.[1]}
                    </h5>
                    <span>({bytesToMB(file?.size).toFixed(2)} MB)</span>
                  </div>
                </div>
                <div className="cardFooter">
                  <img src="/icons/copy-icon.svg" alt="" />
                  <Tooltip placement="right" title={copiedText}>
                    <p
                      onClick={() => {
                        setCopiedText("Copied!");
                        copyText();
                      }}
                    >
                      {copiedText}
                    </p>
                  </Tooltip>
                  <p className="hidden" ref={urlRef}>
                    {file?.url}
                  </p>
                </div>
              </TxtFile>
            ))}
            {lessonFileLoading ? (
              <div className="fileUploadLoader">
                <LoadingOutlined />
              </div>
            ) : (
              <Upload {...attachmentProps}>
                <HiPlus />
              </Upload>
            )}
          </UploadJson>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TopicDetails;
