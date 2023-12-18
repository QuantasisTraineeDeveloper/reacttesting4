import React, { useState, useEffect } from 'react';
import { Row, Col, Progress, Modal } from 'antd';
import { Container, StyledCard, Btn, Duration, PopupData, Scroller } from './index.style';
import LoadingSpinner from '../../common/Loading/LoadingSpinner';
import { Syllabus } from './Syllabus';
import { useSelector, useDispatch } from 'react-redux';
import { joinLiveClass } from '../../redux/liveClassSlice';

const formatDate = (classStartDate) => {
  const date = new Date(classStartDate);
  const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const linkedName = (inputUrl) => inputUrl.match(/\/in\/([^/]+)/)?.[1] || null;

const extractLiveClassValues = (course) => ({
  ...course,
  courseLink: course.courseLink || '',
  classDuration: course.classDuration || '46 minutes',
  className: course.className || '',
  description: course.description || '',
  lecturer: course.Lecturer && course.Lecturer.length > 0 ? course.Lecturer[0] : null,
});

const getAnimationUrl = (success) => (
  <iframe
    title={success ? 'Success Animation' : 'Failed Animation'}
    style={{ width: '240px', height: '240px' }}
    src={`https://lottie.host/?file=${success ? '5a69902b-74be-429c-9884-1d3e74288a17/vQuKAMCsam.json' : 'b671f596-f025-4ca0-a315-edbda5b11554/c85qHdck6c.json'}`}
  />
);

const ModalComponent = ({ type, visible, style, handleModal, children, title, width }) => (
  <Modal
    open={visible}
    onOk={handleModal(type, 'ok')}
    onCancel={handleModal(type, 'cancel')}
    footer={null}
    width={width}
    style={style}
    bodyStyle={{ height: '470px' }}
  >
    <PopupData>
      <h3 className="text-center custom-heading">{title}</h3>
      {children}
    </PopupData>
  </Modal>
);

const ButtonWithLoading = ({ loading, disabled, onClick, children }) => {
  const isLoading = loading && disabled;
  return (
    <Btn onClick={onClick} htmlType="submit" type="submit" title="Join Class" loading={isLoading} disabled={!disabled}>
      {children}
    </Btn>
  );
};

const LiveClassesCard = ({ liveClass, userProfile }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [modalState, setModalState] = useState({ syllabus: false, joinClass: false, courseId: null, className: null });
  const { loading, enrollingLiveClass } = useSelector((state) => state?.liveClass);
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    if (liveClass?.length > 0) setLoading(false);
  }, [liveClass]);

  const showModal = (modalType, course) => {
    setModalState({ ...modalState, [modalType]: true, courseId: course._id, className: course.className });
    setLoadingStates({ ...loadingStates, [course._id]: true });
    if (modalType === 'joinClass') enrolling(course);
  };

  const onReset = async () => {
    setLoadingStates({});
  };

  const enrolling = (course) => {
    const { _id, classId } = course;
    const dataObject = { liveClassId: _id, courseId: classId };
    dispatch(joinLiveClass({ dataObject, onReset }));
  };

  const handleModal = (modalType, action) => () => {
    if (action === 'ok' || action === 'cancel') setModalState({ ...modalState, syllabus: false, joinClass: false });
  };

  const renderJoinClassButton = (course) => {
    const isDisabled = userProfile?.course?.some((e) => e.courseId === course.classId) || !true;
    const isEnrolled = course?.Student?.some((e) => e.userId === userProfile._id);
    const isCurrentLoading = loadingStates[course._id];
    return (
      <ButtonWithLoading
        onClick={() => showModal('joinClass', course)}
        disabled={isDisabled}
        loading={isCurrentLoading}
      >
        {isEnrolled ? 'Enrolled' : 'Join Class'}
      </ButtonWithLoading>
    );
  };

  const renderEnrollmentResult = () => {
    if (loading) return <LoadingSpinner />;
    const success = enrollingLiveClass && [200, 201, 400].includes(enrollingLiveClass.code);

    return (
      <center>
        <div>{getAnimationUrl(success)}</div>
        <h3 className="text-center custom-heading pb-3">{success ? 'Enrollment Successful.' : 'Enrollment Failed.'}</h3>
        <p className="pb-4">
          {success ? (
            <>
              You have been successfully enrolled in the <strong>{modalState.className}</strong> class. You can join this class now.
            </>
          ) : (
            'Ops. Enrollment to this class could not be performed at the moment. Please try again later.'
          )}
        </p>
        <div className="d-flex row justify-content-center">
          {success ? (
            <ButtonWithLoading
              disabled={userProfile?.course?.some((e) => e.courseId === modalState.courseId) || true}
            >
              Join Class
            </ButtonWithLoading>
          ) : (
            <Btn type="primary">Continue</Btn>
          )}
        </div>
      </center>
    );
  };

  return (
    <Container>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <div className="row gy-5 mb-5 pt-5">
              {liveClass.map((course, index) => {
                const extractedValues = extractLiveClassValues(course);
                return (
                  <div key={index} className="col-12">
                    <StyledCard className="mt-1 mb-1 pt-1 pb-1" hoverable style={{ width: '100%' }}>
                      <Row gutter={16}>
                        <Col xs={12} lg={4} className="order-1 order-sm-1 order-lg-1 d-flex flex-column align-items-center justify-content-center">
                          <img className="course-image" alt={''} src={extractedValues.lecturer.imageURL} />
                          {extractedValues.lecturer && (
                            <div className="mb-3 d-flex flex-column align-items-center">
                              <p className="mb-1 lecturer-name">{extractedValues.lecturer.name}</p>
                              <p className="mb-1 lecturer-specialisation">{extractedValues.lecturer.specialisation}</p>
                              <a href={extractedValues.lecturer.linkedinLink} target="_blank" rel="noopener noreferrer" className="mt-4 d-flex align-items-center justify-content-center lecturer-link">
                                <img src="/icons/lc_linkedin.svg" alt="LinkedIn" />
                                <span className="lecturerlink">/{linkedName(extractedValues.lecturer.linkedinLink)}</span>
                              </a>
                            </div>
                          )}
                        </Col>
                        <Col className="order-2 order-sm-2 order-lg-3" xs={12} lg={6}>
                          <ul style={{ padding: '0px', paddingLeft: '16px' }} className="d-lg-none d-block">
                            <li className="class-status" style={{ color: extractedValues.classStatus === 'In Progress' ? '#00AC47' : undefined }}>
                              {extractedValues.classStatus}
                            </li>
                          </ul>
                          <div className="showInfo">
                            {extractedValues.classStatus === 'Class starting soon' && (
                              <>
                                <p className="students-joined">
                                  {extractedValues && extractedValues.minimumStudentRequired
                                    ? `${extractedValues?.Student?.length || 0}/${extractedValues.minimumStudentRequired} Students Joined`
                                    : 'Students Joined Information Not Available'}
                                </p>
                                {extractedValues && extractedValues.minimumStudentRequired && (
                                  <div className="class-progress">
                                    <Progress
                                      percent={(extractedValues.Student?.length / extractedValues.minimumStudentRequired) * 100}
                                      status="active"
                                      strokeColor={{ "0%": "#D39331", "100%": "#D39331" }}
                                      size="small"
                                      showInfo={false}
                                    />
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                          <div className="class-links">
                            <div onClick={() => showModal('syllabus', extractedValues)}>
                              <img src="/icons/lc_material-symbols.svg" alt="Syllabus" style={{ paddingBottom: '1px' }} />
                              <span className="class-link">Syllabus</span>
                            </div>
                            <ModalComponent
                              type="syllabus"
                              visible={modalState.syllabus}
                              handleModal={handleModal}
                              title="Syllabus"
                              width={480}
                              style={{ top: '30px' }}
                            >
                              <Scroller style={{ height: "300px", overflow: "auto" }}>
                                {modalState.syllabus && modalState.courseId && <Syllabus courseID={modalState.courseId} />}
                              </Scroller>
                              <div className="d-flex row justify-content-center">
                                <Btn type="primary">Enroll now</Btn>
                              </div>
                            </ModalComponent>
                          </div>
                          <div className="class-links">
                            <a href={extractedValues.courseLink}>
                              <img src="/icons/lc_menu-book.svg" alt="" style={{ paddingBottom: '1px' }} />
                              <span className="class-link">Course Detail</span>
                            </a>
                          </div>
                          {renderJoinClassButton(extractedValues)}
                          <ModalComponent
                            type="joinClass"
                            visible={modalState.joinClass}
                            handleModal={handleModal}
                            width={440}
                            style={{ top: '50px' }}
                          >
                            {renderEnrollmentResult()}
                          </ModalComponent>
                        </Col>
                        <Col className="order-3 order-sm-3 order-lg-2" xs={24} lg={14}>
                          <ul className="d-none d-lg-block">
                            <li className="class-status" style={{ color: extractedValues.classStatus === 'In Progress' ? '#00AC47' : undefined }}>
                              {extractedValues.classStatus}
                            </li>
                          </ul>
                          <div className="class-details">
                            <p className="class-title">{extractedValues.className}</p>
                            <p className="class-description">{extractedValues.description}</p>
                            <Duration>
                              <p>
                                <img src="/icons/clock-icon.svg" alt="Clock" />
                                <span className="class-duration">{extractedValues.classDuration}</span>
                              </p>
                            </Duration>
                            <div className="class-time">
                              <p className="class-time-est">
                                {extractedValues.estTime ? `${extractedValues.estTime}, ` : ''}
                                {formatDate(extractedValues.classStartDate)} EST
                              </p>
                              <span className="class-time-ist">
                                <ul className="ist-list">
                                  <li className="ist-item">
                                    {extractedValues.istTime ? `${extractedValues.istTime}, ` : ''}
                                    {formatDate(extractedValues.classStartDate)} IST
                                  </li>
                                </ul>
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </StyledCard>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LiveClassesCard;
