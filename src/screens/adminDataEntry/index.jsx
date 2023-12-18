import { Form, Checkbox, Col, Input, Row, Select, Space, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CustomBtn from "../../common/button";
import { TableContainer } from "../../common/customTable/index.style";
import { CustomInput } from "../../common/input/index.style";
import { CustomSelect } from "../../common/select/index.style";
import { AddChapter, EditChapter, TitleHeading, Wrapper } from "./index.style";
import { antValidator } from "../../utils/helper";
import { chaptertScheme } from "../../utils/validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { getAdminCourses, getSingleCourse } from "../../redux/courseSlice";
import {
  addChapter,
  removeChapter,
  updateChapter,
} from "../../redux/chapterSlice";
import { ExclamationCircleFilled } from "@ant-design/icons";
import CustomModal from "../../common/Modal";
import { Link } from "react-router-dom";

const { TextArea } = Input;
const { confirm } = Modal;

const DataEntry = () => {
  const [rules, setRules] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [publicVideos, setPublicVideos] = useState(false);
  const [publicFiles, setPublicFiles] = useState(false);
  const [updatePublicVideos, setUpdatePublicVideos] = useState(false);
  const [updatePublicFiles, setUpdatePublicFiles] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState({});

  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminCourses());
  }, []);

  useEffect(() => {
    editForm.setFieldsValue({
      chapterName: selectedChapter?.name,
      description: selectedChapter?.description,
      sequenceNumber: selectedChapter?.sequence,
    });
    setUpdatePublicVideos(selectedChapter?.publicVideos);
    setUpdatePublicFiles(selectedChapter?.publicFiles);
  }, [editForm, selectedChapter]);

  const store = useSelector((state) => state);
  const { adminCourses, singleCourse, courseLoading } = store.course;
  const { chapterLoading } = store.chapter;

  useEffect(() => {
    setSelectedCourse(adminCourses?.[0]?._id);
    if (adminCourses?.[0]?._id) {
      dispatch(getSingleCourse(adminCourses?.[0]?._id));
    }
  }, [adminCourses]);

  // delete course confirmation
  const confirmDeleteChapter = (chapter) => {
    confirm({
      title: "Do you Want to delete this chapter?",
      icon: <ExclamationCircleFilled />,
      // content: "Some descriptions",
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        const data = {
          courseId: selectedCourse,
          chapterId: chapter?._id,
          action: "remove",
        };
        await dispatch(removeChapter(data));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const courseOptions = [];
  adminCourses?.map((course) => {
    courseOptions.push({
      value: course?._id,
      label: course?.longName,
    });
  });

  const dataSource = [];
  singleCourse?.chapter?.map((chapter) => {
    dataSource.push({
      key: chapter?._id,
      id: chapter?._id,
      sequence: chapter?.sequence,
      name: <strong>{chapter?.name}</strong>,
      topics: chapter?.lessons,
      actions: (
        <Space size='middle' className='deleteBtn'>
          <Link
            onClick={() => {
              setSelectedChapter(chapter);
              setIsModalOpen(true);
            }}>
            <img src='/icons/pen-icon.svg' alt='' />
          </Link>
          <Link
            onClick={() => {
              confirmDeleteChapter(chapter);
            }}>
            <img src='/icons/bin-icon.svg' alt='' />
          </Link>
        </Space>
      ),
    });
  });

  const columns = [
    {
      title: "Sequence No.",
      dataIndex: "sequence",
      key: "sequence",
    },
    {
      title: "Chapter name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number of topics",
      dataIndex: "topics",
      key: "topics",
    },

    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  useEffect(() => {
    setRules(antValidator(chaptertScheme));
  }, []);

  const onReset = () => {
    form.resetFields();
    setPublicFiles(false);
    setPublicVideos(false);
  };

  // add chapter
  const onChapterSubmit = async (values) => {
    const chapterData = {
      courseId: selectedCourse,
      name: values?.chapterName,
      sequence: Number(values?.sequenceNumber),
      description: values?.description,
      publicVideos: publicVideos,
      publicFiles: publicFiles,
      action: "add",
    };
    dispatch(addChapter({ chapterData, onReset }));
  };

  // update chapter
  const onEditChapterSubmit = async (values) => {
    const chapterData = {
      courseId: selectedCourse,
      chapterId: selectedChapter?._id,
      name: values?.chapterName,
      description: values?.description,
      sequence: Number(values?.sequenceNumber),
      publicVideos: updatePublicVideos,
      publicFiles: updatePublicFiles,
      action: "edit",
    };
    dispatch(updateChapter({ chapterData, setIsModalOpen }));
  };

  return (
    <Wrapper>
      <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <EditChapter onFinish={onEditChapterSubmit} form={editForm}>
          <h3>Update your chapter</h3>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput name='chapterName' rules={[rules]}>
                    <Input placeholder='Chapter name' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput name='sequenceNumber' rules={[rules]}>
                    <Input placeholder='Sequence number' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <CustomInput name='description' rules={[rules]}>
                    <TextArea rows={8} placeholder='Description' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <div className='checkingArea'>
                    <Checkbox
                      checked={updatePublicVideos}
                      onClick={(e) => setUpdatePublicVideos(e.target.checked)}>
                      Allow Public to view videos
                    </Checkbox>
                    <Checkbox
                      checked={updatePublicFiles}
                      onClick={(e) => setUpdatePublicFiles(e.target.checked)}>
                      Allow Public to Download files
                    </Checkbox>{" "}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <CustomBtn
                    htmlType='submit'
                    type='submit'
                    title='update'
                    loading={chapterLoading}
                    disable={chapterLoading}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </EditChapter>
      </CustomModal>
      <Container fluid>
        <TitleHeading>
          <div>
            <h3>Chapters</h3>
            <p>{singleCourse?.chapter?.length ?? 0} total chapters</p>
          </div>
          <div className='selectData'>
            <CustomSelect>
              <Select
                key={selectedCourse}
                showSearch
                placeholder='-- Select Course --'
                defaultValue={selectedCourse}
                optionFilterProp='children'
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                onChange={(id) => {
                  dispatch(getSingleCourse(id));
                  setSelectedCourse(id);
                }}
                options={courseOptions}
              />
            </CustomSelect>
          </div>
        </TitleHeading>
        <TableContainer
          loading={courseLoading}
          dataSource={dataSource}
          columns={columns}
        />
        <AddChapter onFinish={onChapterSubmit} form={form}>
          <h3>Add new Chapter</h3>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 20 }}>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput name='chapterName' rules={[rules]}>
                    <Input placeholder='Chapter name' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput name='sequenceNumber' rules={[rules]}>
                    <Input placeholder='Sequence number' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <CustomInput name='description' rules={[rules]}>
                    <TextArea rows={8} placeholder='Description' />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <div className='checkingArea'>
                    <Checkbox
                      checked={publicVideos}
                      onClick={(e) => setPublicVideos(e.target.checked)}>
                      Allow Public to view videos
                    </Checkbox>
                    <Checkbox
                      checked={publicFiles}
                      onClick={(e) => setPublicFiles(e.target.checked)}>
                      Allow Public to Download files
                    </Checkbox>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                  <CustomBtn
                    htmlType='submit'
                    type='submit'
                    title='submit'
                    loading={chapterLoading}
                    disable={chapterLoading}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </AddChapter>
      </Container>
    </Wrapper>
  );
};

export default DataEntry;
