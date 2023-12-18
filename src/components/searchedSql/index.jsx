import { Col, Row } from "antd";
import React from "react";
import { searchsqlcardsdata } from "../../assets/data/allData";
import CourseSearchSql from "../cards/courseSearchSql";
import { Content, Wrapper } from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRandomCourse } from "../../redux/courseSlice";
import { Link } from "react-router-dom";

const SearchedSql = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomCourse());
  }, []);

  const { randomCourse, randomCourseLoading, imageURLUpdateCourseArray } = useSelector(
    (store) => store.course
  );

  console.log("imageURLUpdateCourseArray, ", imageURLUpdateCourseArray);
 const updatedRandomCourses = randomCourse.map((item1) => {
  const temparray = imageURLUpdateCourseArray.find((item2) => item2._id === item1._id);
  if(temparray){
    return {...item1, imageURL: temparray.imageURL};
  }
  return item1
});
  return (
    <Wrapper>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 2 }}></Col>
        <Col xs={{ span: 24 }} lg={{ span: 22 }}>
          <h2>Students also searched for</h2>
          <Content>
            <div className='searchItem'>
              {updatedRandomCourses?.map((item, i) => (
                <Link
                  className='carditem'
                  to={`/course_detail?name=${item?.shortName}`}
                  key={i}>
                  <CourseSearchSql data={item} />
                </Link>
              ))}
            </div>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SearchedSql;
