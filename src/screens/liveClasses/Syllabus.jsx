import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Collapse } from "antd";
import { BsCheckLg, BsPlayCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Popup } from "./index.style";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import { getSingleCourse } from "../../redux/courseSlice";
import { getCourseLessons } from "../../redux/lessonSlice";

const { Panel } = Collapse;

export const Syllabus = ({ courseID }) => {
  const dispatch = useDispatch();
  const { lessonName } = useParams();
  const { singleCourse, courseLoading } = useSelector((state) => {
    return state.course;
  });
  const { courseLessons } = useSelector((state) => {
    return state.lesson;
  });
  const [currentLesson, setCurrentLesson] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setCurrentLesson({});
      setIsLoading(true);
      if (courseID) {
        dispatch(getSingleCourse(courseID));
        dispatch(getCourseLessons(courseID));
      }
      setIsLoading(false);
    };
    loadData();
  }, [dispatch, courseID]);


  useEffect(() => {
    if (courseLessons?.length > 0) {
      setCurrentLesson(
        courseLessons?.find((lesson) => lesson?.name === lessonName) || {}
      );
    }
  }, [courseLessons, lessonName]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Popup>
      {courseLoading ? (
        <LoadingSpinner />
      ) : singleCourse?.chapter?.length > 0 ? (
        <Collapse
          key={currentLesson?.chapterName}
          defaultActiveKey={currentLesson?.chapterName}
          accordion
          className="accordion"
        >
          {singleCourse.chapter.map((chapter, index) => {
            const filteredLessons = courseLessons?.filter(
              (item) => item?.chapterName === chapter?.name
            );

            return (
              <Panel
                key={chapter.name}
                header={
                  <div
                    className={`accordionBtn ${currentLesson?.chapterName === chapter.name
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
                      to={`/${singleCourse?.shortName}/${item?.chapterName}/${item?.name}`}
                      className={`allItems ${currentLesson?._id === item?._id ? "active" : ""
                        }`}
                      key={item._id}
                    >
                      <div className="items">
                        <div className="lesson-item">
                          <div className="lessonName">
                            <BsPlayCircleFill
                              className={`icon ${item.finished ? "playIcon" : ""
                                }`}
                            />
                            <span
                              className={`${item.finished ? "markedlesson" : "lesson"
                                }`}
                            >
                              {item.name.length > 60
                                ? item.name.substr(0, 60) + "..."
                                : item.name}
                              {item.finished ? (
                                <BsCheckLg className="checkIcon" />
                              ) : null}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <center style={{ color: "#ffffff30" }}>No Topic Found</center>
                )}
              </Panel>
            );
          })}
        </Collapse>
      ) : (
        <center>No Chapter Found</center>
      )}
    </Popup>
  );
};
