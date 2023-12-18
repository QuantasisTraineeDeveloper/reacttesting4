import React, { useEffect, useState } from "react";
import { FormArea, SectionHeading } from "../../home/index.style";
import { SqlQuestion, Wrapper } from "../index.style";
import { Input, Select, Tabs } from "antd";
import { GrSearch } from "react-icons/gr";
import { questionData } from "../../../assets/data/allData";
import CustomPagination from "../../../common/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCourses } from "../../../redux/courseSlice";
import { CustomSelect } from "../../../common/select/index.style";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getAllCourseThreads } from "../../../redux/forumSlice";
import { useDebounce } from "use-debounce";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import TimeAgo from "react-timeago";
import { CodeBlock } from "react-code-blocks";

const ForumThreadList = () => {
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const search = searchParams.get("search");
  const [finalSearchTerm] = useDebounce(search, 500);

  useEffect(() => {
    dispatch(getAdminCourses());
  }, []);

  const store = useSelector((state) => state);
  const { adminCourses } = store.course;
  const { allCourseThreads, loading } = store.forum;

  useEffect(() => {
    setSelectedCourse(adminCourses?.[0]?._id);
    if (adminCourses?.[0]?._id || finalSearchTerm) {
      dispatch(
        getAllCourseThreads({
          courseID: adminCourses?.[0]?._id,
          search: finalSearchTerm,
        })
      );
    }
  }, [dispatch, adminCourses, finalSearchTerm]);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Newest`,
      children: loading ? (
        <LoadingSpinner />
      ) : (
        <SqlQuestion>
          <h3>{allCourseThreads?.length} questions</h3>
          {allCourseThreads?.length > 0 ? (
            allCourseThreads?.map((item, i) => {
              return (
                <div className='mySqlQuestion' key={i}>
                  <div className='mySqlUpdate'>
                    <Link to={`/forum/${item?._id}`}>
                      <h6>{item.title}</h6>
                    </Link>
                    <p>
                      asked <TimeAgo date={item?.createdAt} />
                    </p>
                  </div>
                  <p>{item?.desc}</p>
                  {item?.code && (
                    <CodeBlock
                      customStyle={{
                        margin: "0px 0px 20px 0px",
                        padding: "1rem",
                        borderRadius: "5px",
                        background: "rgba(246, 246, 246, 1)",
                      }}
                      showLineNumbers={false}
                      text={String(item?.code)}
                    />
                  )}

                  <div className='mySqlLinks'>
                    <div className='backSlashBtn'>
                      {item?.tags?.map((tag, i) => (
                        <span className='mySqlBtn3' key={i}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='voteIcon'>
                      <img src='/images/mySqlIconimg1.svg' alt='' />

                      <p>{item?.likes} vote</p>
                    </div>
                    <div className='answerIcon'>
                      <span>
                        <img src='/images/mySqlIconimg2.svg' alt='' />
                      </span>
                      <p>{item?.replyCount} answers</p>
                    </div>
                    <div className='vieWsIcon'>
                      <span>
                        <img src='/images/mySqlIconimg3.svg' alt='' />
                      </span>
                      <p>{item?.viewCount} views</p>
                    </div>
                    <div className='andyIcon'>
                      <span>
                        {/* <img src='/images/mySqlIconimg4.svg' alt='' /> */}
                        <img
                          src={item?.userId?.imageURL}
                          style={{ height: "16px" }}
                          alt=''
                        />
                      </span>
                      <p>
                        {item?.username}
                        {/* <span>11</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Thread Found</p>
          )}
        </SqlQuestion>
      ),
    },
    {
      key: "2",
      label: `Unanswered`,
      children: loading ? (
        <LoadingSpinner />
      ) : (
        <SqlQuestion>
          <h3>
            {allCourseThreads?.filter((t) => t?.replyCount === 0)?.length}{" "}
            questions
          </h3>
          {allCourseThreads?.filter((t) => t?.replyCount === 0)?.length > 0 ? (
            allCourseThreads
              ?.filter((t) => t?.replyCount === 0)
              ?.map((item, i) => {
                return (
                  <div className='mySqlQuestion' key={i}>
                    <div className='mySqlUpdate'>
                      <Link to={`/forum/${item?._id}`}>
                        <h6>{item.title}</h6>
                      </Link>
                      <p>
                        asked <TimeAgo date={item?.createdAt} />
                      </p>
                    </div>
                    <p>{item?.desc}</p>
                    {item?.code && (
                      <CodeBlock
                        customStyle={{ margin: "0px 0px 20px 0px" }}
                        showLineNumbers={false}
                        text={String(item?.code)}
                      />
                    )}

                    <div className='mySqlLinks'>
                      <div className='backSlashBtn'>
                        {item?.tags?.map((tag, i) => (
                          <span className='mySqlBtn3' key={i}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='voteIcon'>
                        <img src='/images/mySqlIconimg1.svg' alt='' />
                        <p>{item?.likes} vote</p>
                      </div>
                      <div className='answerIcon'>
                        <span>
                          <img src='/images/mySqlIconimg2.svg' alt='' />
                        </span>
                        <p>{item?.replyCount} answers</p>
                      </div>
                      <div className='vieWsIcon'>
                        <span>
                          <img src='/images/mySqlIconimg3.svg' alt='' />
                        </span>
                        <p>{item?.viewCount} views</p>
                      </div>
                      <div className='andyIcon'>
                        <span>
                          {/* <img src='/images/mySqlIconimg4.svg' alt='' /> */}
                          <img
                            src={item?.userId?.imageURL}
                            style={{ height: "16px" }}
                            alt=''
                          />
                        </span>
                        <p>
                          {item?.username}
                          {/* <span>11</span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <p>No Thread Found</p>
          )}
        </SqlQuestion>
      ),
    },
  ];

  const courseOptions = [];
  adminCourses?.map((course) => {
    courseOptions.push({
      value: course?._id,
      label: course?.longName,
    });
  });

  const onSearch = (searchTerm) => {
    if (searchTerm !== undefined) {
      setSearchParams({ search: searchTerm });
    }
    if (searchTerm === "" || searchTerm === undefined) {
      navigate("/forum");
    }
  };
  return (
    <Wrapper>
      <SectionHeading>Questions</SectionHeading>
      {/* <SectionHeading>
        Questions tagged <strong>&#91; mysql &#93; </strong>
      </SectionHeading>
      <p>
        MySQL is a free, open-source Relational Database Management System
        (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag
        for other DBs such as SQL Server, SQLite etc. Those are different DBs
        that all use their own dialects of SQL to manage the data.
      </p>
      <div className='threeButtons'>
        <div className='mySqlBtn'>
          <a href='#'></a>Learn more
        </div>
        <div className='mySqlBtn'>
          <a href='#'></a>Top users
        </div>
        <div className='mySqlBtn'>
          <a href='#'></a>Synonyms (9)
        </div>
      </div> */}
      <Link to='/forum/add-question' className='addBtn'>
        Add question
      </Link>
      <div className='selectionCard'>
        <FormArea>
          <Input
            allowClear={true}
            value={search}
            prefix={<GrSearch />}
            placeholder='Search here'
            onChange={(e) => onSearch(e.target.value)}
          />
        </FormArea>
        <div className='mt-3'>
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
                setSelectedCourse(id);
              }}
              options={courseOptions}
            />
          </CustomSelect>
        </div>
      </div>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      {/* <CustomPagination count={40} /> */}
    </Wrapper>
  );
};

export default ForumThreadList;
