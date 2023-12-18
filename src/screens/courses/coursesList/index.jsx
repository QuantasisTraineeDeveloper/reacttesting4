import { Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { GrSearch } from 'react-icons/gr';
import CustomBtn from '../../../common/button';
import CustomPagination from '../../../common/pagination';
import CourseSqlCard from '../../../components/cards/courseSql';
import SearchedSql from '../../../components/searchedSql';
import { FormArea, SectionHeading } from '../../home/index.style';
import { Wrapper } from './index.style';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses, getCoursesTags, imageURLUpdateCourse, resetCourse } from '../../../redux/courseSlice';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import LoadingSpinner from '../../../common/Loading/LoadingSpinner';

import { getFileURLFromAzure } from "../../../services/FileRequest";

const CoursesList = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = searchParams.get('search');

  const { allCourses, courseLoading, tags } = useSelector(
    (state) => state?.course
  );
  const courses = allCourses?.results;
  const [updateCourses, setUpdateCourses] = useState([]);
  const updateCourse = []
  useEffect(() => {
    const fetchData = async () => {
      if (courses) {
        for (const item of courses) {
          const response = await getFileURLFromAzure({ fileName: item?.imageURL, fileType: "Image" }, null);
          if (response) {
            const temp = {...item, imageURL: response.data.url};
            updateCourse.push(temp);
          }
        }
        setUpdateCourses(updateCourse);
        
      }
    };
    fetchData();
  }, [courses]);

  useEffect(() => {
    dispatch(imageURLUpdateCourse(updateCourses));
  },[updateCourses])
  
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getAllCourses(search));
  }, [search]);

  useEffect(() => {
    dispatch(getCoursesTags());
  }, []);

  const searchSubmit = ({ search }) => {
    if (search !== undefined) {
      setSearchParams({ search });
    }
    if (search === '' || search === undefined) {
      navigate('/courses/list');
    }
  };

  return (
    <Wrapper>
      <SectionHeading>
        {search !== undefined && search !== '' && search !== null ? (
          <strong>{search}&nbsp;</strong>
        ) : (
          ''
        )}
        Courses
      </SectionHeading>
      <FormArea>
        <form onSubmit={handleSubmit(searchSubmit)}>
          <Row gutter={12} align='middle'>
            <Col xs={{ span: 16, offset: 0 }} lg={{ span: 6, offset: 7 }}>
              <Controller
                name='search'
                control={control}
                render={({ field }) => (
                  <Input prefix={<GrSearch />} placeholder='SQL' {...field} />
                )}
              />
            </Col>
            <Col xs={{ span: 8 }} lg={{ span: 6 }}>
              <CustomBtn
                // disapled={courseLoading}
                // loading={courseLoading}
                type='submit'
                title='Search'
              />
            </Col>
          </Row>
        </form>
      </FormArea>
      <div>
        <Container>
          <div className='topHeader'>
            <div className='linkPagination'>
              <Link to='/'>Home</Link> &gt;{' '}
              <Link to='/courses/list'>Courses</Link>{' '}
              {search !== undefined && search !== '' && search !== null ? (
                <>&gt; {search}</>
              ) : (
                ''
              )}
            </div>
            <div className='tabArea'>
              <p>
                <strong>{courses?.length ?? 0}</strong> courses available
                {search !== undefined && search !== '' && search !== null
                  ? ` for ${search}`
                  : ''}
                .
              </p>
              <div className='tabLinks'>
                {tags?.length > 0
                  ? tags?.map((tag) => {
                      return (
                        <button
                          key={tag}
                          type='button'
                          onClick={() => setSearchParams({ search: tag })}
                        >
                          {tag}
                        </button>
                      );
                    })
                  : ''}
              </div>
            </div>
          </div>
          {courseLoading ? (
            <LoadingSpinner />
          ) : updateCourses?.length > 0 ? (
            updateCourses?.map((item, i) => (
              <Link to={`/course_detail?name=${item?.shortName}`} key={i}>
                <CourseSqlCard data={item} />
              </Link>
            ))
          ) : (
            <h3 className='noCourse'>No Course Found</h3>
          )}
          {/* {courses?.length > 0 ? <CustomPagination count={20} /> : ""} */}
        </Container>
      </div>
      <SearchedSql />
    </Wrapper>
  );
};

export default CoursesList;
