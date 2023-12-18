import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { DatePicker, Form, Input, Select, Space, TimePicker } from "antd";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { Wrapper, TableContainer, AddBtn } from "../../../Forum/manageTopic/index.style.js";
import { addLiveClasses, getAllLiveClasses, removeLiveClass } from "../../../../redux/liveClassSlice";
import CustomPagination from "../../../../common/pagination";
import { antValidator, paginate } from "../../../../utils/helper";
import { CustomSelect } from "../../../../common/select/index.style.js";
import { InfoForm } from "../../../Forum/manageTopic/topicDetails/index.style.js";
import CustomBtn from "../../../../common/button";
import { getAdminCourses, getSingleCourse } from "../../../../redux/courseSlice";
import { CustomInput } from "../../../../common/input/index.style.js";
import { liveClassSchema } from "../../../../utils/validationSchema.js";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { getLecturerDetails, getLecturerList } from "../../../../redux/userSlice.js";
import { Scroller } from "../../../liveClasses/index.style.js";
import moment from "moment";

const AdminLiveClass = () => {
  const pageSize = 10;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [rules, setRules] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLecturer, setselectedLecturer] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { adminCourses } = useSelector((state) => state?.course);
  const { allLiveClasses, loading } = useSelector((state) => state?.liveClass);
  const { lecturerList, lecturerDetails } = useSelector((state) => state?.user);
  const { confirm } = Modal;

  useEffect(() => {
    dispatch(getAllLiveClasses());
  }, []);

  useEffect(() => {
    dispatch(getLecturerList());
    dispatch(getAdminCourses());
  }, [dispatch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const formatTimestamp = timestamp => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    setRules(antValidator(liveClassSchema));
  }, []);

  const courseOptions = adminCourses?.map(course => ({
    value: course?._id,
    label: course?.longName,
  })) || [];

  const lecturerOptions = lecturerList?.map(lecturer => ({
    value: lecturer?._id,
    label: lecturer?.name,
  })) || [];

  const liveClassArray = Array.isArray(allLiveClasses.results)
    ? allLiveClasses.results
    : [];
  
  const getStatusElement = (Status) => {
    const colorMap = {
      // "Class starting soon": "#00AC47",
      // "In Progress": "#E04F5F",
    };
    const colorStyle = colorMap[Status] || "#000000";
    return <span style={{ color: colorStyle }}>{Status}</span>;
  };

  const dataSource = paginate(liveClassArray, currentPage, pageSize)?.map((classItem) => {
    const studentsLength = classItem?.Student?.length || 0;
    const key = classItem?._id;
    const startdate = `${classItem?.istTime} - ${formatTimestamp(classItem?.classStartDate)}`;
    const className = classItem?.className;
    const lecturer = classItem?.Lecturer?.[0]?.name;
    const Status = getStatusElement(classItem?.classStatus) ;

    const actions = (
      <Space size="middle" className="deleteBtn">
        <Link to={`/admin/classdetails/${classItem?._id}`}>
          <img src="/icons/pen-icon.svg" alt="" />
        </Link>
        <Link
          onClick={() => {
            confirmDeleteLiveClass({ Id: classItem?._id });
          }}
        >
          <img src="/icons/bin-icon.svg" alt="" />
        </Link>
      </Space>
    );
    return { key, startdate, class: className, Status, students: studentsLength, lecturer, actions };
  });

  const confirmDeleteLiveClass = (Id) => {
    const confirmModal = confirm({
      title: "Do you want to delete this LiveClass?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        try {
          await dispatch(removeLiveClass(Id));
        } catch (error) {
          console.error("Error deleting LiveClass:", error);
        } finally {
          confirmModal.destroy();
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "Start date",
      dataIndex: "startdate",
      key: "startdate",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Students",
      dataIndex: "students",
      key: "students",
    },
    {
      title: "Lecturer",
      dataIndex: "lecturer",
      key: "lecturer",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  useEffect(() => {
    if (formSubmitted) {
      dispatch(getAllLiveClasses());
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  const handleFormReset = async () => {
    form.resetFields();
    setFormSubmitted(true);
    setIsModalVisible(false);
  };

 const handleLiveClassSubmit = (fieldsValue) => {
   const classId = fieldsValue?.classId;
   const className = fieldsValue?.className;
   const classStartDate =
     fieldsValue?.classStartDate?.format("MMMM DD, YYYY") ||
     moment().format("MMMM DD, YYYY"); 
   const estTime = fieldsValue?.estTime?.format("hh:mm A");
   const istTime = fieldsValue?.istTime?.format("hh:mm A");
   const classStatus = "Class starting soon";

   if (!loading) {
     const lecturerID = fieldsValue?.lecturerID;
     const lecturerName = lecturerDetails?.name;
     const linkedinLink = lecturerDetails?.linkedinLink || "https://www.linkedin.com/in/data-champion/";
     const specialisation = lecturerDetails?.specialisation || "Team Lead";
     const imageURL = lecturerDetails?.imageURL || "";
     if (
       classStartDate !== undefined &&
       lecturerName !== null &&
       lecturerName !== undefined &&
       lecturerName !== null
     ) {
       const formDataObject = {
         classId,
         className,
         classStartDate,
         estTime,
         istTime,
         classStatus,
         userId: lecturerID,
         name: lecturerName,
         linkedinLink,
         specialisation,
         imageURL,
         EnrollmentOpen:false,
         Classcompleted:false,
       };
       dispatch(addLiveClasses({ formDataObject, onReset: handleFormReset }));
     }
   }
 };


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
    height: "60px",
  };

  return (
    <Wrapper>
      <Container fluid>
        <div className="mainHeading">
          <div>
            <h3>Classes</h3>
            <span className="total">
              {liveClassArray.length} active classes
            </span>
          </div>
          <div>
            <AddBtn style={{ width: "150px" }} onClick={showModal}>
              <GoPlus />
              <span>
                <span> Add new live class</span>
              </span>
            </AddBtn>
            <Modal
              open={isModalVisible}
              onOk={handleModalOk}
              onCancel={handleModalCancel}
              footer={null}
              width={470}
              bodyStyle={{ height: 680 }}
              style={{top:"30px"}}
            >
              <InfoForm layout="vertical" style={{ borderBottom: '0px solid #ffff' }} onFinish={handleLiveClassSubmit} form={form}>
                <center style={paragraphStyle}>Add new Class </center>
                <Scroller
                  style={{
                    height: '470px',
                    overflow: 'auto',
                  }}
                >
                  <CustomInput name="className" rules={[rules]}>
                    <Input placeholder="Class Name" style={valueWidthStyle} />
                  </CustomInput>
                  <CustomInput name="classStartDate" rules={[rules]}>
                    <DatePicker placeholder="Class Start Date" style={valueWidthStyle} format="MMMM DD, YYYY" />
                  </CustomInput>
                  <CustomInput name="istTime" rules={[rules]}>
                    <TimePicker placeholder="istTime" style={valueWidthStyle} use12Hours format="hh:mm A" />
                  </CustomInput>
                  <CustomInput name="estTime" rules={[rules]}>
                    <TimePicker placeholder="estTime" style={valueWidthStyle} use12Hours format="hh:mm A" />
                  </CustomInput>
                  <CustomSelect name="classId" style={valueWidthStyle} rules={[rules]}>
                    <Select
                      key={selectedCourse}
                      showSearch
                      style={valueWidthStyle}
                      value={selectedCourse}
                      placeholder="-- Select Course --"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                      }
                      onChange={id => {
                        dispatch(getSingleCourse(id));
                        setSelectedCourse(id);
                      }}
                      options={courseOptions}
                    />
                  </CustomSelect>
                  <CustomSelect name="lecturerID" rules={[rules]}>
                    <Select
                      key={selectedLecturer}
                      showSearch
                      style={valueWidthStyle}
                      value={selectedLecturer}
                      placeholder="-- Select Lecturer --"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                      }
                      onChange={id => {
                        dispatch(getLecturerDetails(id));
                        setselectedLecturer(id);
                      }}
                      options={lecturerOptions}
                    />
                  </CustomSelect>
                </Scroller>
                <center>
                  <CustomBtn htmlType="submit" type="submit" title="Add" loading={loading} disable={loading} />
                </center>
              </InfoForm>
            </Modal>
          </div>
        </div>
        <TableContainer loading={loading} dataSource={dataSource} columns={columns} />
        {liveClassArray?.length > 10 ? (
          <CustomPagination
            current={currentPage}
            defaultPageSize={pageSize}
            total={liveClassArray?.length}
            onChange={(page) => {
              setCurrentPage(page);
            }}
          />
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default AdminLiveClass;
