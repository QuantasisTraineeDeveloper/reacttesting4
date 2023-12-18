import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { Space } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  Wrapper,
  TableContainer,
} from "../../../Forum/manageTopic/index.style.js";
import {
  getSingleLiveClasses,
  updateLessonCompletion,
  updateStudentData,
} from "../../../../redux/liveClassSlice";
import CustomPagination from "../../../../common/pagination";
import { antValidator, paginate } from "../../../../utils/helper";
import { Form, Checkbox, Col, Input, Row, Select } from "antd";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomLabel } from "../../../../common/input/index.style";
import { CustomSelect } from "../../../../common/select/index.style";
import { BackBtn } from "../../../Forum/forumlList/threadQuestion/index.style";
import { InfoForm } from "../../../Forum/manageTopic/topicDetails/index.style";
import { DatePicker } from "antd";
import { getAdminCourses } from "../../../../redux/courseSlice";
import { Modal } from "antd";
import CustomBtn from "../../../../common/button/index.jsx";
import moment from "moment";
import { Scroller } from "../../../liveClasses/index.style.js";
import {
  LessonCompletionCheck,
  updateStudentCheck,
} from "../../../../utils/validationSchema.js";

// const { Option } = Select;
const AdminClassDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [editStudentForm] = Form.useForm();
  const { classId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [classCompleted, setClassCompleted] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [isModalSingleClassVisible, setIsModalSingleClassVisible] =
    useState(false);
  const [isModalStudentVisible, setIsModalStudentVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSyllabus, setselectedSyllabus] = useState(null);
  const { singleLiveClasses, loading } = useSelector(
    (state) => state?.liveClass
  );
  const { adminCourses } = useSelector((state) => state?.course);
  const [currentPageSyllabus, setCurrentPageSyllabus] = useState(1);
  const [currentPageStudent, setCurrentPageStudent] = useState(1);
  const [updateLessonRules, setUpdateLessonRules] = useState({});
  const [updateStudentnRules, setUpdateStudentnRules] = useState({});
  const pageSizeSyllabus = 10;
  const pageSizeStudent = 10;
  const formRef = useRef(null);

  const handleCheckboxChange = (e) => {
    setClassCompleted(e.target.checked);
  };

  useEffect(() => {
    dispatch(getAdminCourses());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (classId) {
          await dispatch(getSingleLiveClasses(classId));
          if (singleLiveClasses && adminCourses?.[0]?._id) {
            setSelectedCourse(singleLiveClasses.classId);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [classId, adminCourses, dispatch]);

  const courseOptions =
    adminCourses?.map((course) => ({
      value: course?._id,
      label: course?.longName,
    })) || [];

  const formatTimestamp = (timestamp) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  const handleDateChange = (date, dateString) => {
    console.log(formatTimestamp(date, dateString));
  };

  const studentHandleEditClick = (formattedStudentData) => {
    setSelectedStudent(formattedStudentData);
    showModal("student");
  };

  const syllabusHandleEditClick = (formattedSyllabusData) => {
    setselectedSyllabus(formattedSyllabusData);
    showModal("singleClass");
  };

  useEffect(() => {
    if (selectedStudent) {
      editStudentForm.setFieldsValue({
        _id: selectedStudent?.classId || null,
        userId: selectedStudent?.userId || null,
        name: selectedStudent?.name || "",
        membershipType: selectedStudent?.membershipType || "",
        courseReviewer: selectedStudent?.courseReviewer || "",
        internshipReviewer: selectedStudent?.internshipReviewer || "",
      });
    }
  }, [editStudentForm, selectedStudent]);

  useEffect(() => {
    if (selectedSyllabus) {
      const formattedDate = moment(
        selectedSyllabus.completedDate,
        "MMMM DD, YYYY"
      );
      formRef.current?.setFieldsValue({
        _id: selectedSyllabus._id || null,
        livId: selectedSyllabus.livId || null,
        courseId: selectedSyllabus?.courseId || null,
        chapterId: selectedSyllabus?.chapterId || null,
        lessonId: selectedSyllabus.lessonId || null,
        completedFlag: setClassCompleted(selectedSyllabus.completedFlag),
        completedDate: formattedDate,
      });
    }
  }, [formRef, selectedSyllabus]);

  useEffect(() => {
    setUpdateLessonRules(antValidator(LessonCompletionCheck));
    setUpdateStudentnRules(antValidator(updateStudentCheck));
  }, []);

  const showModal = (modalType) => {
    if (modalType === "singleClass") {
      setIsModalSingleClassVisible(true);
    } else if (modalType === "student") {
      setIsModalStudentVisible(true);
    }
  };

  const handleModalOk = (modalType) => {
    if (modalType === "singleClass") {
      setIsModalSingleClassVisible(false);
    } else if (modalType === "student") {
      setIsModalStudentVisible(false);
      setSelectedStudent(null);
    }
  };

  const handleModalCancel = (modalType) => {
    if (modalType === "singleClass") {
      setIsModalSingleClassVisible(false);
    } else if (modalType === "student") {
      setIsModalStudentVisible(false);
      setSelectedStudent(null);
    }
  };

  const getStatusElement = (completedFlag) => {
    const colorStyle = completedFlag ? "#00AC47" : "#E04F5F";
    const status = completedFlag ? "Complete" : "Incomplete";
    return <span style={{ color: colorStyle }}>{status}</span>;
  };

  const singleLiveClass = Array.isArray(singleLiveClasses)
    ? singleLiveClasses
    : [].concat(singleLiveClasses).filter(Boolean);

  const renderSyllabusDataSource = () => {
    return singleLiveClass?.flatMap((classItem, index) =>
      (classItem?.courseData || []).flatMap(
        ({ courseId, chapterName, chapterId, lessons }) =>
          (lessons || []).map(
            ({
              _id: flagId,
              lessonId,
              lessonName,
              completedFlag,
              completedDate,
            }) => {
              const formattedSyllabusData = {
                key: `syllabus_${index}_${courseId}_${lessonId}`,
                _id: flagId,
                livId: classItem?._id,
                courseId,
                chapterId,
                lessonId,
                chapter: classItem?.className,
                date: formatTimestamp(classItem?.classStartDate),
                chapterName,
                lessonName,
                completedFlag,
                completedDate: formatTimestamp(completedDate),
                Status: getStatusElement(completedFlag),
                actions: (
                  <Space size="middle" className="deleteBtn">
                    <Link
                      onClick={() =>
                        syllabusHandleEditClick(formattedSyllabusData)
                      }
                    >
                      <img src="/icons/pen-icon.svg" alt="" />
                    </Link>
                  </Space>
                ),
              };
              return formattedSyllabusData;
            }
          )
      )
    );
  };

  const studentDataSource = singleLiveClass.flatMap((classData) => {
    return (classData.Student || []).map((studentData) => {
      const formattedStudentData = {
        key: `student_${studentData.userId}`,
        classId: classData._id,
        userId: studentData.userId,
        name: studentData?.name || "",
        email: studentData?.email || "",
        phone: studentData?.number || "",
        membershipType: studentData?.membershipType || "",
        endDate: formatTimestamp(studentData?.endDate) || "",
        courseReviewer: studentData?.courseReviewer || "",
        internshipReviewer: studentData?.internshipReviewer || "",
        actions: (
          <Space size="middle" className="deleteBtn">
            <Link onClick={() => studentHandleEditClick(formattedStudentData)}>
              <img src="/icons/pen-icon.svg" alt="" />
            </Link>
            <Link>
              <img src="/icons/bin-icon.svg" alt="" />
            </Link>
          </Space>
        ),
      };
      return formattedStudentData;
    });
  });

  const syllabusColumns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Topic", dataIndex: "lessonName", key: "lessonName" },
    { title: "Chapter", dataIndex: "chapterName", key: "chapterName" },
    { title: "Status", dataIndex: "Status", key: "status" },
    { title: "", dataIndex: "actions", key: "actions" },
  ];

  const studentColumns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title: "Membership type",
      dataIndex: "membershipType",
      key: "membershipType",
    },
    { title: "End date", dataIndex: "endDate", key: "endDate" },
    {
      title: "Course Reviewer",
      dataIndex: "courseReviewer",
      key: "courseReviewer",
    },
    {
      title: "Internship reviewer",
      dataIndex: "internshipReviewer",
      key: "internshipReviewer",
    },
    { title: "", dataIndex: "actions", key: "actions" },
  ];

  const paragraphStyle = {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "40px",
    letterSpacing: "0em",
    color: "#000000",
    marginBottom: "12px",
  };

  const valueWidthStyle = {
    width: "100%",
    color: "#313131",
    height: "65px",
  };
  const InfoFormStyle = {
    borderBottom: "0px solid #fffff",
  };

  const handleFormReset = async () => {
    setSelectedStudent(null);
    setIsModalStudentVisible(false);
    setIsModalSingleClassVisible(false);
  };

  const onStudentHandleSubmit = (values) => {
    const updatedData = {
      _id: values?._id,
      userId: values?.userId,
      newData: {
        name: values?.name,
        membershipType: values?.membershipType,
        courseReviewer: values?.courseReviewer,
        internshipReviewer: values?.internshipReviewer,
      },
    };
    dispatch(
      updateStudentData({ updatedData, classId, onReset: handleFormReset })
    );
  };

  const onLessonCompletionHandleSubmit = (values) => {
    const formattedDate = values?.completedDate?.format("MMMM DD, YYYY");
    const updatedData = {
      _id: values?._id,
      livId: values?.livId,
      courseId: values?.courseId,
      chapterId: values?.chapterId,
      lessonId: values?.lessonId,
      completedDate: formattedDate,
      completedFlag: classCompleted,
    };
    console.log(updatedData);
    dispatch(
      updateLessonCompletion({ updatedData, classId, onReset: handleFormReset })
    );
  };

  const syllabusDataSource = renderSyllabusDataSource();
  const totalSyllabus = syllabusDataSource?.length || 0;
  const totalStudents = singleLiveClasses?.Student?.length || 0;
  const currentVisibleSyllabus = paginate(
    syllabusDataSource,
    currentPageSyllabus,
    pageSizeSyllabus
  );
  const currentVisibleStudents = paginate(
    studentDataSource,
    currentPageStudent,
    pageSizeStudent
  );

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
          <span>Back to Classes list</span>
        </BackBtn>
        <InfoForm
          style={{ borderBottom: "2px solid #fff" }}
          onFinish={""}
          form={form}
          layout="vertical"
        >
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <Row gutter={16}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput label={<h3>Class name</h3>}>
                    {syllabusDataSource.length > 0 && (
                      <Input
                        placeholder={syllabusDataSource[0]?.chapter || ""}
                        disabled
                      />
                    )}
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <CustomInput label={<h3>Starting date</h3>}>
                    <DatePicker
                      disabled
                      style={{ width: "100%", maxHeight: "60px" }}
                      placeholder={formatTimestamp(
                        syllabusDataSource.length > 0
                          ? syllabusDataSource[0].date
                          : ""
                      )}
                      renderExtraFooter={() => "Date & Time"}
                      onChange={handleDateChange}
                      format="MMMM DD, YYYY"
                    />
                  </CustomInput>
                </Col>
                <Col xs={{ span: 24 }}>
                  <div className="checkingArea">
                    <Checkbox
                    // checked={classCompleted}
                    // onClick={(e) => setClassCompleted(e.target.checked)}
                    >
                      Class completed
                    </Checkbox>
                    <Checkbox
                      checked={enrollmentOpen}
                      onClick={(e) => setEnrollmentOpen(e.target.checked)}
                    >
                      Enrollment open
                    </Checkbox>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </InfoForm>
        <div className="mainHeading">
          <div>
            <h3 className="mt-3 mb-2">Syllabus</h3>
          </div>
          <div>
            <CustomSelect>
              <Select
                key={selectedCourse}
                showSearch
                placeholder="-- Select Course --"
                defaultValue={selectedCourse}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                disabled
                onChange={(id) => {
                  dispatch(getSingleLiveClasses(id));
                  setSelectedCourse(id);
                  navigate(`/admin/classdetails/${id}`);
                }}
                options={courseOptions}
              />
            </CustomSelect>
          </div>
        </div>
        <TableContainer
          loading={loading}
          dataSource={currentVisibleSyllabus}
          columns={syllabusColumns}
        />
        {totalSyllabus > 10 ? (
          <CustomPagination
            current={currentPageSyllabus}
            defaultPageSize={pageSizeSyllabus}
            total={totalSyllabus}
            onChange={(page) => setCurrentPageSyllabus(page)}
          />
        ) : null}
        <Modal
          open={isModalSingleClassVisible}
          onOk={() => handleModalOk("singleClass")}
          onCancel={() => handleModalCancel("singleClass")}
          footer={null}
          width={420}
          bodyStyle={{ height: 350 }}
        >
          <InfoForm
            layout="vertical"
            ref={formRef}
            style={InfoFormStyle}
            onFinish={onLessonCompletionHandleSubmit}
          >
            <center style={paragraphStyle}>Edit Topic</center>
            <CustomInput name="_id" hidden>
              <Input />
            </CustomInput>
            <CustomInput name="livId" hidden>
              <Input />
            </CustomInput>
            <CustomInput name="courseId" hidden>
              <Input />
            </CustomInput>
            <CustomInput name="chapterId" hidden>
              <Input />
            </CustomInput>
            <CustomInput name="lessonId" hidden>
              <Input />
            </CustomInput>
            <CustomLabel
              label="Completed Date"
              name="completedDate"
              rules={[updateLessonRules]}
            >
              <DatePicker
                placeholder="Completed Date"
                style={valueWidthStyle}
                format="MMMM DD, YYYY"
              />
            </CustomLabel>
            <CustomInput
              className="checkingArea"
              name="completedFlag"
              rules={[updateLessonRules]}
            >
              <div>
                <Checkbox
                  checked={classCompleted}
                  onClick={handleCheckboxChange}
                >
                  Class completed
                </Checkbox>
              </div>
            </CustomInput>
            <center>
              <CustomBtn
                htmlType="submit"
                type="submit"
                title="Save"
                loading={loading}
                disable={loading}
              />
            </center>
          </InfoForm>
        </Modal>
      </Container>
      {singleLiveClasses?.Student?.length > 0 && (
        <Container fluid>
          <div className="mainHeading mt-5">
            <div>
              <h3 className="mt-4 mb-3">Students</h3>
            </div>
          </div>
          <TableContainer
            loading={loading}
            dataSource={currentVisibleStudents}
            columns={studentColumns}
          />
          {totalStudents > 10 ? (
            <CustomPagination
              current={currentPageStudent}
              pageSize={pageSizeStudent}
              total={totalStudents}
              onChange={(page) => {
                setCurrentPageStudent(page);
              }}
            />
          ) : null}
          <Modal
            open={isModalStudentVisible}
            onOk={() => handleModalOk("student")}
            onCancel={() => handleModalCancel("student")}
            footer={null}
            width={450}
            style={{ top: "50px" }}
            bodyStyle={{ height: 590 }}
          >
            <InfoForm
              layout="vertical"
              style={InfoFormStyle}
              form={editStudentForm}
              onFinish={onStudentHandleSubmit}
            >
              <center style={paragraphStyle}>Edit Student</center>
              <Scroller style={{ height: "370px", overflow: "auto" }}>
                <CustomInput name="_id" hidden>
                  <Input />
                </CustomInput>
                <CustomInput name="userId" hidden>
                  <Input />
                </CustomInput>
                <CustomLabel
                  label="Student name"
                  name="name"
                  rules={[updateStudentnRules]}
                >
                  <Input placeholder="Student name" style={valueWidthStyle} />
                </CustomLabel>
                <CustomLabel
                  label="Membership type"
                  name="membershipType"
                  rules={[updateStudentnRules]}
                >
                  <Input
                    placeholder="Membership type"
                    style={valueWidthStyle}
                  />
                </CustomLabel>
                <CustomLabel
                  label="Course Reviewer"
                  name="courseReviewer"
                  rules={[updateStudentnRules]}
                >
                  <Input
                    placeholder="Course Reviewer"
                    style={valueWidthStyle}
                  />
                </CustomLabel>
                <CustomLabel
                  label="Internship Reviewer"
                  name="internshipReviewer"
                  rules={[updateStudentnRules]}
                >
                  <Input
                    placeholder="Internship Reviewer"
                    style={valueWidthStyle}
                  />
                </CustomLabel>
              </Scroller>
              <CustomInput>
                <center>
                  <CustomBtn
                    htmlType="submit"
                    type="submit"
                    title="Save"
                    loading={loading}
                    disable={loading}
                  />
                </center>
              </CustomInput>
            </InfoForm>
          </Modal>
        </Container>
      )}
    </Wrapper>
  );
};

export default AdminClassDetails;
